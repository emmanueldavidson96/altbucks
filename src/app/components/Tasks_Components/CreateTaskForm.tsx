'use client';

import { useState } from 'react';
import {
    ArrowLeft,
    Type,
    Tag,
    Users,
    FileText,
    MapPin,
    DollarSign,
    Calendar,
    CheckSquare,
    Upload,
    Link as LinkIcon,
    X,
    Trash2,
    File
} from 'lucide-react';
import { useTaskOperations } from '@/hooks/useTaskOperations';
import { toast } from 'sonner';

export function CreateTaskForm({ isOpen, onClose }) {
    if (!isOpen) return null;

    const {createTask, fetchRecentTasks} = useTaskOperations();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        taskType: '',
        description: '',
        requirements: '',
        location: '',
        compensation: {
            amount: '',
            currency: 'USD'
        },
        deadline: '',
        maxRespondents: '0-5',
        attachments: {
            files: [],
            links: ['', '']
        }
    });

    const handleFileUpload = async (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;

        // Check file sizes
        const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
        const oversizedFiles = files.filter(file => file.size > MAX_FILE_SIZE);
        if (oversizedFiles.length > 0) {
            toast.error('Some files exceed the 5MB limit');
            return;
        }

        setLoading(true);
        try {
            const filePromises = files.map(file => new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve({
                        url: reader.result,
                        type: file.type,
                        size: file.size,
                        name: file.name // Adding name for display purposes
                    });
                };
                reader.readAsDataURL(file);
            }));

            const processedFiles = await Promise.all(filePromises);
            setForm(prev => ({
                ...prev,
                attachments: {
                    ...prev.attachments,
                    files: [...prev.attachments.files, ...processedFiles]
                }
            }));
        } catch (error) {
            toast.error('Error uploading files');
            console.error('File upload error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileRemove = (index) => {
        setForm(prev => ({
            ...prev,
            attachments: {
                ...prev.attachments,
                files: prev.attachments.files.filter((_, i) => i !== index)
            }
        }));
    };

    const handleLinkChange = (index, value) => {
        setForm(prev => ({
            ...prev,
            attachments: {
                ...prev.attachments,
                links: prev.attachments.links.map((link, i) =>
                    i === index ? value : link
                )
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Transform the data to match  schema
            const taskData = {
                title: form.title.trim(),
                taskType: form.taskType,
                description: form.description.trim(),
                requirements: form.requirements.trim(),
                location: form.location || '',
                compensation: {
                    amount: Number(form.compensation.amount),
                    currency: form.compensation.currency
                },
                deadline: new Date(form.deadline).toISOString(),
                maxRespondents: parseInt(form.maxRespondents.split('-')[1]) || 5,
                attachments: {
                    files: form.attachments.files.map(file => ({
                        url: file.url,
                        type: file.type,
                        size: file.size
                    })),
                    links: form.attachments.links.filter(link => link.trim() !== '')
                },
                status: 'Open'
            };

            await createTask(taskData);
            await fetchRecentTasks();
            toast.success('Task created successfully');
            onClose();
        } catch (error) {
            console.error('Error creating task:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to create task');
        } finally {
            setLoading(false);
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const inputClass = `
        w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl
        focus:border-blue-500 focus:ring-2 focus:ring-blue-50 
        transition-all duration-200 ease-in-out
        text-gray-800 placeholder:text-gray-400
        hover:border-gray-300
    `;

    const labelClass = `
        block text-sm font-medium text-gray-700 mb-2 
        flex items-center gap-2 tracking-wide
    `;

    return (
        <div
            className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm flex items-start justify-center z-50 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-4xl my-8 mx-4 shadow-2xl">
                {/* Header */}
                <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={onClose}
                            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"/>
                            <span>Back</span>
                        </button>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-5 h-5"/>
                        </button>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-2xl font-semibold text-gray-900">Create a New Task</h1>
                        <p className="text-base text-gray-600 mt-2">Fill in the details below to post your task</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    <div className="space-y-8">
                        {/* Basic Information */}
                        <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">Basic Information</h2>
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <label className={labelClass}>
                                        <Type className="w-4 h-4 text-blue-500"/>
                                        Task Title
                                    </label>
                                    <input
                                        type="text"
                                        className={inputClass}
                                        placeholder="Enter a descriptive title"
                                        value={form.title}
                                        onChange={e => setForm(prev => ({...prev, title: e.target.value}))}
                                        required
                                        maxLength={100}
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>
                                        <Tag className="w-4 h-4 text-blue-500"/>
                                        Task Type
                                    </label>
                                    <select
                                        className={inputClass}
                                        value={form.taskType}
                                        onChange={e => setForm(prev => ({...prev, taskType: e.target.value}))}
                                        required
                                    >
                                        <option value="">Choose Task Type</option>
                                        <option value="writing">Writing</option>
                                        <option value="design">Design</option>
                                        <option value="development">Development</option>
                                        <option value="review">Review</option>
                                        <option value="vedio review">Video Review</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="vedio Editing">Video Editing</option>
                                        <option value="data analysis">Data Analysis</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>
                                        <Users className="w-4 h-4 text-blue-500"/>
                                        No of Respondents
                                    </label>
                                    <select
                                        className={inputClass}
                                        value={form.maxRespondents}
                                        onChange={e => setForm(prev => ({...prev, maxRespondents: e.target.value}))}
                                    >
                                        <option value="0-5">0-5</option>
                                        <option value="5-10">5-10</option>
                                        <option value="10+">10+</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">Task Details</h2>
                            <div>
                                <label className={labelClass}>
                                    <FileText className="w-4 h-4 text-blue-500"/>
                                    Task Description
                                </label>
                                <textarea
                                    className={`${inputClass} min-h-[120px] resize-none`}
                                    placeholder="Provide a detailed description of what needs to be done..."
                                    value={form.description}
                                    onChange={e => setForm(prev => ({...prev, description: e.target.value}))}
                                    required
                                />
                            </div>
                        </div>

                        {/* Task Parameters */}
                        <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">Task Parameters</h2>
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <label className={labelClass}>
                                        <MapPin className="w-4 h-4 text-blue-500"/>
                                        Location
                                    </label>
                                    <select
                                        className={inputClass}
                                        value={form.location}
                                        onChange={e => setForm(prev => ({...prev, location: e.target.value}))}
                                    >
                                        <option value="">Select Location</option>
                                        <option value="remote">Remote</option>
                                        <option value="onsite">Onsite</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>
                                        <DollarSign className="w-4 h-4 text-blue-500"/>
                                        Compensation
                                    </label>
                                    <div className="flex">
                                        <span
                                            className="inline-flex items-center px-4 bg-white border border-r-0 border-gray-200 rounded-l-xl text-gray-500">
                                            $
                                        </span>
                                        <input
                                            type="number"
                                            className="flex-1 px-4 py-3.5 bg-white border border-gray-200 rounded-r-xl
                                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-50
                                                     transition-all duration-200 ease-in-out"
                                            placeholder="Enter amount"
                                            value={form.compensation.amount}
                                            onChange={e => setForm(prev => ({
                                                ...prev,
                                                compensation: {...prev.compensation, amount: e.target.value}
                                            }))}
                                            min="0"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>
                                        <Calendar className="w-4 h-4 text-blue-500"/>
                                        Deadline
                                    </label>
                                    <input
                                        type="date"
                                        className={inputClass}
                                        value={form.deadline}
                                        onChange={e => setForm(prev => ({...prev, deadline: e.target.value}))}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">Requirements</h2>
                            <div>
                                <label className={labelClass}>
                                    <CheckSquare className="w-4 h-4 text-blue-500"/>
                                    Task Requirements
                                </label>
                                <textarea
                                    className={`${inputClass} min-h-[120px] resize-none`}
                                    placeholder="List specific requirements, skills, or qualifications needed..."
                                    value={form.requirements}
                                    onChange={e => setForm(prev => ({...prev, requirements: e.target.value}))}
                                    required
                                />
                            </div>
                        </div>

                        {/* Attachments */}
                        <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                            <h2 className="text-lg font-medium text-gray-900">Additional Information</h2>

                            {/* File Upload */}
                            <div>
                                <label className={labelClass}>
                                    <Upload className="w-4 h-4 text-blue-500"/>
                                    File Upload
                                </label>
                                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center
                                            hover:border-blue-500 transition-colors bg-white">
                                    <input
                                        type="file"
                                        multiple
                                        onChange={handleFileUpload}
                                        className="hidden"
                                        id="file-upload"
                                        accept="image/*,.pdf,.doc,.docx"
                                    />
                                    <label htmlFor="file-upload" className="cursor-pointer">
                                        <Upload className="w-8 h-8 mx-auto mb-4 text-blue-500"/>
                                        <span className="block text-blue-600 font-medium mb-1">Upload a file</span>
                                        <span className="text-sm text-gray-500">or drag and drop</span>
                                        <p className="text-xs text-gray-400 mt-2">PNG, JPG, PDF, DOC up to 5MB</p>
                                    </label>
                                </div>

                                {/* File List */}
                                {form.attachments.files.length > 0 && (
                                    <div className="mt-4 space-y-2">
                                        {form.attachments.files.map((file, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <File className="w-5 h-5 text-blue-500"/>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-700">
                                                            {file.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            {formatFileSize(file.size)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleFileRemove(index)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4"/>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                {/* Divider */}
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-gray-50 text-gray-500">OR</span>
                                    </div>
                                </div>

                                {/* Link Inputs */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[0, 1].map((index) => (
                                        <div key={index} className="relative">
                                            <LinkIcon className="w-4 h-4 absolute left-4 top-4 text-gray-400"/>
                                            <input
                                                type="url"
                                                className="pl-12 w-full px-4 py-3.5 bg-white border border-gray-200
                                                         rounded-xl focus:border-blue-500 focus:ring-2
                                                         focus:ring-blue-50 transition-all duration-200 ease-in-out"
                                                placeholder="Add file URL"
                                                value={form.attachments.links[index]}
                                                onChange={(e) => handleLinkChange(index, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl
                                     hover:bg-blue-700 font-medium transition-all duration-200
                                     disabled:bg-blue-400 disabled:cursor-not-allowed
                                     focus:outline-none focus:ring-2 focus:ring-blue-500
                                     focus:ring-offset-2 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="inline-block w-4 h-4 border-2 border-white/20
                                                   border-t-white rounded-full animate-spin"></span>
                                    <span>Creating Task...</span>
                                </>
                            ) : (
                                'Create Task'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}