import { API_BASE_URL } from './config';

export const taskService = {
    createTask: async (taskData: any) => {
        const response = await fetch(`${API_BASE_URL}/api/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            throw new Error('Failed to create task');
        }

        return response.json();
    },

    getAllTasks: async () => {
        const response = await fetch(`${API_BASE_URL}/api/tasks`);
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        return response.json();
    },

    getRecentTasks: async () => {
        const response = await fetch(`${API_BASE_URL}/api/tasks/recent`);
        if (!response.ok) {
            throw new Error('Failed to fetch recent tasks');
        }
        return response.json();
    },

    getTaskById: async (id: string) => {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch task');
        }
        return response.json();
    },

    markTaskComplete: async (id: string) => {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${id}/complete`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to mark task as complete');
        }
        return response.json();
    },

    markTaskPending: async (id: string) => {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${id}/pending`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to mark task as pending');
        }
        return response.json();
    },

    deleteTask: async (id: string) => {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
        return response.json();
    },

    searchTasks: async (query: string) => {
        const response = await fetch(`${API_BASE_URL}/api/tasks/search?query=${query}`);
        if (!response.ok) {
            throw new Error('Failed to search tasks');
        }
        return response.json();
    }
};