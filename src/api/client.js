import axios from 'axios'
import { authApi } from '@/api/auth'
import refreshClient from './refreshClient';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  withCredentials: true,
})

let accessToken = null;
export const setAccessToken = token => accessToken = token;
export const getAccessToken = () => accessToken;

// Queue cho race condition
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token=null) => {
    failedQueue.forEach(p => error ? p.reject(error) : p.resolve(token));
    failedQueue = [];
}

const excludedPaths = [
  '/auth/login',
  '/auth/register',
  '/auth/refresh',
];




// ────────────────────── REQUEST INTERCEPTOR ──────────────────────
client.interceptors.request.use(
  (config) => {
    
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  }
);

// ────────────────────── RESPONSE INTERCEPTOR ──────────────────────
client.interceptors.response.use(

    (response) => response.data,

    async (error) => {
        const originalRequest = error.config;

        const shouldSkipRefresh = excludedPaths.some(path =>
          originalRequest.url.includes(path)
        );

        if(error.response?.status === 401 && !originalRequest._retry &&  !shouldSkipRefresh) {
            if(isRefreshing) {
               return new Promise((resolve, reject) => {
                   failedQueue.push({ resolve, reject });
               }).then(accessToken => {
                   originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                   return client(originalRequest);
               })
            }
            isRefreshing = true;
            originalRequest._retry = true;

            try {
                const { data } = await refreshClient.post('/auth/refresh');
                const newToken = data.accessToken;
                setAccessToken(newToken);
                processQueue(null, newToken);
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return client(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                setAccessToken(null);
 
                if(refreshError?.response?.status === 401){
                    authApi.logout().catch(() => {});
                }

                window.location.href = "/";

                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
)


export default client

