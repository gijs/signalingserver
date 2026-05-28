import { createServer } from "http";
import { WebSocketServer } from "ws";
import { setupWSConnection } from "y-websocket/bin/utils.js";

const host = process.env.HOST || "0.0.0.0";
const port = parseInt(process.env.PORT || "8080");

const server = createServer((_, res) => {
  res.writeHead(200);
  res.end("ok");
});

const wss = new WebSocketServer({ server });
wss.on("connection", (ws, req) => setupWSConnection(ws, req));

server.listen(port, host, () => {
  console.log(`y-websocket listening on ${host}:${port}`);
});
