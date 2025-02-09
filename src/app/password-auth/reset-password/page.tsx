"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Forgot-Password-Components/Header";
import Image from "next/image";
import { toast } from "react-toastify";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [apiData, setApiData] = useState(null); // Store API response
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://altbucks-server-u8rj.onrender.com");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setApiData(data); // Store API data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        toast.success("Password reset successfully");
        router.push("/login");
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
                                         text-white hover:bg-blue-700 transition"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Display Fetched API Data for Debugging */}
            <div className="text-white w-[90%] mx-auto mt-8 p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-bold">API Response:</h3>
                {apiData ? (
                    <pre className="overflow-x-auto">{JSON.stringify(apiData, null, 2)}</pre>
                ) : (
                    <p>Loading API data...</p>
                )}
            </div>
        </div>
    );
}
