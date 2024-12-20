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
    title: string;
    taskType: string;
    description: string;
    requirements: string;
    location: string;
    compensation: {
        amount: number;
        currency: string;
    };
    deadline: string;
    maxRespondents: number;
}



export interface TaskCardProps {
    title: string;
    category: string;
    description: string;
    earnings: number;
    deadline: string;
    postedTime: string;
}

export interface TaskFilterProps {
    category?: string;
    datePosted?: string;
    priceRange?: string;
}