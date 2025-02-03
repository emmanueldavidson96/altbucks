'use client';

import React, { useState } from 'react'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import {toast} from "react-toastify";

export default function page() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        rememberMe: false
    })
    const router = useRouter();
    const {user, isLoading, login} = useAuthStore();

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            await login(userData.email, userData.password);
            toast.success("Successfully logged in!")
            router.push("/dashboard");
        }catch(error){
            console.log(error)
        }
    }

    const handleSocialLogin = (provider: string) => {
        // Implement social login logic here
        console.log(`Logging in with ${provider}`);
    }

    return (
        <div className='bg-[#2877EA] w-screen h-fit'>
            <Header />
            <div className='flex justify-around w-[90%] mx-auto mt-12 pb-24'>
                <div className='flex flex-col gap-8 w-[30%]'>
                    <h2 className='text-[48px] font-bold'>Grow with us</h2>
                    <p className='font-light text-lg tracking-wide'>Access to thousands to task project and clients</p>
                    <Image src={illustrationImg} className='w-full' alt=''/>
                </div>

                <div className='bg-white mt-12 max-lg:mt-2 h-fit w-[50%] rounded-3xl px-12 py-12 flex flex-col gap-4'>
                    <h4 className='text-black tracking-wide text-2xl font-semibold'>Welcome Back!</h4>
                    <form className='flex w-full flex-col gap-4' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="email" className='text-sm text-[#666666]'>Email address</label>
                            <input
                                onChange={(e) => setUserData({...userData, email:e.target.value})}
                                type="email"
                                id="email"
                                className='w-full p-3 border rounded-md border-gray-300 text-black text-sm shadow-md'
                                placeholder='email...'
                            />
                        </div>

                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="password" className='text-sm text-[#666666]'>Password</label>
                            <input
                                onChange={(e) => setUserData({...userData, password:e.target.value})}
                                type="password"
                                id="password"
                                className='w-full p-3 border rounded-md border-gray-300 text-black text-sm shadow-md'
                                placeholder='*********'
                            />
                        </div>

                        <div className='flex justify-between items-center mt-2'>
                            <div className='flex items-center gap-2'>
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={userData.rememberMe}
                                    onChange={(e) => setUserData({...userData, rememberMe: e.target.checked})}
                                    className='w-4 h-4'
                                />
                                <label htmlFor="rememberMe" className='text-sm text-[#666666]'>Remember me</label>
                            </div>
                            <Link href="/forgot-password" className='text-sm text-[#666666] hover:text-blue-600'>
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type='submit'
                            className='w-full p-4 bg-blue-600 rounded-lg text-white text-base tracking-wide shadow-lg mt-8'
                        >
                            Continue
                        </button>

                        <div className='relative flex items-center justify-center my-4'>
                            <div className='border-t border-gray-300 w-full'></div>
                            <span className='bg-white px-4 text-sm text-gray-500 absolute'>or</span>
                        </div>

                        <div className='flex gap-4 justify-center'>
                            <button
                                type="button"
                                onClick={() => handleSocialLogin('google')}
                                className='flex items-center justify-center gap-2 w-1/2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50'
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                                    <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
                                </svg>
                                Google
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSocialLogin('facebook')}
                                className='flex items-center justify-center gap-2 w-1/2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50'
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2"/>
                                </svg>
                                Facebook
                            </button>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <p className='text-sm text-[#666666]'>Don't have an account?
                                <Link href="/signup" className='text-blue-600 ml-1'>Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}