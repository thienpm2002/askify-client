import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api/auth";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export function useLogout() {
  
  const { logout } = useAuth();  

  return useMutation({
    mutationFn: () => authApi.logout(),

    onSuccess: () => {
        logout();   
        toast.success("Logout successful");
    }
  });
}
