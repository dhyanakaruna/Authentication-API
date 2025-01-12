import React, { useState } from 'react';

const Kickout = () => {
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');

    const kickout = async () => {
        try {
            const res = await fetch('http://localhost:3000/admin/kickout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username }),
            });
            const data = await res.json();
            setMsg(res.ok ? data.msg : 'Error');
        } catch {
            setMsg('Error');
        }
    };

    return (
        <div>
            <h2>Kickout</h2>
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={kickout}>Kickout</button>
            <p>{msg}</p>
        </div>
    );
};

export default Kickout;
