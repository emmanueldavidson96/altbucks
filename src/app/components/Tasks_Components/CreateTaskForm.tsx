"use client"

import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { toast } from 'react-toastify';

interface CreateTaskFormProps {
    onClose: () => void; 
  }

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);

    const [isModalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [taskType, setTaskType] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [compensation, setCompensation] = useState("");
    const [deadline, setDeadline] = useState("");
    const [requirements, setRequirements] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState<File | null>(null);
    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [loading, setLoading] = useState(false);
  
    // const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Ensure loading state is set before making the request

    try {
        const response = await fetch("https://authentication-1-bqvg.onrender.com/tasks/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              taskType,
              description,
              location,
              compensation,
              deadline,
              requirements,
              additionalInfo,
              link1,
              link2
            }),
        });

        const data = await response.json(); // Move this outside of the fetch call

        if (response.ok) {
            toast.success("Task created successfully");
        } else {
            throw new Error(data.message || "Task creation failed. Please try again.");
        }
    } catch (error: any) {
        toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
        setLoading(false);
    }
};


  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div
    className="fixed inset-0 bg-black bg-opacity-50 font-Satoshi flex items-center justify-center z-50 px-4"
    onClick={handleBackdropClick}
  >
    <div className="max-w-2xl max-h-[90%] mx-auto bg-white shadow-lg rounded-lg p-8 overflow-y-auto"
    onClick={(e) => e.stopPropagation()}
    >
      {/* Back Button */}
      <div className="mb-4">
        <button
          className="text-black text-xs flex gap-1 items-center"
          onClick={handleModalClose}
        >
          <IoArrowBackOutline className="text-lg"/> Back
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl max-h-[90%] mx-auto bg-white rounded-lg overflow-auto space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Create a New Task</h2>
        <p className="text-sm text-gray-500">
          Fill in the details below to post your task and connect with the best professionals
        </p>

        {/* Task Title and Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700">
              Task Title
            </label>
            <input
              type="text"
              id="taskTitle"
              placeholder="Enter a descriptive title for your task"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="taskType" className="block text-sm font-medium text-gray-700">
              Task Type
            </label>
            <select
              id="taskType"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
            >
              <option value="">Choose Task Type</option>
              <option value="writing">Writing</option>
              <option value="review">Review</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
        </div>

        {/* Task Description */}
        <div>
          <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700">
            Task Description
          </label>
          <textarea
            id="taskDescription"
            placeholder="Provide a detailed description of the task, including specific requirements..."
            className="mt-1 p-2 border border-gray-300 rounded-md w-full h-28 focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Location, Compensation, and Deadline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location Preference (Optional)
            </label>
            <select
              id="location"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Select Your Location</option>
              <option>Remote</option>
              <option>On-Site</option>
            </select>
          </div>
          <div>
            <label htmlFor="compensation" className="block text-sm font-medium text-gray-700">
              Compensation
            </label>
            <div className="flex items-center mt-1">
              <span className="p-2 border border-gray-300 rounded-l-md bg-gray-100">$</span>
              <input
                type="text"
                id="compensation"
                placeholder="Enter Amount"
                className="p-2 border-t border-b border-r border-gray-300 rounded-r-md w-full focus:ring-blue-500 focus:border-blue-500"
                value={compensation}
                onChange={(e) => setCompensation(e.target.value)}
              />
              <select
                className="ml-2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
              Task Deadline
            </label>
            <div className="flex items-center mt-1">
              <input
                type="date"
                id="deadline"
                className="p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Task Requirements */}
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
            Task Requirements
          </label>
          <textarea
            id="requirements"
            placeholder="Provide detailed instructions and criteria for completion"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full h-28 focus:ring-blue-500 focus:border-blue-500"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Information Upload (Optional)
          </label>
          <div className="mt-2 border-dashed border-2 border-gray-300 p-4 rounded-md text-center">
            <input
              type="file"
              // id="fileUpload"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer text-blue-500 hover:underline"
            >
              {file ? file.name : "Upload a file or drag and drop"}
            </label>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
          </div>
        </div>

        {/* Link Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="link1" className="block text-sm font-medium text-gray-700">
              Link Uploads (1)
            </label>
            <input
              type="url"
              id="link1"
              placeholder="Add file URL"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="link2" className="block text-sm font-medium text-gray-700">
              Link Uploads (2)
            </label>
            <input
              type="url"
              id="link2"
              placeholder="Add file URL"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Create Task
        </button>
      </form>
    </div>
</div>
  );
};

export default CreateTaskForm;
