import React from "react";
import { LuUserRound } from "react-icons/lu";
import { LuUserRoundCog } from "react-icons/lu";

const ReferralCards: React.FC = () => {
  const cards = [
    {
      icon: <LuUserRound className="text-[#0022CA] w-6 h-6 bg-[#D2E1FE] p-1"/>,
      title: "You get",
      description:
        "£100 when 3 friends sign up with your link and get £200 each from performing tasks",
    },
    {
      icon: <LuUserRoundCog className="text-[#0F8152] w-6 h-6 bg-[#D4FEE5] p-1"/>,
      title: "Your referral get",
      description:
        "Up to £50 when they sign up with your link and earn £200 from performing tasks",
    },
  ];

  return (
    <div className="space-y-4 flex flex-col md:flex-row lg:flex-col">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white text-black p-6 rounded-lg flex flex-col gap-2 items-start"
        >
          <div className="flex gap-2 items-center ">
          <span className="text-3xl">{card.icon}</span>
            <h3 className="text-md opacity-50">{card.title}</h3>
            </div>
            <p className="text-sm">{card.description}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ReferralCards;

export const CardSection = () => {
    return (
      <div className="flex flex-col justify-center items-center font-semibold">
        <h1 className="text-xl">Active Card</h1>
        <img src="/assets/card.png" alt="" />
      </div>
    );
  };