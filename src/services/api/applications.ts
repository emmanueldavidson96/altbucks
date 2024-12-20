import { API_BASE_URL } from './config';

export const applicationService = {
    getCompletedApplications: async () => {
        const response = await fetch(`${API_BASE_URL}/api/tasks/status/Completed`);
        if (!response.ok) {
            throw new Error('Failed to fetch completed applications');
        }
        return response.json();
    },

    markTaskAsComplete: async (taskId: string) => {
        const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/complete`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to mark task as complete');
        }
        return response.json();
    }
};