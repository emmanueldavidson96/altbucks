"use client"

import { useState } from "react";

interface CreateTaskFormProps {
    onClose: () => void; // Function to close the modal
  }

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted");
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the backdrop is clicked
    }
  };

  return (
    <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={handleBackdropClick}
  >
    <div className="p-8 bg-gray-50 flex items-center justify-center max-h-[80vh] overflow-y-auto"
    onClick={(e) => e.stopPropagation()}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full space-y-6 max-h-[80vh]"
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
            />
          </div>
          <div>
            <label htmlFor="taskType" className="block text-sm font-medium text-gray-700">
              Task Type
            </label>
            <select
              id="taskType"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Choose Task Type</option>
              <option>Writing</option>
              <option>Review</option>
              <option>Delivery</option>
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
              id="fileUpload"
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
