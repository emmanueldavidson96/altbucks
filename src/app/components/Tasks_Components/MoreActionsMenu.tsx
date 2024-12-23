'use client';

import { useState } from 'react';
import { Trash2, CheckCircle, Clock, Loader2, MoreHorizontal, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function MoreActionsMenu({
                                    taskId,
                                    onDeleteTask,
                                    onMarkComplete,
                                    onMarkPending
                                }) {
    const [showActions, setShowActions] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const router = useRouter();

    const handleViewTask = () => {
        router.push(`/tasks/${taskId}`);
        setShowActions(false);
    };

    const handleStatusUpdate = async (action) => {
        setIsUpdating(true);
        const toastId = toast.loading(`Marking task as ${action}...`);

        try {
            if (action === 'complete') {
                await onMarkComplete(taskId);
                toast.success('Task marked as complete', { id: toastId });
            } else {
                await onMarkPending(taskId);
                toast.success('Task marked as pending', { id: toastId });
            }
            setShowActions(false);
        } catch (error) {
            toast.error(`Failed to update task status`, { id: toastId });
            console.error(`Error updating status to ${action}:`, error);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async () => {
        setIsUpdating(true);
        const toastId = toast.loading('Deleting task...');

        try {
            await onDeleteTask(taskId);
            toast.success('Task deleted successfully', { id: toastId });
            setShowActions(false);
        } catch (error) {
            toast.error(`Failed to delete task`, { id: toastId });
            console.error('Error deleting task:', error);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="relative">
            {/* Menu Toggle Button */}
            <button
                onClick={() => setShowActions(!showActions)}
                className="p-2 text-white/90 hover:bg-white/10 rounded-lg transition-all duration-200"
                aria-label="More actions"
                disabled={isUpdating}
            >
                {isUpdating ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                    <MoreHorizontal className="h-5 w-5" />
                )}
            </button>

            {/* Dropdown Menu */}
            {showActions && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg
                            border border-zinc-200 z-50 overflow-hidden animate-in fade-in
                            slide-in-from-top-2 duration-200">
                    <div className="p-1.5">
                        {/* View Task Button */}
                        <button
                            onClick={handleViewTask}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm
                                     text-zinc-700 hover:bg-zinc-50 transition-colors"
                            disabled={isUpdating}
                        >
                            <Eye className="h-4 w-4 text-violet-500"/>
                            <span>View Task</span>
                        </button>

                        <div className="h-px bg-zinc-100 my-1"></div>

                        {/* Mark as Complete Button */}
                        <button
                            onClick={() => handleStatusUpdate('complete')}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm
                                     text-zinc-700 hover:bg-zinc-50 transition-colors"
                            disabled={isUpdating}
                        >
                            {isUpdating ? (
                                <Loader2 className="h-4 w-4 animate-spin text-emerald-500"/>
                            ) : (
                                <CheckCircle className="h-4 w-4 text-emerald-500"/>
                            )}
                            <span>Mark Complete</span>
                        </button>

                        {/* Mark as Pending Button */}
                        <button
                            onClick={() => handleStatusUpdate('pending')}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm
                                     text-zinc-700 hover:bg-zinc-50 transition-colors"
                            disabled={isUpdating}
                        >
                            {isUpdating ? (
                                <Loader2 className="h-4 w-4 animate-spin text-amber-500"/>
                            ) : (
                                <Clock className="h-4 w-4 text-amber-500"/>
                            )}
                            <span>Mark Pending</span>
                        </button>

                        <div className="h-px bg-zinc-100 my-1"></div>

                        {/* Delete Button */}
                        <button
                            onClick={handleDelete}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm
                                    text-red-600 hover:bg-red-50 transition-colors"
                            disabled={isUpdating}
                        >
                            {isUpdating ? (
                                <Loader2 className="h-4 w-4 animate-spin"/>
                            ) : (
                                <Trash2 className="h-4 w-4"/>
                            )}
                            <span>Delete Task</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}