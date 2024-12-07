"use client"
import Card from "@/app/components/Tasks_Components/Card";
import { CardsData } from "@/app/components/Tasks_Components/CardsData";
import React, { useState } from 'react'
import Header from '@/app/components/Tasks_Components/Header'
import TaskTable from '@/app/components/Tasks_Components/Table'
import CreateTaskForm from '@/app/components/Tasks_Components/CreateTaskForm'

const Task: React.FC = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const openForm = () => {
      setIsFormOpen(true);
    };
  
    const closeForm = () => {
      setIsFormOpen(false);
    };
  return (
    <div className='bg-white'>
        <Header />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
        <p className='text-xl w-full font-medium pt-8 pl-8'>Task List</p>
        <TaskTable />

              {/* Conditional rendering for modal */}
      {isFormOpen && (
        <div>
          <CreateTaskForm onClose={closeForm} />
        </div>
      )}
    </div>
  )
}
export default Task;