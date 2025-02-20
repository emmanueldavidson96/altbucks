"use client";

import React from 'react';
import { createPortal } from 'react-dom';

interface DeleteConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteConfirmDialog = ({ isOpen, onClose, onConfirm }: DeleteConfirmDialogProps) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Delete Task</h2>
                <p className="text-gray-600 mb-6">Are you sure you want to delete this task? This action cannot be undone.</p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DeleteConfirmDialog;