"use client";
import { useState, useEffect, useRef } from "react"
import React from 'react'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png";
import Link from 'next/link';


export default function page() {
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes (120 seconds)

    useEffect(() => {
      if (timeLeft > 0) {
        const timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(timer); // Cleanup on unmount
      }
    }, [timeLeft]);
  
    // Format time in MM:SS format
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };
  
    const [code, setCode] = useState(["", "", "", "", ""]);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  
    const handleChange = (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return;
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
  
      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      };

  return (
    <div className='bg-[#2877EA] w-screen h-fit'>
        <Header />
        <div className='flex justify-around w-[90%] mx-auto mt-12 pb-24'>
            <div className='flex flex-col gap-4 w-[30%] text-white'>
                <h2 className='text-[48px] font-bold'>Grow with us</h2>
                <p className='font-light text-lg tracking-wide'>Access to thousands to task project and clients</p>
                <Image src={illustrationImg} className='w-full' alt=''/>
            </div>

            {/* Authentication Section */}

            <div className="flex items-center justify-center bg-white rounded-3xl w-1/2">
            <div className="p-8 w-2/3">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Forgot Password?
                </h2>
                <p className="text-gray-600 mb-2">Enter verification code</p>
                
                <div className="flex justify-between mb-4">
                {code.map((digit, index) => (
                    <input
                    key={index}
                    ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 border rounded-lg text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ))}
                </div>

                <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                Resend code in{" "}
                <span className="text-blue-600 font-semibold">{formatTime(timeLeft)}</span>
                </p>
                <button
                className="bg-gray-200 text-gray-400 text-xs py-3 px-4 rounded-lg mt-2 cursor-not-allowed"
                disabled
                >
                Resend code
                </button>
                </div>
                <button className="w-full bg-[#2877EA] text-white py-4 rounded-full mt-4 hover:bg-blue-600 transition">
                Verify
                </button>
            </div>
            </div>
        </div>

    </div>
  )
}
