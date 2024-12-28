'use client';
import { ArrowRight, Clock, DollarSign, MapPin } from 'lucide-react';
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
        location: string;
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

    return (
        <div className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-violet-600 line-clamp-2 flex-grow">
                    {task.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-400 whitespace-nowrap flex-shrink-0">
                    <Clock className="w-4 h-4" />
                    <time className="text-xs font-medium">
                        {new Date(task.createdAt).toLocaleDateString()}
                    </time>
                </div>
            </div>

            {/* Badges */}
            <div className="mb-4 flex items-center flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-violet-50 text-violet-600 text-xs rounded-full font-medium ring-1 ring-violet-100">
                    {task.taskType}
                </span>
                <span className={`px-3 py-1.5 text-xs rounded-full font-medium ${
                    task.status === 'completed'
                        ? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100'
                        : task.status === 'pending'
                            ? 'bg-amber-50 text-amber-600 ring-1 ring-amber-100'
                            : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100'
                }`}>
                    {task.status}
                </span>
                {task.deadline && (
                    <span className="px-3 py-1.5 bg-rose-50 text-rose-600 text-xs rounded-full font-medium ring-1 ring-rose-100">
                        Due {new Date(task.deadline).toLocaleDateString()}
                    </span>
                )}
            </div>

            {/* Description */}
            {task.description && (
                <p className="text-sm text-gray-600 line-clamp-2 mb-6 group-hover:text-gray-700 flex-grow">
                    {task.description}
                </p>
            )}

            {/* Footer */}
            <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-y-2">
                    <div className="flex items-center gap-1">
                        <DollarSign className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-gray-900">
                            {task.compensation.amount}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                            {task.compensation.currency}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{task.location}</span>
                    </div>
                </div>

                {/* View Details Button */}
                <button
                    onClick={handleViewDetails}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-violet-50 text-violet-600 rounded-lg font-medium
                             hover:bg-violet-100 active:bg-violet-200 transition-all duration-200 group-hover:gap-3"
                >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Hover Effect Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-violet-500/0
                          group-hover:from-violet-500/[0.01] group-hover:via-violet-500/[0.02] group-hover:to-violet-500/[0.01]
                          transition-all duration-500 pointer-events-none"
            />
        </div>
    );
};

export default TaskCard;