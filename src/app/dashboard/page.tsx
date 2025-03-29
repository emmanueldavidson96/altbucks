"use client";

import React, { useEffect } from "react";
import Header from "../components/User-Dashboard/Header";
import HeroSection from "../components/User-Dashboard/HeroSection";
import UserCards from "../components/User-Dashboard/UserCards";
import LineGraph from "../components/User-Dashboard/LineGraph";
import FeaturedTask from "../components/User-Dashboard/FeaturedTask";
import PersonalProfile from "../components/User-Dashboard/PersonalProfile";
import TaskSummaryCard from "../components/User-Dashboard/TaskSummaryCard";
import ReferralCard from "../components/User-Dashboard/ReferralCard";
import "../globals.css";
import Navbar from "../components/User-Dashboard/Navbar";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  // Define the event handler
  const handleButtonClick = () => {
    console.log("Post a Task button clicked!");
  };

  const {isAuthenticated, user, profileAuth} = useAuthStore();

  useEffect(() => {
    profileAuth()
    if(user?.isTaskCreator === "true"){
      router.push("/dashboard_taskcreator")
    }
  }, [])

  
    return (
      <div className="w-screen h-screen flex flex-col bg-white font-mulish">
        {/* Navbar Section with Border */}
        <div className="bg-white border-b border-gray-300">
          <Header />
        </div>
  
        {/* Main Content Section */}
        <div className="mx-auto w-[95%] flex flex-grow mt-6 flex-col lg:flex-row">
          {/* LEFT */}
          <div className="w-full lg:w-4/6 bg-white flex flex-col p-4 gap-6">
            {/* HeroSection */}
            <HeroSection
              title="Build a hands-on team to work on your project faster and easier with"
              subtitle="We've got a whole new pack of updates coming soon, you'll love them."
              buttonText="Post a Task"
              onButtonClick={handleButtonClick} // Pass the event handler
              imageSrc="/assets/Arrows(2).png"
              imageAlt="Illustration of arrows"
            />
  
            {/* UserCards */}
            <UserCards user={user} />
  
            {/* LineGraph */}
            <div className="bg-white rounded-lg p-4 mt-4 font-mulish">
              <h2
                className="text-lg font-bold text-black p-2 font-mulish border 
                  border-transparent"
              >
                Spending Over Time
              </h2>
              <LineGraph />
            </div>
  
            {/* FeaturedTask */}
            <FeaturedTask />
          </div>
  
          {/* RIGHT */}
          <div className="w-full lg:w-2/6 bg-white flex flex-col gap-4 p-4">
            <PersonalProfile user={user}/>
            <TaskSummaryCard />
            <ReferralCard />
          </div>
        </div>
      </div>
    );
  }