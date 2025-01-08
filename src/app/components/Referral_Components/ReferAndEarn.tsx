import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { PiWalletDuotone } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCircle } from "react-icons/fa";


const ReferAndEarn: React.FC = () => {
  const userName = "Smith";
  const referralLink = "https://www.google.com/search?q=b...";
  const totalReferrals = 22;
  const pendingRewards = "2,202";
  const earnedRewards = 1700;

  return (
    <div className="text-white py-6 px-6 flex flex-col space-y-10">
      {/* Header Section */}
      <div className="bg-[#2877EA] flex rounded-lg px-12 py-4 flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="md:w-2/3">
          <h1 className="text-xl mb-2">Hi {userName},</h1>
          <h2 className="text-4xl font-semibold mb-3">Refer & Earn Rewards</h2>
          <p className="text-lg mb-5">Invite your friends and earn cash or credits</p>
          <div className="flex items-center space-x-4">
            <div className="flex gap-6 bg-white rounded-l-full p-1">
            <input
              type="text"
              readOnly
              placeholder={referralLink}
              className="bg-white text-gray-800 px-4 py-2 rounded-l-full w-full md:w-auto placeholder:text-gray-500 text-sm"
            />
            <button
              onClick={() => navigator.clipboard.writeText(referralLink)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm"
            >
              Copy
            </button>
            </div>
            <button
              className="bg-gray-800 hover:bg-opacity-80 text-sm bg-opacity-70 text-white px-4 py-3 rounded-r-full"
            >
              Share
            </button>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-start items-center py-4">
          <img
            src="/assets/referral-image/image.png"
            alt="Wallet Illustration"
            className="w-60 h-44"
          />
        </div>
      </div>

      {/* Stats Section */}

      <div className="flex flex-col gap-3 md:flex-row justify-around items-center space-y-6 md:space-y-0">
        <div className="bg-[#F5F5F5] flex gap-2 items-center text-gray-800 rounded-lg px-6 py-4 text-center w-full md:w-64">
        <div className="p-1 bg-[#D4FEE5]">
        <CiBookmark className='text-[#0F8152]'/>
        </div> 
        <p className="text-3xl font-bold text-gray-500">{totalReferrals}</p>
          <p className="text-sm text-gray-600">Total Referrals</p>
        </div>
        <div className="bg-[#F5F5F5] flex gap-2 items-center text-gray-800 rounded-lg px-6 py-4 text-center w-full md:w-64">
        <div className="p-1 bg-[#D2E1FE]">
        <PiWalletDuotone className='text-[#2877EA]'/>
        </div> 
        <p className="flex gap-1 items-end text-4xl font-bold text-gray-500"><span className='text-2xl text-gray-500'> £ </span>{pendingRewards}</p>
          <p className="text-sm text-gray-600 w-full">Pending Rewards</p>
        </div>
        <div className="bg-[#F5F5F5] flex gap-2 items-center text-gray-800 rounded-lg px-6 py-4 text-center w-full md:w-64">
        <div className="p-1 bg-[#D2E1FE]">
        <PiWalletDuotone className='text-[#2877EA]'/>
        </div> 
        <p className="flex gap-1 items-end text-4xl font-bold text-gray-500"><span className='text-2xl text-gray-500'> £ </span>{earnedRewards}</p>
          <p className="text-sm text-gray-600">Earned Rewards</p>
        </div>
      </div>

      {/* Withdraw Button */}
      <div className="flex justify-center">
      <div className="flex flex-col md:flex-row justify-between w-2/3 mt-6 gap-8">
        <div className="flex flex-col gap-2">
            <p className='text-black flex gap-1 items-center'>
                <div className="p-1 bg-[#D2E1FE]">
                    <PiWalletDuotone className='text-[#2877EA]'/>
                    </div> 
                    Money Available</p>
        <div className="text-4xl font-bold text-black">£123,456.00</div>
        </div>
        <button className="flex gap-4 items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg text-xl shadow-lg">
            <div className="border border-white px-1 rounded-sm"><img src="/assets/withdraw-icon.png" alt="" className='w-6 h-6'/></div>
          Withdraw
        </button>
      </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;

export const RecentTasks: React.FC = () => {
    const tasks = [
      {
        status: "Completed",
        icon: <FaCircle className='w-2 h-2 text-xs text-green-400'/>,
        statusColor: "bg-green-100 text-green-800",
        title: "Follow on Facebook",
        subtitle: "5 minutes",
        amount: "$10.04",
        date: "Oct 15, 2024",
        provider: "Facebook",
      },
      {
        status: "Pending",
        icon: <FaCircle className='w-2 h-2 text-yellow-400'/>,
        statusColor: "bg-yellow-100 text-yellow-800",
        title: "Mastercard ****6442",
        subtitle: "Card payment",
        amount: "$99.00",
        date: "Jan 17, 2022",
        provider: "Facebook",
      },
      {
        status: "Pending",
        icon: <FaCircle className='w-2 h-2 text-xs text-yellow-400'/>,
        statusColor: "bg-yellow-100 text-yellow-800",
        title: "Account ****882",
        subtitle: "Bank payment",
        amount: "$249.94",
        date: "Jan 17, 2022",
        provider: "Netflix",
      },
      {
        status: "Canceled",
        icon: <FaCircle className='w-2 h-2 text-xs text-red-400'/>,
        statusColor: "bg-red-100 text-red-800",
        title: "Amex card ****5666",
        subtitle: "Card payment",
        amount: "$199.24",
        date: "Jan 17, 2022",
        provider: "Amazon Prime",
      },
    ];
  
    return (
      <div className="max-w-4xl bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Recent Tasks Activities</h2>
            <p className="text-sm text-gray-500">
              Complete the tasks below to improve your rating
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-500 text-sm font-medium"
          >
            See All Transactions <MdKeyboardArrowRight className='text-xl'/>
          </a>
        </div>
        <div className="divide-y divide-gray-200">
          {tasks.map((task, index) => (
            <div key={index} className="flex flex-cols-5 space-x-4 items-start justify-between py-4">
              <div className="flex items-center w-[80%]">
                <span
                  className={`flex items-center gap-2 justify-center px-2 py-1 text-sm font-medium rounded-full ${task.statusColor}`}
                >
                 {task.icon} {task.status}
                </span>
                </div>
                <div className='flex flex-col items-start w-[140%]'>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-500">{task.subtitle}</p>
                </div>
              <div className="text-right flex flex-col items-start w-[80%]">
                <p className="font-medium">{task.amount}</p>
                <p className="text-sm text-gray-500">{task.date}</p>
              </div>
              <div className="hidden sm:block text-gray-500 flex items-start w-full">{task.provider}</div>
              <button className="ml-4 text-gray-500 hover:text-gray-700">
                <span className="sr-only">Options</span>
                ...
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  