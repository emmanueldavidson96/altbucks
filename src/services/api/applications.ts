import { API_BASE_URL } from './config';

// Match the Task interface status type
type TaskStatus = 'Open' | 'In Progress' | 'Completed' | 'Pending';

interface Task {
    _id: string;
    title: string;
    taskType: string;
    description: string;
    requirements: string;
    location?: string;
    compensation: {
        amount: number;
        currency: string;
    };
    deadline: Date | string;
    maxRespondents: number;
    attachments?: {
        files: Array<{
            url: string;
            type: string;
            size: number;
        }>;
        links: string[];
    };
    status: TaskStatus;
    postedDate?: Date;
}



export const applicationService = {
    getCompletedApplications: async () => {
        try {
            console.log('Fetching completed applications from:', `${API_BASE_URL}/api/tasks/status/Completed`);
            const response = await fetch(`${API_BASE_URL}/api/tasks/status/Completed`);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Response not OK:', {
                    status: response.status,
                    statusText: response.statusText,
                    errorText
                });
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const data = await response.json();
            console.log('Completed tasks data:', data);
            return { data };
        } catch (error) {
            console.error('Detailed error in getCompletedApplications:', {
                error,
                message: error.message,
                stack: error.stack
            });
            throw error;
        }
    }
};