import { Search } from 'lucide-react';
import Link from 'next/link';

interface ApplicationHeroProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export function ApplicationHero({ searchTerm, onSearchChange }: ApplicationHeroProps) {
    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">My Applications</h1>
                <p className="text-sm text-gray-500 mt-1">View and manage tasks you've applied for</p>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by Task Name or Poster"
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
                <button className="px-6 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                    Filter
                </button>
                <Link
                    href="find-tasks"
                    className="px-6 py-2.5 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 inline-block"
                >
                    Find Tasks
                </Link>
            </div>
        </div>
    );
}