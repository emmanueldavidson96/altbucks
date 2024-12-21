'use client';

import { useState } from 'react';
import { Calendar, DollarSign } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import { TaskDetailsModal } from './TaskDetailsModal';

export function RecentTaskCard({ task }) {
    const [showModal, setShowModal] = useState(false);
    const { handleViewDetails, selectedTask } = useTaskOperations();

    const handleOpenModal = async () => {
        try {
            await handleViewDetails(task._id);
            setShowModal(true);
        } catch (error) {
            console.error('Error opening modal:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="p-5 space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {task.title}
                        </h3>
                        <span className="inline-block mt-2 px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                            {task.type}
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
                                    USD {task.earnings}
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
                                    {task.deadline}
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

            {showModal && selectedTask && (
                <TaskDetailsModal
                    isOpen={showModal}
                    onClose={handleCloseModal}
                    taskId={task._id}
                />
            )}
        </>
    );
}