export type Application = {
    id: string;
    brand: string;
    taskType: string;
    status: 'Completed' | 'In Progress' | 'Pending';
    earnedAmount: number;
    startDate: string;
    dueDate: string;
    description: string;
    details?: {
        requirements: string[];
        submissionFormat: string;
        additionalNotes?: string;
    };
};

export type FilterState = {
    status: string;
    datePosted: string;
    taskType: string;
};