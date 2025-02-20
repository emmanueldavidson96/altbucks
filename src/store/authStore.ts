
import {create} from "zustand";
import axios from "axios";
import { API_URL } from "@/lib/utils";

// Define type for API response
type ApiResponse<T = any> = {
    data: T;
    status: number;
    headers: Record<string, string>;
}

// Define type for user
type User = {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    [key: string]: any; // For any additional properties
}

// Define type for API error
type ApiError = {
    response?: {
        data?: {
            message?: string;
        };
    };
    message: string;
}

type AuthResponse = {
    user?: User;
    newUser?: User;
    message?: string;
}

type AuthStore = {
    user: User | null;
    isAuthenticated: boolean;
    error: string | null;
    isLoading: boolean;
    message: string | null;
    signup: (email: string, password: string, firstName: string, lastName: string, phoneNumber: string, confirmPassword: string) => Promise<void>;
    signuptaskcreator: (email: string, password: string, firstName: string, lastName: string, phoneNumber: string, confirmPassword: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    profileAuth: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    verifyToken: (resetCode: string, token: string) => Promise<void>;
    resetPassword: (email: string, token: string, newPassword: string, confirmPassword: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    message: null,

    signup: async (email, password, firstName, lastName, phoneNumber, confirmPassword) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await axios.post<AuthResponse>(`${API_URL}/users/earn`, {
                email, password, firstName, lastName, phoneNumber, confirmPassword
            });
            set({
                user: data.newUser || null,
                isAuthenticated: true,
                isLoading: false
            });
        } catch (error) {
            const err = error as ApiError;
            set({
                error: err.response?.data?.message || "Error signing up",
                isLoading: false
            });
            throw error;
        }
    },

    signuptaskcreator: async (email, password, firstName, lastName, phoneNumber, confirmPassword) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await axios.post<AuthResponse>(`${API_URL}/users/create`, {
                email, password, firstName, lastName, phoneNumber, confirmPassword
            });
            set({
                user: data.newUser || null,
                isAuthenticated: true,
                isLoading: false
            });
        } catch (error) {
            const err = error as ApiError;
            set({
                error: err.response?.data?.message || "Error signing up",
                isLoading: false
            });
            throw error;
        }
    },

    login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await axios.post<AuthResponse>(`${API_URL}/users/login`, {
                email,
                password
            });
            set({
                isAuthenticated: true,
                user: data.user || null,
                error: null,
                isLoading: false
            });
        } catch (error) {
            const err = error as ApiError;
            set({
                error: err.response?.data?.message || "Error logging in",
                isLoading: false
            });
            throw error;
        }
    },

    profileAuth: async () => {
        set({ isLoading: true, error: null });
        try {
            const { data } = await axios.get<AuthResponse>(`${API_URL}/users/user-profile`);
            set({
                user: data.user || null,
                isAuthenticated: true,
                isLoading: false
            });
        } catch (error) {
            set({
                error: null,
                isAuthenticated: false,
                isLoading: false
            });
        }
    },

//     forgotPassword: async (email) => {
//         set({ isLoading: true, error: null });
//         try {
//             const { data } = await axios.post<AuthResponse>(`${API_URL}/users/request`, {
//                 email,
//             });
//             set({
//                 message: data.message || null,
//                 isLoading: false
//             });
//         } catch (error) {
//             const err = error as ApiError;
//             set({
//                 error: err.response?.data?.message || "Error sending password reset email",
//                 isLoading: false
//             });
//             throw error;
//         }
//     },
//
//     verifyToken: async (resetCode, token) => {
//         set({ isLoading: true, error: null });
//         try {
//             const { data } = await axios.post<AuthResponse>(`${API_URL}/users/verify`, {
//                 resetCode,
//                 token
//             });
//             set({
//                 message: data.message || null,
//                 isLoading: false
//             });
//         } catch (error) {
//             const err = error as ApiError;
//             set({
//                 error: err.response?.data?.message || "Error verifying token",
//                 isLoading: false
//             });
//             throw error;
//         }
//     },
//
//     resetPassword: async (email, token, newPassword, confirmPassword) => {
//         set({ isLoading: true, error: null });
//         try {
//             const { data } = await axios.post<AuthResponse>(`${API_URL}/users/reset`, {
//                 email,
//                 token,
//                 newPassword,
//                 confirmPassword
//             });
//             set({
//                 message: data.message || null,
//                 isLoading: false
//             });
//         } catch (error) {
//             const err = error as ApiError;
//             set({
//                 error: err.response?.data?.message || "Error resetting password",
//                 isLoading: false
//             });
//             throw error;
//         }
//     }
}));
