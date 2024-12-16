'use client';

import { useEffect, useState } from 'react';
import { taskService } from '@/services/api/tasks';
import TaskDetailsModal from '../FindTasks_Components/TaskDetailsModal';
import { Calendar, DollarSign, Clock, Loader2 } from 'lucide-react';

interface Task {
    _id: string;
    title: string;
    taskType: string;
    description: string;
    compensation: {
        amount: number;
        currency: string;
    };
    deadline: string;
    postedDate: string;
}

export function RecentTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchRecentTasks = async () => {
            try {
                const response = await taskService.getRecentTasks();
                setTasks(response.data.slice());
            } catch (error) {
                console.error('Error fetching recent tasks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecentTasks();
    }, []);

    const handleOpenModal = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <div className="flex items-center space-x-2 text-gray-500">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Loading recent tasks...</span>
                </div>
            </div>
        );
    }

    if (tasks.length === 0) {
        return null;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {tasks.map((task) => (
                    <div
                        key={task._id}
                        className="bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg rounded-xl p-6 border border-gray-200"
                    >
                        <div className="space-y-2">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                        {task.title}
                                    </h3>
                                    <span className="inline-block px-3 py-1 mt-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                                        {task.taskType}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                                {task.description}
                            </p>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <DollarSign className="w-4 h-4 text-gray-400" />
                                    <div>
                                        <p className="text-xs text-gray-500">Earnings</p>
                                        <p className="text-sm font-medium text-gray-900">
                                            {task.compensation.currency} {task.compensation.amount}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    <div>
                                        <p className="text-xs text-gray-500">Deadline</p>
                                        <p className="text-sm font-medium text-gray-900">
                                            {new Date(task.deadline).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                    <span className="text-xs text-gray-500">
                                        Posted {new Date(task.postedDate).toLocaleDateString()}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleOpenModal(task)}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                >
                                    View Details
                                    <span className="ml-2">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedTask && (
                <TaskDetailsModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    task={{
                        title: selectedTask.title,
                        type: selectedTask.taskType,
                        description: selectedTask.description,
                        amount: selectedTask.compensation.amount,
                        deadline: selectedTask.deadline
                    }}
                />
            )}
        </>
    );
}