"use client"

import Card from "@/app/components/Tasks_Components/Card";
import { CardsData } from "@/app/components/Tasks_Components/CardsData";
import Header from '@/app/components/Tasks_Components/Header'
import Filter from "@/app/components/Tasks_Components/Filter";
import { IoSearchOutline } from "react-icons/io5";

const Tasks: React.FC = () => {
  return (
    <>
    <Header />
    <div className='bg-white p-8'>
        <div className="flex justify-between">
        <div className="flex flex-col my-auto w-1/2">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Find Your Dream Task Here.
      </h1>
      {/* Subheading */}
      <p className="text-gray-500 text-sm mb-6">
        Curated tasks across the globe for you.
      </p>
      {/* Search Box */}
      <div className="flex items-center w-full space-x-4">
        {/* Input Field */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-10 text-sm border rounded-md focus:ring-none focus:outline-none"
          />
          <div className="absolute left-3 top-3">
          <IoSearchOutline className="text-xl opacity-70 text-blue-600 font-semibold"/>
          </div>
        </div>
        {/* Explore Button */}
        <button className="px-6 py-3 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none">
          Explore
        </button>
      </div>
    </div>
    <div className="w-72 h-72">
    <img src="/assets/task-image.png" alt="" className="w-60 h-60"/>
    </div>
        </div>
        <div className="flex gap-6">
            <div className="w-1/3 rounded-lg border border-gray-300">
        <Filter />
        </div>
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
        </div>
    </div>
    </>
  )
}
export default Tasks;