"use client"
import React from 'react'
import Header from '@/app/components/Referral_Components/Header'
import ReferAndEarn, { RecentTasks } from "@/app/components/Referral_Components/ReferAndEarn";
import SearchByDate from '@/app/components/Referral_Components/SearchByDate';
import ReferralCards, { CardSection } from '@/app/components/Referral_Components/ReferralCards';

const Task: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row gap-2">
      <div className='w-full lg:w-[90%]'>
      <ReferAndEarn />
      <RecentTasks />
      </div>
      <div className="w-full flex flex-row lg:flex-col lg:w-[40%] lg:min-h-screen lg:space-y-6">
        <div className="flex flex-col">
        <div>
      <CardSection />
      <SearchByDate />
      </div>
      <ReferralCards />
      </div>
    </div>
    </div>
    </>
  )
}
export default Task;