"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            toast.error("Please fill in both password fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        // Retrieve the email from sessionStorage
        const email = sessionStorage.getItem("resetEmail");

        // Debugging: Check if the email is being retrieved correctly
        console.log("Retrieved email from sessionStorage:", email);

        if (!email) {
            toast.error("Email not found. Please request a new verification code.");
            return;
        }

        // Retrieve the token from sessionStorage
        const token = sessionStorage.getItem("resetToken");

        if (!token) {
            toast.error("Token not found. Please verify your email.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://altbucks-server-u8rj.onrender.com/api/v1/users/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    token,
                    newPassword,
                    confirmPassword,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success("Password reset successful.");
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
        <div className="bg-[#2877EA] min-h-screen">
            <div className="w-[50%] mx-auto p-8 bg-white rounded-lg mt-20">
                <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md"
                        disabled={loading}
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
}
