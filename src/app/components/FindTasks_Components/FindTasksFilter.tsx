'use client';

import { useState, useEffect } from 'react';
import { DateFilter } from '@/app/components/FindTasks_Components/Filters/DateFilter';
import { SkillsFilter } from '@/app/components/FindTasks_Components/Filters/SkillsFilter';
import { ApplicationsFilter } from '@/app/components/FindTasks_Components/Filters/ApplicationsFilter';
import { TaskPayFilter } from '@/app/components/FindTasks_Components/Filters/TaskPayFilter';
import { taskService } from '@/services/api/tasks';
import type { FilterState } from './types';

interface TasksFilterProps {
    onFilterChange: (filters: FilterState) => void;
}

const FindTasksFilter = ({ onFilterChange }: TasksFilterProps) => {
    const [filters, setFilters] = useState<FilterState>({
        datePosted: '',
        skills: [],
        applications: '',
        taskPay: ''
    });

    // Handle filter changes
    const handleFilterChange = async (newFilters: FilterState) => {
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    // Reset filters
    const clearFilters = () => {
        const resetFilters = {
            datePosted: '',
            skills: [],
            applications: '',
            taskPay: ''
        };
        setFilters(resetFilters);
        onFilterChange(resetFilters);
    };

    return (
        <div className="w-64 bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium text-gray-900">Filter</h3>
                <button
                    onClick={clearFilters}
                    className="text-red-600 text-sm hover:text-red-500"
                >
                    Clear all
                </button>
            </div>

            <div className="space-y-4">
                <DateFilter
                    value={filters.datePosted}
                    onChange={(date) => handleFilterChange({ ...filters, datePosted: date })}
                />
                <SkillsFilter
                    selected={filters.skills}
                    onChange={(skills) => handleFilterChange({ ...filters, skills })}
                />
                <ApplicationsFilter
                    value={filters.applications}
                    onChange={(apps) => handleFilterChange({ ...filters, applications: apps })}
                />
                <TaskPayFilter
                    value={filters.taskPay}
                    onChange={(pay) => handleFilterChange({ ...filters, taskPay: pay })}
                />
            </div>
        </div>
    );
};

export default FindTasksFilter;