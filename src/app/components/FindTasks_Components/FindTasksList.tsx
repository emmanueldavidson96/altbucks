"use client";

import { useEffect } from 'react';
import { FileSearch } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import TaskCard from './FindTasksCard';

interface Task {
    _id: string;
    title: string;
    taskType: string;
    description: string;
    compensation: {
        amount: number;
    };
    postedDate: string;
}

const FindTasksList = (): JSX.Element => {
    const { handleFetchAllTasks, tasks, isLoading } = useTaskOperations();

    useEffect(() => {
    }, [handleFetchAllTasks]);

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto px-4">
                {/* Loading skeleton */}
            </div>
        );
    }

    if (!tasks || tasks.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex-1 flex flex-col items-center justify-center py-16">
                    <div className="bg-gray-50 p-4 rounded-full mb-4">
                        <FileSearch className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                        No Tasks Found
                    </h3>
                    <p className="text-gray-500 text-center">
                        No tasks found matching your criteria. Try adjusting your
                        filters.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task: Task) => (
                    <TaskCard
                        key={task._id}
                        taskId={task._id}
                        title={task.title}
                        type={task.taskType}
                        description={task.description}
                        amount={task.compensation.amount}
                        postedTime={new Date(task.postedDate).toLocaleDateString()}
                    />
                ))}
            </div>
        </div>
    );
};

export default FindTasksList;