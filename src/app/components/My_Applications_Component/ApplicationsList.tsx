import type { Application } from './types';
import { ApplicationCard } from './ApplicationCard';

interface ApplicationsListProps {
    applications: Application[];
}

export function ApplicationsList({ applications }: ApplicationsListProps) {
    return (
        <div className="grid grid-cols-2 gap-6">
            {applications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
            ))}

            {applications.length === 0 && (
                <div className="col-span-2 text-center py-12">
                    <p className="text-gray-500">No applications found matching your search.</p>
                </div>
            )}
        </div>
    );
}