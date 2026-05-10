import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

export function AuthProvider({ children }){
    const [auth, setAuth] = useState(null);
    const login = (a) => setAuth(a);
    const logout = () => setAuth(null);
    
    return (
        <AuthContext.Provider value={{auth, isAuthenticated: !!auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}

