
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feed from "../pages/feed";
import Login from "../pages/login"
import SignUp from "../pages/signup"
import * as React from 'react';
import { AuthContext } from "../auth/context";
const ProtectedRoute = ({ children }) => {
    const { token } = React.useContext(AuthContext);

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
};
export default function Router() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Login />}>
                </Route>
                <Route path="/signup" element={<SignUp />}>
                </Route>
                <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}