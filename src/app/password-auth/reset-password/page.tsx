"use client";
import { useState } from "react"
import { useRouter } from 'next/navigation'
import Header from '../../components/Forgot-Password-Components/Header'
import Image from 'next/image'
import { toast } from 'react-toastify';

export default function ResetPasswordPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }

        toast.success("Password reset successfully")
        router.push('/login')
    }
    const illustrationImg = "/assets/Illustration.png";

    return (
        <div className='bg-[#2877EA]'>
            <Header />
            <div className='flex justify-around w-[90%] mx-auto mt-12 pb-10'>
                <div className='flex flex-col gap-4 w-[30%] text-white'>
                    <h2 className='text-[48px] font-bold'>Grow with us</h2>
                    <p className='font-light text-lg tracking-wide'>
                        Access to thousands to <br />task project and clients
                    </p>
                    <Image src={illustrationImg} className='' alt='illustration' width={500} height={300}/>
                </div>

                <div className="flex w-1/2 items-center justify-center p-4 rounded-xl bg-white">
                    <div className="w-full max-w-md p-8">
                        <h2 className="mb-6 text-center text-2xl font-semibold">Reset Password</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                                <label className="mb-1 block text-gray-700">Email</label>
                                <input
                                    type="password"
                                    className="w-full rounded-lg border border-gray-300 p-3
                                             focus:border-blue-500 focus:outline-none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="mb-1 block text-gray-700">New Password</label>
                                <input
                                    className="w-full rounded-lg border border-gray-300 p-3
                                             focus:border-blue-500 focus:outline-none"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    className="w-full rounded-lg border border-gray-300 p-3
                                             focus:border-blue-500 focus:outline-none"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 w-full rounded-full bg-blue-600 p-3
                                         text-white hover:bg-blue-700"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
