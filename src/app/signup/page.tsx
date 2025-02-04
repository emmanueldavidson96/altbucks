"use client"
import React, { useState } from 'react'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png";
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';

export default function Page() {
    const [createTask, setCreateTask] = useState(true);

    return (
        <div className='min-h-screen bg-[#2877EA]'>
            <Header />
            <main className='container mx-auto px-4 py-8 md:py-12 lg:py-16'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-12 max-w-7xl mx-auto'>
                    {/* Left Section */}
                    <div className='lg:w-[40%] text-white space-y-6'>
                        <div className='space-y-4'>
                            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                                Grow with us
                            </h2>
                            <p className='text-xl md:text-2xl font-light tracking-wide opacity-90'>
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

                    {/* Authentication Section */}
                    <div className='w-full lg:w-[55%] bg-white rounded-3xl p-8 md:p-12'>
                        <div className='max-w-xl mx-auto space-y-8'>
                            {/* Header */}
                            <div className='space-y-3'>
                                <h4 className='text-gray-600 text-xl tracking-wide'>Sign up now</h4>
                                <h2 className='font-bold text-3xl md:text-4xl text-gray-900'>Welcome.</h2>
                                <p className='text-gray-600 tracking-wide'>Choose what you would like to use Alt bucks for</p>
                            </div>

                            {/* Options */}
                            <div className='space-y-4'>
                                {/* Earn Option */}
                                <div
                                    onClick={() => setCreateTask(false)}
                                    className={`group transition-all duration-200 flex items-start border-2 ${!createTask ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"} rounded-xl p-6 cursor-pointer`}
                                >
                                    <div className='flex-shrink-0 bg-gray-600 w-16 h-16 rounded-full'></div>
                                    <div className='ml-6 space-y-2'>
                                        <h3 className='text-gray-900 text-lg font-medium'>Earn</h3>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Showcase your talent to a large audience and connect with the right clients
                                        </p>
                                    </div>
                                </div>

                                {/* Create Task Option */}
                                <div
                                    onClick={() => setCreateTask(true)}
                                    className={`group transition-all duration-200 flex items-start border-2 ${createTask ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"} rounded-xl p-6 cursor-pointer`}
                                >
                                    <div className='flex-shrink-0 bg-blue-300 w-16 h-16 rounded-full'></div>
                                    <div className='ml-6 space-y-2'>
                                        <h3 className='text-gray-900 text-lg font-medium'>Create Task</h3>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Hire a world-class team to get your project running
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className='space-y-4 pt-4'>
                                <Link
                                    href={`${createTask ? "/sign-up-taskcreator":"/sign-up"}`}
                                    className='block w-full'
                                >
                                    <button className='bg-[#2877EA] hover:bg-blue-600 transition-colors duration-200 rounded-xl py-4 text-white font-medium w-full'>
                                        Continue
                                    </button>
                                </Link>

                                <p className='text-center text-gray-600'>
                                    Already have an account?{' '}
                                    <Link
                                        href="/log-in"
                                        className='text-[#2877EA] hover:text-blue-700 font-semibold transition-colors duration-200'
                                    >
                                        Log In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}