'use client';

import { useState } from 'react';
import { Trash2, Eye, CheckCircle, Clock, Loader2 } from 'lucide-react';
import { MoreActionsMenuProps } from './types';

export function MoreActionsMenu({
                                    taskId,
                                    onDeleteTask,
                                    onMarkComplete,
                                    onMarkPending
                                }: MoreActionsMenuProps) {
    const [showActions, setShowActions] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleStatusUpdate = async (action: 'complete' | 'pending') => {
        setIsUpdating(true);
        try {
            if (action === 'complete') {
                await onMarkComplete(taskId);
            } else {
                await onMarkPending(taskId);
            }
            setShowActions(false);
        } catch (error) {
            console.error(`Error updating status to ${action}:`, error);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async () => {
        setIsUpdating(true);
        try {
            await onDeleteTask(taskId);
            setShowActions(false);
        } catch (error) {
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
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="More actions"
                disabled={isUpdating}
            >
                {isUpdating ? (
                    <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#2877EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#2877EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#2877EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </button>

            {/* Dropdown Menu */}
            {showActions && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50
                            overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-1">
                        {/* View Task Button */}
                        <button
                            onClick={() => setShowActions(false)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm
                                     font-medium text-gray-700 hover:bg-gray-50 transition-colors group"
                            disabled={isUpdating}
                        >
                            <Eye className="h-5 w-5 text-[#2877EA]"/>
                            <span>View Task</span>
                        </button>

                        {/* Mark as Complete Button */}
                        <button
                            onClick={() => handleStatusUpdate('complete')}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm
                                     font-medium text-gray-700 hover:bg-gray-50 transition-colors group"
                            disabled={isUpdating}
                        >
                            {isUpdating ? (
                                <Loader2 className="h-5 w-5 animate-spin"/>
                            ) : (
                                <CheckCircle className="h-5 w-5 text-[#14532D]"/>
                            )}
                            <span>Mark Task as Complete</span>
                        </button>

                        {/* Mark as Pending Button */}
                        <button
                            onClick={() => handleStatusUpdate('pending')}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm
                                     font-medium text-gray-700 hover:bg-gray-50 transition-colors group"
                            disabled={isUpdating}
                        >
                            {isUpdating ? (
                                <Loader2 className="h-5 w-5 animate-spin"/>
                            ) : (
                                <Clock className="h-5 w-5 text-[#854D0E]"/>
                            )}
                            <span>Mark Task as Pending</span>
                        </button>

                        {/* Delete Button */}
                        <button
                            onClick={handleDelete}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm
                                    font-medium text-red-600 hover:bg-red-50 transition-colors group"
                            disabled={isUpdating}
                        >
                            <Trash2 className="h-5 w-5"/>
                            <span>Delete Task</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}