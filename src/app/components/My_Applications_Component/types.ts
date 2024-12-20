export interface Application {
    _id: string;
    userId: string;
    brand: string;
    taskType: string;
    earnings: number;
    appliedOn: string;
    deadline: string;
    status: string;
    description: string;
}

export type FilterState = {
    status: string;
    datePosted: string;
    taskType: string;
};


export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    application: Application;

}
export interface ApplicationHeroProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

 export interface ApplicationsListProps {
    applications: Application[];
}
