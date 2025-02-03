"use client"
import React, { useState } from 'react'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png";
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';

export default function page() {


    const [createTask, setCreateTask] = useState(true);

    return (
        <div className='bg-[#2877EA] w-screen h-screen'>
            <Header />
            <div className='flex justify-around w-[90%] mx-auto my-12'>
                <div className='flex flex-col gap-8 w-[30%]'>
                    <h2 className='text-[48px] font-bold'>Grow with us</h2>
                    <p className='font-light text-lg tracking-wide'>Access to thousands to task project and clients</p>
                    <Image src={illustrationImg} className='w-full' alt=''/>
                </div>

                {/* Authentication Section */}
                <div className='bg-white w-[50%] rounded-3xl px-16 py-16 flex flex-col gap-4'>
                    <h4 className='text-black tracking-wide text-xl'>Sign up now</h4>
                    <h2 className='font-bold text-3xl text-black'>Welcome.</h2>
                    <p className='tracking-wide font-light text-sm text-black'>Choose what you will like to use Alt bucks for</p>

                    <div className='flex flex-col gap-6'>
                        {/* Earn */}
                        <div
                            onClick={() => setCreateTask(!createTask)}
                            className={`flex w-full items-center border-2 ${createTask ? "" : "border-blue-500" } rounded-xl p-4 gap-6 cursor-pointer`}
                        >
                            <div className='bg-gray-600 w-[80px] h-[60px] rounded-full'>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-black text-lg tracking-wide'>Earn</h3>
                                <p className='text-gray-400 tracking-wide text-sm '>Showcase your talent to a large audience and connect with the right clients</p>
                            </div>
                        </div>

                        {/* Create Task */}
                        <div
                            onClick={() => setCreateTask(!createTask)}
                            className={`flex w-full items-center border-2 ${createTask ? "border-blue-500" : "" } rounded-xl p-4 gap-6 cursor-pointer`}
                        >
                            <div className='bg-blue-300 w-[60px] h-[60px] rounded-full'>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-black text-lg tracking-wide'>Create Task</h3>
                                <p className='text-gray-400 tracking-wide text-sm '>Hire a world-class team to get your project running</p>
                            </div>
                        </div>

                    </div>

                    <button className='bg-[#2877EA] rounded-2xl text-sm tracking-wide w-full h-[40px] text-white'>
                        <Link
                            href={`${createTask ? "/sign-up-taskcreator":"/sign-up"}`} >
                            Continue
                        </Link>
                    </button>
                    <p className='text-sm tracking-wide text-black'>Already have an account? <span className='text-[#2877EA] font-semibold'>
                    <Link href={"/log-in"}>
                        Log In
                    </Link>
                </span></p>
                </div>

            </div>
        </div>
    )
}