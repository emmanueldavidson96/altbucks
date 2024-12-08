'use client';

import React from 'react';

const ReferralCard = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('https://loremipsum/referral?Adam103eE-2');
    alert('Referral link copied!');
  };

  return (
    <div className="bg-white rounded-lg p-4 w-[450px] h-[500px] mb-2 mt-20 mx-5 border 
        border-blue-600 hover:border-2 hover:border-blue-600 transition-all flex flex-col items-center">
      {/* Image Section */}
      <div className="w-full bg-blue-500 rounded-lg p-6 flex items-center justify-center">
        <img
          src="/money-folder.png" // Replace this with the actual image path
          alt="Money Folder"
          className="w-36 h-36"
        />
      </div>

      {/* Title Section */}
      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold text-blue-300 flex items-center justify-center space-x-2">
          <span>✨</span>
          <span>Get paid directly into your existing account</span>
        </h2>
      </div>

      {/* Description Section */}
      <p className="text-gray-400 text-sm text-center mt-2">
        Click the code below to copy and send to your referrals and you can both earn £20 each
      </p>

      {/* Referral Code Section */}
      <button
        onClick={handleCopy}
        className="bg-blue-500 text-white rounded-lg py-2 px-4 w-full mt-4 text-center text-sm hover:bg-blue-600 focus:ring focus:ring-blue-300"
      >
        https://loremipsum/referral?Adam103eE-2
      </button>
    </div>
  );
};

export default ReferralCard;
