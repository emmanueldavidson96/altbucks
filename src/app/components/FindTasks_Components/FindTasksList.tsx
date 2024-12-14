'use client';

import { useEffect, useState } from 'react';
import TaskCard from './FindTasksCard';
import { taskService } from '@/services/api/tasks';

const FindTasksList = ({ filters }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await taskService.getAllTasks();
                setTasks(data);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [filters]);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {[1, 2, 3].map((n) => (
                    <div key={n} className="bg-white border border-gray-100 rounded-lg p-4">
                        <div className="animate-pulse space-y-3">
                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-100 rounded w-1/4"></div>
                            <div className="space-y-1">
                                <div className="h-3 bg-gray-100 rounded"></div>
                                <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                    <TaskCard
                        key={task._id}
                        title={task.title}
                        type={task.type}
                        description={task.description}
                        amount={task.amount}
                        postedTime={new Date(task.createdAt).toLocaleDateString()}
                    />
                ))}
            </div>
        </div>
    );
};

export default FindTasksList;