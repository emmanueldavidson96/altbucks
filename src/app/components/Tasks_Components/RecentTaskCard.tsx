'use client';

import { RecentTaskCardProps } from './types';

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
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{taskType}</p>
            <p className="text-sm text-gray-600 mt-3 line-clamp-2">{description}</p>

            <div className="mt-4 flex items-center justify-between text-sm">
                <div>
                    <span className="text-gray-500">Earnings</span>
                    <span className="ml-2 text-gray-900">
                        {compensation.currency} {compensation.amount}
                    </span>
                </div>
                <div>
                    <span className="text-gray-500">Deadline</span>
                    <span className="ml-2 text-gray-900">
                        {new Date(deadline).toLocaleDateString()}
                    </span>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                    Posted {new Date(postedDate).toLocaleDateString()}
                </span>
                <button
                    onClick={onViewDetails}
                    className="text-blue-500 hover:text-blue-600 text-sm"
                >
                    View Details →
                </button>
            </div>
        </div>
    );
}