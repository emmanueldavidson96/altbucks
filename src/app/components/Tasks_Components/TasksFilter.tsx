'use client';

import { useState } from 'react';
import { DateFilter } from './Filters/DateFilter';
import { SkillsFilter } from './Filters/SkillsFilter';
import { ApplicationsFilter } from './Filters/ApplicationsFilter';
import { TaskPayFilter } from './Filters/TaskPayFilter';
import type { FilterState } from './types';

const TasksFilter = () => {
    const [filters, setFilters] = useState<FilterState>({
        datePosted: '',
        skills: [],
        applications: '',
        taskPay: ''
    });

    return (
        <div className="w-64 bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium text-gray-900">Filter</h3>
                <button
                    onClick={() => setFilters({ datePosted: '', skills: [], applications: '', taskPay: '' })}
                    className="text-red-600 text-sm hover:text-red-500"
                >
                    Clear all
                </button>
            </div>

            <div className="space-y-4">
                <DateFilter
                    value={filters.datePosted}
                    onChange={(date) => setFilters({ ...filters, datePosted: date })}
                />
                <SkillsFilter
                    selected={filters.skills}
                    onChange={(skills) => setFilters({ ...filters, skills })}
                />
                <ApplicationsFilter
                    value={filters.applications}
                    onChange={(apps) => setFilters({ ...filters, applications: apps })}
                />
                <TaskPayFilter
                    value={filters.taskPay}
                    onChange={(pay) => setFilters({ ...filters, taskPay: pay })}
                />
            </div>
        </div>
    );
};

export default TasksFilter;