"use client";

import React, { useState } from "react";
import TaskDetails from "./TaskDetails";
import { FaAngleRight } from "react-icons/fa6";

interface TaskDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  task: any;
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
    <div className="border border-gray-300 font-Satoshi rounded-lg p-4 bg-white">
          <div className="flex flex-col space-y-4">
            <div className="pb-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-md font-semibold line-clamp-1">{props.title}</h2>
                <p className="text-black text-xs opacity-60 whitespace-nowrap ml-2">Posted: {props.posted}</p>
              </div>
              <p className="text-gray-500 text-md mb-1">{props.taskType}</p>
              <p className="text-black text-sm opacity-50">{props.category}</p>
            </div>
            <p className="text-black text-sm opacity-70 line-clamp-3">
            {props.description}
            </p>
            <div className="flex justify-between gap-2 items-end text-sm text-black">
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm opacity-50">Earnings </p>
                <p className="text-md font-semibold opacity-90">${props.compensation?.amount?.toFixed(2) || '0.00'}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm opacity-50">Deadline</p>
                <p className="text-md">{formatDate(props.deadline)}</p>
              </div>
              <div className="flex flex-col justify-end">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex gap-2 justify-center text-blue-500 text-sm hover:underline self-start"
                >
                  View Details <FaAngleRight className="mt-1"/>
                </button>
              </div>
            </div>
          </div>
        </div>

    <TaskDetails
            isOpen={isModalOpen}
            onClose={handleClose}
            task={props}
        />

  
      </>
  );
};

export default Card;