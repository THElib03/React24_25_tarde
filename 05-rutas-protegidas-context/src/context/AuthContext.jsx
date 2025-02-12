/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        if(JSON.parse(localStorage.getItem('token')) === null){
            setIsAuthenticated(true);
            return;
    };

    const logout = () => {
        localStorage.setItem('token', JSON.stringify(false));
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("Could not load the proper context to verify authentication.");
    }
};