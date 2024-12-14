'use client';

import { useState } from 'react';
import { ApplicationHero } from '../components/My_Applications_Component/ApplicationHero';
import { ApplicationsList } from '../components/My_Applications_Component/ApplicationsList';
import type { Application } from '../components/My_Applications_Component/types';
import Header from '../components/Dashboard_Components/Header'

const dummyData: Application[] = [
    {
        id: '1',
        brand: 'Brand Alpha',
        taskType: 'Video Review',
        status: 'Completed',
        earnedAmount: 35,
        startDate: 'Oct 5, 2024',
        dueDate: 'Oct 15, 2024',
        description: 'Complete a detailed survey about customer service experiences at Brand Alpha stores. The survey includes questions on service speed, staff attitude, and overall satisfaction. Your responses will help improve the customer service process.',
        details: {
            requirements: [
                'Minimum 5 minutes video length',
                'Cover product features and usability',
                'Include pros and cons'
            ],
            submissionFormat: 'MP4 video file, 1080p resolution',
            additionalNotes: 'Please ensure good lighting and clear audio'
        }
    },
    {
        id: '2',
        brand: 'Brand Alpha',
        taskType: 'Customer Feedback Survey',
        status: 'In Progress',
        earnedAmount: 35,
        startDate: 'Oct 5, 2024',
        dueDate: 'Oct 15, 2024',
        description: 'Complete a detailed survey about customer service experiences at Brand Alpha stores. The survey includes questions on service speed, staff attitude, and overall satisfaction. Your responses will help improve the customer service process.',
        details: {
            requirements: [
                'Complete all sections',
                'Provide specific examples',
                'Include at least one constructive suggestion'
            ],
            submissionFormat: 'Online form submission'
        }
    }
];

export default function MyApplicationsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [applications] = useState<Application[]>(dummyData);

    const filteredApplications = applications.filter(app =>
        app.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.taskType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    {/* Content Container */}
                    <div className="py-6 md:py-8">
                        {/* Hero Section */}
                        <div className="mb-8">
                            <ApplicationHero
                                searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}
                            />
                        </div>

                        {/* Applications List Section */}
                        <div className="min-h-[400px]">
                            <ApplicationsList applications={filteredApplications} />
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Spacing */}
            <div className="h-8 md:h-12"></div>
        </div>
    );
}