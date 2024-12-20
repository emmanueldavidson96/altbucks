'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { ArrowLeft, Upload, PenLine, Users, MapPin, Calendar, FileText, Link } from 'lucide-react';
import { useTaskStore } from '@/zustand/store/useTaskStore';
import { CreateTaskFormProps } from './types';

export function CreateTaskForm({ isOpen, onClose }: CreateTaskFormProps) {
    if (!isOpen) return null;

    const { createTask } = useTaskStore();
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
        const toastId = toast.loading('Creating task...');

        try {
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

            await createTask(taskData);
            toast.success('Task created successfully');
            onClose();
        } catch (error) {
            toast.error('Failed to create task');
        } finally {
            toast.dismiss(toastId);
            setLoading(false);
        }
    };

    // Styles
    const inputBaseClass = "w-full bg-white border-2 rounded-xl px-4 py-3.5 text-gray-900 text-base transition-all duration-200 placeholder:text-gray-400 focus:outline-none";
    const inputStyle = `${inputBaseClass} border-indigo-100 hover:border-indigo-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10`;
    const selectStyle = `${inputStyle} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="%236366f1"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"%3E%3C/path%3E%3C/svg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-3xl my-8 mx-4 shadow-2xl border border-indigo-100">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-indigo-100 bg-gradient-to-r from-indigo-50/50 to-white rounded-t-2xl">
                    <div className="flex items-center gap-4">
                        <button onClick={onClose} className="inline-flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700 bg-white rounded-lg border border-indigo-100 hover:border-indigo-200 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="font-medium">Back</span>
                        </button>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Create a New Task</h2>
                            <p className="text-sm text-gray-600 mt-1">Fill in the details below</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-8 max-h-[80vh] overflow-y-auto">
                    {/* Basic Info */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <PenLine className="w-4 h-4 text-indigo-500" />
                            Task Title
                        </label>
                        <input
                            type="text"
                            className={inputStyle}
                            placeholder="Enter task title"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            required
                        />
                    </div>

                    {/* Type and Respondents */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <FileText className="w-4 h-4 text-indigo-500" />
                                Task Type
                            </label>
                            <select
                                className={selectStyle}
                                value={form.taskType}
                                onChange={(e) => setForm({ ...form, taskType: e.target.value })}
                                required
                            >
                                <option value="">Select Type</option>
                                {['Writing', 'Design', 'Development', 'Review'].map(type => (
                                    <option key={type} value={type.toLowerCase()}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <Users className="w-4 h-4 text-indigo-500" />
                                Respondents
                            </label>
                            <select
                                className={selectStyle}
                                value={form.respondents}
                                onChange={(e) => setForm({ ...form, respondents: e.target.value })}
                            >
                                {['0-5', '5-10', '10+'].map(range => (
                                    <option key={range} value={range}>{range}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <PenLine className="w-4 h-4 text-indigo-500" />
                            Description
                        </label>
                        <textarea
                            className={`${inputStyle} min-h-[120px]`}
                            placeholder="Task description..."
                            value={form.description}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                            required
                        />
                    </div>

                    {/* Location, Payment, Deadline */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <MapPin className="w-4 h-4 text-indigo-500" />
                                Location
                            </label>
                            <select
                                className={selectStyle}
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                            >
                                <option value="remote">Remote</option>
                                <option value="onsite">Onsite</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Payment Amount
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-4 bg-indigo-50 border-2 border-r-0 border-indigo-100 rounded-l-xl text-indigo-500 font-medium">
                                    $
                                </span>
                                <input
                                    type="number"
                                    className={`${inputBaseClass} rounded-l-none border-indigo-100`}
                                    placeholder="Amount"
                                    value={form.amount}
                                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <Calendar className="w-4 h-4 text-indigo-500" />
                                Deadline
                            </label>
                            <input
                                type="date"
                                className={inputStyle}
                                value={form.deadline}
                                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <FileText className="w-4 h-4 text-indigo-500" />
                            Requirements
                        </label>
                        <textarea
                            className={`${inputStyle} min-h-[120px]`}
                            placeholder="List requirements..."
                            value={form.requirements}
                            onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-4 px-4 rounded-xl hover:bg-indigo-700
                                 font-medium shadow-lg shadow-indigo-600/20 transition-all duration-200
                                 disabled:bg-indigo-400 disabled:shadow-none"
                    >
                        {loading ? 'Creating Task...' : 'Create Task'}
                    </button>
                </form>
            </div>
        </div>
    );
}