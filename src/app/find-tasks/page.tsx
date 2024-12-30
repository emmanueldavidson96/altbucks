'use client';

import Header from '../components/Dashboard_Components/Header';
import FindTasksHero from '../components/FindTasks_Components/FindTasksHero';
import FindTasksFilter from '../components/FindTasks_Components/FindTasksFilter';
import { FindTasksList } from '../components/FindTasks_Components/FindTasksList';
import { TaskDetailsModal } from '../components/Tasks_Components/TaskDetailsModal';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function FindTasksPage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <FindTasksHero />
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <FindTasksFilter />
                    </aside>
                    <main className="flex-1">
                        <ErrorBoundary>
                            <FindTasksList />
                        </ErrorBoundary>
                    </main>
                </div>
            </div>
            <TaskDetailsModal />
        </div>
    );
}
