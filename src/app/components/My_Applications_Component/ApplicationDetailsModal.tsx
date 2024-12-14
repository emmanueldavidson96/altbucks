import { Application } from './types';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    application: Application;
}

export function ApplicationDetailsModal({ isOpen, onClose, application }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
                    {/* Modal Header */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">{application.brand}</h2>
                                <p className="text-sm text-gray-500 mt-1">{application.taskType}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                            >
                                ×
                            </button>
                        </div>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 space-y-6">
                        {/* Status */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Status</h3>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                                application.status === 'Completed'
                                    ? 'bg-green-50 text-green-700'
                                    : 'bg-blue-50 text-blue-700'
                            }`}>
                {application.status}
              </span>
                        </div>

                        {/* Payment */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Payment</h3>
                            <p className="text-sm text-gray-600">${application.earnedAmount}</p>
                        </div>

                        {/* Timeline */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Timeline</h3>
                            <div className="flex gap-4 text-sm">
                                <span className="text-gray-600">Start: {application.startDate}</span>
                                <span className="text-red-500">Due: {application.dueDate}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Description</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{application.description}</p>
                        </div>

                        {/* Requirements */}
                        {application.details?.requirements && (
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Requirements</h3>
                                <ul className="list-disc pl-4 space-y-1">
                                    {application.details.requirements.map((req, index) => (
                                        <li key={index} className="text-sm text-gray-600">{req}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Submission Format */}
                        {application.details?.submissionFormat && (
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Submission Format</h3>
                                <p className="text-sm text-gray-600">{application.details.submissionFormat}</p>
                            </div>
                        )}
                    </div>

                    {/* Modal Footer */}
                    <div className="p-6 border-t border-gray-200 flex justify-end">
                        <button
                            onClick={onClose}
                            className="text-sm px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}