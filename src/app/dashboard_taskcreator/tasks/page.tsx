"use client";
import Header from '../../components/Task_Creator_Dashboard/Header';
import TasksCreatorTasksRecentPosts from '../../components/Task_Creator_Dashboard/TaskCreator-Tasks-RecentPosts';
import TaskCreatorTasksTaskList from '../../components/Task_Creator_Dashboard/TaskCreator-Tasks-TaskList';
import { API_URL } from '../../../lib/utils';
import { validateTaskFields } from '../../../lib/validation';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDropzone } from "react-dropzone";
import { FaArrowLeft } from "react-icons/fa6";
import { toast } from 'react-toastify';
import CountrySelect from '../../components/Task_Creator_Dashboard/CountrySelect';
import DateTimePicker from '../../components/Task_Creator_Dashboard/DateTimePicker';
import { NumericFormat } from 'react-number-format';

axios.defaults.withCredentials = true;

interface Task {
  taskTitle: string;
  taskType: string;
  taskNumberofRespondent: string;
  taskDescription: string;
  taskLocation: string;
  taskCompensation: string;
  taskDeadline: string;
  taskRequirements: string;
  taskLinkUpload: string;
  taskLinkUploadTwo: string;
  _id: string;
}

export default function Page() {
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [updateTaskModal, setUpdateTaskModal] = useState(false);
  const [taskDetails, setTaskDetails] = useState(false);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [newTask, setNewTask] = useState({
    taskTitle: "",
    taskType: "",
    taskNumberofRespondent: "",
    taskDescription: "",
    taskLocation: "",
    taskCompensation: "",
    taskDeadline: "",
    taskRequirements: "",
    taskLinkUpload: "",
    taskLinkUploadTwo: "",
  });

  const [taskInfo, setTaskInfo] = useState<Task | null>(null);
  const [updateTaskInfo, setUpdateTaskInfo] = useState<Task | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateTaskFields(newTask);
    if (validationErrors.length > 0) {
      validationErrors.forEach(error => toast.error(error));
      return;
    }

    try {
      // Skip duplicate check if server is returning errors
      try {
        console.log("Checking for existing task with title:", newTask.taskTitle);
        const checkResponse = await axios.get(
          `${API_URL}/tasks/check-task`,
          {
            params: {
              taskTitle: newTask.taskTitle,
              taskType: newTask.taskType
            },
            withCredentials: true
          }
        );

        console.log("Duplicate check response:", checkResponse.data);
        
        if (checkResponse.data?.exists === true) {
          toast.error("A task with this title and type already exists");
          return;
        } else if (checkResponse.data?.exists === false) {
          console.log("No duplicate task found, proceeding with creation");
        } else {
          console.warn("Unexpected response format from check-task endpoint");
        }
      } catch (checkError) {
        console.warn("Duplicate check failed:", checkError);
        console.log("Proceeding with task creation despite check failure");
      }

      const formData = new FormData();
      Object.entries(newTask).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await axios.post(
        `${API_URL}/tasks/create-task`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      console.log(response.data);
      toast.success("Task successfully created!");
      window.location.reload();
    } catch (err: unknown) {
      console.error(err);
      let errorMessage = "Task creation failed. Please try again.";
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) {
          errorMessage = "token error from backend exists";
        } else if (err.response?.status === 500) {
          errorMessage = "Server error occurred. Please try again later.";
        }
      }
      toast.error(errorMessage);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!updateTaskInfo) return;

    const validationErrors = validateTaskFields(updateTaskInfo);
    if (validationErrors.length > 0) {
      validationErrors.forEach(error => toast.error(error));
      return;
    }

    try {
      const formData = new FormData();
      if (updateTaskInfo) {
        Object.entries(updateTaskInfo).forEach(([key, value]) => {
          formData.append(key, value);
        });
      }

      const response = await axios.put(
        `${API_URL}/tasks/update-task/${updateTaskInfo?._id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      console.log(response.data);
      toast.success("Task successfully updated!");
      setUpdateTaskModal(false);
      window.location.reload();
    } catch (err: unknown) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "Task update failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  const initializeTask = (partialTask: Partial<Task>): Task => ({
    taskTitle: "",
    taskType: "",
    taskNumberofRespondent: "",
    taskDescription: "",
    taskLocation: "",
    taskCompensation: "",
    taskDeadline: "",
    taskRequirements: "",
    taskLinkUpload: "",
    taskLinkUploadTwo: "",
    _id: "temp-id",
    ...partialTask
  });

  return (
    <div className='relative z-10 h-fit flex flex-col gap-2 overflow-hidden'>
      <Header />
      <div className='flex flex-col gap-5 justify-between w-[85%] mx-auto mt-10'>
        <TasksCreatorTasksRecentPosts
          taskInfo={taskInfo} 
          setTaskInfo={setTaskInfo}
          taskDetails={taskDetails} 
          setTaskDetails={setTaskDetails}
          newTaskModal={newTaskModal} 
          setNewTaskModal={setNewTaskModal}
          updateTaskModal={updateTaskModal} 
          setUpdateTaskModal={setUpdateTaskModal}
          updateTaskInfo={updateTaskInfo} 
          setUpdateTaskInfo={setUpdateTaskInfo}
        />
        <TaskCreatorTasksTaskList />
      </div>

      {newTaskModal && (
        <div className='w-screen absolute z-30 top-0 left-0 right-0 h-screen bg-black opacity-95'>
          <form onSubmit={handleSubmit} className='bg-white rounded-lg p-8 h-[600px] overflow-y-scroll flex flex-col gap-4 w-[50%] mx-auto absolute top-[5%] left-[25%]'>
            <div className='w-fit flex items-center gap-4 cursor-pointer h-fit' onClick={() => setNewTaskModal(!newTaskModal)}>
              <FaArrowLeft size={20} />
              <p className='text-sm font-light'>Back</p>
            </div>
            <h3 className='font-bold text-xl mt-8'>Create a New Task</h3>
            <p className='text-sm text-gray-500'>Fill in the details below to post your task and connect with the best professionals</p>
            
            <div className='w-full flex justify-between'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Task Title</h3>
                <input
                  placeholder='Enter a descriptive title for your task...'
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setNewTask({
                    ...newTask, taskTitle: e.target.value
                  })}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Task Type</h3>
                <input
                  placeholder='Enter task type...'
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setNewTask({
                    ...newTask, taskType: e.target.value
                  })}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>No of Respondents</h3>
                <input
                  placeholder='0 - 20'
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setNewTask({
                    ...newTask, taskNumberofRespondent: e.target.value
                  })}
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold'>Task Description</h3>
              <textarea
                className='w-full h-[250px] rounded-md border border-gray-300 p-4'
                placeholder='Provide a detailed description of the task, including specific requirements...'
                onChange={(e) => setNewTask({
                    ...newTask, taskDescription: e.target.value
                  })}
              />
            </div>

            <div className='w-full flex justify-between'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Location Preference (Optional)</h3>
                <CountrySelect
                  onChange={(value: { value: string; label: string }) => setNewTask({
                    ...newTask, taskLocation: value.label
                  })}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Compensation</h3>
                <NumericFormat
                  placeholder="Enter Amount"
                  thousandSeparator={true}
                  prefix="$"
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onValueChange={(values: { value: string }) => setNewTask({
                    ...newTask, taskCompensation: values.value
                  })}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Task Deadline</h3>
                <DateTimePicker
                  selected={newTask.taskDeadline ? new Date(newTask.taskDeadline) : null}
                  onChange={(date: Date | null) => setNewTask({
                    ...newTask, taskDeadline: date ? date.toISOString() : ""
                  })}
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold'>Task Requirements</h3>
              <textarea
                className='w-full h-[250px] rounded-md border border-gray-300 p-4 text-sm'
                placeholder='Provide a detailed description of the task, including specific requirements...'
                onChange={(e) => setNewTask({
                    ...newTask, taskRequirements: e.target.value
                  })}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold'>Additional Information Upload (Optional)</h3>
              <div className='w-full h-[250px] flex items-center justify-center border border-gray-300 rounded-md' {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drag 'n' Drop some files here, or click to select files</p>
                ) : (
                  <div className='flex flex-col gap-3'>
                    <p className='text-sm text-gray-400'><span className='text-blue-400'>Upload a file</span> or drag and drop</p>
                    <p className='text-sm text-gray-400'>PNG, JPG, GIF up to 5MB</p>
                  </div>
                )}
              </div>
            </div>

            <p className='w-full text-center text-gray-300'>________________________________ {" "} OR {" "} _____________________________________________</p>
            
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1'>
                <h4>Link Uploads (1)</h4>
                <input
                  placeholder='Add file URL'
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setNewTask({
                    ...newTask, taskLinkUpload: e.target.value
                  })}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h4>Link Uploads (2)</h4>
                <input
                  placeholder='Add file URL'
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setNewTask({
                    ...newTask, taskLinkUploadTwo: e.target.value
                  })}
                />
              </div>
            </div>

            <div className='w-full h-fit'>
              <button type="submit" className='text-white bg-blue-500 h-[40px] w-full rounded-md text-sm'>
                Create Task
              </button>
            </div>
          </form>
        </div>
      )}

      {updateTaskModal && (
        <div className='w-screen absolute z-30 top-0 left-0 right-0 h-screen bg-black opacity-95'>
          <form onSubmit={handleUpdate} className='bg-white rounded-lg p-8 h-[600px] overflow-y-scroll flex flex-col gap-4 w-[50%] mx-auto absolute top-[5%] left-[25%]'>
            <div className='w-fit flex items-center gap-4 cursor-pointer h-fit' onClick={() => setUpdateTaskModal(!updateTaskModal)}>
              <FaArrowLeft size={20} />
              <p className='text-sm font-light'>Back</p>
            </div>
            <h3 className='font-semibold text-xl mt-8'>Update Task</h3>
            <p className='text-sm text-gray-500'>Fill in the details below to update your task</p>
            
            <div className='w-full flex justify-between'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Task Title</h3>
                <input 
                  value={updateTaskInfo?.taskTitle || ''}
                  placeholder='Enter a descriptive title for your task...' 
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskTitle: e.target.value} : initializeTask({taskTitle: e.target.value}))}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Task Type</h3>
                <input 
                  value={updateTaskInfo?.taskType || ''}
                  placeholder='Enter task type...' 
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskType: e.target.value} : initializeTask({taskType: e.target.value}))}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>No of Respondents</h3>
                <input 
                  value={updateTaskInfo?.taskNumberofRespondent || ''}
                  placeholder='0 - 20' 
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskNumberofRespondent: e.target.value} : initializeTask({taskNumberofRespondent: e.target.value}))}
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold'>Task Description</h3>
              <textarea 
                value={updateTaskInfo?.taskDescription || ''}
                className='w-full h-[250px] rounded-md border border-gray-300 p-4' 
                placeholder='Provide a detailed description of the task, including specific requirements...'
                onChange={(e) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskDescription: e.target.value} : initializeTask({taskDescription: e.target.value}))}
              />
            </div>

            <div className='w-full flex justify-between'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Location Preference (Optional)</h3>
                <CountrySelect
                  value={updateTaskInfo?.taskLocation ? {value: updateTaskInfo.taskLocation, label: updateTaskInfo.taskLocation} : undefined}
                  onChange={(value: { value: string; label: string }) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskLocation: value.label} : initializeTask({taskLocation: value.label}))}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Compensation</h3>
                <NumericFormat
                  value={updateTaskInfo?.taskCompensation || ''}
                  placeholder="Enter Amount"
                  thousandSeparator={true}
                  prefix="$"
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onValueChange={(values: { value: string }) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskCompensation: values.value} : initializeTask({taskCompensation: values.value}))}
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>Task Deadline</h3>
                <DateTimePicker
                  selected={updateTaskInfo?.taskDeadline ? new Date(updateTaskInfo.taskDeadline) : null}
                  onChange={(date: Date | null) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskDeadline: date ? date.toISOString() : ""} : initializeTask({taskDeadline: date ? date.toISOString() : ""}))}
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold'>Task Requirements</h3>
              <textarea 
                value={updateTaskInfo?.taskRequirements || ''}
                className='w-full h-[250px] rounded-md border border-gray-300 p-4 text-sm' 
                placeholder='Provide a detailed description of the task, including specific requirements...'
                onChange={(e) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskRequirements: e.target.value} : initializeTask({taskRequirements: e.target.value}))}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold'>Additional Information Upload (Optional)</h3>
              <div className='w-full h-[250px] flex items-center justify-center border border-gray-300 rounded-md' {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drag 'n' Drop some files here, or click to select files</p>
                ) : (
                  <div className='flex flex-col gap-3'>
                    <p className='text-sm text-gray-400'><span className='text-blue-400'>Upload a file</span> or drag and drop</p>
                    <p className='text-sm text-gray-400'>PNG, JPG, GIF up to 5MB</p>
                  </div>
                )}
              </div>
            </div>

            <p className='w-full text-center text-gray-300'>________________________________ {" "} OR {" "} _____________________________________________</p>
            
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1'>
                <h4>Link Uploads (1)</h4>
                <input 
                  value={updateTaskInfo?.taskLinkUpload || ''}
                  placeholder='Add file URL' 
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskLinkUpload: e.target.value} : initializeTask({taskLinkUpload: e.target.value}))}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h4>Link Uploads (2)</h4>
                <input 
                  value={updateTaskInfo?.taskLinkUploadTwo || ''}
                  placeholder='Add file URL' 
                  className='text-xs border border-gray-300 px-4 py-2 rounded-md'
                  onChange={(e) => setUpdateTaskInfo(updateTaskInfo ? {...updateTaskInfo, taskLinkUploadTwo: e.target.value} : initializeTask({taskLinkUploadTwo: e.target.value}))}
                />
              </div>
            </div>

            <div className='w-full h-fit'>
              <button type="submit" className='text-white bg-blue-500 h-[40px] w-full rounded-md text-sm'>
                Update Task
              </button>
            </div>
          </form>
        </div>
      )}

      {taskDetails && (
        <div className='w-screen absolute z-30 top-0 left-0 right-0 h-full bg-black opacity-95'>
          <div className='bg-white rounded-lg p-8 h-fit flex flex-col gap-4 w-[50%] mx-auto absolute top-[5%] left-[25%]'>
            <div className='w-fit flex items-center gap-4 cursor-pointer h-fit' onClick={() => setTaskDetails(!taskDetails)}>
              <FaArrowLeft size={20} />
              <p className='text-sm font-light'>Back</p>
            </div>
            <h3 className='font-semibold text-xl mt-8 text-blue-500'>{taskInfo?.taskTitle}</h3>

            <p className='text-gray-400 text-sm'><span className='text-sm text-black font-semibold'>Task Type: </span> {taskInfo?.taskType}</p>
            <p className='text-gray-400 text-sm'><span className='text-sm text-black font-semibold'>Compensation: </span> ${taskInfo?.taskCompensation}</p>
            <p className='text-gray-400 text-sm'><span className='text-sm text-black font-semibold'>Deadline: </span> Oct 28, 2024</p>

            <div className='flex flex-col gap-2'>
              <p className='text-sm font-semibold text-black'>Description</p>
              <p className='text-sm text-gray-400'>
                {taskInfo?.taskDescription}
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-sm font-semibold text-black'>Task Requirements</p>
              <p className='text-sm font-medium text-black'>Instructions</p>
              <ul className='flex flex-col gap-2 text-sm text-gray-400'>
                <li>{taskInfo?.taskRequirements}</li>
              </ul>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-sm font-semibold text-black'>Criteria for Completion:</p>
              <ul className='flex flex-col gap-2 text-sm text-gray-400'>
                <li>{taskInfo?.taskRequirements}</li>
              </ul>
            </div>  

            <div className='flex items-center gap-6'>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-sm'>Video link</p>
                <p className='text-sm text-blue-500 cursor-pointer'>{taskInfo?.taskLinkUpload}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-sm'>Video link</p>
                <p className='text-sm text-blue-500 cursor-pointer'>{taskInfo?.taskLinkUploadTwo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
