'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function TasksHero() {
    return (
        <div className="relative">
            {/* Decorative gradient backgrounds */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70" />
            <div className="absolute -top-4 right-0 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
            <div className="absolute -top-4 left-0 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />

            <div className="relative px-6 py-4">
                <div className="flex justify-between items-center gap-3">
                    <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                        </div>
                        <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                            Recent Posts
                        </h1>
                    </div>

                    <Link
                        href="/find-tasks"
                        className="relative overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600
                                 text-white font-medium tracking-wide
                                 shadow-lg shadow-blue-500/30
                                 hover:shadow-blue-500/50 hover:-translate-y-0.5
                                 before:absolute before:inset-0
                                 before:bg-gradient-to-r before:from-white/20 before:to-transparent
                                 before:translate-x-[-100%] before:transition-transform before:duration-500
                                 hover:before:translate-x-[100%]
                                 transition-all duration-300 ease-out"
                    >
                        Explore More
                    </Link>
                </div>
            </div>
        </div>
    );
}