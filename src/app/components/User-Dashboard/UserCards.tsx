import React from 'react';

const UserCards: React.FC = () => {
  return (
    <div className="bg-white w-full h-[125px] flex justify-between gap-6 rounded-lg 
      text-black group border-2 group-hover:border-4 group-hover:border-blue-600
      border-transparent hover:border-4 hover:border-blue-600">
      {/* Card 1 */}
          <div className="flex items-center w-[30%] bg-white p-4 rounded-lg 
            border-[1px] border-solid border-black-200 
            group-hover:border-dashed group-hover:border-blue-700 
            group-hover:border-[0.5px]">

        {/* Left: Image Icon */}
        <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full mr-4">
          <img
            src="/path/to/your/icon1.png" // Replace with your image source
            alt="icon 1"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right: Title and Subtitle */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-2">Card 1</h2>
          <p className="text-sm">Some description or content here.</p>
        </div>
      </div>

      {/* Card 2 */}
        <div className="flex items-center w-[30%] bg-white p-4 rounded-lg 
            border-[1px] border-solid border-black-200 
            group-hover:border-dashed group-hover:border-blue-700 
            group-hover:border-[0.5px]">

        {/* Left: Image Icon */}
        <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full mr-4">
          <img
            src="/path/to/your/icon2.png" // Replace with your image source
            alt="icon 2"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right: Title and Subtitle */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-2">Card 2</h2>
          <p className="text-sm">Some description or content here.</p>
        </div>
      </div>

    {/* Card 3 */}
      <div className="flex items-center w-[30%] bg-white p-4 rounded-lg 
      border-[1px] border-solid border-black-200 
      group-hover:border-dashed group-hover:border-blue-700 
      group-hover:border-[0.5px]">

        <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full mr-4">
          <img
            src="/path/to/your/icon3.png" // Replace with your image source
            alt="icon 3"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right: Title and Subtitle */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-2">Card 3</h2>
          <p className="text-sm">Some description or content here.</p>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
