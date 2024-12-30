'use client';

import Header from '../components/Dashboard_Components/Header';
import { ApplicationHero } from '../components/My_Applications_Component/ApplicationHero';
import { ApplicationsList } from '../components/My_Applications_Component/ApplicationsList';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function MyApplicationsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <main className="p-4 md:p-6 max-w-7xl mx-auto">
                {/* Content Container */}
                <div className="space-y-6">
                    {/* Hero Section */}
                    <ApplicationHero />

                    {/* Applications List Section */}
                    <ErrorBoundary>
                        <ApplicationsList />
                    </ErrorBoundary>
                </div>
            </main>
        </div>
    );
}