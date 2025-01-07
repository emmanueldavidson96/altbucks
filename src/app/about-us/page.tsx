import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navigation */}
            {/* Hero Section */}
            <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/questionmark.jpeg"
                        alt="Background Pattern"
                        fill
                        className="opacity-90 object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-[#4285F4] opacity-80"></div>
                {/* Content Layer */}
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-semibold mb-4 text-[#FF7A00]">About Us</h1>
                    <p className="text-xl text-white">Want to know more about us?</p>
                </div>
            </div>

            {/* Main Content */}
            <main className="w-full">
                {/* About Section */}
                <section className="w-full px-6 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            At <span className="text-[#FF7A00]">ALTBUCKS</span>, we make it easy for you to earn real cash
                            online by completing simple tasks that fit into your everyday routine. Whether you're taking surveys, watching videos, and more.
                            Every activity helps you earn rewards that can be cashed out instantly. Withdraw earnings easily through multiple payment methods.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are dedicated to creating a flexible and user-friendly platform where you can earn money on your terms.
                            Plus, with our referral program, you can increase your earnings by inviting friends to join in the fun.
                        </p>
                    </div>
                </section>

                {/* Goal Section */}
                <section className="w-full px-6 py-16">
                    <div className="max-w-7xl mx-auto flex items-center gap-16">
                        <div className="w-1/2">
                            <h2 className="text-3xl font-semibold text-[#FF7A00] mb-6">Our Goal</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 text-1.5xl">
                                Our goal at ALTBUCKS, is to empower individuals by providing a simple and accessible way to earn money online.
                                We strive to build a platform that rewards users for their time and input, while fostering meaningful connections between them and the activities they engage in.
                                By continually expanding opportunities—from surveys to interactive tasks—we aim to make online earning effortless and enjoyable for everyone.
                            </p>
                            <button className="bg-[#4285F4] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600">
                                Get Started
                            </button>
                        </div>
                        <div className="w-1/2">
                            <Image
                                src="/target.png"
                                alt="Target illustration"
                                width={400}
                                height={400}
                                className="w-full"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="w-full bg-[#F1F2F4] py-16">
                    <h2 className="text-2xl font-semibold text-center mb-16 text-black">
                        Reviewed by the community
                    </h2>
                    {/* Card Container */}
                    <div className="max-w-2xl mx-auto px-6 relative">
                        {/* Top left */}
                        <img
                            src="/image6.jpeg"
                            alt="Reviewer"
                            className="absolute -left-12 top-0 w-12 h-12 rounded-full border-2 border-white"
                        />
                        <img
                            src="/image5.jpeg"
                            alt="Reviewer"
                            className="absolute -left-20 top-1/3 w-12 h-12 rounded-full border-2 border-white"
                        />
                        <img
                            src="/image4.jpeg"
                            alt="Reviewer"
                            className="absolute -left-16 bottom-20 w-12 h-12 rounded-full border-2 border-white"
                        />

                        {/* Top right */}
                        <img
                            src="/image1.jpeg"
                            alt="Reviewer"
                            className="absolute -right-12 top-0 w-12 h-12 rounded-full border-2 border-white"
                        />
                        <img
                            src="/image2.jpeg"
                            alt="Reviewer"
                            className="absolute -right-20 top-1/3 w-12 h-12 rounded-full border-2 border-white"
                        />
                        <img
                            src="/image3.jpeg"
                            alt="Reviewer"
                            className="absolute -right-16 bottom-20 w-12 h-12 rounded-full border-2 border-white"
                        />

                        {/* Quote mark and review card */}
                        <div className="relative">
                            <div className="absolute left-1/2 -top-8 -translate-x-1/2 w-16 h-16 rounded-full bg-[#4285F4] flex items-center justify-center z-10">
                                <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 0C10.5 0 13.5 3 13.5 7C13.5 18.5 4.5 23 0 23C2.5 20.5 5.5 16.5 5.5 14C2.5 14.5 0 12 0 8.5C0 4 3 0 6.5 0Z" fill="white"/>
                                    <path d="M18.5 0C22.5 0 25.5 3 25.5 7C25.5 18.5 16.5 23 12 23C14.5 20.5 17.5 16.5 17.5 14C14.5 14.5 12 12 12 8.5C12 4 15 0 18.5 0Z" fill="white"/>
                                </svg>
                            </div>

                            {/* Review Card */}
                            <div className="bg-white rounded-2xl px-12 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                                <div className="space-y-2 text-center">
                                    <p className="text-gray-600">
                                        I've been using Altbucks for a few months now,
                                    </p>
                                    <p className="text-gray-600">
                                        and it's been a great way to earn some extra cash in my spare time.
                                    </p>
                                    <p className="text-gray-600">
                                        Whether I'm taking surveys or watching videos,
                                    </p>
                                    <p className="text-gray-600">
                                        the tasks are easy, and the payouts are reliable.
                                    </p>
                                    <p className="text-gray-600">
                                        I love how simple it is to cash out,
                                    </p>
                                    <p className="text-gray-600">
                                        and the referral program is a nice bonus too!
                                    </p>
                                    <p className="text-gray-600">
                                        Highly recommend it to anyone looking to earn online.
                                    </p>
                                    <p className="font-medium text-gray-900 mt-6">
                                        Jessica Miller
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-12">
                            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                            <div className="w-2 h-2 rounded-full bg-[#4285F4]"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        </div>
                    </div>
                </section>
                {/* Rewards Section */}
                <section className="container mx-auto px-6 mb-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#4285F4] rounded-[24px] overflow-hidden">
                            <div className="px-12 py-10">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <div className="max-w-md mb-8 md:mb-0">
                                        <h2 className="text-3xl font-semibold text-white mb-2">
                                            Earn rewards from the
                                            <br/>
                                            comfort of your home.
                                        </h2>
                                        <p className="text-white/90 text-sm">
                                            At ALTBUCKS, we make it easy for you to earn real cash online by completing
                                            simple tasks that fit into your everyday routine.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="bg-white px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                                            <span className="text-sm text-[#4285F4] font-medium">Browse Tasks</span>
                                            <svg className="w-4 h-10 text-[#4285F4]" viewBox="0 0 16 16" fill="none">
                                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <button className="px-6 py-2.5 rounded-lg border border-white flex items-center gap-2 hover:bg-white/10 transition-colors">
                                            <span className="text-sm text-white font-medium">Post Tasks</span>
                                            <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;