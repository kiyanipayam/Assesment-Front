import React, { createContext, useEffect } from "react";
import Axios from 'axios';
import Snackbar from '@mui/material/Snackbar';

const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("snack message");
    const handleLogin = async (email, password) => {
        try {
            var response = await Axios.post(`http://localhost:3000/users/login`, {
                email: email,
                password: password,
            })
            console.log("Response:", response)
            localStorage.setItem('userInfo', JSON.stringify(response.data))
            return true;
        } catch (error) {
            console.log(error)
            setOpen(true)
            setMessage(error.response.data.message)
            return false;
        }
    }

    const handleLogout = async () => {
        localStorage.clear();
    }

    const checkAuth = async () => {
        var userInfo = JSON.parse(localStorage.getItem('userInfo'));
        setToken(userInfo.token)
    }

    useEffect(() => {
        checkAuth()
    }, [])
    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (

        <AuthContext.Provider value={value}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                message={message}
            />
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider }