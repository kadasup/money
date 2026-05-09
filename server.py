import json
import subprocess
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


HOST = "127.0.0.1"
PORT = 5500
DATA_FILE = Path("financial_data.json")


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
                ["py", "-3", "build_report.py"],
                capture_output=True,
                text=True,
                check=True,
            )

            body = json.dumps(
                {"ok": True, "message": result.stdout.strip()},
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
