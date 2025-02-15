"use client";

import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";

interface CardProps {
  title: string;
  category: string;
  description: string;
  earnings: number;
  deadline: string;
  posted: string;
}

const Card: React.FC<CardProps> = ({
  title,
  category,
  description,
  earnings,
  deadline,
  posted,
}) => {
  // State for modal visibility
  const [isModalOpen, setModalOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleDeleteUser = async (taskId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
  
    if (confirmDelete) {
      try {
        const response = await fetch(`https://authentication-1-bqvg.onrender.com/users/${taskId}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          console.log(`Task with ID ${taskId} deleted successfully!`);
          // Optionally, refresh the task list or update the state
        } else {
          console.error("Failed to delete task:", await response.text());
        }
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };
  

  // Prevent click events inside the modal from propagating to the backdrop
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className="border border-gray-300 font-Satoshi rounded-lg p-4 bg-white">
      <div className="flex flex-col space-y-4">
        <div className="pb-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-base">{title}</h2>
            <p className="text-black text-xs opacity-60">Posted: {posted}</p>
          </div>
          <p className="text-black text-sm opacity-50">{category}</p>
        </div>
        <p className="text-black text-sm opacity-70 line-clamp-3">
          {description}
        </p>
        <div className="flex justify-between gap-2 items-end text-sm text-black">
          <div className="flex flex-col space-y-2">
            <p className="text-black text-sm opacity-50">Earnings </p>
            <p className="text-md">${earnings}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-black text-sm opacity-50">Deadline</p>
            <p className="text-md">{deadline}</p>
          </div>
          <div className="flex flex-col justify-end">
            <button
              onClick={handleModalOpen}
              className="flex gap-2 justify-center text-blue-500 text-sm hover:underline self-start"
            >
              View Details <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
          onClick={handleModalClose}
        >
          <div
            className="max-w-2xl max-h-[90%] mx-auto bg-white shadow-lg rounded-lg p-8 overflow-auto"
            onClick={stopPropagation}
          >
            {/* Back Button */}
            <div className="mb-4 flex justify-between">
              <button
                className="text-black text-xs flex gap-1 items-center"
                onClick={handleModalClose}
              >
                <IoArrowBackOutline className="text-lg"/> Back
              </button>
              <div className="flex gap-2 justify-center items-center">
            {openDelete && 
            <button className="border px-2 rounded-md"
            // onClick={() => handleDeleteUser(task._id)}
            >Delete</button>}
            <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer mx-auto"
            onClick={() => setOpenDelete(!openDelete)}>
            <BsThreeDots className="text-lg"/>
            </div>
            </div>
            </div>

            {/* Header Section */}
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-500">Video Review</h1>
              <p className="text-black text-sm mt-1">Zebra Corps</p>
            </div>

            {/* Task Details */}
            <div className="mb-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-black">
                  <span>Task Type:</span> <span className="opacity-50">Review</span>
                </p>
                <p className="text-sm text-black">
                  <span>Earnings:</span> <span className="opacity-50">$40</span>
                </p>
                <p className="text-sm text-black">
                  <span>Deadline:</span> <span className="opacity-50">Oct 28, 2024</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2">Description</h2>
              <p className="text-black opacity-60 text-xs">
                Watch a 2-minute product video and provide a detailed review on
                its effectiveness in showcasing the product features. Your
                feedback should cover the clarity of the video, content quality,
                and suggestions for improvement.
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
                </div>
                <div>
                  <h3 className="font-semibold text-black text-xs">Criteria for Completion:</h3>
                  <ol className="list-decimal list-inside pl-4 text-black opacity-60 text-xs">
                    <li>
                      Complete the video review by answering all questions in
                      the feedback form.
                    </li>
                    <li>Submit feedback before the deadline.</li>
                    <li>
                      Provide at least 3 suggestions for improvement in the
                      video.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mb-6">
              <div className="space-y-2 flex justify-between items-center w-full md:w-1/2">
                <p className="flex flex-col gap-2">
                  <span className="font-semibold text-black text-sm">Video link:</span>{" "}
                  <a href="#" className="text-blue-800 text-sm underline">
                    This is a link.com
                  </a>
                </p>
                <p className="flex flex-col gap-1">
                  <span className="font-semibold text-black text-sm">Feedback Form link:</span>{" "}
                  <a href="#" className="text-blue-800 text-sm underline">
                    This is a link.com
                  </a>
                </p>
              </div>
            </div>

            {/* Start Task Button */}
            <div className="text-center">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white  py-2 text-sm  rounded-md">
                Start Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
