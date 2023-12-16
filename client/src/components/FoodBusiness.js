import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from './context/user';
import { ErrorAlert } from '../styles/StyledComponents';

const FoodBusiness = () => {
    const { user, logout } = useContext(UserContext);
    const { error, setError }= useState([]);
    const navigate = useNavigate();

    function logoutUser() {
        fetch('/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok) {
                logout();
                navigate('/login');
            } else {
                return response.json().then(data => {
                    throw new Error(data.error || 'Logout failed');
                });
            }
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user.business_name}</p>
                    <button onClick={logoutUser}>Log Out</button>
                </>
            ) : (
                <div>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            )}
             {error && <ErrorAlert>{error}</ErrorAlert>}
        </div>
    );
};

export default FoodBusiness;
