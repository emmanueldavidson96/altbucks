import { Search, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Asset1 from "../../../../public/assets/Asset 1.png";

const FindTasksHero = () => {
    return (
        <div className="relative bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <div className="flex justify-between items-center py-20">
                    {/* Content Section */}
                    <div className="w-full max-w-2xl relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Find Your Dream{' '}
                            <span className="text-blue-600 relative">
                                Task
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100/50 -z-10"></span>
                            </span>{' '}
                            Here.
                        </h1>

                        <p className="text-xl text-gray-600 mb-10">
                            Curated tasks across the globe for you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                            {/* Search Box */}
                            <div className="flex-1">
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400
                                                     group-hover:text-blue-500 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search by Task Name or Poster"
                                        className="w-full h-14 pl-12 pr-4 rounded-xl
                                                 border-2 border-gray-200 bg-white
                                                 focus:border-blue-500 focus:ring focus:ring-blue-100
                                                 hover:border-blue-200
                                                 transition-all duration-200"
                                    />
                                </div>
                            </div>

                            {/* Explore Button */}
                            <button className="h-14 px-8 bg-blue-600 text-white rounded-xl
                                           flex items-center justify-center gap-2
                                           hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20
                                           transition-all duration-200 font-medium">
                                Explore
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="hidden lg:block absolute right-0 top-10">
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-blue-100/30 rounded-full blur-3xl"></div>
                            <div className="absolute -inset-4 bg-purple-100/20 rounded-full blur-3xl -rotate-45"></div>

                            <Image
                                src={Asset1}
                                alt="Person working illustration"
                                width={450}
                                height={450}
                                priority
                                className="object-contain relative z-10
                                           transform hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>
    );
};

export default FindTasksHero;