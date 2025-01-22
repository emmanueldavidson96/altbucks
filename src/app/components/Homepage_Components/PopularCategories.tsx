import Image from "next/image";
import React from "react";
import surveyImg from "../../../../public/assets/ri_survey-line.png";
import microtaskImg from "../../../../public/assets/fluent-mdl2_survey-questions.png";
import watchVideosImg from "../../../../public/assets/monitor-play-duotone 1.png";
import earnImg from "../../../../public/assets/bx_dollar.png";

export default function PopularCategories() {
  const categoryList = [
    {
      id: 1,
      category_name: "Take surveys",
      category_description: "Get Rewarded for Your Insights.",
      image: surveyImg,
    },
    {
      id: 2,
      category_name: "Micro Task",
      category_description: "Complete Tasks for Instant Rewards.",
      image: microtaskImg,
    },
    {
      id: 3,
      category_name: "Watch Videos",
      category_description: "Get Rewarded for Your Viewing Time.",
      image: watchVideosImg,
    },
    {
      id: 4,
      category_name: "Refer to earn",
      category_description: "Earn a bonus for every referral.",
      image: earnImg,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 lg:h-[500px] gap-5">
      <div className="justify-between flex items-center w-[80%] mx-auto">
        <h2 className="text-xl lg:text-4xl font-semibold tracking-wide text-black">
          Popular categories
        </h2>
        <button className="bg-[#2877EA] text-white text-sm tracking-wide px-4 py-2 rounded-md">
          Sign up
        </button>
      </div>

      <div className="w-[80%] mt-12 mx-auto flex flex-col gap-5 lg:flex-row justify-between relative">
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="flex flex-col gap-3 lg:w-[20%] items-center justify-center border border-gray-400 rounded-md p-8"
          >
            <div className="w-[60px] h-[60px] rounded-full bg-[#F1F2F4] flex items-center justify-center">
              <Image
                src={category.image}
                alt=""
                className="w-[25px] h-[25px] object-cover"
              />
            </div>
            <h3 className="text-black tracking-wide text-sm">
              {category.category_name}
            </h3>
            <p className="text-xs text-gray-500 tracking-wide text-center">
              {category.category_description}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  );
}
