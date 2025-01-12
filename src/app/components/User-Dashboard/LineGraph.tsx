"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import mockData from './mockData.json';

interface LineGraphData {
  name: string;
  uv: number;
  pv: number;
}

const LineGraph: React.FC = () => {
  const [data, setData] = useState<LineGraphData[]>([]);

  useEffect(() => {
    // Fetch data from the mock JSON file
    setData(mockData.lineGraphData);
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 border 
      border-transparent hover:border-4 hover:border-blue-600 h-auto">
      {/* Header Section */}
      <div className="flex justify-between">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-black">Task Earning Report</h2>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-0">
          <div className="flex gap-2 md:gap-4 mb-2 sm:mb-0">
            <button className="px-2 md:px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
              All time
            </button>
            <button className="px-2 md:px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
              30 Days
            </button>
            <button className="px-2 md:px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
              7 Days
            </button>
            <button className="px-2 md:px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
              Today
            </button>
          </div>
          <span className="text-gray-600 px-2 md:px-4 py-2 text-xs md:text-sm">June 2021</span>
        </div>

        {/* Export Button */}
        <button className="flex items-center bg-gray-100 text-gray-600 px-1.5 py-1.5 sm:px-1 sm:py-2 
        md:px-4 md:py-2 rounded-md shadow hover:bg-gray-200 h-8 sm:h-auto ml-3">
          <span className="mr-1 text-xs sm:text-sm md:text-base">Export PDF</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-8m-6-9l6 6m-6-6v6"
            />
          </svg>
        </button>
      </div>

      {/* Line Chart */}
      <div className="mt-10 mb-1">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="bg-white" strokeDasharray="none" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;
