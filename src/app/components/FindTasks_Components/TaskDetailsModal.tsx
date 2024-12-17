import { X, Clock } from 'lucide-react';
import { useEffect, useState } from "react";
import { taskService } from '@/services/api/tasks';

interface TaskDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    taskId: string;
}


interface Task {
    title: string;
    taskType: string;
    description: string;
    requirements: string;
    location: string;
    compensation: {
        amount: number;
        currency: string;
    };
    deadline: string;
    maxRespondents: number;
}

export function TaskDetailsModal({ isOpen, onClose, taskId }: TaskDetailsModalProps) {
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTaskDetails = async () => {
            if (!taskId || !isOpen) return;

            try {
                setLoading(true);
                const response = await taskService.getTaskById(taskId);
                setTask(response.data);
            } catch (error) {
                console.error('Error fetching task:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTaskDetails();
    }, [taskId, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose} />

            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                {loading ? (
                    <div className="p-6 text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto" />
                    </div>
                ) : task ? (
                    <>
                        <div className="bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 p-6">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold text-black ">{task.title}</h2>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <p className="text-sm text-black">{task.taskType}</p>
                                    </div>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full">
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Task Info */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-black text-sm mb-1">Location</p>
                                    <p className="font-medium text-black">{task.location}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-black text-sm mb-1">Payment</p>
                                    <p className="font-medium text-black">
                                        ${task.compensation.amount} {task.compensation.currency}
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-black text-sm mb-1">Deadline</p>
                                    <p className="font-medium text-red-500 text-black">
                                        {new Date(task.deadline).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="font-medium mb-2 text-black">Description</h3>
                                <p className="text-black">{task.description}</p>
                            </div>

                            {/* Requirements */}
                            <div>
                                <h3 className="font-medium mb-2 text-black">Requirements</h3>
                                <p className="text-black whitespace-pre-line">{task.requirements}</p>
                            </div>

                            {/* Max Respondents */}
                            <div>
                                <h3 className="font-medium mb-2 text-black">Maximum Respondents</h3>
                                <p className="text-black">{task.maxRespondents}</p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-gray-50 border-t">
                            <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg
                                           hover:bg-blue-700 font-medium transition-colors">
                                Start Task
                            </button>
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

export default TaskDetailsModal;