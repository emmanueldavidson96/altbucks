import React from 'react'
import Banner from '../components/Contact_Us_Components/Banner'
import ContactUsMethods from '../components/Contact_Us_Components/ContactUsMethods'
import StillHaveQuestions from '../components/Contact_Us_Components/StillHaveQuestions'
import EarnRewards from '../components/Website_Shared_Components/EarnRewards'
import Footer from '../components/Website_Shared_Components/Footer'
import Navbar from '../components/Website_Shared_Components/Navbar'

export default function page() {
  return (
    <div className='w-full bg-white h-fit'>
        <Navbar />
        <Banner />
        <ContactUsMethods />
        <StillHaveQuestions />
        <EarnRewards />
        <Footer />
    </div>
  )
}
