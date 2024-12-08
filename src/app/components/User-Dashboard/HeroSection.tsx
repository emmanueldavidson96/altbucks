import Image from 'next/image';
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  imageSrc: string; // Image URL (from the public folder)
  imageAlt: string; // Alt text for the image
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 flex flex-col md:flex-row items-center justify-between w-full h-[270px] md:h-[300px] 
      lg:h-[250px] gap-6 rounded-lg shadow-lg bg-blue-600 text-white px-16 py-16 border 
      border-transparent hover:border-4 hover:border-blue-600 p-6">
      {/* Left Side (Title, Subtitle, Button) */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left ">
        <h3 className="text-3xl md:text-4xl mb-4">
        Build a hands-on team to work on your project faster and easier with
        </h3>
        <p className="text-lg mb-4">
        We’ve got a whole new pack of updates coming soon, you’ll love them.
        </p>
        <button
          className="bg-blue-800 text-white px-10 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          onClick={onButtonClick}
        >
          Post a Task
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="flex-shrink-0 max-w-xs md:max-w-sm">
        <Image
          src="/assets/Arrows(2).png" // Correctly reference the image from the public folder
          alt={imageAlt}
          width={300} // Add width and height for the Image component optimization
          height={300}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;
