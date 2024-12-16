import { useEffect, useState } from 'react';
import { FileSearch } from 'lucide-react';
import { taskService } from '@/services/api/tasks';
import TaskCard from './FindTasksCard';

const FindTasksList = ({ filters }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

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
    }, [filters]);

    // Loading Skeleton
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="bg-white rounded-xl border border-gray-200 p-5">
                            <div className="animate-pulse space-y-4">
                                <div className="flex justify-between">
                                    <div className="h-5 bg-gray-100 rounded w-2/3"></div>
                                    <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                                </div>
                                <div className="h-4 bg-gray-100 rounded w-1/3"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-100 rounded"></div>
                                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <div className="h-5 bg-gray-100 rounded w-1/4"></div>
                                    <div className="h-4 bg-gray-100 rounded w-1/3"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Empty State
    if (tasks.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center py-16">
                    <div className="bg-gray-50 p-4 rounded-full mb-4">
                        <FileSearch className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                        No Tasks Found
                    </h3>
                    <p className="text-gray-500 text-center">
                        No tasks found matching your criteria. Try adjusting your filters.
                    </p>
                </div>
            </div>
        );
    }

    // Tasks List
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task) => (
                    <TaskCard
                        key={task._id}
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