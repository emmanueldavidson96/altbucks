"use client";
import { useState} from "react"
import React from 'react'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png";
import Link from 'next/link';


export default function page() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Password reset successfully!");
    };

  return (
    <div className='bg-[#2877EA]'>
        <Header />
        <div className='flex justify-around w-[90%] mx-auto mt-12 pb-24'>
            <div className='flex flex-col gap-4 w-[30%] text-white'>
                <h2 className='text-[48px] font-bold'>Grow with us</h2>
                <p className='font-light text-lg tracking-wide'>Access to thousands to task project and clients</p>
                <Image src={illustrationImg} className='w-full' alt=''/>
            </div>

            {/* Authentication Section */}
            <div className="flex w-1/2 items-center justify-center p-4 rounded-xl bg-white">
      <div className="w-full max-w-md p-8">
        <h2 className="mb-6 text-center text-2xl font-semibold">Forgot Password?</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password */}
          <div>
            <label className="mb-1 block text-gray-700">New Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700"
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
