"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Forgot-Password-Components/Header";
import Image from "next/image";
import { toast } from "react-toastify";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
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
        if (!email) {
            toast.error("Please enter your email");
            return;
        }
        // Store email for next page
        sessionStorage.setItem("resetEmail", email);
        toast.success("Verification code has been sent");
        router.push("/password-auth/reset-password");
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

                {/* Right Section - Form */}
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
