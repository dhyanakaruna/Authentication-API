import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Time from './pages/Time';
import Kickout from './pages/Kickout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/time" element={<Time />} />
                <Route path="/kickout" element={<Kickout />} />
            </Routes>
        </Router>
    );
}

export default App;
