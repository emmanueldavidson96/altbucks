'use client';



import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import logoImg from "../../../../public/assets/Group 39230.png";
import Link from 'next/link';
import { IoIosNotificationsOutline } from "react-icons/io";
import { ChevronDown } from 'lucide-react';
import avatarImg from "../../../../public/assets/Avatar.png";

export default function Header() {
    const pathname = usePathname();
    const [showDropdown, setShowDropdown] = useState(false);

    const links = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/dashboard/tasks', label: 'Tasks' },
        { href: '/dashboard/my_wallet', label: 'My Wallet' },
        { href: '/dashboard/referral', label: 'Referral' }
    ];

    return (
        <nav className="w-full h-[80px] backdrop-blur-sm z-50">
            <div className="h-full w-[90%] mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/dashboard" className="w-fit h-fit transform hover:scale-105 transition-all duration-300">
                    <Image
                        src={logoImg}
                        alt="Logo"
                        className="w-[120px] aspect-auto"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <div className="flex gap-8 items-center h-full">
                    {links.map((link) => (
                        <div key={link.href} className="relative">
                            {link.label === 'Tasks' ? (
                                // Tasks with dropdown
                                <div className="relative">
                                    <Link
                                        href={link.href}
                                        className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200
                      ${pathname === link.href ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}
                      after:content-[''] after:absolute after:-bottom-1 after:left-0 
                      after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 
                      hover:after:w-full`}
                                        onMouseEnter={() => setShowDropdown(true)}
                                        onMouseLeave={() => setShowDropdown(false)}
                                    >
                                        Tasks
                                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 
                      ${showDropdown ? 'rotate-180' : 'group-hover:rotate-180'}`}
                                        />
                                    </Link>
                                    {/* Dropdown */}
                                    <div
                                        onMouseEnter={() => setShowDropdown(true)}
                                        onMouseLeave={() => setShowDropdown(false)}
                                        className={`absolute top-full left-0 mt-1 transform transition-all duration-200 
                      ${showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                                    >
                                        <div className="bg-white rounded-xl shadow-lg py-2 min-w-[180px]">
                                            <Link
                                                href="/dashboard/my-applications"
                                                className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50/80 hover:text-blue-600
                          transition-all duration-200"
                                            >
                                                My Applications
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2 text-sm font-medium transition-all duration-200
                    ${pathname === link.href ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}
                    relative after:content-[''] after:absolute after:-bottom-1 after:left-0 
                    after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 
                    hover:after:w-full`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* User Section */}
                <div className="flex items-center gap-8">
                    <button className="relative p-2 rounded-full hover:bg-slate-50/80 transition-all duration-200 group">
                        <IoIosNotificationsOutline className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse" />
                    </button>

                    <div className="h-6 w-px bg-slate-200" />

                    <button className="flex items-center gap-3 group p-2 rounded-full hover:bg-slate-50/80 transition-all duration-200">
                        <div className="relative">
                            <Image
                                src={avatarImg}
                                alt="User Avatar"
                                className="w-9 h-9 rounded-full ring-2 ring-slate-100 group-hover:ring-blue-200 transition-all duration-200
                  transform group-hover:scale-105"
                            />
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-all duration-300
              group-hover:rotate-180" />
                    </button>
                </div>
            </div>
        </nav>
    );
}