import React, { useState } from 'react';

const Time = () => {
    const [time, setTime] = useState('');
    const [token, setToken] = useState('');

    const getTime = async () => {
        try {
            const res = await fetch('http://localhost:3000/time', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            setTime(res.ok ? data.time : data.msg);
        } catch {
            setTime('Error');
        }
    };

    return (
        <div>
            <h2>Get Time</h2>
            <input placeholder="Token" onChange={(e) => setToken(e.target.value)} />
            <button onClick={getTime}>Get Time</button>
            <p>{time}</p>
        </div>
    );
};

export default Time;
