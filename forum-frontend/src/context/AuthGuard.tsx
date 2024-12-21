import React from 'react';
import { Navigate } from 'react-router-dom';

interface RequireAuthProps {
    children: JSX.Element;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const token = localStorage.getItem('token');

    // Dacă token-ul lipsește, redirecționăm utilizatorul la pagina de login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Dacă token-ul există, afișăm componenta protejată
    return children;
};

export default RequireAuth;
