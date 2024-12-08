import React from 'react';

const TaskSummaryCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 w-[450px] h-[450px] mt-6 mx-6 border border-blue-600 hover:border-2 hover:border-blue-600 transition-all">
      {/* Encapsulated Task Total and Chart */}
      <div className="flex flex-col h-full justify-between relative">
        {/* Task Total Section */}
        <div className="w-full flex justify-between items-center pb-4 mt-5">
          <div>
            <h4 className="text-gray-500 text-sm font-medium">Task Total</h4>
            <p className="text-3xl font-bold text-blue-900">178</p>
          </div>
          {/* Info Icon */}
          <div className="text-gray-400 text-lg cursor-pointer">
            <i className="fas fa-info-circle" title="Task Total Information"></i>
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex justify-between items-center mt-4 px-16 py-16">
          {/* Chart */}
          <div className="relative">
            <svg viewBox="0 0 36 36" className="w-24 h-24">
              {/* Background Circle */}
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#E4E4E4"
                strokeWidth="2"
              />
              {/* Red Slice */}
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="53 47"
                strokeDashoffset="25"
              />
              {/* Blue Slice */}
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="43 57"
                strokeDashoffset="78"
              />
              {/* Green Slice */}
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="82 18"
                strokeDashoffset="121"
              />
            </svg>
          </div>

          {/* Labels Section */}
          <div className="flex flex-col space-y-2 ml-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-700 text-sm">Cancelled</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 text-sm">Pending</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 text-sm">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskSummaryCard;
