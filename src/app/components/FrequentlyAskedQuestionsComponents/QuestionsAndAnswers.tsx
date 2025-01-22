import React from "react";
import iconImg from "../../../../public/assets/Frame 35.png";
import Image from "next/image";

export default function QuestionsAndAnswers() {
  const questionList = [
    {
      icon: iconImg,
      question: "What is Alt Bucks?",
      answer:
        "Alt Bucks is a platform where users can earn rewards by completing various tasks, such as taking surveys, watching videos, and engaging with content.",
    },
    {
      icon: iconImg,
      question: "How do I track my earnings?",
      answer:
        "You can track your earnings by logging into your account and viewing your 'Earnings Dashboard,' which shows completed tasks and accumulated rewards.",
    },
    {
      icon: iconImg,
      question: "Can I use Alt Bucks on mobile?",
      answer:
        "Yes, Alt Bucks is fully accessible through mobile browsers, and we also offer a dedicated mobile app for an even smoother experience.",
    },
    {
      icon: iconImg,
      question: "Is there a referral program?",
      answer:
        "Yes, you can earn extra rewards by referring friends to Alt Bucks. For each referral that signs up and completes tasks, you'll earn bonus points.",
    },
    {
      icon: iconImg,
      question: "Is my info safe?",
      answer:
        "Yes, we take data privacy seriously. Your information is stored securely, and we never share personal details with third parties without your consent.",
    },
    {
      icon: iconImg,
      question: "How do I earn with AltBucks?",
      answer:
        "You can earn by completing tasks such as filling out surveys, watching videos, trying out apps, or participating in offers. Each task has a specific reward.",
    },
    {
      icon: iconImg,
      question: "How are my earnings paid out?",
      answer:
        "You can redeem your earnings through options like PayPal, gift cards, or direct bank transfers. The available payment methods may vary depending on your location.",
    },
    {
      icon: iconImg,
      question: "Is Alt Bucks available worldwide?",
      answer:
        "Yes, Alt Bucks is available in most countries, though some tasks or offers may be region-specific.",
    },
    {
      icon: iconImg,
      question: "Can I have multiple accounts?",
      answer:
        "No, users are only allowed to have one Alt Bucks account. Creating multiple accounts may result in suspension or banning from the platform.",
    },
    {
      icon: iconImg,
      question: "Is there an age limit?",
      answer:
        "You must be 18+ to join. Under 18 may need parental consent, depending on local laws.",
    },
  ];
  return (
    <div className="bg-white h-fit flex items-center justify-center pt-16 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-[80%] mx-auto justify-between">
        {questionList.map((question) => (
          <div className="bg-white flex shadow-lg gap-6 p-5 rounded-lg">
            <Image
              src={question.icon}
              alt=""
              className="w-[40px] h-[40px] object-cover"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-[#2877EA]  tracking-wide ">
                {question.question}
              </h3>
              <p className="text-xs  text-black">{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
