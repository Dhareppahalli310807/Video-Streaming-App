import React, { useState } from 'react';
import axios from 'axios';

function RoomManagement({ setRoomId }) {
    const [roomName, setRoomName] = useState('');
    const [rooms, setRooms] = useState([]);

    const createRoom = async () => {
        const response = await axios.post('/api/rooms/create', { name: roomName });
        setRooms([...rooms, response.data]);
    };

    const joinRoom = (roomId) => {
        setRoomId(roomId);
    };

    return (
        <div>
            <h2>Room Management</h2>
            <input
                type="text"
                placeholder="Enter room name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
            />
            <button onClick={createRoom}>Create Room</button>

            <h3>Available Rooms</h3>
            <ul>
                {rooms.map((room) => (
                    <li key={room._id}>
                        {room.name} <button onClick={() => joinRoom(room._id)}>Join</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RoomManagement;
