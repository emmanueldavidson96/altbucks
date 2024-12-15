'use client';

import { useState } from 'react';
import TaskDetailsModal from './TaskDetailsModal';

interface TaskCardProps {
    title: string;
    type: string;
    description: string;
    amount: number;
    postedTime: string;
}

const TaskCard = ({ title, type, description, amount, postedTime }: TaskCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getTypeStyle = (taskType: string) => {
        const styles = {
            'writing': 'text-blue-600',
            'design': 'text-pink-600',
            'development': 'text-green-600',
            'review': 'text-purple-600',
            'default': 'text-gray-600'
        };
        return styles[taskType.toLowerCase()] || styles.default;
    };

    return (
        <>
            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 transition-all duration-200">
                <div className="p-4">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[15px] font-medium text-gray-900 leading-tight">
                            {title}
                        </h3>
                        <span className="text-xs text-gray-500">
                            {postedTime}
                        </span>
                    </div>

                    {/* Type */}
                    <div className="mb-2">
                        <span className={`text-xs ${getTypeStyle(type)}`}>
                            {type}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2 leading-snug mb-3">
                        {description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-semibold">${amount}</span>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                        >
                            View Details
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <TaskDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                task={{
                    title,
                    type,
                    description,
                    amount,
                    deadline: postedTime
                }}
            />
        </>
    );
};

export default TaskCard;