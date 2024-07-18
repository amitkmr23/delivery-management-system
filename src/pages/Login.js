import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/order-details');
        } catch (err) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div style={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <label style={styles.label}>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    form: {
        display: 'inline-block',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
    },
    input: {
        width: '100%',
        padding: '8px',
        marginBottom: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default Login;




