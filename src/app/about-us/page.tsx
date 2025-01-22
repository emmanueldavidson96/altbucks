import React from 'react'
import Banner from '../components/About_Components/Banner'
import Footer from '../components/Website_Shared_Components/Footer'
import OurGoal from '../components/About_Components/OurGoal'
import Navbar from '../components/Website_Shared_Components/Navbar'
import ViewReviews from '../components/Website_Shared_Components/ViewReviews'
import EarnRewards from '../components/Website_Shared_Components/EarnRewards'

export default function page() {
  return (
    <div className='w-screen h-fit bg-white'>
        <Navbar />
        <Banner />
        <OurGoal />
        <ViewReviews />
        <EarnRewards />
        <Footer/>
    </div>
  )
}
