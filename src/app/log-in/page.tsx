"use client"
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
        email:"",
        password:"",
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
  return (
    <div className='bg-[#2877EA] w-screen h-fit'>
        <Header />
        <div className='flex justify-around w-[90%] mx-auto mt-12 pb-24'>
            <div className='flex flex-col gap-8 w-[30%]'>
                <h2 className='text-[48px] font-bold'>Grow with us</h2>
                <p className='font-light text-lg tracking-wide'>Access to thousands to task project and clients</p>
                <Image src={illustrationImg} className='w-full' alt=''/>
            </div>

            {/* Authentication Section */}
            <div className='bg-white mt-12 max-lg:mt-2 h-fit w-[50%] rounded-3xl px-12 py-12 flex flex-col gap-4'>
                <h4 className='text-black tracking-wide text-2xl font-semibold'>Login </h4>
                <form className='flex w-full flex-col gap-4' onSubmit={handleSubmit}>                    
                    <div className='flex flex-col gap-3 w-full'>
                        <label htmlFor="firstName" className='text-sm text-[#666666]'>Email address</label>
                        <input 
                            onChange={(e) => setUserData({...userData, email:e.target.value})}
                            type="text" className='w-full p-3 border rounded-md border-gray-300 text-black text-sm shadow-md' 
                            placeholder='email...'
                            />
                    </div>

                    <div className='flex flex-col gap-3 w-full'>
                        <label htmlFor="firstName" className='text-sm text-[#666666]'>Password</label>
                        <input 
                            onChange={(e) => setUserData({...userData, password:e.target.value})}
                            type="password" className='w-full p-3 border rounded-md border-gray-300 text-black text-sm shadow-md' 
                            placeholder='*********'
                            />
                    </div>

                    <button 
                        type='submit'
                        className='w-full p-4 bg-blue-600 rounded-lg text-white text-base tracking-wide shadow-lg mt-8'
                    >
                        Login
                    </button>

                    <div className='flex flex-col gap-3 w-full'>
                        <p className='text-sm tracking-wide text-[#666666]'>Don't own an account? <Link href={"/signup"} className='text-blue-600'>Sign up now</Link> </p>
                    </div>

                </form>             
            </div>
        </div>
    </div>
  )
}
