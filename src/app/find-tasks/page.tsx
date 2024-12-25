'use client';

import { useState, useCallback } from 'react';
import Header from '../components/Dashboard_Components/Header';
import FindTasksHero from '../components/FindTasks_Components/FindTasksHero';
import FindTasksFilter from '../components/FindTasks_Components/FindTasksFilter';
import FindTasksList from '../components/FindTasks_Components/FindTasksList';
import type { FilterState } from '../components/FindTasks_Components/types';

const TasksPage = () => {
    const [filters, setFilters] = useState<FilterState>({
        datePosted: '',
        skills: [],
        applications: '',
        taskPay: ''
    });

    const handleFilterChange = useCallback((newFilters: FilterState) => {
        setFilters(newFilters);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <Header />
            <FindTasksHero />
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <FindTasksFilter onFilterChange={handleFilterChange} />
                    </aside>
                    <main className="flex-1">
                        <FindTasksList filters={filters} />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default TasksPage;