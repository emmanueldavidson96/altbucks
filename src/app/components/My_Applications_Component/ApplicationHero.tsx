import { Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import {ApplicationHeroProps} from "@/app/components/My_Applications_Component/types";

export function ApplicationHero({ searchTerm, onSearchChange }: ApplicationHeroProps) {
    return (
        <div className="relative bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 px-6 py-6 rounded-xl">
            {/* Header Section */}
            <div className="relative mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    My Applications
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                    View and manage tasks you've applied for
                </p>
            </div>
            {/* Search and Actions Section */}
            <div className="relative flex items-center gap-3">
                {/* Search Input */}
                <div className="relative flex-1 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400
                                     group-hover:text-blue-500 transition-colors duration-200" />
                    <input
                        type="text"
                        placeholder="Search by Task Name or Poster"
                        className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200
                                 rounded-lg text-sm
                                 placeholder:text-gray-400
                                 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                                 hover:border-blue-200 transition-all duration-200"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
                {/* Filter Button */}
                <button className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200
                                 rounded-lg hover:bg-gray-50 hover:border-gray-300
                                 transition-all duration-200">
                    Filter
                </button>
                <Link
                    href="find-tasks"
                    className="px-4 py-2 text-sm text-blue-600 bg-white
                             border-2 border-blue-500/30 rounded-lg
                             hover:border-blue-500 hover:bg-blue-50
                             group flex items-center gap-2
                             transition-all duration-300 ease-in-out"
                >
                    <span>Find Tasks</span>
                    <Sparkles
                        className="w-4 h-4 text-blue-500 group-hover:animate-pulse"
                    />
                </Link>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
    );
}