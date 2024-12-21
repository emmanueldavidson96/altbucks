'use client';

import { useEffect } from 'react';
import { ArrowLeft, X, DollarSign, Calendar, MapPin } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';

export function TaskDetailsModal({ isOpen, onClose, taskId }) {
    const { selectedTask } = useTaskOperations();

    if (!isOpen || !selectedTask) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] overflow-y-auto bg-black/30 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="min-h-screen flex items-center justify-center p-4">
                <div
                    className="relative w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl animate-slideIn"
                    onClick={e => e.stopPropagation()}
                    style={{
                        animation: 'slideIn 0.3s ease-out'
                    }}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={onClose}
                                className="flex items-center text-white/90 hover:text-white gap-2 text-base font-medium transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back
                            </button>
                            <button
                                onClick={onClose}
                                className="hover:rotate-90 transition-transform duration-300"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {selectedTask.title}
                        </h2>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-white/20 text-white text-base font-medium rounded-full hover:bg-white/30 transition-colors">
                                {selectedTask.taskType}
                            </span>
                            <span className="px-3 py-1 bg-white/20 text-white text-base font-medium rounded-full hover:bg-white/30 transition-colors">
                                {selectedTask.status}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-8">
                        {/* Info Cards */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: DollarSign, label: 'Payment', value: `$${selectedTask.compensation?.amount}` },
                                { icon: Calendar, label: 'Deadline', value: new Date(selectedTask.deadline).toLocaleDateString() },
                                { icon: MapPin, label: 'Location', value: selectedTask.location }
                            ].map((item, index) => (
                                <div key={index} className="group bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-2 text-gray-700 mb-2 text-base font-medium">
                                        <item.icon className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
                                        {item.label}
                                    </div>
                                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description & Requirements */}
                        <div className="space-y-6">
                            <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                                <p className="text-base text-gray-700 leading-relaxed">{selectedTask.description}</p>
                            </div>

                            <div className="bg-blue-50/50 rounded-lg p-6 hover:bg-blue-50 transition-colors">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Requirements</h3>
                                <div className="space-y-4 text-base text-gray-700">
                                    {typeof selectedTask.requirements === 'string' ? (
                                        <p>{selectedTask.requirements}</p>
                                    ) : selectedTask.requirements ? (
                                        <div className="space-y-4">
                                            {selectedTask.requirements.instructions && (
                                                <div className="hover:translate-x-1 transition-transform">
                                                    <p className="font-semibold mb-2">Instructions</p>
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {[selectedTask.requirements.instructions].flat().map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {selectedTask.requirements.criteria && (
                                                <div className="hover:translate-x-1 transition-transform">
                                                    <p className="font-semibold mb-2">Completion Criteria</p>
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {[selectedTask.requirements.criteria].flat().map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}