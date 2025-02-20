"use client"
import React, { useState } from 'react';
import Header from '@/app/components/Tasks_Components/Header';
import RecentTasks from '@/app/components/Tasks_Components/RecentTasks';
import TaskTable from '@/app/components/Tasks_Components/Table';
import CreateTaskForm from '@/app/components/Tasks_Components/CreateTaskForm';

const Task: React.FC = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

    return (
        <>
        <Header />
      <div className='bg-white font-Satoshi'>
          <div className="flex justify-between items-center w-full p-8">
              <p className='text-xl font-medium'>Recent Posts</p>
              <button 
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
              onClick={openForm}
              >
                  Create a Task
                  </button>
          </div>
        <div className="bg-white px-8">
        
        <RecentTasks />
        
      </div>
          <p className='text-xl w-full font-medium pt-8 pl-8'>Task List</p>
          <TaskTable />
        {isFormOpen && (
          <div>
            <CreateTaskForm onClose={closeForm} />
          </div>
        )}
      </div>
      </>
    );
};

export default Task;