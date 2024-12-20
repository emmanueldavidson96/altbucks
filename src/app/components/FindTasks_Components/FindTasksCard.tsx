import { useState } from 'react';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import {StartTaskModal} from './StartTaskModal';
import {TaskCardProps}  from './types'



const TaskCard = ({ taskId, title, type, description, amount, postedTime }: TaskCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <>
            <div className="group bg-white rounded-xl p-5 border border-gray-200
                          hover:border-blue-100 hover:shadow-md hover:bg-blue-50/5
                          transition-all duration-300">
                {/* Header with Title and Time */}
                <div className="flex justify-between gap-4 mb-4">
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600">{title}</h3>
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <time className="text-xs">{postedTime}</time>
                    </div>
                </div>

                {/* Type Badge */}
                <div className="mb-3">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs
                                   rounded-full font-medium ring-1 ring-blue-100">
                        {type}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-4 group-hover:text-gray-700">
                    {description}
                </p>

                {/* Footer with Price and Action */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <span className="text-lg font-semibold">{amount}</span>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-1.5 text-sm font-medium text-blue-600
                                 hover:text-blue-700 group-hover:gap-2.5 transition-all"
                    >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <StartTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                taskId={taskId}  // Pass taskId instead of task object
            />
        </>
    );
};

export default TaskCard;