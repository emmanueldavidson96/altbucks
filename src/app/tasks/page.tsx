import Header from '../components/Dashboard_Components/Header';
import { TasksHero } from '../components/Tasks_Components/TasksHero';
import { RecentTasks } from '../components/Tasks_Components/TasksSection';
import { TasksList } from '../components/Tasks_Components/TasksList';

export default function TasksPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-[1400px] mx-auto px-6 pt-6 pb-12">
                <TasksHero />
                <div className="mt-8">
                    <RecentTasks />
                </div>
                <div className="mt-12">
                    <TasksList />
                </div>
            </main>
        </div>
    );
}