'use client';

import { useEffect } from 'react';
import { ArrowLeft, X, DollarSign, Calendar, MapPin, Loader2 } from 'lucide-react';
import { MoreActionsMenu } from './MoreActionsMenu';
import useTaskStore from '@/zustand/store/useTaskStore';

export function TaskDetailsModal() {
    const { selectedTask, modalState, setModalState, fetchTaskById } = useTaskStore();

    useEffect(() => {
        if (modalState.isOpen && modalState.taskId) {
            fetchTaskById(modalState.taskId);
        }
    }, [modalState.isOpen, modalState.taskId, fetchTaskById]);

    const handleClose = () => setModalState({ isOpen: false, taskId: null });

    if (!modalState.isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-zinc-900/50 backdrop-blur-sm">
            {!selectedTask ? (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white rounded-2xl p-8 flex items-center gap-3 shadow-xl">
                        <Loader2 className="w-6 h-6 animate-spin text-violet-600" />
                        <p className="text-zinc-600 font-medium">Loading task details...</p>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen flex items-center justify-center p-4"
                     onClick={handleClose}>
                    <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl"
                         onClick={e => e.stopPropagation()}>
                        <div className="bg-gradient-to-br from-violet-500 via-violet-600 to-fuchsia-600 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <button onClick={handleClose}
                                        className="flex items-center text-white/90 hover:text-white gap-2 text-base font-medium transition-all hover:bg-white/10 px-3 py-1.5 rounded-lg">
                                    <ArrowLeft className="w-5 h-5" />
                                    Back
                                </button>
                                <div className="flex items-center gap-2">
                                    <MoreActionsMenu taskId={modalState.taskId} />
                                    <button onClick={handleClose}
                                            className="p-2 hover:bg-white/10 rounded-lg transition-all hover:rotate-90 duration-300">
                                        <X className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {selectedTask.title}
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-white/10 text-white rounded-lg font-medium border border-white/20">
                                        {selectedTask.taskType}
                                    </span>
                                    <span className={`px-3 py-1.5 rounded-lg font-medium ${
                                        selectedTask.status.toLowerCase() === 'completed'
                                            ? 'bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20'
                                            : selectedTask.status.toLowerCase() === 'pending'
                                                ? 'bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20'
                                                : 'bg-violet-500/10 text-violet-600 ring-1 ring-violet-500/20'
                                    }`}>
                                        {selectedTask.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-zinc-50/50 max-h-[calc(100vh-200px)] overflow-y-auto">
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        {
                                            icon: DollarSign,
                                            label: 'Payment',
                                            value: new Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: selectedTask.compensation?.currency || 'USD'
                                            }).format(selectedTask.compensation?.amount || 0),
                                            color: 'text-emerald-600 bg-emerald-50 ring-1 ring-emerald-100'
                                        },
                                        {
                                            icon: Calendar,
                                            label: 'Deadline',
                                            value: selectedTask.deadline
                                                ? new Date(selectedTask.deadline).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                                : 'No deadline',
                                            color: 'text-violet-600 bg-violet-50 ring-1 ring-violet-100'
                                        },
                                        {
                                            icon: MapPin,
                                            label: 'Location',
                                            value: selectedTask.location || 'Remote',
                                            color: 'text-fuchsia-600 bg-fuchsia-50 ring-1 ring-fuchsia-100'
                                        }
                                    ].map((item, index) => (
                                        <div key={index}
                                             className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className={`p-2 rounded-lg ${item.color}`}>
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <p className="text-sm font-medium text-zinc-600">{item.label}</p>
                                            </div>
                                            <p className="text-lg font-semibold text-zinc-900 line-clamp-1">{item.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {selectedTask.description && (
                                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-100">
                                            <h3 className="text-lg font-bold text-zinc-900 mb-4">Description</h3>
                                            <p className="text-zinc-600 leading-relaxed">{selectedTask.description}</p>
                                        </div>
                                    )}

                                    {selectedTask.requirements && (
                                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-100">
                                            <h3 className="text-lg font-bold text-zinc-900 mb-4">Requirements</h3>
                                            <div className="space-y-4 text-zinc-600">
                                                {typeof selectedTask.requirements === 'string' ? (
                                                    <p>{selectedTask.requirements}</p>
                                                ) : (
                                                    <div className="space-y-6">
                                                        {selectedTask.requirements.instructions && (
                                                            <div className="group">
                                                                <p className="font-semibold mb-2 text-zinc-900 group-hover:text-violet-600 transition-colors">
                                                                    Instructions
                                                                </p>
                                                                <ul className="list-disc pl-5 space-y-2 marker:text-violet-500">
                                                                    {[selectedTask.requirements.instructions].flat().map((item, i) => (
                                                                        <li key={i} className="group-hover:text-zinc-900 transition-colors">
                                                                            {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                        {selectedTask.requirements.criteria && (
                                                            <div className="group">
                                                                <p className="font-semibold mb-2 text-zinc-900 group-hover:text-violet-600 transition-colors">
                                                                    Completion Criteria
                                                                </p>
                                                                <ul className="list-disc pl-5 space-y-2 marker:text-violet-500">
                                                                    {[selectedTask.requirements.criteria].flat().map((item, i) => (
                                                                        <li key={i} className="group-hover:text-zinc-900 transition-colors">
                                                                            {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}