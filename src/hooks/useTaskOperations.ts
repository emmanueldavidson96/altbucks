import { useCallback } from 'react';
import { toast } from 'sonner';
import { useTaskStore } from '@/zustand/store/useTaskStore';

export const useTaskOperations = () => {
    const {
        recentTasks,
        selectedTask,
        isLoading,
        fetchAllTasks,
        fetchRecentTasks,
        fetchTaskById,
        deleteTask,
        markTaskComplete,
        markTaskPending,
        setSelectedTask
    } = useTaskStore();

    const handleViewDetails = useCallback(async (taskId: string) => {
        const toastId = toast.loading('Loading task details...');
        try {
            await fetchTaskById(taskId);
            toast.dismiss(toastId);
            return true;
        } catch (error) {
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
        const toastId = toast.loading('Updating task status...');
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
        const toastId = toast.loading('Updating task status...');
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
        setSelectedTask(null);
    }, [setSelectedTask]);

    return {
        // State
        recentTasks,
        selectedTask,
        isLoading,
        // Functions
        fetchRecentTasks,
        handleViewDetails,
        handleDeleteTask,
        handleTaskComplete,
        handleTaskPending,
        clearSelectedTask
    };
};