'use client';

import type { Task } from './types';
import TaskCard from './TasksCard';

const TasksList = () => {
  // Sample tasks - replace this with API data later
  const tasks = [
    {
      id: '1',
      title: 'Graphic Design',
      category: 'Design',
      description:
        'Create a visually appealing graphic design for social media promotion.',
      earnings: 35,
      deadline: 'Nov 5, 2024',
      postedTime: '2 hours ago',
    },
    // Add more sample tasks here
  ];

  return (
    <div className='flex-1'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            category={task.category}
            description={task.description}
            earnings={task.earnings}
            deadline={task.deadline}
            postedTime={task.postedTime}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
