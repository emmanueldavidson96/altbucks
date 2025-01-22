import {create} from "zustand";
import axios from "axios";
import { API_URL } from "@/lib/utils";

axios.defaults.withCredentials = true

interface AuthStore {
    signup:(email:string, password:string, firstName:string, lastName:string, phoneNumber:string, confirmPassword:string) => Promise<void>;
    signuptaskcreator:(email:string, password:string, firstName:string, lastName:string, phoneNumber:string, confirmPassword:string) => Promise<void>;
    login:(email:string, password:string) => Promise<void>;
    profileAuth:() => Promise<void>;
    isLoading:boolean;
    error:string | null;
    isAuthenticated:boolean;
    user:any;
    message:any,    
}


export const useAuthStore = create<AuthStore>((set) => ({
    user:null,
    isAuthenticated:false,
    error:null,
    isLoading:false,
    message:null,

    signup: async (email, password, firstName, lastName, phoneNumber, confirmPassword) => {
        set({isLoading:true,error:null});
        try{
            const response = await axios.post(`${API_URL}/users/create-task-earner`, {
                email, password, firstName, lastName, phoneNumber, confirmPassword
            })
            set({
                user:response.data.newUser, 
                isAuthenticated:true,
                isLoading:false
            })
        }catch(error:any){
            set({
                error:error || "Error signing up",
                isLoading:false
            })
            throw error
        }
    },
    signuptaskcreator: async (email, password, firstName, lastName, phoneNumber, confirmPassword) => {
        set({isLoading:true,error:null});
        try{
            const response = await axios.post(`${API_URL}/users/create-task-creator`, {
                email, password, firstName, lastName, phoneNumber, confirmPassword
            })
            set({
                user:response.data.newUser, 
                isAuthenticated:true,
                isLoading:false
            })
        }catch(error:any){
            set({
                error:error || "Error signing up",
                isLoading:false
            })
            throw error
        }
    },
    login: async (email, password) => {
        set({isLoading:true, error:null});
        try{
            const response = await axios.post(`${API_URL}/users/login-user`, {email, password})
            set({
                isAuthenticated:true,
                user:response.data.user,
                error:null,
                isLoading:false
            })

        }catch(error:any){
            set({error:error || "Error logging in", isLoading:false})
            throw error
        }
    },
    profileAuth: async () => {
        set({isLoading:true, error:null})
        try{
            const response = await axios.get(`${API_URL}/users/user-profile`);
            set({
                user:response.data.user,
                isAuthenticated:true,
                isLoading:false
            })
        }catch(error:any){
            set({error:null, isAuthenticated:false, isLoading:false})
        }        
    },
}))

 