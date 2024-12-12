import React from "react";

const SearchByDate: React.FC = () => {
  return (
    <div className="max-w-full bg-white rounded-lg shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold">Search by Date</h2>
      <div  className="flex gap-2 items-center justify-between">
        <label className="text-sm text-gray-700 font-bold w-1/2">Date Range:</label>
        <div className="flex items-center space-x-2 mt-1">
          <input
            type="text"
            placeholder="MM.DD.YYYY"
            className="border border-gray-300 rounded-md p-2 w-1/2"
          />
          <span>→</span>
          <input
            type="text"
            placeholder="MM.DD.YYYY"
            className="border border-gray-300 rounded-md p-2 w-1/2"
          />
        </div>
      </div>
      <div  className="flex gap-2 items-center justify-between">
        <label className="text-sm text-gray-700 font-bold">From:</label>
        <div className="flex items-center mt-1 space-x-12">
          <button className="border border-gray-300 rounded-md p-2">
            ←
          </button>
          <span className="text-gray-800 font-bold text-sm">February 2024</span>
          <button className="border border-gray-300 rounded-md p-2">
            →
          </button>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <label className="text-sm text-gray-700 font-bold">To:</label>
        <div className="flex items-center mt-1 space-x-12">
          <button className="border border-gray-300 rounded-md p-2">
            ←
          </button>
          <span className="text-gray-800 font-bold text-sm">October 2022</span>
          <button className="border border-gray-300 rounded-md p-2">
            →
          </button>
        </div>
      </div>
      <div className="flex justify-between space-x-4">
        <button className="px-8 py-2 w-full border border-gray-300 rounded-md text-gray-600">
          Cancel
        </button>
        <button className="px-8 py-2 w-full bg-blue-600 text-white rounded-md">
          Apply
        </button>
      </div>
    </div>
  );
};

export default SearchByDate;
