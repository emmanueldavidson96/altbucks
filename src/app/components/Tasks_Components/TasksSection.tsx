
'use client';

import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import { RecentTaskCard } from './RecentTaskCard';
import { TaskDetailsModal } from './TaskDetailsModal';

export function RecentTasks() {
    const { recentTasks, isLoading, fetchRecentTasks } = useTaskOperations();

    useEffect(() => {
        // Simple fetch on mount without hasLoaded tracking
        fetchRecentTasks();
    }, []); // Empty dependency array for single execution

    if (isLoading && !recentTasks?.length) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <Loader2 className="w-5 h-5 animate-spin text-violet-600" />
                <span className="ml-2">Loading recent tasks...</span>
            </div>
        );
    }

    if (!recentTasks?.length) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[200px] bg-white rounded-xl border border-gray-100 p-6">
                <p className="text-gray-900 font-medium">No recent tasks</p>
                <p className="text-gray-500 text-sm">New tasks will appear here</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentTasks.map((task) => (
                    <RecentTaskCard key={task._id} task={task} />
                ))}
            </div>
            <TaskDetailsModal />
        </div>
    );
}
