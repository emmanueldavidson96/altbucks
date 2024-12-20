
import { X, Calendar, DollarSign, CheckCircle, Clock, FileText, ListChecks, ArrowRight } from 'lucide-react';
import { Application  , ModalProps } from './types';


export function ApplicationDetailsModal({ isOpen, onClose, application }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Animated Backdrop */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl
                          overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300">
                {/* Gradient Header */}
                <div className="bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 p-6">
                    <div className="flex justify-between items-start">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                                {application.brand}
                            </h2>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <p className="text-sm">{application.taskType}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-black/5 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="max-h-[calc(90vh-200px)] overflow-y-auto">
                    <div className="px-6 py-4">
                        {/* Status Banner */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full 
                                          font-medium text-sm transition-colors ${
                                application.status === 'Completed'
                                    ? 'bg-green-50 text-green-700 ring-1 ring-green-100'
                                    : 'bg-blue-50 text-blue-700 ring-1 ring-blue-100'
                            }`}>
                                <CheckCircle className="w-4 h-4" />
                                {application.status}
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100/80 transition-colors">
                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                    <DollarSign className="w-4 h-4" />
                                    <h3 className="font-medium">Payment</h3>
                                </div>
                                <p className="text-2xl font-bold text-gray-900">${application.earnings}</p>
                            </div>

                            <div className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100/80 transition-colors">
                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                    <Calendar className="w-4 h-4" />
                                    <h3 className="font-medium">Timeline</h3>
                                </div>
                                <div className="space-x-3">
                                    <span className="text-sm text-gray-600">{application.taskType}</span>
                                    <ArrowRight className="inline w-4 h-4 text-gray-400" />
                                    <span className="text-sm font-medium text-red-500">{application.deadline}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-3 text-gray-800">
                                <FileText className="w-4 h-4" />
                                <h3 className="font-semibold">Description</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{application.description}</p>
                        </div>

                        {/* Requirements Section */}
                        {application.details?.requirements && (
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-3 text-gray-800">
                                    <ListChecks className="w-4 h-4" />
                                    <h3 className="font-semibold">Requirements</h3>
                                </div>
                                <ul className="space-y-3">
                                    {application.details.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start gap-3 group">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                                {req}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Submission Format */}
                        {application.details?.submissionFormat && (
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3 text-gray-800">
                                    <FileText className="w-4 h-4" />
                                    <h3 className="font-semibold">Submission Format</h3>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg text-gray-600">
                                    {application.details.submissionFormat}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="w-full px-4 py-2.5 bg-white text-gray-700 rounded-lg
                                 border border-gray-200 hover:bg-gray-50
                                 font-medium transition-colors duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
