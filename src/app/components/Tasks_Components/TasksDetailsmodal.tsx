'use client';

import { useEffect } from 'react';
import { X, Clock } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import {MoreActionsMenu}  from './MoreActionsMenu';
import { TaskDetailsProps } from './types';

export function TaskDetailsModal({ isOpen, onClose, taskId, onDeleteTask }: TaskDetailsProps) {
    const {
        selectedTask,
        isLoading,
        handleViewDetails,
        handleTaskComplete,
        handleTaskPending,
        clearSelectedTask
    } = useTaskOperations();

    useEffect(() => {
        if (isOpen && taskId) {
            handleViewDetails(taskId);
        }
    }, [isOpen, taskId, handleViewDetails]);

    const handleCloseModal = () => {
        clearSelectedTask();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200" onClick={handleCloseModal} />

            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                {isLoading ? (
                    <div className="p-6 text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto" />
                    </div>
                ) : selectedTask ? (
                    <>
                        <div className="bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 p-6">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold text-black">{selectedTask.title}</h2>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <p className="text-sm text-black">{selectedTask.taskType}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MoreActionsMenu
                                        taskId={taskId}
                                        onDeleteTask={onDeleteTask}
                                        onMarkComplete={() => handleTaskComplete(taskId)}
                                        onMarkPending={() => handleTaskPending(taskId)}
                                    />
                                    <button onClick={handleCloseModal} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                                        <X className="w-5 h-5 text-gray-500" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-black text-sm mb-1">Location</p>
                                    <p className="font-medium text-black">{selectedTask.location}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-black text-sm mb-1">Payment</p>
                                    <p className="font-medium text-black">
                                        ${selectedTask.compensation.amount} {selectedTask.compensation.currency}
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-black text-sm mb-1">Deadline</p>
                                    <p className="font-medium text-black">
                                        {new Date(selectedTask.deadline).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium mb-2 text-black">Description</h3>
                                <p className="text-black">{selectedTask.description}</p>
                            </div>

                            {selectedTask.requirements && (
                                <div>
                                    <h3 className="font-medium mb-2 text-black">Requirements</h3>
                                    <p className="text-black whitespace-pre-line">{selectedTask.requirements}</p>
                                </div>
                            )}

                            <div>
                                <h3 className="font-medium mb-2 text-black">Maximum Respondents</h3>
                                <p className="text-black">{selectedTask.maxRespondents}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="p-6 text-center text-gray-500">
                        No task data available
                    </div>
                )}
            </div>
        </div>
    );
}