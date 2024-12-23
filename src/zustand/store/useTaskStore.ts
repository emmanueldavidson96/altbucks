'use client';

import { create } from 'zustand';
import { taskService } from '@/services/api/tasks';

const useTaskStore = create((set) => ({
    // Initial state
    tasks: [],
    recentTasks: [],
    selectedTask: null,
    isLoading: false,
    error: null,

    // Basic state management actions
    setSelectedTask: (task) => set({ selectedTask: task }),
    clearError: () => set({ error: null }),

    // Fetch all tasks
    fetchAllTasks: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getAllTasks();
            set({ tasks: response.data, isLoading: false });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch tasks',
                isLoading: false
            });
            throw error;
        }
    },

    // Fetch recent tasks
    fetchRecentTasks: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getRecentTasks();
            set({ recentTasks: response.data, isLoading: false });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch recent tasks',
                isLoading: false
            });
            throw error;
        }
    },

    // Fetch task by ID
    fetchTaskById: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getTaskById(id);
            set({ selectedTask: response.data, isLoading: false });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch task',
                isLoading: false
            });
            throw error;
        }
    },

    // Create new task
    createTask: async (taskData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.createTask(taskData);
            const newTask = response.data;

            // Update both tasks lists optimistically
            set((state) => ({
                tasks: [...state.tasks, newTask],
                recentTasks: [newTask, ...state.recentTasks].slice(0, 10), // Keep most recent 10
                isLoading: false
            }));

            return newTask;
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to create task',
                isLoading: false
            });
            throw error;
        }
    },

    // Delete task
    deleteTask: async (id) => {
        set({ isLoading: true, error: null });
        try {
            await taskService.deleteTask(id);

            // Remove task from all lists optimistically
            set((state) => ({
                tasks: state.tasks.filter(task => task._id !== id),
                recentTasks: state.recentTasks.filter(task => task._id !== id),
                selectedTask: state.selectedTask?._id === id ? null : state.selectedTask,
                isLoading: false
            }));
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to delete task',
                isLoading: false
            });
            throw error;
        }
    },

    // Mark task as complete
    markTaskComplete: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.markTaskComplete(id);
            const updatedTask = response.data;

            // Update task in all lists
            set((state) => ({
                tasks: state.tasks.map(task =>
                    task._id === id ? { ...task, status: 'completed' } : task
                ),
                recentTasks: state.recentTasks.map(task =>
                    task._id === id ? { ...task, status: 'completed' } : task
                ),
                selectedTask: state.selectedTask?._id === id ?
                    { ...state.selectedTask, status: 'completed' } : state.selectedTask,
                isLoading: false
            }));

            return updatedTask;
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to mark task complete',
                isLoading: false
            });
            throw error;
        }
    },

    // Mark task as pending
    markTaskPending: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.markTaskPending(id);
            const updatedTask = response.data;

            // Update task in all lists
            set((state) => ({
                tasks: state.tasks.map(task =>
                    task._id === id ? { ...task, status: 'pending' } : task
                ),
                recentTasks: state.recentTasks.map(task =>
                    task._id === id ? { ...task, status: 'pending' } : task
                ),
                selectedTask: state.selectedTask?._id === id ?
                    { ...state.selectedTask, status: 'pending' } : state.selectedTask,
                isLoading: false
            }));

            return updatedTask;
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to mark task pending',
                isLoading: false
            });
            throw error;
        }
    },

    // Reset store
    resetStore: () => {
        set({
            tasks: [],
            recentTasks: [],
            selectedTask: null,
            isLoading: false,
            error: null
        });
    }
}));

export default useTaskStore;