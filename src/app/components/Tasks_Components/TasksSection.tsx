'use client';

import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import { RecentTaskCard } from './RecentTaskCard';

// Define Task interface
interface Task {
    _id: string;
    title: string;
    taskType: string;
    status: string;
    deadline: string;
    compensation: {
        currency: string;
        amount: number;
    };
}

export function RecentTasks() {
    // Get task operations and state from custom hook
    const { recentTasks, isLoading, fetchRecentTasks } = useTaskOperations();

    // Fetch recent tasks on component mount
    useEffect(() => {
        const loadRecentTasks = async () => {
            try {
                await fetchRecentTasks();
            } catch (error) {
                console.error('Failed to fetch recent tasks:', error);
                // You might want to add toast notification here
            }
        };

        loadRecentTasks();
    }, [fetchRecentTasks]);

    // Show loading state
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <div className="flex items-center space-x-2 text-gray-500">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Loading recent tasks...</span>
                </div>
            </div>
        );
    }

    // Show empty state
    if (!Array.isArray(recentTasks) || recentTasks.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <div className="text-center text-gray-500">
                    <p className="font-medium">No recent tasks</p>
                    <p className="text-sm">New tasks will appear here</p>
                </div>
            </div>
        );
    }

    // Render task grid
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTasks.map((task: Task) => (
                <RecentTaskCard
                    key={task._id}
                    task={task}
                />
            ))}
        </div>
    );
}