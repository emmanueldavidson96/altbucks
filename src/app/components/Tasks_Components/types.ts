
export interface Task {
    _id: string; // Changed from id to _id to match API response
    title: string;
    type: string;
    earnings: number;
    deadline: string;
    description: string;
    requirements: {
        instructions: string[];
        criteria: string[];
    };
}

export interface TaskDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    taskId: string;
    onDeleteTask: (taskId: string) => void;
    onMarkComplete: (taskId: string) => void;
    onMarkPending: (taskId: string) => void;
}

export interface RecentTaskCardProps {
    status: string;
    task: Task;
    onViewDetails: () => void;
}


export interface CreateTaskFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export  interface  MoreActionsMenuProps{
    taskId: string;
    onDeleteTask: (taskId: string) => void;
    onTaskUpdated?: () => void; // Optional callback to refresh task list
}
  export interface TaskList {
    _id: string;
    title: string;
    taskType: string;
    status: string;
    deadline: string;
    compensation: {
        amount: number;
        currency: string;
    };
}