export interface Task {
    id: string;
    title: string;
    description: string;
    type: string;
    platform: string;
    amount: number;
    status: 'pending' | 'completed' | 'cancelled' | 'under review' | 'approved';
    createdAt: string;
    performedAt?: string;
}

export interface FilterState {
    datePosted: string;
    type: string[];
    status: string;
    amountRange: string;
}