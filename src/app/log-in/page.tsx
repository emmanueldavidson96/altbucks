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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);

    const router = useRouter();
    const { login } = useAuthStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login(email, password);
            toast.success("Successfully logged in!");
            setTimeout(() => {
                router.push("/dashboard");
            }, 500);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to login. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Logging in with ${provider}`);
    }

    return (
        <div className='min-h-screen bg-[#2877EA] overflow-x-hidden'>
            <Header />
            <main className='container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto'>
                    {/* Left Section - Enhanced responsiveness */}
                    <div className='w-full lg:w-[40%] text-white space-y-6 sm:space-y-8'>
                        <div className='space-y-3 sm:space-y-4 text-center lg:text-left'>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                                Grow with us
                            </h2>
                            <p className='text-lg sm:text-xl font-light tracking-wide opacity-90'>
                                Access to thousands of task projects and clients
                            </p>
                        </div>
                        <div className='relative w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none'>
                            <Image
                                src={illustrationImg}
                                className='w-full h-auto object-contain'
                                alt='Illustration'
                                priority
                            />
                        </div>
                    </div>

                    {/* Login Section - Enhanced responsiveness */}
                    <div className='w-full lg:w-[55%] bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl'>
                        <div className='max-w-xl mx-auto space-y-6 sm:space-y-8'>
                            <div className='space-y-2 text-center lg:text-left'>
                                <h4 className='text-2xl sm:text-3xl font-bold text-gray-900'>Welcome Back!</h4>
                                <p className='text-sm sm:text-base text-gray-600'>Sign in to continue your journey</p>
                            </div>

                            <form className='space-y-4 sm:space-y-6' onSubmit={handleSubmit}>
                                {/* Email Field */}
                                <div className='space-y-2'>
                                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                        Email address
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        value={email}
                                        className='w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
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
                                        className='w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
                                        placeholder='Enter your password'
                                        required
                                    />
                                </div>

                                {/* Remember Me & Forgot Password - Enhanced mobile layout */}
                                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0'>
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
                                    disabled={loading}
                                    className='w-full py-3 sm:py-4 bg-[#2877EA] hover:bg-blue-600 text-white rounded-xl font-semibold text-base sm:text-lg tracking-wide transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl active:translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed'
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
                                <div className='relative py-2 sm:py-3'>
                                    <div className='absolute inset-0 flex items-center'>
                                        <div className='w-full border-t border-gray-300'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='px-4 bg-white text-gray-500'>or continue with</span>
                                    </div>
                                </div>

                                {/* Social Login Buttons - Enhanced mobile layout */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                                    <button
                                        type="button"
                                        onClick={() => handleSocialLogin('google')}
                                        className='flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200'
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 48 48">
                                            {/* Google SVG path */}
                                        </svg>
                                        Google
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleSocialLogin('facebook')}
                                        className='flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200'
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 48 48">
                                            {/* Facebook SVG path */}
                                        </svg>
                                        Facebook
                                    </button>
                                </div>

                                {/* Sign Up Link */}
                                <p className='text-center text-sm sm:text-base text-gray-600 pt-2'>
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