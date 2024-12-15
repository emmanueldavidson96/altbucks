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