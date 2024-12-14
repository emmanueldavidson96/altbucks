'use client';

import React, { useState } from 'react';
import { CreateTaskForm } from './CreateTaskForm';

export function TasksHero() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-semibold text-black">Recent Posts</h1>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                    Create a Task
                </button>
            </div>

            <CreateTaskForm
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </>
    );
}