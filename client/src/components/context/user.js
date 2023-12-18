import React, { useState, useEffect, useCallback } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false) 

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            if (!data.errors) {
                setUser(data)
                setLoggedIn(true)
            } else  {
                setUser({})
                setLoggedIn(false)
            }
        })
    }, [])

    const updateUser = useCallback(async (updatedUserInfo) => {
        try {
            const response = await fetch(`/users/${user.id}`, {
                method: 'PATCH', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedUserInfo)
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data); 
                return { success: true };
            } else {
                return { success: false, errors: data.errors || ['Update failed.'] };
            }
        } catch (error) {
            return { success: false, errors: [error.message] };
        }
    }, [user.id]);

    function login(user) {
        setUser(user)
        setLoggedIn(true) 
    }

    function logout() {
        setUser({})
        setLoggedIn(false) 
    }

    function signup(user) {
        setUser(user)
        setLoggedIn(true) 
    }


  return (
    <UserContext.Provider value={{user, setUser, login, logout, signup, loggedIn, updateUser}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider};