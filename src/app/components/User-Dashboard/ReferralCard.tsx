'use client';

import React from 'react';

const ReferralCard = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('https://loremipsum/referral?Adam103eE-2');
    alert('Referral link copied!');
  };

  return (
    <div className="bg-white rounded-lg p-4 w-[450px] h-[460px] mt-16 mx-6 border 
        border-blue-600 hover:border-2 hover:border-blue-600 transition-all flex flex-col items-center">
      {/* Image Section */}
      <div className="w-full bg-blue-600 rounded-lg p-6 flex items-center justify-center">
        <img
          src="/money-folder.png" // Replace this with the actual image path
          alt="Money Folder"
          className="w-36 h-36"
        />
      </div>

      {/* Title Section */}
      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold text-blue-600 flex items-center justify-center space-x-2">
          <span>✨</span>
          <span>Get paid directly into your existing account</span>
        </h2>
      </div>

      

      {/* Description Section 2 */}
      <p className="text-black mt-5 font-mulish font-bold text-2xl leading-[35.14px] tracking-[-1px] text-center">
        Withdraw Now
      </p>


      {/* Description Section */}
      <p className="text-gray-400 text-sm text-center mt-6">
        Click the code below to copy and send to your referrals and you can both earn £20 each
      </p>

      {/* Referral Code Section */}
      <button
        onClick={handleCopy}
        className="bg-blue-600 mt-8 font-mulish text-white rounded-lg py-2 px-3 w-full text-center text-sm hover:bg-blue-600 focus:ring focus:ring-blue-300"
      >
        https://loremipsum/referral?Adam103eE-2
      </button>
    </div>
  );
};

export default ReferralCard;
