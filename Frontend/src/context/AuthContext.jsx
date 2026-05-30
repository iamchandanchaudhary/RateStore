import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

const AUTH_STORAGE_KEY = "rateStoreAuth";

const AuthContextProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [user, setUser] = useState(() => {
        if (typeof window === "undefined") {
            return null;
        }

        const stored = window.localStorage.getItem(AUTH_STORAGE_KEY);
        if (!stored) {
            return null;
        }

        try {
            return JSON.parse(stored);
        } catch (error) {
            return null;
        }
    });

    useEffect(() => {
        if (user) {
            window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        } else {
            window.localStorage.removeItem(AUTH_STORAGE_KEY);
        }
    }, [user]);

    const scrollUp = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const login = useCallback((payload) => {
        const nextUser = {
            email: payload.email,
            role: payload.role,
            loggedInAt: new Date().toISOString()
        };

        setUser(nextUser);
        return nextUser;
    }, []);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    const isAuthenticated = Boolean(user);

    const value = useMemo(() => ({
        backendUrl,
        scrollUp,
        user,
        isAuthenticated,
        login,
        logout
    }), [backendUrl, scrollUp, user, isAuthenticated, login, logout]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;
