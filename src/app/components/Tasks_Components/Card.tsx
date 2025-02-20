"use client";

import React, { useState } from "react";
import TaskDetails from "./TaskDetails";
import { FaAngleRight } from "react-icons/fa6";
import UpdateTaskForm from "./UpdateTaskForm";

interface Task {
  _id: string;
  title: string;
  taskType: string;
  category: string;
  description: string;
  posted: string;
  deadline: string;
  compensation: {
    amount: number;
    currency: string;
  };
  requirements: string;
  location: string;
  link1?: string;
  link2?: string;
  noOfRespondents: string;
}

interface TaskCardProps {
  _id: string;
  title: string;
  taskType: string;
  category: string;
  description: string;
  posted: string;
  deadline: string;
  compensation?: {
    amount: number;
    currency: string;
  };
  requirements: string;
  location: string;
  link1?: string;
  link2?: string;
  noOfRespondents: string;
}

const Card = (props: TaskCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [taskData, setTaskData] = useState<TaskCardProps>(props);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    console.log("Task updated in Card:", updatedTask);
    setTaskData(updatedTask);
    setIsUpdateOpen(false);
  };

  return (
      <>
        <div className="border border-gray-300 font-Satoshi rounded-lg p-4 bg-white">
          <div className="flex flex-col space-y-4">
            {/* Header Section */}
            <div className="pb-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-md font-semibold line-clamp-1">
                  {taskData.title}
                </h2>
                <p className="text-black text-xs opacity-60 whitespace-nowrap ml-2">
                  Posted: {taskData.posted}
                </p>
              </div>
              <p className="text-gray-500 text-md mb-1">{taskData.taskType}</p>
              <p className="text-black text-sm opacity-50">{taskData.category}</p>
            </div>

            {/* Description */}
            <p className="text-black text-sm opacity-70 line-clamp-3">
              {taskData.description}
            </p>

            {/* Footer Section */}
            <div className="flex justify-between gap-2 items-end text-sm text-black">
              {/* Earnings */}
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm opacity-50">Earnings</p>
                <p className="text-md font-semibold opacity-90">
                  ${taskData.compensation?.amount?.toFixed(2) || '0.00'}
                </p>
              </div>

              {/* Deadline */}
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm opacity-50">Deadline</p>
                <p className="text-md">
                  {taskData.deadline ? formatDate(taskData.deadline) : 'No deadline'}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-end">
                <button
                    onClick={() => setModalOpen(true)}
                    className="flex gap-2 justify-center text-blue-500 text-sm hover:underline self-start"
                >
                  View Details
                  <FaAngleRight className="mt-1" />
                </button>

                <button
                    onClick={() => setIsUpdateOpen(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm rounded-md mt-5"
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Task Details Modal */}
        <TaskDetails
            isOpen={isModalOpen}
            onClose={handleClose}
            task={taskData}
        />

        {/* Update Task Modal */}
        {isUpdateOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white w-[120vw] h-[80vh] p-6 rounded-lg shadow-lg overflow-auto">
                <UpdateTaskForm
                    onClose={() => setIsUpdateOpen(false)}
                    task={taskData}
                    onUpdate={handleTaskUpdate}
                />
              </div>
            </div>
        )}
      </>
  );
};

export default Card;