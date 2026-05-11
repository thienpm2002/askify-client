import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { authApi } from "@/api/auth";
import { usersApi } from "@/api/users";
import { setAccessToken } from "@/api/client";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [authLoading, setAuthLoading] = useState(true);

  const logout = () => {
    setUser(null);
    setAccessToken(null);
  };

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const data = await authApi.refreshToken();

        setAccessToken(data.accessToken);

        const user = await usersApi.currentUser();

        setUser(user);
      } catch(err) {
        if (err?.response?.status === 401) {
          logout(); 
        } else {
          console.error("Unexpected auth error:", err);
        }
      } finally {
        setAuthLoading(false);
      }
    };

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        authLoading,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}