"use client"
import React, { useState } from 'react';
import Header from '@/app/components/Tasks_Components/Header';
import RecentTasks from '@/app/components/Tasks_Components/RecentTasks';
import TaskTable from '@/app/components/Tasks_Components/Table';
import CreateTaskForm from '@/app/components/Tasks_Components/CreateTaskForm';
import { Sparkles, PlusCircle } from 'lucide-react';

const Task: React.FC = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <>
            <Header />
            <div className="bg-white font-Satoshi">
                {/* Recent Posts Section with matching style */}
                <div className="relative">
                    {/* Decorative gradient backgrounds */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70" />
                    <div className="absolute -top-4 right-0 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                    <div className="absolute -top-4 left-0 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />

                    <div className="relative px-6 py-4">
                        <div className="flex justify-between items-center gap-3">
                            <div className="flex items-center gap-2.5">
                                <div className="p-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                                    <Sparkles className="w-4 h-4 text-blue-600" />
                                </div>
                                <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                                    Recent Posts
                                </h1>
                            </div>

                            <button
                                onClick={openForm}
                                className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full
                                         bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
                                         text-white font-medium tracking-wide
                                         shadow-lg shadow-blue-500/30
                                         hover:shadow-blue-500/50 hover:scale-[1.02]
                                         active:scale-[0.98]
                                         before:absolute before:inset-0
                                         before:bg-gradient-to-r before:from-white/20 before:via-white/20 before:to-transparent
                                         before:translate-x-[-100%] before:transition-transform before:duration-500
                                         hover:before:translate-x-[100%]
                                         transition-all duration-300 ease-out
                                         overflow-hidden"
                            >
                                <PlusCircle className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" />
                                <span>Create Task</span>
                                <div className="absolute inset-0 ring-2 ring-white/20 rounded-full"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-8 pb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <RecentTasks />
                    </div>
                </div>

                {/* Task List Section */}
                <div className="px-8 pb-8">
                    <div className="relative">
                        {/* Matching gradient background for consistency */}
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70" />
                        <div className="absolute -top-4 right-0 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                        <div className="absolute -top-4 left-0 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />

                        <div className="relative px-6 py-4">
                            <div className="flex items-center gap-2.5">
                                <div className="p-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                                    <Sparkles className="w-4 h-4 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                                    Task List
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <TaskTable />
                    </div>
                </div>

                {/* Create Task Form */}
                {isFormOpen && (
                    <div>
                        <CreateTaskForm onClose={closeForm} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Task;