import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? element : null;
};

export default ProtectedRoute;
