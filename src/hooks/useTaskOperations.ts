'use client';

import { useCallback } from 'react';
import { toast } from 'sonner';
import { useTaskStore } from '@/zustand/store/useTaskStore';

export const useTaskOperations = () => {
    const {
        tasks,
        recentTasks,
        selectedTask,
        isLoading,
        fetchAllTasks: fetchAllTasksFromStore,
        fetchRecentTasks,
        fetchTaskById,
        deleteTask,
        markTaskComplete,
        markTaskPending,
        setSelectedTask,
        createTask
    } = useTaskStore();

    const handleCreateTask = useCallback(async (taskData: any) => {
        const toastId = toast.loading('Creating task...');
        try {
            const createdTask = await createTask(taskData);
            await fetchRecentTasks();
            toast.success('Task created successfully');
            return createdTask;
        } catch (error) {
            toast.error('Failed to create task');
            throw error;
        } finally {
            toast.dismiss(toastId);
        }
    }, [createTask, fetchRecentTasks]);

    const fetchAllTasks = useCallback(async () => {
        console.log('Starting to fetch all tasks');
        try {
            await fetchAllTasksFromStore();
            console.log('Successfully fetched all tasks');
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
            toast.error('Failed to load tasks');
            throw error;
        }
    }, [fetchAllTasksFromStore]);

    const handleViewDetails = useCallback(async (taskId: string) => {
        console.log('handleViewDetails called with taskId:', taskId);
        try {
            await fetchTaskById(taskId);
            console.log('Task fetched successfully');
            return true;
        } catch (error) {
            console.error('Error loading task details:', error);
            toast.error('Failed to load task details');
            return false;
        }
    }, [fetchTaskById]);

    const handleDeleteTask = useCallback(async (taskId: string) => {
        const toastId = toast.loading('Deleting task...');
        try {
            await deleteTask(taskId);
            await fetchRecentTasks();
            toast.success('Task deleted successfully');
            return true;
        } catch (error) {
            toast.error('Failed to delete task');
            return false;
        } finally {
            toast.dismiss(toastId);
        }
    }, [deleteTask, fetchRecentTasks]);

    const handleTaskComplete = useCallback(async (taskId: string) => {
        const toastId = toast.loading('Marking task as complete...');
        try {
            await markTaskComplete(taskId);
            await fetchRecentTasks();
            toast.success('Task marked as complete');
            return true;
        } catch (error) {
            toast.error('Failed to mark task as complete');
            return false;
        } finally {
            toast.dismiss(toastId);
        }
    }, [markTaskComplete, fetchRecentTasks]);

    const handleTaskPending = useCallback(async (taskId: string) => {
        const toastId = toast.loading('Marking task as pending...');
        try {
            await markTaskPending(taskId);
            await fetchRecentTasks();
            toast.success('Task marked as pending');
            return true;
        } catch (error) {
            toast.error('Failed to mark task as pending');
            return false;
        } finally {
            toast.dismiss(toastId);
        }
    }, [markTaskPending, fetchRecentTasks]);

    const clearSelectedTask = useCallback(() => {
        console.log('Clearing selected task');
        setSelectedTask(null);
    }, [setSelectedTask]);

    // Add debug logs for selected task changes
    console.log('Current selected task:', selectedTask);
    console.log('Current loading state:', isLoading);

    return {
        // State
        tasks,
        recentTasks,
        selectedTask,
        isLoading,
        // Functions
        createTask: handleCreateTask,
        fetchAllTasks,
        fetchRecentTasks,
        handleViewDetails,
        handleDeleteTask,
        handleTaskComplete,
        handleTaskPending,
        clearSelectedTask
    };
};