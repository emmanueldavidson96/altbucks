import Image from 'next/image'
import React from 'react'
import logoImg from "../../../../public/assets/Group 39230.png";
import Link from 'next/link';
import { IoIosNotificationsOutline } from "react-icons/io";
import avatarImg from "../../../../public/assets/Avatar.png";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
  return (
    <nav className='w-full h-[80px] flex items-center'>
        <div className='h-fit w-[90%] mx-auto flex items-center justify-between '>
            
            <div className='w-fit h-fit'>
                <Image src={logoImg} alt='' className='w-[100px] aspect-auto'/>
            </div>

            <div className='flex gap-4 items-center h-full'>
                <p className='text-sm text-gray-600'>
                    <Link href={"/dashboard"} className='text-sm tracking-wide'>Dashboard</Link>
                </p>
                <p className='h-fit w-fit p-2 bg-blue-600 rounded-lg text-white tracking-wide'>
                    <Link href={"/dashboard/tasks"} className='flex gap-2 items-center'>Tasks <FaAngleDown /> </Link>
                </p>
                <p className='text-sm text-gray-600 tracking-wide'>
                    <Link href={"/my_wallet"}>My Wallet</Link>
                </p>
                <p className='text-sm text-gray-600 tracking-wide'>
                    <Link href={"/referral"}>Referral</Link>
                </p>
            </div>

            <div className='flex gap-6 items-center'>
                <IoIosNotificationsOutline color='black' size={20} className='cursor-pointer'/>
                <p className='text-gray-400'>|</p>
                <Image src={avatarImg} alt='' className='cursor-pointer'/>
            </div>
        </div>
        
    </nav>
  )
}
