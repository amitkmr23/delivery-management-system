import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to Our Ordering System</h1>
            <button onClick={handleLoginClick} style={{ marginRight: '10px' }}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
        </div>
    );
}

export default Home;




