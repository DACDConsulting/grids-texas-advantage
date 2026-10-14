import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 5173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".json": "application/json"
};

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const requested = clean === "/" ? "/index.html" : clean;
  const candidates = [
    path.join(root, requested),
    path.join(root, "public", requested)
  ];
  return candidates.find((file) => {
    const relative = path.relative(root, file);
    return !relative.startsWith("..") && fs.existsSync(file) && fs.statSync(file).isFile();
  });
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url || "/");
  if (!file) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  res.writeHead(200, {
    "content-type": types[path.extname(file)] || "application/octet-stream"
  });
  fs.createReadStream(file).pipe(res);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Local:   http://localhost:${port}/`);
  console.log(`Network: http://0.0.0.0:${port}/`);
});
