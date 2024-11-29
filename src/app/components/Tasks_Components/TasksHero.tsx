'use client';

import Image from 'next/image';
import Asset1 from "../../../../public/assets/Asset 1.png";

const TasksHero = () => {
    return (
        <div className="bg-gray-50 from-gray-50 to-white ">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center relative pt-20 pb-24">
                    {/* Content Section */}
                    <div className="w-full max-w-2xl">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Find Your Dream{' '}
                            <span className="text-blue-600">Task</span>{' '}
                            Here.
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Curated tasks across the globe for you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                            {/* Search Box */}
                            <div className="flex-1">
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <svg
                                            className="text-gray-400 w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="11" cy="11" r="8" />
                                            <line x1="21" x2="16.65" y1="21" y2="16.65" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search by Task Name or Poster"
                                        className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-200
                                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                                                 transition-all duration-300 text-gray-900 placeholder-gray-400
                                                 hover:border-gray-300 bg-white shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Explore Button */}
                            <button className="h-14 px-8 bg-blue-600 text-white rounded-xl
                                           hover:bg-blue-700 text-base font-semibold
                                           transition-all duration-300 shadow-md
                                           hover:shadow-lg hover:-translate-y-0.5
                                           flex items-center justify-center gap-2">
                                Explore
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="hidden lg:block absolute -right-6 top-12">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
                            <Image
                                src={Asset1}
                                alt="Person working illustration"
                                width={400}
                                height={400}
                                priority
                                className="object-contain relative z-10 transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TasksHero;