import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Scroll Up after page was changed
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const value = {
        backendUrl, scrollUp
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;
