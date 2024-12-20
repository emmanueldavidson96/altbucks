import { create } from 'zustand';
import { taskService } from '@/services/api/tasks';

export const useTaskStore = create<>((set, get) => ({
    // Initial state
    tasks: [],
    recentTasks: [],
    selectedTask: null,
    isLoading: false,
    error: null,

    // Helper actions
    setSelectedTask: (task) => set({ selectedTask: task }),
    clearError: () => set({ error: null }),
    setLoading: (isLoading) => set({ isLoading }),

    // API actions
    fetchAllTasks: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getAllTasks();
            set({ tasks: response.data, isLoading: false });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    fetchRecentTasks: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getRecentTasks();
            set({ recentTasks: response.data, isLoading: false });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    fetchTaskById: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getTaskById(id);
            set({ selectedTask: response.data, isLoading: false });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    createTask: async (taskData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.createTask(taskData);
            set((state) => ({
                tasks: [...state.tasks, response.data],
                isLoading: false
            }));
            return response.data;
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
            throw error;
        }
    },

    markTaskComplete: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.markTaskComplete(id);
            set((state) => ({
                tasks: state.tasks.map(task =>
                    task._id === id ? response.data : task
                ),
                selectedTask: state.selectedTask?._id === id ? response.data : state.selectedTask,
                isLoading: false
            }));
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    markTaskPending: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.markTaskPending(id);
            set((state) => ({
                tasks: state.tasks.map(task =>
                    task._id === id ? response.data : task
                ),
                selectedTask: state.selectedTask?._id === id ? response.data : state.selectedTask,
                isLoading: false
            }));
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    deleteTask: async (id) => {
        set({ isLoading: true, error: null });
        try {
            await taskService.deleteTask(id);
            set((state) => ({
                tasks: state.tasks.filter(task => task._id !== id),
                selectedTask: state.selectedTask?._id === id ? null : state.selectedTask,
                isLoading: false
            }));
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    },

    searchTasks: async (query) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.searchTasks(query);
            set({ tasks: response.data, isLoading: false });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
        }
    }
}));