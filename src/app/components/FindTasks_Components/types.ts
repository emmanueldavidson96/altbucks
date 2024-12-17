export interface FindTask {
    title: string;
    category: string;  // "Writing", "Design", "Web Development" etc.
    postedTime: string;
    description: string;
    earnings: {
        amount: number;
        currency: string;
    };
    deadline: string;
}


export interface Task {
    _id: string;
    title: string;
    taskType: 'writing' | 'design' | 'development' | 'review';
    description: string;
    requirements: string;
    compensation: {
        amount: number;
        currency: string;
    };
    deadline: Date;
    status: 'Open' | 'In Progress' | 'Completed';
    attachments?: {
        files: Array<{
            url: string;
            type: string;
            size: number;
        }>;
        links: string[];
    };
    postedDate: Date;
}




export interface TaskCardProps {
    title: string;
    category: string;
    description: string;
    earnings: number;
    deadline: string;
    postedTime: string;
    onViewDetails: () => void;
}

export interface TaskFilterProps {
    category?: string;
    datePosted?: string;
    priceRange?: string;
}