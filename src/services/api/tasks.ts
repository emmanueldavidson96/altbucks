const BASE_URL = 'http://localhost:4004/task';

export const taskService = {
    // Get all tasks
    getAllTasks: async () => {
        const response = await fetch(`${BASE_URL}/get`);
        if (!response.ok) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        return data.tasks;
    },

    // Get task by ID
    getTaskById: async (taskId: string) => {
        const response = await fetch(`${BASE_URL}/${taskId}`);
        if (!response.ok) throw new Error('Task not found');
        const data = await response.json();
        return data.task;
    },

    // Get tasks by date range
    getTasksByDateRange: async (startDate: string, endDate: string) => {
        const response = await fetch(
            `${BASE_URL}/date-range?startDate=${startDate}&endDate=${endDate}`
        );
        if (!response.ok) throw new Error('Failed to fetch tasks by date range');
        return response.json();
    },

    // Get task statistics
    getTaskStats: async () => {
        const [totalResponse, approvedResponse, reviewResponse] = await Promise.all([
            fetch(`${BASE_URL}/total`),
            fetch(`${BASE_URL}/total-approved`),
            fetch(`${BASE_URL}/total-under-review`)
        ]);

        const [total, approved, review] = await Promise.all([
            totalResponse.json(),
            approvedResponse.json(),
            reviewResponse.json()
        ]);

        return {
            total: total.totalTasks,
            approved: approved.totalTasks,
            underReview: review.totalTasks
        };
    },

    // Search tasks by title
    searchTasks: async (title: string) => {
        const response = await fetch(`${BASE_URL}/title/${title}`);
        if (!response.ok) throw new Error('Failed to search tasks');
        return response.json();
    }
};