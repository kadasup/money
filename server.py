import json
import os
import subprocess
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


HOST = "127.0.0.1"
PORT = 5500
DATA_FILE = Path("financial_data.json")
XLSX_FILE = Path("financial_report.xlsx")
AUTO_PUSH_ENV = "GITHUB_AUTO_PUSH"


def is_valid_data_shape(data):
    if not isinstance(data, dict):
        return False
    months = data.get("months")
    if not isinstance(months, list):
        return False
    for m in months:
        if not isinstance(m, dict):
            return False
        if not isinstance(m.get("month"), str):
            return False
        if not isinstance(m.get("details"), list):
            return False
    return True


def try_git_commit_and_push():
    if os.getenv(AUTO_PUSH_ENV, "").lower() not in {"1", "true", "yes"}:
        return "auto-push disabled"

    if not Path(".git").exists():
        return "not a git repo, skipped push"

    subprocess.run(["git", "add", str(DATA_FILE), str(XLSX_FILE)], check=True)
    status = subprocess.run(
        ["git", "status", "--porcelain", "--", str(DATA_FILE), str(XLSX_FILE)],
        capture_output=True,
        text=True,
        check=True,
    )
    if not status.stdout.strip():
        return "no file changes, skipped commit"

    commit = subprocess.run(
        ["git", "commit", "-m", "chore: sync financial report"],
        capture_output=True,
        text=True,
        check=True,
    )
    subprocess.run(["git", "push"], capture_output=True, text=True, check=True)
    return f"committed and pushed ({commit.stdout.strip()})"


class Handler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/sync":
            self.send_error(404, "Not Found")
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length)
            payload = json.loads(raw.decode("utf-8"))
            if not is_valid_data_shape(payload):
                raise ValueError("Invalid data shape")

            DATA_FILE.write_text(
                json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )

            result = subprocess.run(
                [sys.executable, "build_report.py"],
                capture_output=True,
                text=True,
                check=True,
            )
            git_result = try_git_commit_and_push()

            body = json.dumps(
                {"ok": True, "message": result.stdout.strip(), "git": git_result},
                ensure_ascii=False,
            ).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except Exception as err:
            body = json.dumps(
                {"ok": False, "error": str(err)},
                ensure_ascii=False,
            ).encode("utf-8")
            self.send_response(500)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"Serving on http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
