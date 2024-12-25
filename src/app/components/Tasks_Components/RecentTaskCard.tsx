'use client';

import { memo, useCallback } from 'react';
import { Calendar, DollarSign } from 'lucide-react';
import { TaskDetailsModal } from './TaskDetailsModal';
import { useState } from 'react';
import { useTaskOperations } from '@/hooks/useTaskOperations';

interface Task {
    _id: string;
    title: string;
    taskType: string;
    status: string;
    deadline: string;
    compensation: {
        currency: string;
        amount: number;
    };
    description?: string;
    requirements?: {
        instructions?: string[];
        criteria?: string[];
    };
    location?: string;
}

interface RecentTaskCardProps {
    task: Task;
}

export const RecentTaskCard = memo(function RecentTaskCard({ task }: RecentTaskCardProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const { handleViewDetails } = useTaskOperations();


    const handleOpenModal = useCallback(() => {
        setModalOpen(true);
    }, []);


    const handleCloseModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: task.compensation?.currency || 'USD'
    }).format(task.compensation?.amount || 0);

    const formattedDate = task.deadline ?
        new Date(task.deadline).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) : 'No deadline';

    return (
        <>
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="p-5 space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                            {task.title}
                        </h3>
                        <span className="inline-block mt-2 px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full capitalize">
                           {task.taskType}
                       </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-emerald-50 rounded-lg">
                                <DollarSign className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Payment</p>
                                <p className="text-sm font-medium text-gray-900">{formattedAmount}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Calendar className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Deadline</p>
                                <p className="text-sm font-medium text-gray-900">{formattedDate}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleOpenModal}
                        className="w-full px-4 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                    >
                        View Details
                        <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
                    </button>
                </div>
            </div>

            {modalOpen && (
                <div className="modal-container">
                    <TaskDetailsModal
                        isOpen={modalOpen}
                        onClose={handleCloseModal}
                        taskId={task._id}
                    />
                </div>
            )}
        </>
    );
});

RecentTaskCard.displayName = 'RecentTaskCard';