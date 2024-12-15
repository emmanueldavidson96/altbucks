'use client';

import { useState } from 'react';
import { taskService } from '@/services/api/tasks';

interface CreateTaskFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CreateTaskForm({ isOpen, onClose }: CreateTaskFormProps) {
    if (!isOpen) return null;

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        taskType: '',
        respondents: '0-5',
        description: '',
        location: '',
        amount: '',
        currency: 'USD',
        deadline: '',
        requirements: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const taskData = {
            title: form.title,
            taskType: form.taskType,
            description: form.description,
            requirements: form.requirements,
            location: form.location || 'remote',
            compensation: {
                amount: Number(form.amount),
                currency: form.currency
            },
            deadline: form.deadline,
            maxRespondents: Number(form.respondents.split('-')[1]) || 5
        };

        try {
            await taskService.createTask(taskData);
            onClose();
        } catch (error) {
            console.error('Error creating task:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 overflow-y-auto">
            <div className="bg-white rounded-xl w-full max-w-3xl my-8 mx-4 shadow-xl">
                <div className="flex items-center justify-between p-6 border-b bg-gray-50/80 rounded-t-xl">
                    <div className="flex items-center gap-2">
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 font-medium">
                            ← Back
                        </button>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Create a New Task</h2>
                            <p className="text-sm text-gray-600 mt-1">Fill in the details below to post your task and connect with the best professionals</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                    {/* Task Title */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Task Title</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                            placeholder="Enter a descriptive title for your task"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                        />
                    </div>

                    {/* Task Type and Respondents */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Task Type</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition duration-150"
                                value={form.taskType}
                                onChange={(e) => setForm({ ...form, taskType: e.target.value })}
                            >
                                <option value="">Choose Task Type</option>
                                <option value="writing">Writing</option>
                                <option value="design">Design</option>
                                <option value="development">Development</option>
                                <option value="review">Review</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">No of Respondents</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition duration-150"
                                value={form.respondents}
                                onChange={(e) => setForm({ ...form, respondents: e.target.value })}
                            >
                                <option value="0-5">0-5</option>
                                <option value="5-10">5-10</option>
                                <option value="10+">10+</option>
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Task Description</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] transition duration-150"
                            placeholder="Provide a detailed description of the task, including specific requirements..."
                            value={form.description}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                        />
                    </div>

                    {/* Location, Compensation, and Deadline */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Location Preference (Optional)</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition duration-150"
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                            >
                                <option value="">Select Your Location</option>
                                <option value="remote">Remote</option>
                                <option value="onsite">Onsite</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Compensation</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-4 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                                    $
                                </span>
                                <input
                                    type="number"
                                    className="flex-1 border border-gray-300 rounded-r-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                                    placeholder="Enter Amount"
                                    value={form.amount}
                                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Task Deadline</label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                                value={form.deadline}
                                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Task Requirements */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Task Requirements</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] transition duration-150"
                            placeholder="Provide detailed instructions and criteria for completion"
                            value={form.requirements}
                            onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                        />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Additional Information Upload (Optional)</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition duration-150">
                            <input type="file" className="hidden" id="file-upload" />
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <span className="text-blue-600 hover:text-blue-500">Upload a file</span>
                                <span className="text-gray-500"> or drag and drop</span>
                                <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
                            </label>
                        </div>
                    </div>

                    {/* Link Uploads */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Link Upload (1)</label>
                            <input
                                type="url"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                                placeholder="Add file URL"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Link Upload (2)</label>
                            <input
                                type="url"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                                placeholder="Add file URL"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors disabled:bg-blue-400"
                    >
                        {loading ? 'Creating...' : 'Create Task'}
                    </button>
                </form>
            </div>
        </div>
    );
}