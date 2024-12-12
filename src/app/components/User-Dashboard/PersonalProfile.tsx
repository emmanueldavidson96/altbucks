import React from 'react';
import Image from 'next/image';
import profileImg from "../../../../public/assets/Ellipse68.png";  // Import the image

const PersonalProfile: React.FC = () => {
  return (
    <div className="w-[448px] h-[440px] bg-white border border-blue-600 hover:border-2
     hover:border-blue-600 transition-all rounded-lg p-6 flex flex-col items-center ml-6">
      <div className="w-[323px] h-[259px] flex flex-col items-center gap-6 font-mulish">
        {/* Avatar and Name Section */}
        <div className="relative w-[161px] h-[160px] flex justify-center items-center">
          {/* Avatar and Name Section */}
      <div className="relative w-[161px] h-[160px] flex justify-center items-center">
        {/* Circle background */}
        <div className="absolute w-[100px] h-[100px] bg-[#51AF4E] rounded-full z-0"></div>
        
        {/* Avatar Image */}
        <Image
          src={profileImg} // Use the imported image URL
          alt="User Avatar"
          width={90}
          height={90}
          className="rounded-full z-10" // Ensure this is above the green background
        />
      </div>

          

          {/* Name and ID */}
          <div className="absolute top-[106px] text-center mt-5">
            <p className="text-2xl font-bold text-[#18181B] mt-5 font-mulish">Adam Smith</p>
            <span>
              <p className="text-base font-medium text-[#949396] font-mulish">ID: 20AB-C210-00SA</p>
            </span>
          </div>
        </div>

        {/* Status Section */}
        <div className="flex gap-2 w-full justify-center">
          {/* Online Status */}
          <div className="mt-8 flex items-center justify-center py-1 px-3 bg-[#ECFDF3] font-mulish rounded-full text-sm font-medium text-[#0F8152]">
            Online
          </div>
        </div>
      </div>

      {/* Profile Completion Status */}
      <p className="text-center text-sm font-medium text-[#949396]">
        Your profile is 80% complete. Finish setting up
      </p>

      {/* View Profile Button */}
      <button className="w-[265px] h-[41px] bg-[#2877EA] rounded-lg font-mulish text-white text-sm font-medium flex justify-center items-center gap-2">
        <p>View Profile</p>
      </button>
    </div>
  );
};

export default PersonalProfile;
