'use client';

import { useEffect } from 'react';
import { X, Calendar, DollarSign, CheckCircle, Clock, FileText, ListChecks } from 'lucide-react';
import useTaskStore from '@/zustand/store/useTaskStore';

export function ApplicationDetails() {
    const { selectedTask, modalState, setModalState, fetchTaskById } = useTaskStore();

    useEffect(() => {
        if (modalState.isOpen && modalState.taskId) {
            fetchTaskById(modalState.taskId);
        }
    }, [modalState.isOpen, modalState.taskId, fetchTaskById]);

    const handleClose = () => setModalState({ isOpen: false, taskId: null });

    if (!modalState.isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Animated Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
                onClick={handleClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl
                          overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300">
                {/* Gradient Header */}
                <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-blue-500/5 p-8">
                    <div className="flex justify-between items-start">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                                {selectedTask?.title}
                            </h2>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <p className="text-sm font-medium">{selectedTask?.taskType}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-all duration-200"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="max-h-[calc(90vh-200px)] overflow-y-auto">
                    <div className="px-8 py-6">
                        {/* Status Banner */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full 
                                          font-medium text-sm shadow-sm transition-all duration-200 ${
                                selectedTask?.status === 'Completed'
                                    ? 'bg-green-50 text-green-700 ring-1 ring-green-100'
                                    : 'bg-blue-50 text-blue-700 ring-1 ring-blue-100'
                            }`}>
                                <CheckCircle className="w-4 h-4" />
                                {selectedTask?.status}
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl
                                          hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-2 text-gray-600 mb-3">
                                    <DollarSign className="w-4 h-4" />
                                    <h3 className="font-medium">Payment</h3>
                                </div>
                                <p className="text-3xl font-bold text-gray-900">
                                    {selectedTask?.compensation?.currency}{selectedTask?.compensation?.amount}
                                </p>
                            </div>

                            <div className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl
                                          hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-2 text-gray-600 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <h3 className="font-medium">Deadline</h3>
                                </div>
                                <p className="text-xl font-semibold text-gray-900">
                                    {selectedTask?.deadline ? new Date(selectedTask.deadline).toLocaleDateString() : 'No deadline'}
                                </p>
                            </div>
                        </div>

                        {/* Description Section */}
                        {selectedTask?.description && (
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4 text-gray-800">
                                    <FileText className="w-5 h-5" />
                                    <h3 className="font-semibold text-lg">Description</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{selectedTask.description}</p>
                            </div>
                        )}

                        {/* Requirements Section */}
                        {selectedTask?.requirements && (
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4 text-gray-800">
                                    <ListChecks className="w-5 h-5" />
                                    <h3 className="font-semibold text-lg">Requirements</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[selectedTask.requirements].flat().map((req, index) => (
                                        <li key={index} className="flex items-start gap-4 group">
                                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2
                                                           group-hover:scale-125 transition-transform duration-200" />
                                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                                {req}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 bg-gradient-to-b from-gray-50 to-gray-100">
                    <button
                        onClick={handleClose}
                        className="w-full px-6 py-3 bg-white text-gray-700 rounded-xl
                                 border border-gray-200 hover:bg-gray-50 hover:shadow-md
                                 font-medium transition-all duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}