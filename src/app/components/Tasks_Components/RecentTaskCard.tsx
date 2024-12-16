'use client';

import { Calendar, DollarSign, Clock } from 'lucide-react';

interface RecentTaskCardProps {
    title: string;
    taskType: string;
    description: string;
    compensation: {
        currency: string;
        amount: number;
    };
    deadline: string | Date;
    postedDate: string | Date;
    onViewDetails: () => void;
}

export function RecentTaskCard({
                                   title,
                                   taskType,
                                   description,
                                   compensation,
                                   deadline,
                                   postedDate,
                                   onViewDetails
                               }: RecentTaskCardProps) {
    return (
        <div className="bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg rounded-xl p-6 border border-gray-200">
            <div className="space-y-2">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                            {title}
                        </h3>
                        <span className="inline-block px-3 py-1 mt-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                            {taskType}
                        </span>
                    </div>
                </div>

                <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                    {description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <div>
                            <p className="text-xs text-gray-500">Earnings</p>
                            <p className="text-sm font-medium text-gray-900">
                                {compensation.currency} {compensation.amount}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <div>
                            <p className="text-xs text-gray-500">Deadline</p>
                            <p className="text-sm font-medium text-gray-900">
                                {new Date(deadline).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500">
                            Posted {new Date(postedDate).toLocaleDateString()}
                        </span>
                    </div>
                    <button
                        onClick={onViewDetails}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                        View Details
                        <span className="ml-2">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentTaskCard;