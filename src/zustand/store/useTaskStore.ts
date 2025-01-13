'use client';

import { create } from 'zustand';
import { taskService } from '@/services/api/tasks';
import { applicationService } from '@/services/api/applications';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const useTaskStore = create((set) => ({
    tasks: [],
    recentTasks: [],
    completedTasks: [],
    selectedTask: null,
    isLoading: false,
    error: null,
    modalState: { isOpen: false, taskId: null },

    setSelectedTask: (task) => set({ selectedTask: task }),
    setModalState: (state) => set({ modalState: state }),
    clearError: () => set({ error: null }),


    createTask: async (taskData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.createTask(taskData);
            const newTask = response.data;
            set((state) => ({
                tasks: [...state.tasks, newTask],
                recentTasks: [newTask, ...state.recentTasks],
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


    fetchAllTasks: async () => {
        set({ isLoading: true });
        try {
            const response = await taskService.getAllTasks();
            set({
                tasks: response.data || [],
                isLoading: false
            });
        } catch (error) {
            set({ isLoading: false });
            throw error;
        }
    },


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

    fetchTaskById: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getTaskById(id);
            set({ selectedTask: response.data, isLoading: false });
            return response.data;
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch task',
                isLoading: false
            });
            throw error;
        }
    },


    deleteTask: async (id) => {
        set({ isLoading: true, error: null });
        try {
            await taskService.deleteTask(id);
            set((state) => ({
                tasks: state.tasks.filter(task => task._id !== id),
                recentTasks: state.recentTasks.filter(task => task._id !== id),
                completedTasks: state.completedTasks.filter(task => task._id !== id),
                selectedTask: state.selectedTask?._id === id ? null : state.selectedTask,
                modalState: { isOpen: false, taskId: null },
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


    updateTask: async (id, taskData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.updateTask(id, taskData);
            const updatedTask = response.data;
            set((state) => ({
                tasks: state.tasks.map(task =>
                    task._id === id ? updatedTask : task
                ),
                recentTasks: state.recentTasks.map(task =>
                    task._id === id ? updatedTask : task
                ),
                selectedTask: state.selectedTask?._id === id ? updatedTask : state.selectedTask,
                isLoading: false
            }));
            return updatedTask;
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to update task',
                isLoading: false
            });
            throw error;
        }
    },


    markTaskComplete: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.markTaskComplete(id);
            const updatedTask = response.data;
            set((state) => ({
                tasks: state.tasks.map(task =>
                    task._id === id ? { ...task, status: 'completed' } : task
                ),
                recentTasks: state.recentTasks.map(task =>
                    task._id === id ? { ...task, status: 'completed' } : task
                ),
                completedTasks: [...state.completedTasks, updatedTask],
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

    markTaskPending: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.markTaskPending(id);
            const updatedTask = response.data;
            set((state) => ({
                tasks: state.tasks.map(task =>
                    task._id === id ? { ...task, status: 'pending' } : task
                ),
                recentTasks: state.recentTasks.map(task =>
                    task._id === id ? { ...task, status: 'pending' } : task
                ),
                completedTasks: state.completedTasks.filter(task => task._id !== id),
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



    fetchCompletedTasks: async () => {
        try {
            const response = await applicationService.getCompletedApplications();
            // Access the data array from the response
            set({ completedTasks: response.data || [] });
        } catch (error) {
            console.error('Error fetching completed tasks:', error);
            set({ error: error.message });
            throw error;
        }
    },

    resetStore: () => {
        set({
            tasks: [],
            recentTasks: [],
            completedTasks: [],
            selectedTask: null,
            isLoading: false,
            error: null,
            modalState: { isOpen: false, taskId: null }
        });
    }
}));

export default useTaskStore;