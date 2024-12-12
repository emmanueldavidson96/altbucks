import React from 'react';

const UserCards: React.FC = () => {
  return (
    <div
      className="bg-white w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 rounded-lg 
      text-black group border-2 group-hover:border-4 group-hover:border-blue-600
      border-transparent hover:border-4 hover:border-blue-600"
    >
      {/* Card 1 */}
      <div
        className="flex sm:flex-row flex-col items-center sm:items-start w-full sm:w-[30%] bg-white p-4 rounded-lg 
            border-[1px] border-solid border-black-200 
            group-hover:border-dashed group-hover:border-blue-700 
            group-hover:border-[0.5px]"
      >
        {/* Left: Image Icon */}
        <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full sm:mr-4 mb-2 sm:mb-0">
          <img
            src="/assets/card1.png" // Replace with your image source
            alt="icon 1"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right: Title and Subtitle */}
        <div className="flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-lg mb-2 font-mulish font-thin text-[12px] leading-[13.96px] tracking-tight">
            Amount Spent
          </h2>
          <p className="text-sm font-mulish font-bold text-[24px] leading-[27.93px] tracking-[-0.65px]">
            $20,000
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="flex sm:flex-row flex-col items-center sm:items-start w-full sm:w-[30%] bg-white p-4 rounded-lg 
            border-[1px] border-solid border-black-200 
            group-hover:border-dashed group-hover:border-blue-700 
            group-hover:border-[0.5px]"
      >
        {/* Left: Image Icon */}
        <div className="flex-shrink-0 w-6 h-6 bg-gray-300 sm:mr-4 mb-2 sm:mb-0">
          <img
            src="/assets/card2.png" // Replace with your image source
            alt="icon 2"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right: Title and Subtitle */}
        <div className="flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-lg mb-2 font-mulish font-thin text-[12px] leading-[13.96px] tracking-tight">
            Work In Progress
          </h2>
          <p className="text-sm font-mulish font-bold text-[24px] leading-[27.93px] tracking-[-0.65px]">
            59
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="flex sm:flex-row flex-col items-center sm:items-start w-full sm:w-[30%] bg-white p-4 rounded-lg 
      border-[1px] border-solid border-black-200 
      group-hover:border-dashed group-hover:border-blue-700 
      group-hover:border-[0.5px]"
      >
        {/* Left: Image Icon */}
        <div className="flex-shrink-0 w-6 h-6 bg-gray-100 sm:mr-4 mb-2 sm:mb-0">
          <img
            src="/assets/card3.png" // Replace with your image source
            alt="icon 3"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right: Title and Subtitle */}
        <div className="flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-lg mb-2 font-mulish font-thin text-[12px] leading-[13.96px] tracking-tight">
            Task Completed
          </h2>
          <p className="text-sm font-mulish font-bold text-[24px] leading-[27.93px] tracking-[-0.65px]">
            170
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
