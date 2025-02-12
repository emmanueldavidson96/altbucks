'use client';

import React, { useState } from 'react'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { toast } from "react-toastify";

export default function Page() {
    // const [userData, setUserData] = useState({
    //     email: "",
    //     password: "",
    //     rememberMe: false
    // })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(true)

    const router = useRouter();
    // const { user, isLoading, login } = useAuthStore();

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     try {
    //         await login(userData.email, userData.password);
    //         toast.success("Successfully logged in!")
    //         router.push("/dashboard");
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await fetch("https://authentication-1-bqvg.onrender.com/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();


            if (response.ok) {
                toast.success("User Logged-in Successfully");
                setTimeout(() => {
                    router.push("/dashboard");
                }, 500);
            } else {
                throw new Error("User failed to login. Please try again");
            }
        } catch (error: any) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    
    const handleSocialLogin = (provider: string) => {
        console.log(`Logging in with ${provider}`);
    }

    return (
        <div className='min-h-screen bg-[#2877EA]'>
            <Header />
            <main className='container mx-auto px-4 py-8 md:py-12'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-12 max-w-7xl mx-auto'>
                    {/* Left Section */}
                    <div className='lg:w-[40%] text-white space-y-8'>
                        <div className='space-y-4'>
                            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                                Grow with us
                            </h2>
                            <p className='text-xl font-light tracking-wide opacity-90'>
                                Access to thousands of task projects and clients
                            </p>
                        </div>
                        <Image
                            src={illustrationImg}
                            className='w-full max-w-lg mx-auto lg:max-w-none'
                            alt='Illustration'
                            priority
                        />
                    </div>

                    {/* Login Section */}
                    <div className='w-full lg:w-[55%] bg-white rounded-3xl p-8 md:p-12 shadow-xl'>
                        <div className='max-w-xl mx-auto space-y-8'>
                            <div className='space-y-2'>
                                <h4 className='text-2xl md:text-3xl font-bold text-gray-900'>Welcome Back!</h4>
                                <p className='text-gray-600'>Sign in to continue your journey</p>
                            </div>

                            <form className='space-y-6' onSubmit={handleSubmit}>
                                {/* Email Field */}
                                <div className='space-y-2'>
                                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                        Email address
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        value={email}
                                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
                                        placeholder='Enter your email'
                                        required
                                    />
                                </div>

                                {/* Password Field */}
                                <div className='space-y-2'>
                                    <label htmlFor="password" className='block text-sm font-medium text-gray-700'>
                                        Password
                                    </label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        value={password}
                                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
                                        placeholder='Enter your password'
                                        required
                                    />
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className='w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                                        />
                                        <label htmlFor="rememberMe" className='ml-2 text-sm text-gray-600'>
                                            Remember me
                                        </label>
                                    </div>
                                    <Link
                                        href="/forgot-password"
                                        className='text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200'
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>

                                {/* Login Button */}
                                <button
                                    type='submit'
                                    className='w-full py-4 bg-[#2877EA] hover:bg-blue-600 text-white rounded-xl font-semibold text-lg tracking-wide transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl active:translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed'
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                            </svg>
                                            Signing in...
                                        </span>
                                    ) : (
                                        "Sign In"
                                    )}
                                </button>

                                {/* Divider */}
                                <div className='relative'>
                                    <div className='absolute inset-0 flex items-center'>
                                        <div className='w-full border-t border-gray-300'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='px-4 bg-white text-gray-500'>or continue with</span>
                                    </div>
                                </div>

                                {/* Social Login Buttons */}
                                <div className='grid grid-cols-2 gap-4'>
                                    <button
                                        type="button"
                                        onClick={() => handleSocialLogin('google')}
                                        className='flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200'
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 48 48">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>
                                        Google
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleSocialLogin('facebook')}
                                        className='flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200'
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 48 48">
                                            <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#2aa4f4"/>
                                                <stop offset="1" stopColor="#007ad9"/>
                                            </linearGradient>
                                            <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/>
                                            <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/>
                                        </svg>
                                        Facebook
                                    </button>
                                </div>

                                {/* Sign Up Link */}
                                <p className='text-center text-gray-600'>
                                    Don't have an account?{' '}
                                    <Link
                                        href="/signup"
                                        className='text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200'
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}