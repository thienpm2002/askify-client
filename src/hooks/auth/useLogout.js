import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/api/auth";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export function useLogout() {
  
  const queryClient = useQueryClient();

  const { logout } = useAuth();  

  return useMutation({
    mutationFn: () => authApi.logout(),

    onSuccess: () => {
        logout();    // Clear accessToken, user

        queryClient.clear();  // Clear hết cache

        toast.success("Logout successful");
    }
  });
}
