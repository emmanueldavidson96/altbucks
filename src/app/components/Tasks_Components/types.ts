
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

// export interface TaskDetailsProps {
//     isOpen: boolean;
//     onClose: () => void;
//     taskId: string;
//     onDeleteTask: (taskId: string) => Promise<boolean>;
//     onMarkComplete?: (taskId: string) => Promise<boolean>;
//     onMarkPending?: (taskId: string) => Promise<boolean>;
// }

export interface RecentTaskCardProps {
    task: {
        _id: string;
        title: string;
        type: string;
        description: string;
        earnings: number;
        deadline: string;
        status: string;
    };
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