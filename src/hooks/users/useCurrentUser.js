import { useQuery } from "@tanstack/react-query";
import { usersApi } from "@/api/users"; 
import { getAccessToken } from "@/api/client";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: usersApi.currentUser,
    enabled: !!getAccessToken()
  })
}