import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

function VideoCall({ roomId }) {
    useEffect(() => {
        const socket = io('http://localhost:5000');
        
        socket.on('connect', () => {
            console.log('Connected to signaling server');
            socket.emit('join-room', roomId);
        });

        socket.on('message', (message) => {
            // Handle incoming signaling messages here
        });

        return () => socket.disconnect();
    }, [roomId]);

    return (
        <div>
            <h2>Video Call Room: {roomId}</h2>
            {/* WebRTC implementation will go here */}
        </div>
    );
}

export default VideoCall;
