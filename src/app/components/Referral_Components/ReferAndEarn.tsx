import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { PiWalletDuotone } from "react-icons/pi";

const ReferAndEarn: React.FC = () => {
  const userName = "Smith";
  const referralLink = "https://www.google.com/search?q=b...";
  const totalReferrals = 22;
  const pendingRewards = "2,202";
  const earnedRewards = 1700;

  return (
    <div className="text-white py-10 px-6 flex flex-col space-y-10">
      {/* Header Section */}
      <div className="bg-[#2877EA] flex rounded-lg p-12 flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Hi {userName},</h1>
          <h2 className="text-4xl font-extrabold mb-3">Refer & Earn Rewards</h2>
          <p className="text-lg mb-5">Invite your friends and earn cash or credits</p>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              readOnly
              value={referralLink}
              className="bg-white text-gray-800 px-4 py-2 rounded-lg w-full md:w-auto"
            />
            <button
              onClick={() => navigator.clipboard.writeText(referralLink)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Copy
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg"
            >
              Share
            </button>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center items-center">
          <img
            src="/assets/referral-image/image.png"
            alt="Wallet Illustration"
            className="w-48 h-48"
          />
        </div>
      </div>

      {/* Stats Section */}

      <div className="flex flex-col gap-3 md:flex-row justify-around items-center space-y-6 md:space-y-0">
        <div className="bg-white flex gap-2 items-center text-gray-800 rounded-lg px-6 py-4 shadow-md text-center w-64">
        <div className="p-1 bg-[#D4FEE5]">
        <CiBookmark className='text-[#0F8152]'/>
        </div> 
        <p className="text-4xl font-bold text-gray-500">{totalReferrals}</p>
          <p className="text-sm text-gray-600">Total Referrals</p>
        </div>
        <div className="bg-white flex gap-2 items-center text-gray-800 rounded-lg px-6 py-4 shadow-md text-center w-64">
        <div className="p-1 bg-[#D2E1FE]">
        <PiWalletDuotone className='text-[#2877EA]'/>
        </div> 
        <p className="text-4xl font-bold text-gray-500">£{pendingRewards}</p>
          <p className="text-sm text-gray-600">Pending Rewards</p>
        </div>
        <div className="bg-white flex gap-2 items-center text-gray-800 rounded-lg px-6 py-4 shadow-md text-center w-64">
        <div className="p-1 bg-[#D2E1FE]">
        <PiWalletDuotone className='text-[#2877EA]'/>
        </div> 
        <p className="text-4xl font-bold text-gray-500">£{earnedRewards}</p>
          <p className="text-sm text-gray-600">Earned Rewards</p>
        </div>
      </div>

      {/* Withdraw Button */}
      <div className="flex justify-center">
      <div className="flex justify-between w-2/3 mt-6 gap-8">
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
        statusColor: "bg-green-100 text-green-800",
        title: "Follow on Facebook",
        subtitle: "5 minutes",
        amount: "$10.04",
        date: "Oct 15, 2024",
        provider: "Facebook",
      },
      {
        status: "Pending",
        statusColor: "bg-yellow-100 text-yellow-800",
        title: "Mastercard ****6442",
        subtitle: "Card payment",
        amount: "$99.00",
        date: "Jan 17, 2022",
        provider: "Facebook",
      },
      {
        status: "Pending",
        statusColor: "bg-yellow-100 text-yellow-800",
        title: "Account ****882",
        subtitle: "Bank payment",
        amount: "$249.94",
        date: "Jan 17, 2022",
        provider: "Netflix",
      },
      {
        status: "Canceled",
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
            className="text-blue-600 hover:text-blue-500 text-sm font-medium"
          >
            See All Transactions →
          </a>
        </div>
        <div className="divide-y divide-gray-200">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-4">
                <span
                  className={`flex items-center justify-center w-24 px-2 py-1 text-sm font-medium rounded-full ${task.statusColor}`}
                >
                  {task.status}
                </span>
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-500">{task.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{task.amount}</p>
                <p className="text-sm text-gray-500">{task.date}</p>
              </div>
              <div className="hidden sm:block text-gray-500">{task.provider}</div>
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
  