import React, { useState } from 'react';

function Login({ setLoggedIn }) {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        setLoggedIn(true);
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
