'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
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

    return (
        <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Task List</h2>

            <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <button className="px-4 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <span>Filter</span>
                </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 text-black">
                <table className="w-full">
                    <thead>
                    <tr className="border-b border-gray-200">
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Task Name</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Task Type</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Deadline</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Payout</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={5} className="text-center py-4">Loading tasks...</td>
                        </tr>
                    ) : filteredTasks.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="text-center py-4 text-gray-500">No tasks found.</td>
                        </tr>
                    ) : (
                        filteredTasks.map((task) => (
                            <tr key={task._id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm">{task.title}</td>
                                <td className="px-6 py-4 text-sm">{task.taskType}</td>
                                <td className="px-6 py-4 text-sm">{task.status}</td>
                                <td className="px-6 py-4 text-sm">{new Date(task.deadline).toLocaleDateString()}</td>
                                <td className="px-6 py-4 text-sm">
                                    {task.compensation.currency} {task.compensation.amount}
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}