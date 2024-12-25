'use client';

import { useCallback, useRef } from 'react';
import { toast } from 'sonner';
import useTaskStore from '@/zustand/store/useTaskStore';

type FetchStatus = {
    promise: Promise<any>;
    controller: AbortController;
};

export const useTaskOperations = () => {
    const store = useTaskStore();
    const fetchMap = useRef<Map<string, FetchStatus>>(new Map());

    const createTask = useCallback(async (taskData) => {
        try {
            await  store.createTask(taskData);
            await fetchRecentTasks();
        } catch (error) {
            console.error('Task creation error:', error);
            throw error;
        }
    }, [store.createTask]);


    const fetchAllTasks = useCallback(async () => {
        try {
            await store.fetchAllTasks();
        } catch (error) {
            toast.error('Failed to load tasks', {
                description: error instanceof Error ? error.message : 'Unknown error'
            });
            throw error;
        }
    }, [store.fetchAllTasks]);

    const fetchRecentTasks = useCallback(async () => {
        try {
            await store.fetchRecentTasks();
            toast.success('Recent tasks loaded successfully');
        } catch (error) {
            toast.error('Failed to load recent tasks', {
                description: error instanceof Error ? error.message : 'Unknown error'
            });
            throw error;
        }
    }, [store.fetchRecentTasks]);

    const handleViewDetails = useCallback(async (taskId: string) => {
        console.log("Starting view details for:", taskId);
        if (fetchMap.current.has(taskId)) {
            fetchMap.current.get(taskId)?.controller.abort();
            fetchMap.current.delete(taskId);
        }

        const controller = new AbortController();

        try {
            const promise = store.fetchTaskById(taskId);
            fetchMap.current.set(taskId, { promise, controller });

            await promise;
            return true;
        } catch (error) {
            if (!controller.signal.aborted) {
                console.error('Error viewing task details:', error);
                toast.error('Failed to load task details');
            }
            return false;
        } finally {
            fetchMap.current.delete(taskId);
        }
    }, [store]);

    const handleDeleteTask = useCallback(async (taskId: string) => {
        const toastId = toast.loading('Deleting task...');
        try {
            await store.deleteTask(taskId);
            toast.success('Task deleted successfully', { id: toastId });
            return true;
        } catch (error) {
            toast.error('Failed to delete task', {
                id: toastId,
                description: error instanceof Error ? error.message : 'Unknown error'
            });
            return false;
        }
    }, [store.deleteTask]);

    const handleMarkComplete = useCallback(async (taskId: string) => {
        const toastId = toast.loading('Marking task as complete...');
        try {
            await store.markTaskComplete(taskId);
            toast.success('Task marked as complete', { id: toastId });
            await fetchRecentTasks();
            return true;
        } catch (error) {
            toast.error('Failed to mark task complete', {
                id: toastId,
                description: error instanceof Error ? error.message : 'Unknown error'
            });
            return false;
        }
    }, [store.markTaskComplete, fetchRecentTasks]);

    const handleMarkPending = useCallback(async (taskId: string) => {
        const toastId = toast.loading('Marking task as pending...');
        try {
            await store.markTaskPending(taskId);
            toast.success('Task marked as pending', { id: toastId });
            await fetchRecentTasks();
            return true;
        } catch (error) {
            toast.error('Failed to mark task pending', {
                id: toastId,
                description: error instanceof Error ? error.message : 'Unknown error'
            });
            return false;
        }
    }, [store.markTaskPending, fetchRecentTasks]);

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