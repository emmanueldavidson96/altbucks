'use client';

import { useCallback, useRef } from 'react';
import { toast } from 'sonner';
import useTaskStore from '@/zustand/store/useTaskStore';

export const useTaskOperations = () => {
    const {
        tasks,
        recentTasks,
        selectedTask,
        isLoading,
        fetchAllTasks: fetchAllTasksFromStore,
        fetchRecentTasks,
        fetchTaskById,
        deleteTask: deleteTaskFromStore,
        markTaskComplete: markTaskCompleteFromStore,
        markTaskPending: markTaskPendingFromStore,
        setSelectedTask,
        createTask: createTaskFromStore
    } = useTaskStore();

    // Use ref to track which tasks we've already fetched
    const fetchedTasksRef = useRef(new Set());

    const createTask = useCallback(async (taskData) => {
        try {
            const createdTask = await createTaskFromStore(taskData);
            await fetchRecentTasks();
            return createdTask;
        } catch (error) {
            console.error('Task creation error:', error);
            throw error;
        }
    }, [createTaskFromStore, fetchRecentTasks]);

    const handleViewDetails = useCallback(async (taskId) => {
        // If we're already viewing this task, don't fetch again
        if (selectedTask?._id === taskId) {
            return true;
        }

        // If task is already in recent tasks or tasks list, use that data
        const existingTask = recentTasks.find(task => task._id === taskId) ||
            tasks.find(task => task._id === taskId);

        if (existingTask) {
            setSelectedTask(existingTask);
            return true;
        }

        // If we haven't fetched this task before, fetch it
        if (!fetchedTasksRef.current.has(taskId)) {
            const toastId = toast.loading('Loading task details...');
            try {
                await fetchTaskById(taskId);
                fetchedTasksRef.current.add(taskId);
                toast.success('Task details loaded', { id: toastId });
                return true;
            } catch (error) {
                toast.error('Failed to load task details', {
                    id: toastId,
                    description: error instanceof Error ? error.message : 'Unknown error'
                });
                return false;
            }
        }

        return true;
    }, [fetchTaskById, selectedTask?._id, recentTasks, tasks, setSelectedTask]);

    const handleDeleteTask = useCallback(async (taskId) => {
        const toastId = toast.loading('Deleting task...');
        try {
            await deleteTaskFromStore(taskId);
            await fetchRecentTasks();
            // Remove from fetched tasks cache
            fetchedTasksRef.current.delete(taskId);
            toast.success('Task deleted successfully', { id: toastId });
            return true;
        } catch (error) {
            toast.error('Failed to delete task', {
                id: toastId,
                description: error instanceof Error ? error.message : 'Unknown error'
            });
            return false;
        }
    }, [deleteTaskFromStore, fetchRecentTasks]);

    const handleTaskComplete = useCallback(async (taskId) => {
        const toastId = toast.loading('Marking task as complete...');
        try {
            const updatedTask = await markTaskCompleteFromStore(taskId);
            await fetchRecentTasks();
            // Update selected task if it's the one being modified
            if (selectedTask?._id === taskId) {
                setSelectedTask(updatedTask);
            }
            toast.success('Task marked as complete', { id: toastId });
            return true;
        } catch (error) {
            toast.error('Failed to update task', {
                id: toastId,
                description: error instanceof Error ? error.message : 'Unknown error'
            });
            return false;
        }
    }, [markTaskCompleteFromStore, fetchRecentTasks, selectedTask, setSelectedTask]);

    const handleTaskPending = useCallback(async (taskId) => {
        const toastId = toast.loading('Marking task as pending...');
        try {
            const updatedTask = await markTaskPendingFromStore(taskId);
            await fetchRecentTasks();
            // Update selected task if it's the one being modified
            if (selectedTask?._id === taskId) {
                setSelectedTask(updatedTask);
            }
            toast.success('Task marked as pending', { id: toastId });
            return true;
        } catch (error) {
            toast.error('Failed to update task', {
                id: toastId,
                description: error instanceof Error ? error.message : 'Unknown error'
            });
            return false;
        }
    }, [markTaskPendingFromStore, fetchRecentTasks, selectedTask, setSelectedTask]);

    const clearSelectedTask = useCallback(() => {
        setSelectedTask(null);
    }, [setSelectedTask]);

    return {
        // State
        tasks,
        recentTasks,
        selectedTask,
        isLoading,
        // Operations
        createTask,
        fetchAllTasks: fetchAllTasksFromStore,
        fetchRecentTasks,
        handleViewDetails,
        handleDeleteTask,
        handleTaskComplete,
        handleTaskPending,
        clearSelectedTask
    };
};