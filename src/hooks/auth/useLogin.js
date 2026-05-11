import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api/auth";

export function useLogin() {
  return useMutation({
    mutationFn: (data) => authApi.login(data)
  });
}
