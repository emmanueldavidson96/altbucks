"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Forgot-Password-Components/Header";
import Image from "next/image";
import { toast } from "react-toastify";

export default function VerificationPage() {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(120);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 4) {
            const nextInput = document.querySelector<HTMLInputElement>(`input[name='otp-${index + 1}']`);
            nextInput?.focus();
        }
    };

    const handleVerify = async () => {
        if (otp.includes("")) {
            toast.error("Please enter the complete code");
            return;
        }

        const email = sessionStorage.getItem("resetEmail");
        if (!email) {
            toast.error("Email not found. Please request a new verification code.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://altbucks-server-u8rj.onrender.com/api/v1/users/verify-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    token: otp.join(""), // Combine OTP digits into a string
                }),
            });

            const data = await response.json();
            console.log("Response from server:", data); // Log server response for debugging

            if (response.ok && data.success) {
                toast.success(data.message || "Token verified successfully");

                // Store email and token in sessionStorage for reset password page
                sessionStorage.setItem("resetEmail", email);
                sessionStorage.setItem("resetToken", otp.join(""));

                router.push("/password-auth/reset-password");
            } else {
                throw new Error(data.message || "Invalid token. Please try again.");
            }
        } catch (error: any) {
            console.error("Error verifying token:", error);
            toast.error(error.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const illustrationImg = "/assets/Illustration.png";

    return (
        <div className="bg-[#2877EA] min-h-screen">
            <Header />
            <div className="flex justify-around w-[90%] mx-auto mt-16">
                <div className="w-[30%] text-white">
                    <h2 className="text-[48px] font-bold">Grow with us</h2>
                    <p className="text-lg mb-4">Access to thousands of task projects and clients</p>
                    <Image src={illustrationImg} alt="illustration" width={500} height={300} />
                </div>

                <div className="w-1/2 bg-white rounded-3xl p-8">
                    <div className="w-2/3 mx-auto mt-20">
                        <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
                        <p className="text-gray-600 mb-6">Enter the verification code sent to your email</p>

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
                                Time: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                            </span>
                            <button
                                onClick={() => {
                                    setTimeLeft(120);
                                    toast.success("New code sent");
                                }}
                                className="px-4 py-2 rounded bg-blue-500 text-white"
                            >
                                Resend
                            </button>
                        </div>

                        <button
                            onClick={handleVerify}
                            className="w-full bg-[#2877EA] text-white py-3 rounded-full hover:bg-blue-600 transition disabled:bg-gray-400"
                            disabled={loading}
                        >
                            {loading ? "Verifying..." : "Verify"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}