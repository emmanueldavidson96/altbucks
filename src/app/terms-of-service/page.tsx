import React from "react";
import Banner from "../components/Terms_of_Service_Component/Banner";
import AgreementToTerms from "../components/Terms_of_Service_Component/AgreementToTerms";
import EarnRewards from "../components/Website_Shared_Components/EarnRewards";
import Footer from "../components/Website_Shared_Components/Footer";
import Navbar from "../components/Website_Shared_Components/Navbar";

export default function page() {
  return (
    <div className="w-screen h-fit bg-white">
      <Navbar />
      <Banner />
      <AgreementToTerms />
      <EarnRewards />
      <Footer />
    </div>
  );
}
