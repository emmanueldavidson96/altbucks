import Image from "next/image";

const  Reviews = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navigation */}
            <header className="w-full bg-white">
                <div className="max-w-[1340px] mx-auto px-6 py-5">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Image
                                src="/logo.svg"
                                alt="Altbucks Logo"
                                width={120}
                                height={32}
                                priority
                            />
                        </div>
                        {/* Center Navigation Links */}
                        <nav className="flex items-center gap-8">
                            <a href="/about" className="text-sm text-gray-600 hover:text-[#4285F4]">About Us</a>
                            <a href="/reviews" className="text-sm text-gray-600 hover:text-[#4285F4]">Reviews</a>
                            <a href="/terms" className="text-sm text-gray-600 hover:text-[#4285F4]">Terms of Service</a>
                            <a href="/contact" className="text-sm text-gray-600 hover:text-[#4285F4]">Contact Us</a>
                        </nav>
                        {/* Auth Buttons */}
                        <div className="flex items-center gap-4">
                            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">
                                Log In
                            </button>
                            <button
                                className="px-4 py-2 text-sm text-white bg-[#4285F4] rounded hover:bg-blue-600 transition-colors">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* Hero Section */}
            <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/review.png"
                        alt="Background Pattern"
                        layout="fill"
                        objectFit="contain"
                        className="opacity-90"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-[#4285F4] opacity-80"></div>
                {/* Content Layer */}
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-semibold mb-4 text-[#FF7A00]">Reviews</h1>
                    <p className="text-xl text-white">Hear from our past clients.</p>
                </div>
            </div>
            {/* Reviews Section */}
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-[1200px] mx-auto">
                    {/* Reviews Cards Container */}
                    <div className="relative h-[400px] flex justify-center items-center mb-8">
                        {/* Left Card */}
                        <div
                            className="absolute w-[400px] h-[300px] -translate-x-[380px] bg-[#4285F4] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <div
                                    className="w-8 h-8 bg-[#4285F4] rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                                    <span className="text-white text-2xl font-serif leading-none mt-0.5">„</span>
                                </div>
                            </div>

                            {/* Card Content - Same structure */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <span className="text-sm text-white">A</span>
                                    </div>
                                    <span className="text-white text-lg">Al Bucks</span>
                                </div>

                                <div className="mb-8">
                                    <p className="text-white text-lg leading-relaxed">
                                        I got paid on time and in full. I got paid on time and in full.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10 mb-8"/>

                                <div className="flex items-center gap-4">
                                    <img
                                        src=""
                                        alt="David Beckham"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-white text-lg">David Beckham</h3>
                                        <p className="text-white/80 text-sm">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute w-[400px] h-[360px] translate-x-0  bg-[#4285F4] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] z-10">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <div
                                    className="w-8 h-8 bg-[#4285F4] rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                                    <span className="text-white text-2xl font-serif leading-none mt-0.5">„</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <span className="text-sm text-white">A</span>
                                    </div>
                                    <span className="text-white text-lg">AltBucks</span>
                                </div>

                                <div className="mb-12">
                                    <p className="text-white text-lg leading-relaxed">
                                        I got paid on time and in full. I got paid on time and in full.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10 mb-12"/>

                                <div className="flex items-center gap-4">
                                    <img
                                        src=""
                                        alt="David Beckham"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-white text-lg">David Beckham</h3>
                                        <p className="text-white/80 text-sm">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Card */}
                        <div
                            className="absolute w-[400px] h-[300px] translate-x-[380px] bg-[#4285F4] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <div
                                    className="w-8 h-8 bg-[#4285F4] rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                                    <span className="text-white text-2xl font-serif leading-none mt-0.5">„</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <span className="text-sm text-white">A</span>
                                    </div>
                                    <span className="text-white text-lg">AltBucks</span>
                                </div>
                                <div className="mb-8">
                                    <p className="text-white text-lg leading-relaxed">
                                        I got paid on time and in full. I got paid on time and in full.
                                    </p>
                                </div>
                                <div className="w-full h-px bg-white/10 mb-8"/>
                                <div className="flex items-center gap-4">
                                    <img
                                        src=""
                                        alt="David Beckham"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-white text-lg">David Beckham</h3>
                                        <p className="text-white/80 text-sm">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        <div className="w-2 h-2 rounded-full bg-gray-300"/>
                        <div className="w-2 h-2 rounded-full bg-[#4285F4]"/>
                        <div className="w-2 h-2 rounded-full bg-gray-300"/>
                        <div className="w-2 h-2 rounded-full bg-gray-300"/>
                        <div className="w-2 h-2 rounded-full bg-gray-300"/>
                    </div>
                </div>
            </main>
            {/* Call to Action Section */}
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
                                    <button
                                        className="bg-white px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                                        <span className="text-sm text-[#4285F4] font-medium">Browse Tasks</span>
                                        <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 16 16" fill="none">
                                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <button
                                        className="px-6 py-2.5 rounded-lg border border-white flex items-center gap-2 hover:bg-white/10 transition-colors">
                                        <span className="text-sm text-white font-medium">Post Tasks</span>
                                        <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#4285F4] text-white py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-4 gap-8 mb-8">
                        <div>
                            <Image
                                src="/logo-white.svg"
                                alt="Altbucks Logo"
                                width={120}
                                height={32}
                            />
                        </div>
                        <div>
                            <div className="space-y-2">
                                <a href="/about" className="block text-sm opacity-80 hover:opacity-100">About Us</a>
                                <a href="/contact" className="block text-sm opacity-80 hover:opacity-100">Contact Us</a>
                                <a href="/reviews" className="block text-sm opacity-80 hover:opacity-100">Reviews</a>
                            </div>
                        </div>
                        <div>
                            <div className="space-y-2">
                                <a href="/terms" className="block text-sm opacity-80 hover:opacity-100">Terms of
                                    Service</a>
                                <a href="/faq" className="block text-sm opacity-80 hover:opacity-100">FAQ</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/20">
                        <p className="text-sm opacity-80">© 2024 AltBucks. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Reviews;