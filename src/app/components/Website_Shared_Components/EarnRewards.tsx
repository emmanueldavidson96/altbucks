import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function EarnRewards() {
  return (
    <div className="w-full flex lg:h-[500px] py-10 bg-white items-center justify-center">
      <div className="border border-gray-400 w-[80%] mx-auto p-4 lg:p-8 rounded-xl relative overflow-hidden">
        {/* Designs for the section */}
        <div className="w-[150px] h-[150px] bg-white opacity-20 absolute top-0 left-0"></div>
        <div className="w-[150px] h-[150px] bg-white opacity-20 rotate-45 absolute bottom-[-70px] lg:bottom-[-50px] right-[-70px] lg:right-[-50px]"></div>

        <div className="w-full flex flex-col lg:flex-row items-center p-4 lg:p-8 justify-around mx-auto bg-[#2877EA] lg:h-[250px] rounded-xl ">
          <div className="flex flex-col gap-4 lg:w-[40%]">
            <h3 className="text-4xl font-semibold text-white tracking-wide">
              Earn rewards from the comfort of your home.
            </h3>
            <p className="text-xs tracking-widest text-white font-light">
              At ALTBUCKS, we make it easy for your to earn real cash online by
              completing simple tasks that fit into your everyday routine.
            </p>
          </div>

          <div className="w-full lg:w-[40%] flex gap-4 mt-10 lg:mt-0">
            <div className="w-[50%] lg:w-[200px] lg:h-[100px] bg-white rounded-xl px-4 py-3 justify-end flex items-end">
              <div className="flex w-[90%] mx-auto justify-between items-center">
                <p className="text-[#2877EA] text-sm tracking-wide">
                  Browse
                  <br />
                  Tasks
                </p>
                <MdArrowOutward className="" size={20} color="#2877EA" />
              </div>
            </div>

            <div className="w-[50%] lg:w-[200px] lg:h-[100px] border border-white rounded-xl px-4 py-3 justify-end flex items-end">
              <div className="flex w-[90%] mx-auto justify-between items-center">
                <p className="text-white text-sm tracking-wide">
                  Post
                  <br />
                  Tasks
                </p>
                <MdArrowOutward className="" size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
