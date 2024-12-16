import { useState } from 'react';
import { X, Clock, DollarSign, Calendar, FileText, CheckSquare, Link as LinkIcon } from 'lucide-react';

interface TaskDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: {
        title: string;
        type: string;
        description: string;
        amount: number;
        deadline: string;
    };
}

const TaskDetailsModal = ({ isOpen, onClose, task }: TaskDetailsModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Animated Backdrop */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl
                          overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300">
                {/* Header with Gradient */}
                <div className="relative bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 px-6 py-5">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900 pr-8">{task.title}</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-black/5 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="max-h-[calc(90vh-200px)] overflow-y-auto">
                    <div className="px-6 py-4">
                        {/* Key Info Cards */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100/80 transition-colors">
                                <div className="flex items-center gap-2 text-gray-600 mb-1">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">Type</span>
                                </div>
                                <p className="font-medium text-gray-900">{task.type}</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100/80 transition-colors">
                                <div className="flex items-center gap-2 text-gray-600 mb-1">
                                    <DollarSign className="w-4 h-4" />
                                    <span className="text-sm">Earnings</span>
                                </div>
                                <p className="font-medium text-gray-900">${task.amount}</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100/80 transition-colors">
                                <div className="flex items-center gap-2 text-gray-600 mb-1">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">Deadline</span>
                                </div>
                                <p className="font-medium text-gray-900">{task.deadline}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <FileText className="w-4 h-4 text-gray-400" />
                                <h3 className="font-semibold text-gray-900">Description</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{task.description}</p>
                        </div>

                        {/* Requirements */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <CheckSquare className="w-4 h-4 text-gray-400" />
                                <h3 className="font-semibold text-gray-900">Task Requirements</h3>
                            </div>
                            <ol className="space-y-3">
                                {[
                                    "Watch the video using the provided link.",
                                    "Fill out the feedback form with detailed responses to the questions asked.",
                                    "Ensure you complete the task before the deadline to receive your earnings."
                                ].map((step, index) => (
                                    <li key={index} className="flex gap-3 group">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600
                                                       flex items-center justify-center text-sm font-medium">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                            {step}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Resources */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <LinkIcon className="w-4 h-4 text-gray-400" />
                                <h3 className="font-semibold text-gray-900">Resources</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { label: 'Video link', url: 'This is a link.com' },
                                    { label: 'Feedback Form link', url: 'This is a link.com' }
                                ].map((resource, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg group hover:bg-gray-100">
                                        <span className="text-gray-600">{resource.label}:</span>
                                        <a href="#" className="text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline">
                                            {resource.url}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg
                                 hover:bg-blue-700 font-medium
                                 transform hover:-translate-y-0.5
                                 transition-all duration-200"
                    >
                        Start Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailsModal;