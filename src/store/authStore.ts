import {create} from "zustand";
import axios from "axios";
import { API_URL } from "@/lib/utils";

axios.defaults.withCredentials = true;

interface AuthStore {
    signup: (email: string, password: string, firstName: string, lastName: string, phoneNumber: string, confirmPassword: string) => Promise<void>;
    signuptaskcreator: (email: string, password: string, firstName: string, lastName: string, phoneNumber: string, confirmPassword: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    profileAuth: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    verifyToken: (email: string, token: string) => Promise<void>;
    resetPassword: (email: string, token: string, newPassword: string, confirmPassword: string) => Promise<void>;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    user: any;
    message: string | null;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    message: null,

    signup: async (email, password, firstName, lastName, phoneNumber, confirmPassword) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${API_URL}/users/earn`, {
                email, password, firstName, lastName, phoneNumber, confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            set({
                user: response.data.newUser,
                isAuthenticated: true,
                isLoading: false
            });
        } catch(error: any) {
            set({
                error: error.response?.data?.message || "Error signing up",
                isLoading: false
            });
            throw error;
        }
    },

    signuptaskcreator: async (email, password, firstName, lastName, phoneNumber, confirmPassword) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${API_URL}/users/create`, {
                email, password, firstName, lastName, phoneNumber, confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            set({
                user: response.data.newUser,
                isAuthenticated: true,
                isLoading: false
            });
        } catch(error: any) {
            set({
                error: error.response?.data?.message || "Error signing up",
                isLoading: false
            });
            throw error;
        }
    },

    login: async (email, password) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${API_URL}/users/login`, {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            set({
                isAuthenticated: true,
                user: response.data.user,
                error: null,
                isLoading: false
            });
        } catch(error: any) {
            set({
                error: error.response?.data?.message || "Error logging in",
                isLoading: false
            });
            throw error;
        }
    },

    profileAuth: async () => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.get(`${API_URL}/users/user-profile`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false
            });
        } catch(error: any) {
            set({
                error: null,
                isAuthenticated: false,
                isLoading: false
            });
        }
    },

    forgotPassword: async (email) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${API_URL}/users/request`, {
                email,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            set({
                message: response.data.message,
                isLoading: false
            });
        } catch(error: any) {
            console.log("Full error:", error);
            set({
                error: error.response?.data?.message || "Error sending password reset email",
                isLoading: false
            });
            throw error;
        }
    },

    verifyToken: async (resetCode, token) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${API_URL}/users/verify`, {
                resetCode,
                token
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            set({
                message: response.data.message,
                isLoading: false
            });
        } catch(error: any) {
            set({
                error: error.response?.data?.message || "Error verifying token",
                isLoading: false
            });
            throw error;
        }
    },

    resetPassword: async (email, token, newPassword, confirmPassword) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${API_URL}/users/reset`, {
                email,
                token,
                newPassword,
                confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            set({
                message: response.data.message,
                isLoading: false
            });
        } catch(error: any) {
            set({
                error: error.response?.data?.message || "Error resetting password",
                isLoading: false
            });
            throw error;
        }
    }
}));