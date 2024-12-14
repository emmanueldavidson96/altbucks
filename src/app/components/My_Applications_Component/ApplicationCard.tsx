import { useState } from 'react';
import type { Application } from './types';
import { ApplicationDetailsModal } from './ApplicationDetailsModal';

export function ApplicationCard({ application }: { application: Application }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-sm transition-shadow">
                {/* Header with Brand and Status */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-medium text-gray-900">{application.brand}</h3>
                        <p className="text-sm text-gray-500 mt-0.5">{application.taskType}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                        application.status === 'Completed'
                            ? 'bg-green-50 text-green-600'
                            : 'bg-blue-50 text-blue-600'
                    }`}>
            {application.status}
          </span>
                </div>

                {/* Amount and Dates */}
                <div className="flex justify-between mt-4 mb-4">
                    <span className="text-sm text-gray-500">${application.earnedAmount}</span>
                    <div className="text-sm">
                        <span className="text-gray-500">{application.startDate}</span>
                        <span className="text-red-500 ml-2">{application.dueDate}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {application.description}
                </p>

                {/* View Task Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-500 text-sm border border-gray-200 rounded-lg px-8 py-2 w-30% hover:bg-gray-50"
                >
                    View Task
                </button>
            </div>

            <ApplicationDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                application={application}
            />
        </>
    );
}