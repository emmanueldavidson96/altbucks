"use client";
import { useState } from "react"
import { useRouter } from 'next/navigation'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png"
import { toast } from 'react-toastify';


export default function VerificationPage() {
    const [otp, setOtp] = useState(['', '', '', '', ''])
    const [timeLeft, setTimeLeft] = useState(120)
    const router = useRouter()

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return
        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        if (value && index < 4) {
            const nextInput = document.querySelector<HTMLInputElement>(`input[name='otp-${index + 1}']`)
            nextInput?.focus()
        }
    }

    const handleVerify = () => {
        if (otp.includes('')) {
            toast.error("Please enter complete code")
            return
        }
        toast.success("Code verified successfully")
        router.push('/reset-password')
    }

    return (
        <div className='bg-[#2877EA] min-h-screen'>
            <Header />
            <div className='flex justify-around w-[90%] mx-auto mt-12'>
                <div className='w-[30%] text-white'>
                    <h2 className='text-[48px] font-bold'>Grow with us</h2>
                    <p className='text-lg mb-4'>Access to thousands to task project and clients</p>
                    <Image src={illustrationImg} className='w-full' alt='illustration'/>
                </div>

                <div className="w-1/2 bg-white rounded-3xl p-8">
                    <div className="w-2/3 mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
                        <p className="text-gray-600 mb-6">
                            Enter verification code sent to your email
                        </p>

                        <div className="flex gap-2 mb-6">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    name={`otp-${index}`}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    className="w-12 h-12 border rounded-lg text-center text-xl"
                                />
                            ))}
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm text-gray-600">
                                Time: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                            </span>
                            <button
                                onClick={() => {
                                    setTimeLeft(120)
                                    toast.success("New code sent")
                                }}
                                className="px-4 py-2 rounded bg-blue-500 text-white"
                            >
                                Resend
                            </button>
                        </div>

                        <button
                            onClick={handleVerify}
                            className="w-full bg-[#2877EA] text-white py-3 rounded-full hover:bg-blue-600"
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}