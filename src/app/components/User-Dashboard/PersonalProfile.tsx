import React from 'react';
import Image from 'next/image';
import profileImg from "../../../../public/assets/Ellipse68.png";  // Import the image

const PersonalProfile: React.FC = () => {
  return (
    

    <div className="bg-white rounded-lg p-4 lg:w-[450px] lg:h-[470px] mt-0 mx-6 border 
        border-blue-600 hover:border-2 hover:border-blue-600 transition-all flex flex-col items-center
        md:w-[900px]">

      <div className="w-full flex flex-col items-center gap-6 font-mulish">
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
        <div className="text-center mb-0">
          <p className="text-2xl font-bold text-[#18181B]">Adam Smith</p>
          <span>
            <p className="text-base font-medium mt-2 text-[#949396]">ID: 20AB-C210-00SA</p>
          </span>
        </div>

        {/* Status Section */}
        <div className="flex gap-2 w-full justify-center mt-0">
          {/* Online Status */}
          <div className="mt-0 flex items-center justify-center py-1 px-3 bg-[#ECFDF3] font-mulish rounded-full text-sm font-medium text-[#0F8152]">
            Online
          </div>
        </div>
      </div>

      {/* Profile Completion Status */}
      <p className="text-center text-sm font-medium text-[#949396] mt-7">
        Your profile is 80% complete. Finish setting up
      </p>

      {/* View Profile Button */}
      <button className="w-full max-w-[200px] h-[41px] bg-[#2877EA] 
      rounded-lg font-mulish text-white text-sm font-medium 
      flex justify-center items-center gap-2 mt-7">
        <p>View Profile</p>
      </button>
    </div>
  );
};

export default PersonalProfile;
