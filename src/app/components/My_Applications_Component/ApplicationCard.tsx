import { useState } from 'react';
import type { Application } from './types';
import { ApplicationDetailsModal } from './ApplicationDetailsModal';

export function ApplicationCard({ application }: { application: Application }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white rounded-2xl border border-gray-100 p-6
                          hover:shadow-lg hover:border-blue-100 hover:-translate-y-1
                          transition-all duration-500 ease-in-out">
                {/* Header with Brand and Status */}
                <div className="flex justify-between items-start group">
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {application.brand}
                        </h3>
                        <p className="text-sm text-gray-500 tracking-wide">
                            {application.taskType}
                        </p>
                    </div>
                    <span className={`animate-fade-in px-3 py-1.5 rounded-full text-xs font-medium 
                                   ${application.status === 'Completed'
                        ? 'bg-green-50 text-green-600 ring-1 ring-green-100'
                        : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100'
                    }`}>
                        {application.status}
                    </span>
                </div>

                {/* Amount and Dates */}
                <div className="flex justify-between items-center mt-6">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 mb-1">Earning</span>
                        <span className="text-lg font-bold text-gray-800">
                            ${application.earnedAmount}
                        </span>
                    </div>
                    <div className="text-sm flex flex-col items-end">
                        <span className="text-gray-400 text-xs mb-1">Timeline</span>
                        <div className="space-x-2">
                            <span className="text-gray-600">{application.startDate}</span>
                            <span className="text-red-500 font-medium">{application.dueDate}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-4 leading-relaxed line-clamp-2
                             hover:line-clamp-none transition-all duration-300">
                    {application.description}
                </p>

                {/* View Task Button */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-1.5 text-sm font-medium text-blue-600
                                 border border-blue-200 rounded-lg
                                 hover:border-blue-400 hover:bg-blue-50
                                 focus:outline-none focus:ring-2 focus:ring-blue-100
                                 transition-all duration-300 ease-in-out
                                 transform hover:scale-105"
                    >
                        View Task
                    </button>
                </div>
            </div>

            <ApplicationDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                application={application}
            />
        </>
    );
}