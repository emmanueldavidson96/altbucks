'use client';

import React, { useState } from 'react';
import  TaskDetailsModal  from '../FindTasks_Components/TaskDetailsModal';

interface TaskCardProps {
    title: string;
    category: string;
    description: string;
    earnings: string;
    deadline: string;
    postedTime: string;
}

function TaskCard({ title, category, description, earnings, deadline, postedTime }: TaskCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="mb-2">
                    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">{category}</p>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="mt-auto">
                    <div className="flex items-center justify-between text-sm">
                        <div>
                            <span className="text-gray-500">Earnings</span>
                            <span className="text-gray-900 ml-2">{earnings}</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Deadline</span>
                            <span className="text-gray-900 ml-2">{deadline}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <span className="text-gray-400 text-xs">Posted {postedTime}</span>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                        >
                            View Details →
                        </button>
                    </div>
                </div>
            </div>

            <TaskDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                task={{
                    title,
                    type: category,
                    description,
                    amount: parseInt(earnings.replace('$', '')),
                    deadline
                }}
            />
        </>
    );
}

export function TasksSection() {
    const [searchQuery, setSearchQuery] = useState('');

    const tasks = [
        {
            title: "Write Blog Post",
            category: "Writing",
            description: "Create a well-researched blog post of 800-1000 words on the topic provided. Ensure the content is original, engaging, and optimized for SEO.",
            earnings: "$25",
            deadline: "Oct 25, 2024",
            postedTime: "3 hours ago"
        }
    ];

    // Filter tasks based on search query
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Search Section */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTasks.map((task, index) => (
                    <TaskCard key={index} {...task} />
                ))}
            </div>

            {/* Empty State */}
            {filteredTasks.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No tasks found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}