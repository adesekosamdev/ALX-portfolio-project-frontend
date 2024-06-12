import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage or any other storage
    localStorage.removeItem('token');
	setIsAuthenticated(false);
	console.log("logout successful");
    // Redirect to login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
