import React from "react";
import Banner from "../components/FrequentlyAskedQuestionsComponents/Banner";
import EarnRewards from "../components/Website_Shared_Components/EarnRewards";
import Footer from "../components/Website_Shared_Components/Footer";
import QuestionsAndAnswers from "../components/FrequentlyAskedQuestionsComponents/QuestionsAndAnswers";
import Navbar from "../components/Website_Shared_Components/Navbar";

export default function page() {
  return (
    <div className="bg-white w-full h-fit">
      <Navbar />
      <Banner />
      <QuestionsAndAnswers />
      <EarnRewards />
      <Footer />
    </div>
  );
}
