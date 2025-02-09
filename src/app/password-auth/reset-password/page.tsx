"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Forgot-Password-Components/Header";
import Image from "next/image";
import { toast } from "react-toastify";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

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

        const email = sessionStorage.getItem("resetEmail");
        const token = sessionStorage.getItem("resetToken");

        if (!email || !token) {
            toast.error("Missing verification details. Please restart the process.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://altbucks-server-u8rj.onrender.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    token,
                    newPassword: password,
                    confirmPassword,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success(data.message || "Password reset successful");
                router.push("/login");
            } else {
                throw new Error(data.message || "Failed to reset password. Please try again.");
            }
        } catch (error: any) {
            toast.error(error.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const illustrationImg = "/assets/Illustration.png";

    return (
        <div className="bg-[#2877EA] min-h-screen">
            <Header />
            <div className="flex justify-around w-[90%] mx-auto mt-12 pb-10">
                {/* Left Section */}
                <div className="flex flex-col gap-4 w-[30%] text-white">
                    <h2 className="text-[48px] font-bold">Grow with us</h2>
                    <p className="font-light text-lg tracking-wide">
                        Access to thousands of task projects and clients
                    </p>
                    <Image src={illustrationImg} alt="illustration" width={500} height={300} />
                </div>

                {/* Right Section - Reset Password Form */}
                <div className="flex w-1/2 items-center justify-center p-4 rounded-xl bg-white">
                    <div className="w-full max-w-md p-8">
                        <h2 className="mb-6 text-center text-2xl font-semibold">Reset Password</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="mb-1 block text-gray-700">New Password</label>
                                <input
                                    className="w-full rounded-lg border border-gray-300 p-3
                                             focus:border-blue-500 focus:outline-none"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Enter new password"
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
                                    placeholder="Confirm new password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 w-full rounded-full bg-blue-600 p-3
                                         text-white hover:bg-blue-700 transition disabled:bg-gray-400"
                                disabled={loading}
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
