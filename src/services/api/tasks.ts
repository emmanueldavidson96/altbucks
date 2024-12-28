import { API_BASE_URL } from './config';

// Simple types for core functionality
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
    location?: string;
}

interface ApiResponse<T> {
    data: T;
    message?: string;
}

// Simple utility to normalize task data
const normalizeTask = (task: any): Task => ({
    _id: task._id || task.id,
    title: task.title || '',
    taskType: task.taskType || '',
    status: task.status || 'pending',
    deadline: task.deadline || new Date().toISOString(),
    createdAt: task.createdAt || new Date().toISOString(),
    compensation: {
        currency: task.compensation?.currency || 'USD',
        amount: Number(task.compensation?.amount || 0)
    },
    description: task.description || '',
    location: task.location || 'remote'
});

// Simplified task service
export const taskService = {
    async createTask(taskData: Partial<Task>): Promise<ApiResponse<Task>> {
        const response = await fetch(`${API_BASE_URL}/api/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Failed to create task');
        }

        return { data: normalizeTask(result.data || result) };
    },

    getAllTasks: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/tasks`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }

            // Return just the data array since that's what the store expects
            return { data: result.data || [] };
        } catch (error) {
            console.error('Get tasks error:', error);
            throw error;
        }
    },

    async getRecentTasks(): Promise<ApiResponse<Task[]>> {
        const response = await fetch(`${API_BASE_URL}/api/tasks/recent`);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to fetch recent tasks');
        }

        const tasks = (Array.isArray(result) ? result : result.data || [])
            .map(normalizeTask)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 10);

        return { data: tasks };
    },

    async getTaskById(id: string): Promise<ApiResponse<Task>> {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to fetch task');
        }

        return { data: normalizeTask(result.data || result) };
    },

    async markTaskComplete(id: string): Promise<ApiResponse<Task>> {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${id}/complete`, {
            method: 'PATCH'
        });
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to complete task');
        }

        return { data: normalizeTask(result.data || result) };
    },

    async markTaskPending(id: string): Promise<ApiResponse<Task>> {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${id}/pending`, {
            method: 'PATCH'
        });
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to mark task as pending');
        }

        return { data: normalizeTask(result.data || result) };
    },

    async deleteTask(id: string): Promise<ApiResponse<void>> {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            const result = await response.json();
            throw new Error(result.message || 'Failed to delete task');
        }

        return { data: undefined };
    }
};