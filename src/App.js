import React, { useState } from 'react';
import Login from './components/Login';
import RoomManagement from './components/RoomManagement';
import VideoCall from './components/VideoCall';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [roomId, setRoomId] = useState(null);

    if (!loggedIn) {
        return <Login setLoggedIn={setLoggedIn} setRoomId={setRoomId} />;
    }

    if (!roomId) {
        return <RoomManagement setRoomId={setRoomId} />;
    }

    return <VideoCall roomId={roomId} />;
}

export default App;
