export interface Task {
    id: string;
    title: string;
    category: string;
    description: string;
    earnings: number;
    deadline: string;
    postedTime: string;
}

export interface FilterState {
    datePosted: string;
    skills: string[];
    applications: string;
    taskPay: string;
}