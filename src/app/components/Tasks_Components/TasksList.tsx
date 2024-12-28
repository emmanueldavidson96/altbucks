'use client';

import { useEffect, useState } from 'react';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';

export function TasksList() {
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const { tasks, isLoading, fetchAllTasks } = useTaskOperations();

    useEffect(() => {
        fetchAllTasks();
    }, []);

    const totalPages = Math.ceil((tasks?.length || 0) / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentTasks = tasks?.slice(startIndex, endIndex) || [];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-6 h-6 animate-spin text-violet-600" />
                <span className="ml-2">Loading tasks...</span>
            </div>
        );
    }

    if (!tasks?.length) {
        return (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                <p className="font-medium text-gray-600">No tasks available</p>
                <p className="text-sm text-gray-400">Tasks will appear here when created</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
                <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Task</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Due Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Payment</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {currentTasks.map((task) => (
                    <tr key={task._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{task.title}</td>
                        <td className="px-6 py-4">
                                <span className="px-2.5 py-1 text-xs font-medium bg-violet-50 text-violet-700 rounded-full">
                                    {task.taskType}
                                </span>
                        </td>
                        <td className="px-6 py-4">
                                <span className={`px-2.5 py-1 text-xs font-medium rounded-full
                                    ${task.status === 'completed' ? 'bg-green-50 text-green-700' :
                                    task.status === 'pending' ? 'bg-amber-50 text-amber-700' :
                                        'bg-blue-50 text-blue-700'}`}>
                                    {task.status}
                                </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                            {new Date(task.deadline).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {task.compensation.currency} {task.compensation.amount}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Page {page} of {totalPages}
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="p-2 rounded border border-gray-200 disabled:opacity-50"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="p-2 rounded border border-gray-200 disabled:opacity-50"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}