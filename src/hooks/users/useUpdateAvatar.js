import { useMutation } from "@tanstack/react-query";
import { usersApi } from "@/api/users";
import { useAuth } from "@/contexts/AuthContext";

export const useUpdateAvatar = () => {
    const { setUser } = useAuth();

    return useMutation({
        mutationFn: (data) => usersApi.updateAvatar(data),
        onSuccess: (data) => {
            setUser(data);
        },
    })
}