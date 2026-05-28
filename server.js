const WebSocket = require('ws');
const port = process.env.PORT || 4444;
const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Broadcast incoming signaling data to all other connected peers
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

console.log(`Signaling server running on port ${port}`);