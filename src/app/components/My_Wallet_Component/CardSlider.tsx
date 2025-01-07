import Image from 'next/image';
import React, {useState} from 'react';

const CardSlider = () => {
    const cards = [
        {
          id: 1,
          image: "https://i.pinimg.com/736x/3b/4b/3e/3b4b3edf97517ba3866dd479bcd1fb5a.jpg", // Replace this with the path to your uploaded image
        },
        {
          id: 2,
          image: "https://i.pinimg.com/736x/a4/7d/34/a47d34c8fa9de8f86aefc250fd3902d8.jpg", // Placeholder for demonstration
        },
        {
          id: 3,
          image: "https://i.pinimg.com/736x/d6/38/dd/d638dd510d7b8eb318cd3cfa731114aa.jpg", // Placeholder for demonstration
        },
      ];

      const [activeIndex, setActiveIndex] = useState(0);

  // Handle slide changes
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  

  return (
    <div className="flex flex-col items-center py-9">
    {/* Scroll Indicator - Up */}
    <button
      onClick={handlePrev}
      className="text-gray-500 animate-bounce mb-4 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>

    {/* Card Slider */}
    <div className="relative w-96 h-60">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute inset-0 bg-cover bg-center rounded-xl shadow-lg transform transition-transform duration-500 ${
              index === activeIndex ? "translate-y-0 scale-100" : "translate-y-8 scale-95 opacity-0"
            }`}
            style={{
              zIndex: index === activeIndex ? 10 : 0,
              opacity: index === activeIndex ? 1 : 0,
              backgroundImage: `url(${card.image})`,
            }}
          ></div>
        ))}
      </div>

    {/* Scroll Indicator - Down */}
    <button
      onClick={handleNext}
      className="text-gray-500 animate-bounce mt-4 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
  );
};

export default CardSlider;
