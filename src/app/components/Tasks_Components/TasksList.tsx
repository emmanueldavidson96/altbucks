'use client';

import { useEffect } from 'react';
import { Loader2, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { toast } from 'sonner';
import { useTaskOperations } from '@/hooks/useTaskOperations';

// Define the Task interface
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

export function TasksList() {
    const { tasks, isLoading, fetchAllTasks } = useTaskOperations();

    useEffect(() => {
        const loadTasks = async () => {
            try {
                await fetchAllTasks();
            } catch (error) {
                toast.error('Failed to load tasks');
                console.error('Error loading tasks:', error);
            }
        };
        loadTasks();
    }, [fetchAllTasks]);

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                    Task List
                </h2>
                <div className="flex items-center gap-4">
                    {/* Filter Button */}
                    <button className="px-4 py-2.5 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-200
                                     rounded-lg hover:bg-indigo-100 transition-colors flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        {/* Table Header */}
                        <thead>
                        <tr className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                            <th className="text-left px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">
                                <div className="flex items-center gap-2 hover:text-gray-900">
                                    Task
                                    <ArrowUpDown className="w-3 h-3" />
                                </div>
                            </th>
                            <th className="text-left px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Type</th>
                            <th className="text-left px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="text-left px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Due Date</th>
                            <th className="text-left px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Payment</th>
                        </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-200">
                        {isLoading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12">
                                    <div className="flex justify-center items-center text-gray-500 gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
                                        <span className="text-gray-600">Loading tasks...</span>
                                    </div>
                                </td>
                            </tr>
                        ) : !Array.isArray(tasks) || tasks.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center">
                                    <div className="text-gray-500 space-y-1">
                                        <p className="text-gray-600 font-medium">No tasks available</p>
                                        <p className="text-gray-400 text-sm">Tasks will appear here when available</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            tasks.map((task: Task) => (
                                <tr key={task._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                            <span className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                {task.title}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs
                                                         font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                                                {task.taskType}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center
                                                ${task.status.toLowerCase() === 'completed' ? 'bg-green-50 text-green-700 border border-green-200' :
                                                task.status.toLowerCase() === 'pending' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                                                    'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                                                {task.status}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                            <span className="text-sm text-gray-600">
                                                {new Date(task.deadline).toLocaleDateString()}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                            <span className="text-sm font-medium text-gray-900">
                                                {task.compensation.currency} {task.compensation.amount}
                                            </span>
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}