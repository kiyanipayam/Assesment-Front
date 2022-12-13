import React from 'react';
import Router from './router/index.jsx';
import { AuthProvider } from './auth/context';
function App() {

    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
}

export default App;