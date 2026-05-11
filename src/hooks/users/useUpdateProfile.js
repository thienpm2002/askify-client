import { useMutation } from "@tanstack/react-query";
import { usersApi } from "@/api/users";
import { useAuth } from "@/contexts/AuthContext";

export const useUpdateProfile = () => {
    const { setUser } = useAuth();

    return useMutation({
        mutationFn: (data) => usersApi.updateProfile(data),
        onSuccess: (data) => {
            setUser(data);
        },
    })
}