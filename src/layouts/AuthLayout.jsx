import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext";
const AuthLayout = () => {

  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Outlet />
    </div>
  )
}

export default AuthLayout
