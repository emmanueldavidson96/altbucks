"use client";

import React, { useState } from "react";
import TaskDetails from "./TaskDetails";

interface CardProps {
  taskType: string;
  requirements?: string[];
  onTaskDeleted?: () => void;
  description: string;
  compensation: {
    currency: string;
    amount: number;
  };
  _id: string;
  title: string;
  category: string;
  deadline: string;
  posted: string;
}
const Card = (props: CardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
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

        {isModalOpen && (
            <TaskDetails
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                task={props}
                onTaskDeleted={props.onTaskDeleted}
            />
        )}
      </>
  );
};

export default Card;