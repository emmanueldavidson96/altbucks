import React from 'react';
import Header from '../components/Dashboard_Components/Header';
import HeroSection from '../components/User-Dashboard/HeroSection';
import UserCards from '../components/User-Dashboard/UserCards';
import LineGraph from '../components/User-Dashboard/LineGraph';
import FeaturedTask from '../components/User-Dashboard/FeaturedTask';
import PersonalProfile from '../components/User-Dashboard/PersonalProfile';
import TaskSummaryCard  from '../components/User-Dashboard/TaskSummaryCard';
import ReferralCard  from '../components/User-Dashboard/ReferralCard';

export default function Dashboard() {
  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Navbar Section with Border */}
      <div className="bg-white border-b border-gray-300">
        <Header />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-grow mt-6">
        {/* LEFT */}
        <div className="w-4/6 bg-white flex flex-col p-4 gap-6">
          <HeroSection />
          <UserCards />
          <div className="bg-white rounded-lg p-4 mt-4">
            <h2 className="text-lg font-bold text-black p-2">SPENDING OVER TIME</h2>
            <LineGraph />
          </div>
          <FeaturedTask />
        </div>
        {/* RIGHT */}
        <div className="w-2/6 bg-white">
          <PersonalProfile />
          <TaskSummaryCard />
          <ReferralCard />
        </div>
      </div>
    </div>
  );
}
