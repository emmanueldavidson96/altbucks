import React, { useEffect, useState } from 'react';
import mockData from './mockData.json';

interface UserCard {
  title: string;
  value: string;
  icon: string;
}

const UserCards: React.FC = () => {
  const [userCards, setUserCards] = useState<UserCard[]>([]);

  useEffect(() => {
    // Fetch data from the mock JSON file
    setUserCards(mockData.userCards);
  }, []);

  return (
    <div
      className="bg-white w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 rounded-lg 
      text-black group border-2 group-hover:border-4 group-hover:border-blue-600
      border-transparent hover:border-4 hover:border-blue-600"
    >
      {userCards.map((card, index) => (
        <div
          key={index}
          className="flex sm:flex-row flex-col items-center sm:items-start w-full sm:w-[30%] bg-white p-4 rounded-lg 
            border-[1px] border-solid border-black-200 
            group-hover:border-dashed group-hover:border-blue-700 
            group-hover:border-[0.5px]"
        >
          {/* Left: Image Icon */}
          <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full sm:mr-4 mb-2 sm:mb-0">
            <img
              src={card.icon} // Use the icon from the JSON data
              alt={`icon ${index + 1}`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Right: Title and Subtitle */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-lg mb-2 font-mulish font-thin text-[12px] leading-[13.96px] tracking-tight">
              {card.title}
            </h2>
            <p className="text-sm font-mulish font-bold text-[24px] leading-[27.93px] tracking-[-0.65px]">
              {card.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
