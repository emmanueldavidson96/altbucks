import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";
import { HiRefresh } from "react-icons/hi";

export default function ContactUsMethods() {
  const contactMethods = [
    {
      icon: <TiMessages size={15} color="black" />,
      title: "Chat with Us",
      description: "Speak with our friendly team",
      contact: "sales@altbucks.com",
      href: "mailto:sales@altbucks.com",
    },
    {
      icon: <FiMessageCircle size={15} color="black" />,
      title: "Chat to support",
      description: "We're here to help",
      contact: "sales@altbucks.com",
      href: "mailto:sales@altbucks.com",
    },
    {
      icon: <MdLocationOn size={15} color="black" />,
      title: "Visit Us",
      description: "Visit our office headquarters",
      contact: "View on googlemaps",
      href: "https://www.google.com/maps",
    },
    {
      icon: <IoIosCall size={15} color="black" />,
      title: "Call Us",
      description: "Monday to Friday 8am - 5pm",
      contact: "+(233) 555 555 555",
      href: "tel:+233555555555",
    },
  ];

  return (
    <div className="lg:w-[80%] lg:mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between mt-[-100px] mx-4">
      {contactMethods.map((method, index) => (
        <div
          key={index}
          className="w-full h-full lg:h-48 flex flex-col gap-2 bg-white rounded-lg py-6 px-4 shadow-md border border-gray-30 z-30"
        >
          <div className="w-[30px] h-[30px] border border-gray-400 rounded-md flex items-center justify-center">
            {method.icon}
          </div>
          <h3 className="text-black font-semibold tracking-wide text-sm mt-4">
            {method.title}
          </h3>
          <p className="text-black font-light text-sm tracking-wide">
            {method.description}
          </p>
          <Link
            href={method.href}
            className="border border-gray-300 px-4 py-2 w-fit rounded-xl text-xs text-black tracking-wide font-light"
          >
            {method.contact}
          </Link>
        </div>
      ))}
    </div>
  );
}
