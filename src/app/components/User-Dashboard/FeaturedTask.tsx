"use client";

import React, { useEffect, useState } from "react";
import mockData from './mockData.json';

interface Task {
  status: string;
  description: string;
  date: string;
  amount: string;
  platform: string;
}

const TaskActivities: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    // Fetch data from the mock JSON file
    setTasks(mockData.taskActivities);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6 border 
      border-transparent hover:border-4 hover:border-blue-600 font-mulish mx-4">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-black mb-2">Featured Task</h1>
      </div>

      {/* Tasks Activities Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Tasks Activities</h2>
        <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
          Go to Task Page &rarr;
        </a>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Complete the tasks below to improve your rating
      </p>

      {/* Task List */}
      <div className="grid grid-cols-5 gap-4 items-start">
        {/* Status Column */}
        <div className="col-span-1">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center gap-2 h-16">
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${
                  task.status === "Cancelled" ? "bg-red-500" : "bg-yellow-500"
                }`}
              ></span>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-md ${
                  task.status === "Cancelled"
                    ? "bg-red-100 text-red-500"
                    : "bg-yellow-100 text-yellow-500"
                }`}
              >
                {task.status}
              </span>
            </div>
          ))}
        </div>

        {/* Description Column */}
        <div className="col-span-2 ml-24 sm:ml-4">
          {tasks.map((task, index) => (
            <div key={index} className="h-16 flex flex-col justify-center">
              <p className="text-sm font-medium text-gray-900 truncate">{task.description}</p>
              <p className="text-xs text-gray-500">{task.date}</p>
            </div>
          ))}
        </div>

        {/* Amount Column */}
        <div className="col-span-1 ml-0 mr-10 sm:mr-2">
          {tasks.map((task, index) => (
            <div key={index} className="h-16 flex items-center">
              <p className="text-sm font-medium text-gray-900">{task.amount}</p>
            </div>
          ))}
        </div>

        {/* Platform Column */}
        <div className="col-span-1">
          {tasks.map((task, index) => (
            <div key={index} className="h-16 flex items-center">
              <p className="text-sm text-gray-500">{task.platform}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskActivities;
