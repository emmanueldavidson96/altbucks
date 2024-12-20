'use client';

import { useState } from 'react';
import { Calendar, DollarSign, Clock } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import { TaskDetailsModal } from './TasksDetailsmodal';
import { RecentTaskCardProps } from './types';

export const RecentTaskCard = ({ task }: RecentTaskCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { handleViewDetails, handleTaskComplete, handleTaskPending, handleDeleteTask } = useTaskOperations();

    const handleOpenModal = async () => {
        const success = await handleViewDetails(task._id);
        if (success) {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                            {task.title}
                        </h3>
                        <span className="inline-block px-3 py-1 mt-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                            {task.type}
                        </span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2">
                        {task.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-500">Earnings</p>
                                <p className="text-sm font-medium text-gray-900">
                                    USD {task.earnings}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-500">Deadline</p>
                                <p className="text-sm font-medium text-gray-900">
                                    {task.deadline}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-500">Status: {task.status}</span>
                        </div>
                        <button
                            onClick={handleOpenModal}
                            className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                        >
                            View Details →
                        </button>
                    </div>
                </div>
            </div>

            <TaskDetailsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                taskId={task._id}
                onDeleteTask={handleDeleteTask}
                onMarkComplete={handleTaskComplete}
                onMarkPending={handleTaskPending}
            />
        </>
    );
};