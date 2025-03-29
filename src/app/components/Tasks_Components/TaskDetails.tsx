"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X, MoreVertical } from "lucide-react";
import { useTaskStore } from "@/store/taskStore";
import { toast } from 'react-toastify';
import { IoArrowBackOutline } from "react-icons/io5";
import DeleteConfirmDialog from "./DeleteConfirmDialog";

interface TaskDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    task: {
        _id: string;
        title: string;
        taskType: string;
        description: string;
        compensation: {
            currency: string;
            amount: number;
        };
        deadline: string;
        posted: string;
        requirements: string | string[];
        link1?: string;  // Video Link
        link2?: string;  // Feedback Form Link
    };
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ isOpen, onClose, task }) => {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const deleteTask = useTaskStore((state) => state.deleteTask);
    const fetchTasks = useTaskStore((state) => state.fetchTasks);

    // Convert requirements to array if it's a string
    const requirementsList = Array.isArray(task.requirements)
        ? task.requirements
        : task.requirements ? [task.requirements] : [];

    if (!isOpen) return null;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    };

    const handleDelete = async () => {
        try {
            toast.info('Deleting task...', {
                autoClose: false,
                toastId: 'deleteTask'
            });

            await deleteTask(task._id);
            toast.dismiss('deleteTask');
            toast.success('Task deleted successfully');
            onClose();
            await fetchTasks();
        } catch (error) {
            console.error('Failed to delete task:', error);
            toast.dismiss('deleteTask');
            toast.error('Failed to delete task');
        }
    };

    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

    const modalContent = (
        <>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
          onClick={onClose}
        >
          <div
            className="w-[60%] max-h-[90%] mx-auto bg-white shadow-lg rounded-lg p-8 overflow-auto"
            onClick={stopPropagation}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="mb-4">
                <button
                    className="text-black text-xs flex gap-1 items-center"
                    onClick={onClose}
                >
                    <IoArrowBackOutline className="text-lg"/> Back
                </button>
                </div> 
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="hover:bg-gray-100 p-2 rounded-full"
                        >
                            <MoreVertical className="w-5 h-5 text-gray-500" />
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                                <button
                                    onClick={() => {
                                        setIsDeleteDialogOpen(true);
                                        setShowDropdown(false);
                                    }}
                                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"
                                >
                                    Delete Task
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
                    
            {/* Header Section */}
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-500">{task.title}</h1>
            </div>

            {/* Task Details */}
            <div className="mb-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-black">
                  <span>Task Type:</span> <span className="opacity-50">{task.taskType}</span>
                </p>
                <p className="text-sm text-black">
                  <span>Earnings:</span> <span className="opacity-50">${task.compensation?.amount.toFixed(2)}</span>
                </p>
                <p className="text-sm text-black">
                  <span>Deadline:</span> <span className="opacity-50">{formatDate(task.deadline)}</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2">Description</h2>
              <p className="text-black opacity-60 text-xs">
              {task.description}
              </p>
            </div>

            {/* Task Requirements */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2">Task Requirements</h2>
              <div className="text-gray-700 text-sm space-y-4">
                <div>
                  <h3 className="font-semibold text-black text-xs">Instructions:</h3>
                  <ol className="list-decimal list-inside pl-4 text-black opacity-60 text-xs">
                    <li>Watch the video using the provided link.</li>
                    <li>
                      Fill out the feedback form with detailed responses to the
                      questions asked.
                    </li>
                    <li>
                      Ensure you complete the task before the deadline to
                      receive your earnings.
                    </li>
                  </ol>
                  
                  {requirementsList.length > 0 && (
                    <div className="mt-4">
                    <ul className="space-y-2">
                    {requirementsList.map((req, index) => (
                    <li key={index} className="text-gray-600 flex gap-2">
                    <span className="text-blue-600">•</span>
                    {req}
                    </li>
                    ))}
                    </ul>
                    </div>
                    )}
                </div>
              </div>
            </div>

            {/* Links */}
            {(task.link1 || task.link2) && (
            <div className="mb-6">
              <div className="space-y-2 flex justify-between items-center w-full md:w-1/2">
              {task.link1 && (
                <p className="flex flex-col gap-2">
                  <span className="font-semibold text-black text-sm">Video link:</span>{" "}
                  <a href={task.link1} className="text-blue-800 text-sm underline">
                  Video Link
                  </a>
                </p>
            )}
            {task.link2 && (
                <p className="flex flex-col gap-1">
                  <span className="font-semibold text-black text-sm">Feedback Form link:</span>{" "}
                  <a href={task.link2} className="text-blue-800 text-sm underline">
                  Feedback Link
                  </a>
                </p>
                )}
              </div>
            </div>
)}
            {/* Start Task Button */}
            <div className="text-center">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white  py-2 text-sm  rounded-md">
                Start Task
              </button>
            </div>
          </div>
        </div>
        <DeleteConfirmDialog
            isOpen={isDeleteDialogOpen}
            onClose={() => setIsDeleteDialogOpen(false)}
            onConfirm={handleDelete}
            />
        </>
    );

    return createPortal(modalContent, document.body);
};

export default TaskDetails;