const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Send real-time data back to client
        socket.send('Real-time data from IoT device');
    });

    socket.on('close', () => console.log('Client disconnected'));
});
