'use client';

import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';

export function CreateTaskForm({ isOpen, onClose }) {
    // Early return with client-side check to prevent hydration mismatch
    if (typeof window === 'undefined' || !isOpen) return null;

    const { createTask } = useTaskOperations();
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
        attachments: {
            files: [],
            links: []
        }
    });

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);

        const toastId = toast.loading('Creating task...');

        try {
            const taskData = {
                title: form.title,
                taskType: form.taskType.toLowerCase(),
                description: form.description,
                requirements: form.requirements,
                location: form.location || 'remote',
                compensation: {
                    amount: Number(form.amount),
                    currency: form.currency
                },
                deadline: new Date(form.deadline).toISOString(),
                maxRespondents: Number(form.respondents.split('-')[1]) || 5,
                status: 'Open'
            };

            await createTask(taskData);
            toast.success('Task created successfully', {
                id: toastId,
                description: `${taskData.title} has been created.`
            });
            onClose();
        } catch (error) {
            console.error('Error creating task:', error);
            toast.error('Failed to create task', {
                id: toastId,
                description: error instanceof Error ? error.message : 'Unknown error'
            });
        } finally {
            setLoading(false);
        }
    }, [form, createTask, onClose]);

    const handleFileUpload = useCallback((e) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).map((file) => ({
                url: URL.createObjectURL(file),
                type: file.type,
                size: file.size
            }));
            setForm((prev) => ({
                ...prev,
                attachments: {
                    ...prev.attachments,
                    files: [...prev.attachments.files, ...files]
                }
            }));
        }
    }, []);

    const handleLinkAdd = useCallback((e) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            setForm((prev) => ({
                ...prev,
                attachments: {
                    ...prev.attachments,
                    links: [...prev.attachments.links, e.currentTarget.value.trim()]
                }
            }));
            e.currentTarget.value = '';
        }
    }, []);

    const handleLinkRemove = useCallback((index) => {
        setForm((prev) => ({
            ...prev,
            attachments: {
                ...prev.attachments,
                links: prev.attachments.links.filter((_, i) => i !== index)
            }
        }));
    }, []);

    const handleFileRemove = useCallback((index) => {
        setForm((prev) => ({
            ...prev,
            attachments: {
                ...prev.attachments,
                files: prev.attachments.files.filter((_, i) => i !== index)
            }
        }));
    }, []);

    const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-gray-900 placeholder:text-gray-400";

    return (
        <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 overflow-y-auto">
            <div className="bg-white rounded-xl w-full max-w-3xl my-8 mx-4">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onClose}
                            className="flex items-center text-gray-600 hover:text-gray-900"
                        >
                            <ArrowLeft className="w-5 h-5 mr-1" />
                            Back
                        </button>
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">Create a New Task</h1>
                            <p className="text-sm text-gray-500 mt-1">Fill in the details below to post your task</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
                        <input
                            type="text"
                            className={inputClass}
                            placeholder="Enter a descriptive title for your task"
                            value={form.title}
                            onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Task Type</label>
                            <select
                                className={inputClass}
                                value={form.taskType}
                                onChange={(e) => setForm(prev => ({ ...prev, taskType: e.target.value }))}
                                required
                            >
                                <option value="">Choose Task Type</option>
                                {['Writing', 'Design', 'Development', 'Review'].map(type => (
                                    <option key={type} value={type.toLowerCase()}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">No of Respondents</label>
                            <select
                                className={inputClass}
                                value={form.respondents}
                                onChange={(e) => setForm(prev => ({ ...prev, respondents: e.target.value }))}
                            >
                                <option value="0-5">0-5</option>
                                <option value="5-10">5-10</option>
                                <option value="10+">10+</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Task Description</label>
                        <textarea
                            className={`${inputClass} min-h-[120px] resize-none`}
                            placeholder="Provide a detailed description of the task..."
                            value={form.description}
                            onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <select
                                className={inputClass}
                                value={form.location}
                                onChange={(e) => setForm(prev => ({ ...prev, location: e.target.value }))}
                            >
                                <option value="">Select Location</option>
                                <option value="remote">Remote</option>
                                <option value="onsite">Onsite</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Compensation</label>
                            <div className="flex">
                                <span className="flex items-center px-4 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg text-gray-500">$</span>
                                <input
                                    type="number"
                                    className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-r-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                    placeholder="Amount"
                                    value={form.amount}
                                    onChange={(e) => setForm(prev => ({ ...prev, amount: e.target.value }))}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                            <input
                                type="date"
                                className={inputClass}
                                value={form.deadline}
                                onChange={(e) => setForm(prev => ({ ...prev, deadline: e.target.value }))}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                        <textarea
                            className={`${inputClass} min-h-[120px] resize-none`}
                            placeholder="List the requirements for task completion..."
                            value={form.requirements}
                            onChange={(e) => setForm(prev => ({ ...prev, requirements: e.target.value }))}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700
                                 font-medium transition-colors disabled:bg-blue-400"
                    >
                        {loading ? 'Creating Task...' : 'Create Task'}
                    </button>
                </form>
            </div>
        </div>
    );
}