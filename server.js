const http = require('http')
const WebSocket = require('ws')
const { setupWSConnection } = require('y-websocket/bin/utils')

const host = process.env.HOST || '0.0.0.0'
const port = parseInt(process.env.PORT || '8080')

const server = http.createServer((_, res) => { res.writeHead(200); res.end('ok') })
const wss = new WebSocket.Server({ server })
wss.on('connection', (ws, req) => setupWSConnection(ws, req))

server.listen(port, host, () => console.log(`listening on ${host}:${port}`))
