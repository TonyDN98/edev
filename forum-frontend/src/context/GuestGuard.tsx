import React from 'react';
import { Navigate } from 'react-router-dom';

interface GuestGuardProps {
    children: JSX.Element;
}

const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
    const token = localStorage.getItem('token');

    // Dacă utilizatorul este logat, redirecționează-l la pagina Home
    if (token) {
        return <Navigate to="/" replace />;
    }

    // Dacă utilizatorul nu este logat, afișează pagina
    return children;
};

export default GuestGuard;
