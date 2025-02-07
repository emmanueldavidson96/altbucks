"use client";
import { useState } from "react"
import { useRouter } from 'next/navigation'
import Header from '../../components/Forgot-Password-Components/Header'
import Image from 'next/image'    
import { toast } from 'react-toastify';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) {
            toast.error("Please enter your email")
            return
        }
        // Store email for next page
        sessionStorage.setItem('resetEmail', email)
        toast.success("Verification code has been sent")
        router.push('/verification')
    }
    const illustrationImg = "/assets/Illustration.png";

    return (
        <div className='bg-[#2877EA] h-[820px]'>
            <Header />

            <div className='relative flex justify-around min-h-screen'>
                <div className='flex flex-col w-[60%] text-white p-10'>
                    <h2 className='text-[48px] font-bold pl-56 mb-0'>Grow with us</h2>
                    <p className='font-light text-lg tracking-wide pl-56 mt-10 mb-0'>
                        Access to thousands to <br />task project and clients
                    </p>
                    <Image src={illustrationImg} className='pl-20 ml-24 mt-20' alt='illustration' width={500} height={300}/>
                </div>

                <div className="flex items-center justify-center bg-white rounded-2xl w-[40%] mt-12 mb-10 mr-10">
                    <div className="w-96 p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Forgot Password?
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <label className="block text-gray-600 text-sm mb-3">
                                Email address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                         focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2
                                         rounded-full hover:bg-blue-600 transition mt-6"
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
