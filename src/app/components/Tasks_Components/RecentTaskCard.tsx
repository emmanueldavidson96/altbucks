'use client';

import { useState } from 'react';
import { Calendar, DollarSign } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import { TaskDetailsModal } from './TaskDetailsModal';
import { toast } from 'sonner';

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
}

interface RecentTaskCardProps {
    task: Task;
}

export function RecentTaskCard({ task }: RecentTaskCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { handleViewDetails } = useTaskOperations();

    const handleOpenModal = async () => {
        try {
            await handleViewDetails(task._id);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error opening modal:', error);
            toast.error('Failed to load task details');
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Format amount
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: task.compensation?.currency || 'USD'
    }).format(task.compensation?.amount || 0);

    // Format date
    const formattedDate = task.deadline ?
        new Date(task.deadline).toLocaleDateString() :
        'No deadline';

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
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <DollarSign className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Earnings</p>
                                <p className="text-sm font-medium text-gray-900">
                                    {formattedAmount}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Calendar className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Deadline</p>
                                <p className="text-sm font-medium text-gray-900">
                                    {formattedDate}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleOpenModal}
                        className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50
                                hover:bg-blue-100 rounded-lg transition-colors"
                    >
                        View Details →
                    </button>
                </div>
            </div>

            <TaskDetailsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                taskId={task._id}
            />
        </>
    );
}