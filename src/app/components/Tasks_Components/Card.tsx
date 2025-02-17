// Card.tsx
"use client";

import React, { useState } from "react";
import TaskDetails from "./TaskDetails";

interface TaskDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  task: any;
  onTaskDeleted?: () => void;
}

const Card = (props: any) => {
  const [isModalOpen, setModalOpen] = useState(false);

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

  return (
      <>
        <div className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col h-full">
            <div className="pb-4 border-b border-gray-100">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{props.title}</h2>
                <p className="text-gray-500 text-xs whitespace-nowrap ml-2">Posted: {props.posted}</p>
              </div>
              <p className="text-gray-500 text-sm mb-1">{props.taskType}</p>
              <p className="text-gray-500 text-sm">{props.category}</p>
            </div>

            <div className="flex-grow">
              <p className="text-gray-600 text-sm line-clamp-2 my-4">{props.description}</p>

              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Earnings</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ${props.compensation?.amount?.toFixed(2) || '0.00'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm mb-1">Deadline</p>
                  <p className="text-gray-900 text-sm">{formatDate(props.deadline)}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <TaskDetails
            isOpen={isModalOpen}
            onClose={handleClose}
            task={props}
            onTaskDeleted={props.onTaskDeleted}
        />
      </>
  );
};

export default Card;