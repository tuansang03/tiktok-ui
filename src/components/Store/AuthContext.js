import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export function UserAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [openFormLogin, setOpenFormLogin] = useState(false);

    const value = {
        openFormLogin,
        setOpenFormLogin,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
