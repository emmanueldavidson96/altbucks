'use client';
import { ArrowRight, Clock, DollarSign, Calendar } from 'lucide-react';
import useTaskStore from '@/zustand/store/useTaskStore';

interface TaskCardProps {
    task: {
        _id: string;
        title: string;
        taskType: string;
        description?: string;
        compensation: {
            amount: number;
            currency: string;
        };
        createdAt: string;
        status: string;
        deadline?: string;
        requirements?: string;
    }
}

const TaskCard = ({ task }: TaskCardProps) => {
    const setModalState = useTaskStore((state) => state.setModalState);

    const handleViewDetails = () => {
        setModalState({ isOpen: true, taskId: task._id });
    };

    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: task.compensation.currency || 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(task.compensation.amount);

    const postedDate = new Date(task.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });

    const formattedDate = task.deadline ?
        new Date(task.deadline).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) : 'No deadline';

    return (
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="p-5 space-y-4">
                {/* Header with Title and Posted Time */}
                <div className="space-y-2">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                            {task.title}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>Posted {postedDate}</span>
                        </div>
                    </div>
                    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full capitalize">
                        {task.taskType}
                    </span>
                </div>

                {/* Description */}
                {task.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {task.description}
                    </p>
                )}

                {/* Earnings and Deadline */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                            <DollarSign className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Earnings</p>
                            <p className="text-sm font-medium text-gray-900">{formattedAmount}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Deadline</p>
                            <p className="text-sm font-medium text-gray-900">{formattedDate}</p>
                        </div>
                    </div>
                </div>

                {/* View Details Button */}
                <button
                    onClick={handleViewDetails}
                    className="w-full px-4 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100
                             rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                    View Details
                    <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
                </button>
            </div>
        </div>
    );
};

export default TaskCard;