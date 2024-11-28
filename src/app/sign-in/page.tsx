import React from 'react'
import Header from '../components/Authentication/Header'
import Image from 'next/image'
import illustrationImg from "../../../public/assets/Illustration.png";
import Link from 'next/link';

export default function page() {
  return (
    <div className='bg-[#2877EA] w-screen h-fit'>
        <Header />
        <div className='flex justify-around w-[90%] mx-auto mt-12 pb-24'>
            <div className='flex flex-col gap-8 w-[30%]'>
                <h2 className='text-[48px] font-bold'>Grow with us</h2>
                <p className='font-light text-lg tracking-wide'>Access to thousands to task project and clients</p>
                <Image src={illustrationImg} className='w-full' alt=''/>
            </div>

            {/* Authentication Section */}
            <div className='bg-white w-[50%] rounded-3xl px-16 py-16 flex flex-col gap-4'>
                <h4 className='text-black tracking-wide text-2xl font-semibold'>Sign up now</h4>
                <form className='flex w-full flex-col gap-4'>
                    
                    <div className='flex items-center justify-between w-full'>
                        <div className='w-[45%] h-fit flex flex-col gap-2 '>
                            <label htmlFor="firstName" className='text-sm text-[#666666]'>First name</label>
                            <input type="text" className='w-full p-3 rounded-md border border-gray-300 text-black text-sm' />
                        </div>
                        <div className='w-[45%] h-fit flex flex-col gap-2'>
                            <label htmlFor="firstName" className='text-sm text-[#666666]'>Last name</label>
                            <input type="text" className='w-full p-3 border rounded-md border-gray-300 text-black text-sm' />
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-3 w-full'>
                        <label htmlFor="firstName" className='text-sm text-[#666666]'>Email address</label>
                        <input type="text" className='w-full p-3 border rounded-md border-gray-300 text-black text-sm' />
                    </div>

                    <div className='flex flex-col gap-3 w-full'>
                        <label htmlFor="firstName" className='text-sm text-[#666666]'>Phone number</label>
                        <input type="text" className='w-full p-3 border rounded-md border-gray-300 text-black text-sm' />
                    </div>

                    <div className='flex flex-col gap-3 w-full'>
                        <label htmlFor="firstName" className='text-sm text-[#666666]'>Password</label>
                        <input type="text" className='w-full p-3 border rounded-md border-gray-300 text-black text-sm' />
                        <p className='text-xs text-[#666666]'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </div>

                    <div className='flex flex-col gap-3 w-full'>
                        <label htmlFor="firstName" className='text-sm text-[#666666]'>Confirm Password</label>
                        <input type="text" className='w-full p-3 border rounded-md border-gray-300 text-black text-sm' />
                        <p className='text-xs text-[#666666]'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </div>

                    <div className='flex gap-3'>
                        <input type='checkbox' className='bg-blue-600' color='blue' />
                        <p className='text-black text-xs tracking-wide'>By creating an account, I agree to our Terms of use and Privacy Policy</p>
                    </div>

                    <div>
                        
                    </div>
                </form>             
                
            </div>

                
        </div>

    </div>
  )
}
