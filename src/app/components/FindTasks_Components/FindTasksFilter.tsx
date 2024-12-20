import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { DateFilter } from '@/app/components/FindTasks_Components/Filters/DateFilter';
import { SkillsFilter } from '@/app/components/FindTasks_Components/Filters/SkillsFilter';
import { ApplicationsFilter } from '@/app/components/FindTasks_Components/Filters/ApplicationsFilter';
import { TaskPayFilter } from '@/app/components/FindTasks_Components/Filters/TaskPayFilter';
import type { FilterState }from './types';

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

    const handleFilterChange = async (newFilters: FilterState) => {
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

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
        <div className="w-72 max-h-screen overflow-y-auto bg-white rounded-xl border border-gray-200 shadow-sm">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 bg-white">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-500" />
                        <h3 className="font-medium text-gray-900">Filters</h3>
                    </div>
                    <button
                        onClick={clearFilters}
                        className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1.5
                                 px-2.5 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                    >
                        <X className="w-4 h-4" />
                        Clear all
                    </button>
                </div>
            </div>

            {/* Filter Sections */}
            <div className="divide-y divide-gray-100">
                <div className="p-4 hover:bg-gray-50 transition-all duration-200">
                    <DateFilter
                        value={filters.datePosted}
                        onChange={(date) => handleFilterChange({ ...filters, datePosted: date })}
                    />
                </div>

                <div className="p-4 hover:bg-gray-50 transition-all duration-200">
                    <SkillsFilter
                        selected={filters.skills}
                        onChange={(skills) => handleFilterChange({ ...filters, skills })}
                    />
                </div>

                <div className="p-4 hover:bg-gray-50 transition-all duration-200">
                    <ApplicationsFilter
                        value={filters.applications}
                        onChange={(apps) => handleFilterChange({ ...filters, applications: apps })}
                    />
                </div>

                <div className="p-4 hover:bg-gray-50 transition-all duration-200">
                    <TaskPayFilter
                        value={filters.taskPay}
                        onChange={(pay) => handleFilterChange({ ...filters, taskPay: pay })}
                    />
                </div>
            </div>
        </div>
    );
};

export default FindTasksFilter;