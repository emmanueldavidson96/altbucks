'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface TaskDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: {
        title: string;
        type: string;
        description: string;
        amount: number;
        deadline: string;
    };
}

const TaskDetailsModal = ({ isOpen, onClose, task }: TaskDetailsModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold text-black">{task.title}</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <p className="text-gray-600">Task Type:</p>
                            <p className="text-black">{task.type}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Earnings:</p>
                            <p className="text-black">${task.amount}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Deadline:</p>
                            <p className="text-black">{task.deadline}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-red-950">Description</h3>
                        <p className="text-gray-700">{task.description}</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-red-950">Task Requirements</h3>
                        <div className="space-y-2">
                            <p className="text-gray-700">Instructions:</p>
                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                <li>Watch the video using the provided link.</li>
                                <li>Fill out the feedback form with detailed responses to the questions asked.</li>
                                <li>Ensure you complete the task before the deadline to receive your earnings.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-red-950">Resources</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Video link:</span>
                                <a href="#" className="text-blue-600 hover:underline">This is a link.com</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Feedback Form link:</span>
                                <a href="#" className="text-blue-600 hover:underline">This is a link.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t p-4">
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Start Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailsModal;