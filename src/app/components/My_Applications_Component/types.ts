export interface Application {
    _id: string;
    brand: string;
    taskType: string;
    status: string;
    earnings: number;
    appliedOn: string;
    deadline: string;
    description: string;
}

export interface ApplicationsListProps {
    applications: Application[];
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
