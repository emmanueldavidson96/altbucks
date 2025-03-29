"use client";

import React, { useState } from 'react'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png";
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Page() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const router = useRouter();
    const { signuptaskcreator } = useAuthStore();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!termsAccepted) {
            toast.error("Please accept the Terms of Use and Privacy Policy");
            return;
        }

        setLoading(true);

        try {
            await signuptaskcreator(
                userData.email,
                userData.password,
                userData.firstName,
                userData.lastName,
                userData.phoneNumber,
                userData.confirmPassword
            );
            toast.success("Successfully signed up as task creator!");
            router.push("/dashboard_taskcreator");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to sign up. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='bg-[#2877EA] w-screen h-fit'>
            <Header />
            <div className='flex justify-around w-[90%] mx-auto mt-12 pb-24'>
                <div className='text-white flex flex-col gap-8 w-[30%]'>
                    <h2 className='text-[48px] font-bold'>Grow with us</h2>
                    <p className='font-light text-lg tracking-wide'>Access to thousands to task project and clients</p>
                    <Image src={illustrationImg} className='w-full' alt='Illustration'/>
                </div>

                {/* Authentication Section */}
                <div className='bg-white w-[50%] rounded-3xl px-16 py-16 flex flex-col gap-4'>
                    <h4 className='text-black tracking-wide text-2xl font-semibold'>Sign up as Task Creator</h4>
                    <form className='flex w-full flex-col gap-4' onSubmit={handleSubmit}>

                        <div className='flex items-center justify-between w-full'>
                            <div className='w-[45%] h-fit flex flex-col gap-2'>
                                <label htmlFor="firstName" className='text-sm text-[#666666]'>First Name</label>
                                <input
                                    id="firstName"
                                    onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                                    type="text"
                                    className='w-full p-3 rounded-md border border-gray-300 text-black text-sm'
                                    required
                                />
                            </div>
                            <div className='w-[45%] h-fit flex flex-col gap-2'>
                                <label htmlFor="lastName" className='text-sm text-[#666666]'>Last Name</label>
                                <input
                                    id="lastName"
                                    onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                                    type="text"
                                    className='w-full p-3 border rounded-md border-gray-300 text-black text-sm'
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="email" className='text-sm text-[#666666]'>Email address</label>
                            <input
                                id="email"
                                type="email"
                                onChange={(e) => setUserData({...userData, email: e.target.value})}
                                className='w-full p-3 border rounded-md border-gray-300 text-black text-sm'
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="phoneNumber" className='text-sm text-[#666666]'>Phone number</label>
                            <input
                                id="phoneNumber"
                                type="tel"
                                onChange={(e) => setUserData({...userData, phoneNumber: e.target.value})}
                                className='w-full p-3 border rounded-md border-gray-300 text-black text-sm'
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="password" className='text-sm text-[#666666]'>Password</label>
                            <input
                                id="password"
                                type="password"
                                onChange={(e) => setUserData({...userData, password: e.target.value})}
                                className='w-full p-3 border rounded-md border-gray-300 text-black text-sm'
                                required
                            />
                            <p className='text-xs text-[#666666]'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        </div>

                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="confirmPassword" className='text-sm text-[#666666]'>Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}
                                className='w-full p-3 border rounded-md border-gray-300 text-black text-sm'
                                required
                            />
                        </div>

                        <div className='flex gap-3'>
                            <input
                                type='checkbox'
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                className='bg-blue-600'
                                required
                            />
                            <p className='text-black text-xs tracking-wide'>
                                By creating an account, I agree to our Terms of use and Privacy Policy
                            </p>
                        </div>

                        <div className='flex items-center w-fit gap-8'>
                            <button
                                type="submit"
                                disabled={loading}
                                className='px-6 py-3 rounded-xl hover:bg-blue-800 transition-all duration-500 text-base bg-blue-600 text-white disabled:opacity-70 disabled:cursor-not-allowed'
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                        </svg>
                                        Signing up...
                                    </span>
                                ) : (
                                    "Sign Up"
                                )}
                            </button>
                            <p>Already have an account? <Link href="/log-in" className='text-blue-600'>Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}