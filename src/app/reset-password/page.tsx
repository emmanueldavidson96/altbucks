
"use client";
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png"
import { toast } from 'react-toastify';

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState<string | null>(null);
    const [resetCode, setResetCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            // This ensures that sessionStorage is only accessed in the client-side
            const storedEmail = sessionStorage.getItem("resetEmail");
            const storedResetCode = sessionStorage.getItem("resetPasswordToken");
            setEmail(storedEmail);
            setResetCode(storedResetCode);

            console.log("Stored Reset Token:", storedResetCode);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        if (!email || !resetCode) {
            toast.error("Missing verification details. Please restart the process.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://authentication-1-bqvg.onrender.com/users/reset", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    resetCode,
                    password,
                    confirmPassword,
                }),
            });

            const data = await response.json();

            console.log("API Response:", data);

            if (response.ok && data.message.includes("Password has been reset successfully")) {
                toast.success(data.message || "Password has been reset successfully");
                router.push("/log-in");
            } else {
                throw new Error(data.message || "Failed to reset password. Please try again.");
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

                <div className="flex w-1/2 items-center justify-center p-4 rounded-xl bg-white">
                    <div className="w-full max-w-md p-8">
                        <h2 className="mb-6 text-center text-2xl font-semibold">Reset Password</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="mb-1 block text-gray-700">New Password</label>
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
