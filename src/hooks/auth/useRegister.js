import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api/auth";
import { useAuth } from "@/contexts/AuthContext";
import { usersApi } from "@/api/users";

export function useRegister() {
  
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: (data) => authApi.register(data),

    onSuccess: async () => {
      const user = await usersApi.currentUser();
      setUser(user);
    }
  });
}