// 'use client';
//
// import { useEffect, useRef } from 'react';
// import { useTaskOperations } from '@/hooks/useTaskOperations';
// import { Clock, DollarSign, Tag, Calendar, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
// import useTaskStore from '@/zustand/store/useTaskStore';
//
// export function ApplicationCard() {
//     const { completedTasks, isLoading, fetchCompletedTasks } = useTaskOperations();
//     const { setSelectedTask, setModalState } = useTaskStore();
//     const hasFetched = useRef(false);
//
//     useEffect(() => {
//         if (!hasFetched.current) {
//             fetchCompletedTasks().catch(console.error);
//             hasFetched.current = true;
//         }
//     }, [fetchCompletedTasks]);
//
//     const handleOpenModal = (task) => {
//         setModalState({ isOpen: true, taskId: task._id });
//         setSelectedTask(task);
//     };
//
//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
//                 <div className="flex flex-col items-center gap-4">
//                     <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
//                     <div className="flex flex-col items-center">
//                         <div className="text-gray-700 font-semibold">Loading Tasks</div>
//                         <div className="text-gray-500 text-sm mt-1">Please wait a moment...</div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//
//     const tasks = completedTasks?.data || [];
//
//     if (tasks.length === 0) {
//         return (
//             <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
//                 <div className="bg-white p-6 rounded-2xl shadow-sm max-w-md w-full text-center">
//                     <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">No Tasks Yet</h3>
//                     <p className="text-gray-600">Complete your first task to see it displayed here</p>
//                 </div>
//             </div>
//         );
//     }
//
//     return (
//         <div className="grid md:grid-cols-2 gap-8">
//             {tasks.map((task) => (
//                 <div
//                     key={task._id}
//                     className="group relative bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-1"
//                 >
//                     {/* Status Badge */}
//                     <div className="absolute -top-3 right-6 px-4 py-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm font-medium shadow-lg shadow-green-100">
//                         {task.status}
//                     </div>
//
//                     {/* Header Section */}
//                     <div className="mb-6">
//                         <div className="flex items-start gap-4">
//                             <div className="flex-1">
//                                 <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
//                                     {task.title}
//                                 </h3>
//                                 <div className="flex items-center gap-2">
//                                     <Tag className="h-4 w-4 text-blue-500" />
//                                     <span className="text-sm text-blue-600 font-medium">{task.taskType}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* Description Section */}
//                     <div className="bg-gray-50 rounded-2xl p-4 mb-6">
//                         <p className="text-gray-700 leading-relaxed">
//                             {task.description}
//                         </p>
//                     </div>
//
//                     {/* Footer Section */}
//                     <div className="grid grid-cols-2 gap-6">
//                         {/* Compensation */}
//                         <div className="bg-blue-50 rounded-2xl p-4 transition-all group-hover:bg-blue-100">
//                             <div className="flex items-center gap-3">
//                                 <div className="p-2 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
//                                     <DollarSign className="h-5 w-5 text-blue-600" />
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-blue-600 font-medium">Compensation</p>
//                                     <p className="text-lg font-bold text-gray-900">
//                                         {task.compensation?.currency}{task.compensation?.amount}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Deadline */}
//                         <div className="bg-red-50 rounded-2xl p-4 transition-all group-hover:bg-red-100">
//                             <div className="flex items-center gap-3">
//                                 <div className="p-2 bg-red-100 rounded-xl group-hover:bg-red-200 transition-colors">
//                                     <Calendar className="h-5 w-5 text-red-600" />
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-red-600 font-medium">Deadline</p>
//                                     <p className="text-lg font-bold text-gray-900">
//                                         {new Date(task.deadline).toLocaleDateString(undefined, {
//                                             month: 'short',
//                                             day: 'numeric',
//                                             year: 'numeric'
//                                         })}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* View Details Button */}
//                     <button
//                         onClick={() => handleOpenModal(task)}
//                         className="w-full mt-6 px-4 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center gap-2 group"
//                     >
//                         View Details
//                         <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }