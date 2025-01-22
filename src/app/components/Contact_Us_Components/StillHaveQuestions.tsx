import React from "react";

export default function StillHaveQuestions() {
  return (
    <div className="bg-white w-full pt-16 flex items-center justify-center ">
      <div className="lg:w-[70%] mx-4 lg:mx-auto flex flex-col gap-5 lg:flex-row justify-between items-center border py-8 px-6 border-gray-400 rounded-lg">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-black tracking-wide">
            Still have questions?
          </h3>
          <p className="text-black text-sm tracking-wide ">
            Can't find the answer you're looking for? Please get in touch.
          </p>
        </div>

        <button className="bg-[#2877EA] w-fit h-fit px-8 py-3 text-sm rounded-lg">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
