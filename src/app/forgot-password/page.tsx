"use client";
import { useState } from "react"
import { useRouter } from 'next/navigation'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import { toast } from 'react-toastify';
import illustrationImg from "../../../public/assets/Illustration.png"


export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://authentication-1-bqvg.onrender.com/users/request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();


            if (response.ok && data.message.includes("Password reset code sent")) {
                toast.success("Verification code has been sent");
                sessionStorage.setItem("resetEmail", email);
                setTimeout(() => {
                    router.push("/verification");
                }, 500);
            } else {
                throw new Error(data.message || "Failed to send verification code");
            }
        } catch (error: any) {
            toast.error(error.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='bg-[#2877EA]'>
            <Header />
            <div className='flex justify-around w-[90%] mx-auto mt-12 pb-24'>
                <div className='flex flex-col gap-4 w-[30%] text-white'>
                    <h2 className='text-[48px] font-bold'>Grow with us</h2>
                    <p className='font-light text-lg tracking-wide'>
                        Access to thousands to task project and clients
                    </p>
                    <Image src={illustrationImg} className='w-full' alt='illustration'/>
                </div>

                <div className="w-1/2 flex items-center justify-center bg-white rounded-2xl">
                    <div className="p-8 w-96">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Forgot Password?
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <label className="block text-gray-600 text-sm mb-2">
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
                                className="w-full bg-blue-500 text-white py-2 mt-4
                                         rounded-full hover:bg-blue-600 transition"
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