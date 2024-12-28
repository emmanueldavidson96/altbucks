'use client';

import { useEffect } from 'react';
import { FileSearch, Loader2 } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import TaskCard from './FindTasksCard';

export function FindTasksList() {
    const { tasks, isLoading, fetchAllTasks } = useTaskOperations();

    useEffect(() => {
        fetchAllTasks();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <Loader2 className="w-6 h-6 animate-spin text-violet-600" />
                <span className="ml-2">Loading tasks...</span>
            </div>
        );
    }

    if (!tasks || tasks.length === 0) {
        return (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                <FileSearch className="w-12 h-12 mx-auto text-gray-400 mb-3"/>
                <p className="font-medium text-gray-600">No tasks found</p>
                <p className="text-gray-400 text-sm">Tasks will appear here when created</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map(task => (
                    task && task._id ? (
                        <TaskCard
                            key={task._id}
                            task={task}
                        />
                    ) : null
                ))}
            </div>
        </div>
    );
}