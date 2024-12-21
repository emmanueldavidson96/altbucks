'use client';

import { useEffect, useState } from 'react';
import { FileSearch } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import TaskCard from './FindTasksCard';

const FindTasksList = () => {
    const { fetchAllTasks, tasks, isLoading } = useTaskOperations();
    const [error, setError] = useState(false);
    const [hasAttemptedLoad, setHasAttemptedLoad] = useState(false);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                setError(false);
                await fetchAllTasks();
            } catch (err) {
                console.error('Failed to load tasks:', err);
                setError(true);
            } finally {
                setHasAttemptedLoad(true);
            }
        };

        if (!hasAttemptedLoad) {
            loadTasks();
        }

        // Cleanup function
        return () => {
            setHasAttemptedLoad(false);
        };
    }, [fetchAllTasks, hasAttemptedLoad]);

    // Handle error state
    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center">
                    <FileSearch className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Unable to Load Tasks
                    </h3>
                    <p className="text-gray-500 mb-4">
                        There was an error loading the tasks. Please try again.
                    </p>
                    <button
                        onClick={() => setHasAttemptedLoad(false)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    // Handle loading state
    if (isLoading || !hasAttemptedLoad) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 border animate-pulse"
                        >
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Handle no tasks state
    if (!tasks?.length) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center">
                    <FileSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No Tasks Found
                    </h3>
                    <p className="text-gray-500">
                        No tasks are available at the moment.
                    </p>
                </div>
            </div>
        );
    }

    // Render tasks
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task) => (
                    <TaskCard
                        key={task._id}
                        taskId={task._id}
                        title={task.title}
                        type={task.taskType}
                        description={task.description}
                        amount={task.compensation?.amount}
                        postedTime={new Date(task.postedDate).toLocaleDateString()}
                    />
                ))}
            </div>
        </div>
    );
};

export default FindTasksList;