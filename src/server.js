const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('ws');
const roomRoutes = require('./routes/roomRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/video-streaming-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api/rooms', roomRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const wss = new Server({ server });

wss.on('connection', (socket) => {
    console.log('New WebSocket connection');

    socket.on('message', (message) => {
        socket.broadcast.emit('message', message);
    });

    socket.on('close', () => {
        console.log('WebSocket connection closed');
    });
});
