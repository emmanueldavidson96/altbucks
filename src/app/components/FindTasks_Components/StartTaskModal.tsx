import { useEffect, useState } from 'react';
import { FileSearch } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import FindTasksFilter from './FindTasksFilter';
import TaskCard from './FindTasksCard';

const FindTasksList = () => {
    const { fetchTasks, tasks, isLoading } = useTaskOperations();
    const [filters, setFilters] = useState({
        datePosted: '',
        skills: [],
        applications: '',
        taskPay: '',
    });

    useEffect(() => {
        fetchTasks(filters);
    }, [fetchTasks, filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto px-4 flex gap-6">
                <div className="w-72 max-h-screen overflow-y-auto rounded-xl border border-gray-200 shadow-sm animate-pulse">
                    <div className="space-y-4 p-4">
                        <div className="h-5 bg-gray-100 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-100 rounded"></div>
                        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((n) => (
                        <div
                            key={n}
                            className="bg-white rounded-xl border border-gray-200 p-5 animate-pulse"
                        >
                            {/* Skeleton loading elements */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 flex gap-6">
            <div className="w-72 max-h-screen overflow-y-auto rounded-xl border border-gray-200 shadow-sm">
                <FindTasksFilter onFilterChange={handleFilterChange} />
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks && tasks.map((task) => (
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