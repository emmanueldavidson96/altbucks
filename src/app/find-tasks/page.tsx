'use client';

import { useState } from 'react';
import Header from '../components/Dashboard_Components/Header'
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

    return (
        <div className="bg-white min-h-screen overflow-hidden">
            <Header/>
            <FindTasksHero />
            <div className="container mx-auto px-6 py-8">
                <div className="flex gap-8">
                    <FindTasksFilter onFilterChange={setFilters} />
                    <FindTasksList filters={filters} />
                </div>
            </div>
        </div>
    );
};

export default TasksPage;