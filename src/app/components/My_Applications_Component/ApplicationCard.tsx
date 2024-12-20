import { useState, useEffect } from 'react';
import type { Application } from './types';
import { applicationService } from '@/services/api/applications';

export function ApplicationCard() {
    const [completedTasks, setCompletedTasks] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCompletedTasks = async () => {
        try {
            const response = await applicationService.getCompletedApplications();
            console.log('Response:', response);
            setCompletedTasks(response.data);
        } catch (error) {
            console.error('Error fetching completed tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkComplete = async (taskId: string) => {
        try {
            await applicationService.markTaskAsComplete(taskId);
            await fetchCompletedTasks(); // Refresh the list after marking complete
        } catch (error) {
            console.error('Error marking task as complete:', error);
        }
    };

    useEffect(() => {
        fetchCompletedTasks();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-48">
                <div className="text-gray-500">Loading tasks...</div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {completedTasks.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                    No completed tasks found
                </div>
            ) : (
                <div className="grid gap-6">
                    {completedTasks.map(application => (
                        <div key={application._id} className="bg-white rounded-2xl border border-gray-100 p-6
                                  hover:shadow-lg hover:border-blue-100 hover:-translate-y-1
                                  transition-all duration-500 ease-in-out">
                            <div className="flex justify-between items-start group">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                        {application.brand}
                                    </h3>
                                    <p className="text-sm text-gray-500 tracking-wide">
                                        {application.taskType}
                                    </p>
                                </div>
                                <span className="animate-fade-in px-3 py-1.5 rounded-full text-xs font-medium
                                            bg-green-50 text-green-600 ring-1 ring-green-100">
                                    {application.status}
                                </span>
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 mb-1">Earning</span>
                                    <span className="text-lg font-bold text-gray-800">
                                        ${application.earnings}
                                    </span>
                                </div>
                                <div className="text-sm flex flex-col items-end">
                                    <span className="text-gray-400 text-xs mb-1">Timeline</span>
                                    <div className="space-x-2">
                                        <span className="text-gray-600">
                                            {new Date(application.appliedOn).toLocaleDateString()}
                                        </span>
                                        <span className="text-red-500 font-medium">
                                            {new Date(application.deadline).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mt-4 leading-relaxed line-clamp-2
                                        hover:line-clamp-none transition-all duration-300">
                                {application.description}
                            </p>

                            {application.status !== 'Completed' && (
                                <button
                                    onClick={() => handleMarkComplete(application._id)}
                                    className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg
                                             hover:bg-green-600 transition-colors"
                                >
                                    Mark as Complete
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}