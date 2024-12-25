import { useState, useEffect } from 'react';
import { FileSearch } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import TaskCard from './FindTasksCard';

const FindTasksList = ({ filters }) => {
    const [pageData, setPageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { tasks, fetchAllTasks } = useTaskOperations();
    const PER_PAGE = 3;

    useEffect(() => {
        let mounted = true;

        const loadInitialData = async () => {
            try {
                setLoading(true);
                await fetchAllTasks();

                if (!mounted) return;

                if (tasks?.length) {
                    setPageData(tasks.slice(0, PER_PAGE));
                }
            } catch (error) {
                console.error('Failed to load tasks:', error);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        loadInitialData();
        return () => { mounted = false; };
    }, [filters, fetchAllTasks]);

    if (loading) {
        return <div className="w-full h-32 bg-gray-100 animate-pulse rounded"/>;
    }

    if (!pageData.length) {
        return (
            <div className="text-center py-8">
                <FileSearch className="w-8 h-8 mx-auto text-gray-400"/>
                <p>No tasks found</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="grid gap-4">
                {pageData.map(task => (
                    <TaskCard
                        key={task._id}
                        taskId={task._id}
                        title={task.title}
                        type={task.taskType}
                        description={task.description}
                        amount={task.compensation.amount}
                        postedTime={new Date(task.createdAt).toLocaleDateString()}
                    />
                ))}
            </div>
        </div>
    );
};

export default FindTasksList;