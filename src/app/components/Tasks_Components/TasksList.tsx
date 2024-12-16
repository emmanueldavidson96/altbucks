'use client';

import { useEffect, useState } from 'react';
import { Search, Loader2, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { taskService } from '@/services/api/tasks';

interface Task {
    _id: string;
    title: string;
    taskType: string;
    status: string;
    deadline: string;
    compensation: {
        amount: number;
        currency: string;
    };
}

export function TasksList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await taskService.getAllTasks();
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusBadgeClass = (status: string) => {
        const baseClass = "px-3 py-1 rounded-full text-xs font-medium inline-flex items-center";
        switch (status.toLowerCase()) {
            case 'open':
                return `${baseClass} bg-emerald-50 text-emerald-700 border border-emerald-200`;
            case 'in progress':
                return `${baseClass} bg-blue-50 text-blue-700 border border-blue-200`;
            case 'pending':
                return `${baseClass} bg-amber-50 text-amber-700 border border-amber-200`;
            case 'completed':
                return `${baseClass} bg-purple-50 text-purple-700 border border-purple-200`;
            default:
                return `${baseClass} bg-gray-100 text-gray-700 border border-gray-200`;
        }
    };

    const getTaskTypeClass = (type: string) => {
        return "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200";
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                    Task List
                </h2>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-64 pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all hover:border-gray-300"
                        />
                    </div>
                    <button className="px-4 py-2.5 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
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
                        <tbody className="divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12">
                                    <div className="flex justify-center items-center text-gray-500 gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
                                        <span className="text-gray-600">Loading tasks...</span>
                                    </div>
                                </td>
                            </tr>
                        ) : filteredTasks.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center">
                                    <div className="text-gray-500 space-y-1">
                                        <Search className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                                        <p className="text-gray-600 font-medium">No tasks found</p>
                                        <p className="text-gray-400 text-sm">Try adjusting your search terms</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            filteredTasks.map((task) => (
                                <tr key={task._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                            <span className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                {task.title}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                            <span className={getTaskTypeClass(task.taskType)}>
                                                {task.taskType}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                            <span className={getStatusBadgeClass(task.status)}>
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