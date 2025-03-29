"use client";

import React, { useState } from "react";
import TaskDetails from "./TaskDetails";

interface CardProps {
    _id: string;
    title: string;
    taskType: string;
    category: string;
    description: string;
    compensation: {
        currency: string;
        amount: number;
    };
    deadline: string;
    posted: string;
    company?: string;
    requirements?: string[];
    link1?: string;
    link2?: string;
    onTaskDeleted?: () => void;
}

const Card: React.FC<CardProps> = (task) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
    };

    const handleModalOpen = () => {
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleModalClose = () => {
        setModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const handleTaskDeleted = () => {
        handleModalClose();
        if (task.onTaskDeleted) {
            task.onTaskDeleted();
        }
    };

    return (
        <>
            <div className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col h-full">
                    <div className="pb-4 border-b border-gray-100">
                        <div className="flex justify-between items-center mb-1">
                            <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{task.title}</h2>
                            <p className="text-gray-500 text-xs whitespace-nowrap ml-2">Posted: {task.posted}</p>
                        </div>
                        <p className="text-gray-500 text-sm mb-1">{task.taskType}</p>
                        <p className="text-gray-500 text-sm">{task.category}</p>
                    </div>

                    <div className="flex-grow">
                        <p className="text-gray-600 text-sm line-clamp-2 my-4">
                            {task.description}
                        </p>

                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Earnings</p>
                                <p className="text-lg font-semibold text-gray-900">
                                    ${task.compensation?.amount?.toFixed(2) || '0.00'}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 text-sm mb-1">Deadline</p>
                                <p className="text-gray-900 text-sm">{formatDate(task.deadline)}</p>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={handleModalOpen}
                                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-sm font-medium"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <TaskDetails
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    task={task}
                    onTaskDeleted={handleTaskDeleted}
                />
            )}
        </>
    );
};

export default Card;