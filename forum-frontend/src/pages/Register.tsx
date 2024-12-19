import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
            alert('Cont creat cu succes!');
        } catch (error) {
            alert('Eroare la înregistrare!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nume utilizator"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Parola"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Înregistrare</button>
        </form>
    );
};

export default Register;
