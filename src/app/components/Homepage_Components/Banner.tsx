import Image from "next/image";
import React from "react";
import bannerImg from "../../../../public/assets/image 90.png";

export default function Banner() {
  return (
    <div className="flex w-full lg:h-screen py-10 items-center bg-[#F1F2F4]">
      <div className="flex flex-col lg:flex-row w-[80%] mx-auto justify-between">
        <div className="flex flex-col gap-8 h-full lg:w-[45%] justify-center">
          <h3 className="text-[#F2994A] tracking-wide text-2xl uppercase font-semibold">
            The Alternative Bucks!
          </h3>
          <h2 className="text-5xl font-medium tracking-wide text-black leading-[55px]">
            Get Paid for Simple Tasks Earn-Cash Online with AltBucks!
          </h2>
          <p className="text-base tracking-wide text-gray-500 leading-6">
            Complete micro-tasks, surveys, and more to earn rewards from the
            comfort of your home.
          </p>
          <button className="w-fit h-fit px-12 py-3 rounded-lg text-white text-sm tracking-wide bg-[#2877EA] hover:text-base transition-all duration-300 hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <div className="flex items-center h-full">
          <Image src={bannerImg} alt="" className="h-auto" />
        </div>
      </div>
    </div>
  );
}
