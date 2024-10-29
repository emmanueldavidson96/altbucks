import Image from "next/image";

const  About= () => {
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
                            <button className="px-4 py-2 text-sm text-white bg-[#4285F4] rounded hover:bg-blue-600 transition-colors">
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
                        src="/questionmark.jpeg"
                        alt="Background Pattern"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90"
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
            <main className="max-w-4xl mx-auto px-6 py-16">
                {/* About Section */}
                <section className="text-center mb-20">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        At <span className="text-[#FF7A00]"> ALTBUCKS </span>, we make it easy for you to earn real cash
                        online by completing simple tasks
                        that fit into your everyday routine. Whether you're taking surveys, watching videos, and more.
                        Every activity helps you earn rewards that can be cashed out instantly.
                        Withdraw earnings easily through multiple payment methods.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We are dedicated to creating a flexible and user-friendly platform where you can earn money on
                        your terms.
                        Plus, with our referral program, you can increase your earnings by inviting friends to join in
                        the fun.
                    </p>
                </section>

                {/*  Goal Section */}
                <section className="flex items-center gap-16 mb-24">
                    <div className="w-1/2">
                        <h2 className="text-3xl font-semibold text-[#FF7A00] mb-6">Our Goal</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Our goal at ALTBUCKS, is to empower individuals by providing a simple and accessible way to
                            earn
                            money online. We strive to build a platform that rewards users for their time and input,
                            while
                            fostering meaningful connections between them and the activities they engage in. By
                            continually
                            expanding opportunities—from surveys to interactive tasks—we aim to make online earning
                            effortless and enjoyable for everyone.
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
                </section>
                {/* Reviews Section */}
                <section className="w-full bg-gray-50 py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl font-semibold text-center mb-16 text-black">
                            Reviewed by the community
                        </h2>

                        {/* Card Container */}
                        <div className="relative max-w-2xl mx-auto">
                            {/* Floating Images */}
                            <img
                                src=""
                                alt="Reviewer"
                                className="absolute left-0 top-1/3 w-12 h-12 rounded-full border-2 border-white"
                            />
                            <img
                                src=""
                                alt="Reviewer"
                                className="absolute right-0 top-1/3 w-12 h-12 rounded-full border-2 border-white"
                            />
                            <img
                                src=""
                                alt="Reviewer"
                                className="absolute left-1/4 top-0 w-12 h-12 rounded-full border-2 border-white"
                            />
                            <img
                                src=""
                                alt="Reviewer"
                                className="absolute right-1/4 -bottom-6 w-12 h-12 rounded-full border-2 border-white"
                            />
                            <img
                                src=""
                                alt="Reviewer"
                                className="absolute left-16 bottom-0 w-12 h-12 rounded-full border-2 border-white"
                            />

                            {/* Quote Mark (above card) */}
                            <div
                                className="absolute left-1/2 -top-8 -translate-x-1/2 w-16 h-16 rounded-full bg-[#4285F4] flex items-center justify-center z-10">
                                <span className="text-white text-4xl mb-2">"</span>
                            </div>

                            {/* Review Card */}
                            <div className="bg-white rounded-2xl px-12 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                                <div className="space-y-2 text-center">
                                    <p className="text-gray-600 leading-relaxed">
                                        I've been using Altbucks for a few months now,
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        and it's been a great way to earn some extra cash in my spare time.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Whether I'm taking surveys or watching videos,
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        the tasks are easy, and the payouts are reliable.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        I love how simple it is to cash out,
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        and the referral program is a nice bonus too!
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Highly recommend it to anyone looking to earn online.
                                    </p>
                                    <p className="font-medium text-gray-900 mt-6">
                                        Jessica Miller
                                    </p>
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
            </main>

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
                                <a href="/reviews" className="block text-sm opacity-80 hover:opacity-100">View
                                    Reviews</a>
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

export default About;