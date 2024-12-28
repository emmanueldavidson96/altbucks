'use client';
import { useCallback } from 'react';
import { toast } from 'sonner';
import useTaskStore from '@/zustand/store/useTaskStore';

export const useTaskOperations = () => {
    const store = useTaskStore();

    const createTask = useCallback(async (taskData) => {
        try {
            const newTask = await store.createTask(taskData);
            await store.fetchRecentTasks();
            toast.success('Task created successfully');
            return newTask;
        } catch (error) {
            console.error('Create task error:', error);
            toast.error('Failed to create task');
            throw error;
        }
    }, [store]);

    const fetchAllTasks = useCallback(async () => {
        try {
            await store.fetchAllTasks();
            toast.success('Tasks loaded successfully');
        } catch (error) {
            console.error('Error in fetchAllTasks:', error);
            toast.error('Failed to fetch tasks');
        }
    }, [store]);

    const fetchRecentTasks = useCallback(async () => {
        try {
            await store.fetchRecentTasks();
            toast.success('Recent tasks loaded');
        } catch (error) {
            console.error('Fetch recent tasks error:', error);
            toast.error('Failed to load recent tasks');
            throw error;
        }
    }, [store]);


    const handleViewDetails = useCallback(async (taskId: string) => {
        if (!taskId) return null;

        try {
            store.setModalState({ isOpen: true, taskId });
            const taskData = await store.fetchTaskById(taskId);
            store.setSelectedTask(taskData);

            return taskData;
        } catch (error) {
            console.error('View details error:', error);
            toast.error('Failed to load task details');
            store.setModalState({ isOpen: false, taskId: null });
            return null;
        }
    }, [store]);








    const handleDeleteTask = useCallback(async (taskId: string) => {
        try {
            await store.deleteTask(taskId);
            toast.success('Task deleted successfully');
            return true;
        } catch (error) {
            console.error('Delete task error:', error);
            toast.error('Failed to delete task');
            return false;
        }
    }, [store]);

    const handleMarkComplete = useCallback(async (taskId: string) => {
        try {
            await store.markTaskComplete(taskId);
            await store.fetchRecentTasks();
            toast.success('Task marked as complete');
            return true;
        } catch (error) {
            console.error('Mark complete error:', error);
            toast.error('Failed to mark task complete');
            return false;
        }
    }, [store]);

    const handleMarkPending = useCallback(async (taskId: string) => {
        try {
            await store.markTaskPending(taskId);
            await store.fetchRecentTasks();
            toast.success('Task marked as pending');
            return true;
        } catch (error) {
            console.error('Mark pending error:', error);
            toast.error('Failed to mark task pending');
            return false;
        }
    }, [store]);

    return {
        tasks: store.tasks,
        recentTasks: store.recentTasks,
        selectedTask: store.selectedTask,
        isLoading: store.isLoading,
        createTask,
        fetchAllTasks,
        fetchRecentTasks,
        handleViewDetails,
        handleDeleteTask,
        handleMarkComplete,
        handleMarkPending
    };
};