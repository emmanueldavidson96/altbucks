export interface Task {
    _id: string;
    title: string;
    taskType: string;
    description: string;
    compensation: {
        amount: number;
        currency: string;
    };
    status: TaskStatus;
    deadline: string;
    postedDate: string;
}

export type TaskStatus = 'Open' | 'In Progress' | 'Completed';

// RecentTaskCard Types
export interface RecentTaskCardProps {
    title: string;
    taskType: string;
    description: string;
    compensation: {
        amount: number;
        currency: string;
    };
    deadline: string;
    postedDate: string;
    onViewDetails: () => void;
}

// TaskList Types
export interface TaskListProps {
    tasks: Task[];
    loading: boolean;
    onSearch: (query: string) => void;
}

export interface TaskRowProps {
    title: string;
    taskType: string;
    status: TaskStatus;
    deadline: string;
    compensation: {
        amount: number;
        currency: string;
    };
}

// CreateTaskForm Types
export interface CreateTaskFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface TaskFormData {
    title: string;
    taskType: string;
    respondents: string;
    description: string;
    location: string;
    amount: string;
    currency: string;
    deadline: string;
    requirements: string;
}

// TasksHero Types
export interface TasksHeroProps {
    onCreateTask: () => void;
}