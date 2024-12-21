import { create } from 'zustand';
import { taskService } from '@/services/api/tasks';

interface TaskStore {
    tasks: any[];
    recentTasks: any[];
    selectedTask: any | null;
    isLoading: boolean;
    error: string | null;
    taskCache: Map<string, any>;
    setSelectedTask: (task: any) => void;
    clearError: () => void;
    setLoading: (isLoading: boolean) => void;
    fetchAllTasks: (filters?: any) => Promise<void>;
    fetchRecentTasks: () => Promise<void>;
    fetchTaskById: (id: string) => Promise<void>;
    createTask: (taskData: any) => Promise<any>;
    markTaskComplete: (id: string) => Promise<void>;
    markTaskPending: (id: string) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    searchTasks: (query: string) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
    // Initial state
    tasks: [],
    recentTasks: [],
    selectedTask: null,
    isLoading: false,
    error: null,
    taskCache: new Map(),

    // Helper actions
    setSelectedTask: (task) => set({ selectedTask: task }),
    clearError: () => set({ error: null }),
    setLoading: (isLoading) => set({ isLoading }),

    // API actions
    fetchAllTasks: async (filters) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getAllTasks(filters);
            set({ tasks: response.data, isLoading: false });

            // Update cache with new tasks
            const cache = get().taskCache;
            response.data.forEach((task: any) => {
                cache.set(task._id, task);
            });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
            throw error;
        }
    },

    fetchRecentTasks: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getRecentTasks();
            set({ recentTasks: response.data, isLoading: false });

            // Update cache with new tasks
            const cache = get().taskCache;
            response.data.forEach((task: any) => {
                cache.set(task._id, task);
            });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
            throw error;
        }
    },

    fetchTaskById: async (id) => {
        // Check cache first
        const cache = get().taskCache;
        const cachedTask = cache.get(id);

        if (cachedTask) {
            set({ selectedTask: cachedTask, isLoading: false });
            return;
        }

        set({ isLoading: true, error: null });
        try {
            const response = await taskService.getTaskById(id);
            const task = response.data;

            // Update cache
            cache.set(id, task);

            set({ selectedTask: task, isLoading: false });
            return task;
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
            throw error;
        }
    },

    createTask: async (taskData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.createTask(taskData);
            const newTask = response.data;

            set((state) => ({
                tasks: [...state.tasks, newTask],
                isLoading: false
            }));

            // Update cache
            get().taskCache.set(newTask._id, newTask);

            return newTask;
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
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
                    task._id === id ? updatedTask : task
                ),
                selectedTask: state.selectedTask?._id === id ? updatedTask : state.selectedTask,
                isLoading: false
            }));

            // Update cache
            get().taskCache.set(id, updatedTask);
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
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
                    task._id === id ? updatedTask : task
                ),
                selectedTask: state.selectedTask?._id === id ? updatedTask : state.selectedTask,
                isLoading: false
            }));

            // Update cache
            get().taskCache.set(id, updatedTask);
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
            throw error;
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

            // Remove from cache
            get().taskCache.delete(id);
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
            throw error;
        }
    },

    searchTasks: async (query) => {
        set({ isLoading: true, error: null });
        try {
            const response = await taskService.searchTasks(query);
            set({ tasks: response.data, isLoading: false });

            // Update cache with search results
            const cache = get().taskCache;
            response.data.forEach((task: any) => {
                cache.set(task._id, task);
            });
        } catch (error) {
            set({ error: (error as Error).message, isLoading: false });
            throw error;
        }
    }
}));