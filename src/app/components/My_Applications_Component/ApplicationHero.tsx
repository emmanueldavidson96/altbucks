'use client';

import { Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ApplicationHeroProps } from "@/app/components/My_Applications_Component/types";

export function ApplicationHero({ searchTerm, onSearchChange }: ApplicationHeroProps) {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 px-8 py-8 rounded-2xl shadow-sm">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-indigo-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/20 to-indigo-200/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            {/* Content Container */}
            <div className="relative">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        My Applications
                    </h1>
                    <p className="text-gray-600 text-sm mt-2 font-medium">
                        View and manage your applied tasks here.
                    </p>
                </div>

                {/* Search and Actions Section */}
                <div className="flex items-center gap-4">
                    {/* Search Input */}
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400
                                         group-hover:text-blue-500 group-focus-within:text-blue-500
                                         transition-colors duration-300" />
                        <input
                            type="text"
                            placeholder="Search by Task Name or Poster"
                            className="w-full pl-11 pr-4 py-3 bg-white/80 backdrop-blur-sm
                                     border border-gray-200 rounded-xl text-sm
                                     placeholder:text-gray-400
                                     focus:outline-none focus:ring-2 focus:ring-blue-500/20
                                     focus:border-blue-500/50 focus:bg-white
                                     hover:border-blue-200 hover:bg-white
                                     transition-all duration-300"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>

                    {/* Filter Button */}
                    <button className="px-5 py-3 text-sm font-medium text-gray-700
                                     bg-white/80 backdrop-blur-sm border border-gray-200
                                     rounded-xl hover:bg-white hover:border-gray-300
                                     focus:outline-none focus:ring-2 focus:ring-gray-500/20
                                     active:bg-gray-50
                                     transition-all duration-300">
                        Filter
                    </button>

                    {/* Find Tasks Button */}
                    <Link
                        href="find-tasks"
                        className="px-5 py-3 text-sm font-medium text-blue-600
                                 bg-blue-50/50 backdrop-blur-sm
                                 border-2 border-blue-500/20 rounded-xl
                                 hover:bg-blue-100/50 hover:border-blue-500/30
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/20
                                 group flex items-center gap-2.5
                                 transition-all duration-300"
                    >
                        <span>Find Tasks</span>
                        <Sparkles
                            className="w-4 h-4 text-blue-500
                                     group-hover:animate-pulse group-hover:text-blue-600
                                     transition-colors duration-300"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}