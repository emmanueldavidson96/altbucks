'use client';

import Header from '../components/Dashboard_Components/Header';
import { TasksHero } from '../components/Tasks_Components/TasksHero';
import { RecentTasks } from '../components/Tasks_Components/TasksSection';
import { TasksList } from '../components/Tasks_Components/TasksList';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Suspense } from 'react';

const LoadingFallback = () => (
    <div className="min-h-[200px] flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
    </div>
);

export default function TasksPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-[1400px] mx-auto px-6 pt-6 pb-12">
                <TasksHero />
                <ErrorBoundary>
                    <div className="mt-8">
                        <Suspense fallback={<LoadingFallback />}>
                            <RecentTasks />
                        </Suspense>
                    </div>

                    <div className="mt-12">
                        <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                            <div className="w-1.5 h-12 bg-blue-500 rounded-full"/>
                            <h2 className="text-3xl font-bold text-gray-900">All Tasks</h2>
                        </div>
                        <Suspense fallback={<LoadingFallback />}>
                            <TasksList />
                        </Suspense>
                    </div>
                </ErrorBoundary>
            </main>
        </div>
    );
}