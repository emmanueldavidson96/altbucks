"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/assets/Group 39230.png";
import Link from "next/link";

export const site_links = [
  { id: 1, link_name: "About Us", navigate: "/about-us" },
  { id: 2, link_name: "Reviews", navigate: "/reviews" },
  { id: 3, link_name: "Terms of Service", navigate: "/terms-of-service" },
  { id: 4, link_name: "FAQ", navigate: "/faq" },
  { id: 5, link_name: "Contact Us", navigate: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-fit flex items-center py-5 bg-[#F1F2F4]">
      <nav className="flex justify-between items-center w-[90%] mx-auto">
        {/* Logo */}
        <div className="w-fit h-fit">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" className="w-[100px] aspect-auto" />
          </Link>
        </div>

        {/* Centered Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {site_links.map((link) => (
            <p key={link.id}>
              <Link
                href={link.navigate}
                className="text-gray-500 text-sm tracking-wide hover:text-[#2877EA] transition"
              >
                {link.link_name}
              </Link>
            </p>
          ))}
        </div>

        {/* User Authentication */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border border-gray-400 px-4 py-2 text-gray-400 rounded-md hover:bg-[#2877EA] hover:text-white transition-all duration-300">
            <Link href={"/log-in"}>Log In</Link>
          </button>
          <button className="px-4 py-2 bg-[#2877EA] text-white rounded-md hover:bg-blue-700 duration-300 transition-all">
            <Link href={"/signup"}>Sign Up</Link>
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-600 focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] bg-white z-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-600 text-2xl absolute top-4 right-4 focus:outline-none"
        >
          ✖
        </button>
        <div className="flex flex-col items-center justify-center gap-6 mt-20">
          {site_links.map((link) => (
            <Link
              key={link.id}
              href={link.navigate}
              className="text-gray-600 text-lg hover:text-[#2877EA] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.link_name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-3 w-full px-4 mt-6">
            <Link
              href="/log-in"
              className="border border-gray-400 w-full py-2 text-center text-gray-400 rounded-md hover:bg-[#2877EA] hover:text-white transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="w-full py-2 text-center bg-[#2877EA] text-white rounded-md hover:bg-blue-700 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
