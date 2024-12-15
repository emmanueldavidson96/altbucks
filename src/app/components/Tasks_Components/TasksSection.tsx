'use client';

import { useEffect, useState } from 'react';
import { taskService } from '@/services/api/tasks';
import TaskDetailsModal from '../FindTasks_Components/TaskDetailsModal';

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
                setTasks(response.data.slice(0, 6));
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
        return <div>Loading recent tasks...</div>;
    }

    if (tasks.length === 0) {
        return null;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tasks.map((task) => (
                    <div
                        key={task._id}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                        <div className="mb-2">
                            <h3 className="text-base font-semibold text-gray-900">{task.title}</h3>
                            <p className="text-sm text-gray-500">{task.taskType}</p>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {task.description}
                        </p>

                        <div className="mt-auto">
                            <div className="flex items-center justify-between text-sm">
                                <div>
                                    <span className="text-gray-500">Earnings</span>
                                    <span className="text-gray-900 ml-2">
                                        {task.compensation.currency} {task.compensation.amount}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Deadline</span>
                                    <span className="text-gray-900 ml-2">
                                        {new Date(task.deadline).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <span className="text-gray-400 text-xs">
                                    Posted {new Date(task.postedDate).toLocaleDateString()}
                                </span>
                                <button
                                    onClick={() => handleOpenModal(task)}
                                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                                >
                                    View Details →
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