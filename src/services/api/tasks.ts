// services/api/tasks.ts

import { API_BASE_URL } from './config';

// Define interfaces for type safety
interface Task {
    _id: string;
    title: string;
    taskType: string;
    status: string;
    deadline: string;
    createdAt: string;
    compensation: {
        currency: string;
        amount: number;
    };
    description?: string;
    requirements?: string;
    location?: string;
}

interface ApiResponse<T> {
    data: T;
    message?: string;
    status?: number;
}

/**
 * Normalizes task data to ensure consistent structure
 * @param task - Raw task data from API
 * @returns Normalized task object
 */
const normalizeTask = (task: any): Task => ({
    _id: task._id || task.id,
    title: task.title || '',
    taskType: task.taskType || '',
    status: task.status || 'pending',
    deadline: task.deadline || new Date().toISOString(),
    compensation: {
        currency: task.compensation?.currency || 'USD',
        amount: Number(task.compensation?.amount || 0)
    },
    description: task.description || '',
    requirements: task.requirements || '',
    location: task.location || 'remote'
});

/**
 * Task service for handling all API interactions
 */
export const taskService = {
    /**
     * Creates a new task
     * @param taskData - The data for the new task
     * @returns Promise with the created task
     */
    createTask: async (taskData: Partial<Task>): Promise<ApiResponse<Task>> => {
        try {
            console.log('Creating task with data:', taskData);
            const response = await fetch(`${API_BASE_URL}/api/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(taskData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(
                    errorData?.message ||
                    `Failed to create task: ${response.status} ${response.statusText}`
                );
            }

            const result = await response.json();
            const normalizedTask = normalizeTask(result.data || result);
            console.log('Task created successfully:', normalizedTask);
            return { data: normalizedTask };
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    },

    /**
     * Fetches all tasks
     * @returns Promise with array of tasks
     */
    getAllTasks: async (): Promise<ApiResponse<Task[]>> => {
        try {
            console.log('Fetching all tasks');
            const response = await fetch(`${API_BASE_URL}/api/tasks`, {
                headers: {
                    'Accept': 'application/json',
                },
                signal: AbortSignal.timeout(8000) // 8 second timeout
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch tasks: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const tasks = (Array.isArray(result) ? result : result.data || [])
                .map(normalizeTask);

            console.log('Tasks fetched:', tasks);
            return { data: tasks };
        } catch (error) {
            console.error('Error in getAllTasks:', error);
            throw error;
        }
    },

    /**
     * Fetches recent tasks
     * @returns Promise with array of recent tasks
     */
    getRecentTasks: async (): Promise<ApiResponse<Task[]>> => {
        try {
            console.log('Fetching recent tasks');
            // Change the endpoint to get all tasks sorted by creation date
            const response = await fetch(`${API_BASE_URL}/api/tasks?sort=createdAt&limit=10`, {
                headers: {
                    'Accept': 'application/json',
                },
                signal: AbortSignal.timeout(5000)
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch recent tasks: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const tasks = (Array.isArray(result) ? result : result.data || [])
                .map(normalizeTask)
                // Sort by creation date if available, otherwise use ID as fallback
                .sort((a, b) => {
                    const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
                    const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
                    return dateB.getTime() - dateA.getTime();
                });

            console.log('Recent tasks fetched:', tasks);
            return { data: tasks.slice(0, 10) }; // Limit to 10 most recent tasks
        } catch (error) {
            console.error('Error fetching recent tasks:', error);
            throw error;
        }
    },

    /**
     * Fetches a specific task by ID
     * @param id - Task ID
     * @returns Promise with the requested task
     */
    getTaskById: async (id: string): Promise<ApiResponse<Task>> => {
        try {
            console.log('Fetching task by ID:', id);
            const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch task: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const task = normalizeTask(result.data || result);
            console.log('Task fetched:', task);
            return { data: task };
        } catch (error) {
            console.error('Error fetching task:', error);
            throw error;
        }
    },

    /**
     * Updates task status to complete
     * @param id - Task ID
     * @returns Promise with the updated task
     */
    markTaskComplete: async (id: string): Promise<ApiResponse<Task>> => {
        try {
            console.log('Marking task as complete:', id);
            const response = await fetch(`${API_BASE_URL}/api/tasks/${id}/complete`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to mark task complete: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const task = normalizeTask(result.data || result);
            console.log('Task marked complete:', task);
            return { data: task };
        } catch (error) {
            console.error('Error marking task complete:', error);
            throw error;
        }
    },

    /**
     * Updates task status to pending
     * @param id - Task ID
     * @returns Promise with the updated task
     */
    markTaskPending: async (id: string): Promise<ApiResponse<Task>> => {
        try {
            console.log('Marking task as pending:', id);
            const response = await fetch(`${API_BASE_URL}/api/tasks/${id}/pending`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to mark task pending: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const task = normalizeTask(result.data || result);
            console.log('Task marked pending:', task);
            return {data: task};
        } catch (error) {
            console.error('Error marking task pending:', error);
            throw error;
        }
    },


    /**
     * Deletes a task
     * @param id - Task ID
     * @returns Promise with void
     */
    deleteTask: async (id: string): Promise<ApiResponse<void>> => {
        try {
            console.log('Deleting task:', id);
            const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to delete task: ${response.status} ${response.statusText}`);
            }

            console.log('Task deleted successfully');
            return { data: undefined };
        } catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    }
};