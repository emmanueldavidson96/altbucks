'use client';

import React, { useState } from 'react';
import { Plus, Sparkles } from 'lucide-react';
import { CreateTaskForm } from './CreateTaskForm';

export function TasksHero() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <>
            <div className="relative">
                {/* Decorative gradient backgrounds - reduced further */}
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
                            onClick={() => setIsCreateModalOpen(true)}
                            className="group relative inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg
                                     hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-500/20
                                     hover:shadow-blue-500/30 hover:-translate-y-0.5"
                        >
                            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                            <span className="font-medium">Create Task</span>
                        </button>
                    </div>
                </div>
            </div>

            <CreateTaskForm
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </>
    );
}