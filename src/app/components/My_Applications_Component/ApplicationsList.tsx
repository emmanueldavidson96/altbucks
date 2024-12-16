import { FileSearch } from 'lucide-react';
import type { Application } from './types';
import { ApplicationCard } from './ApplicationCard';

interface ApplicationsListProps {
    applications: Application[];
}

export function ApplicationsList({ applications }: ApplicationsListProps) {
    return (
        <div className="min-h-[400px]">
            {applications.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-in fade-in duration-500">
                    {applications.map((application) => (
                        <div key={application.id} className="transform hover:-translate-y-1 transition-all duration-300">
                            <ApplicationCard application={application} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 px-4">
                    <div className="bg-gray-50 p-4 rounded-full mb-4">
                        <FileSearch className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-gray-900 font-medium mb-1">
                        No Applications Found
                    </h3>
                    <p className="text-gray-500 text-sm text-center max-w-sm">
                        We couldn't find any applications matching your search criteria. Try adjusting your filters.
                    </p>
                </div>
            )}

            {/* Loading Skeleton Animation */}
            {!applications && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {[1, 2].map((index) => (
                        <div
                            key={index}
                            className="h-48 bg-gray-100 rounded-xl animate-pulse"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}