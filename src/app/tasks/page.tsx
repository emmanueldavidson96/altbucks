'use client';

import TasksHero from "../components/Tasks_Components/TasksHero";
import TasksFilter from "../components/Tasks_Components/TasksFilter";
import TasksList from "../components/Tasks_Components/TasksList";

const TasksPage = () => {
    return (
        <div className="bg-white min-h-screen overflow-hidden">
            <TasksHero />
            <div className="container mx-auto px-6 py-8">
                <div className="flex gap-8">
                    <TasksFilter />
                    <TasksList />
                </div>
            </div>
        </div>
    );
};

export default TasksPage;