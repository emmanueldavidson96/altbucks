import React from 'react';
import Link from 'next/link';

interface TaskCardProps {
    title: string;
    category: string;
    description: string;
    earnings: string;
    deadline: string;
    postedTime: string;
}

export function TaskCard({ title, category, description, earnings, deadline, postedTime }: TaskCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="mb-2">
                <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500">{category}</p>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {description}
            </p>

            <div className="mt-auto">
                <div className="flex items-center justify-between text-sm">
                    <div>
                        <span className="text-gray-500">Earnings</span>
                        <span className="text-gray-900 ml-2">{earnings}</span>
                    </div>
                    <div>
                        <span className="text-gray-500">Deadline</span>
                        <span className="text-gray-900 ml-2">{deadline}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-400 text-xs">Posted {postedTime}</span>
                    <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                    >
                        View Details →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function TasksSection() {
    const tasks = [
        {
            title: "Write Blog Post",
            category: "Writing",
            description: "Create a well-researched blog post of 800-1000 words on the topic provided. Ensure the content is original, engaging, and...",
            earnings: "$25",
            deadline: "Oct 25, 2024",
            postedTime: "3 hours ago"
        },
        {
            title: "Video Review",
            category: "Review",
            description: "Watch and review a short product video, providing feedback on its clarity and content. Share your thoughts on the product's features...",
            earnings: "$40",
            deadline: "Oct 28, 2024",
            postedTime: "3 hours ago"
        },
        {
            title: "Graphic Design",
            category: "Design",
            description: "Create a visually appealing graphic design for social media promotion. Use vibrant colors and engaging visuals to attract the target audience...",
            earnings: "$35",
            deadline: "Nov 5, 2024",
            postedTime: "2 hours ago"
        },
        {
            title: "Web Dev Project",
            category: "Web Development",
            description: "Develop a responsive website for a client, following the provided design mockup. Implement interactive features and ensure cross-browser compatibility...",
            earnings: "$60",
            deadline: "Nov 12, 2024",
            postedTime: "1 hour ago"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tasks.map((task, index) => (
                <TaskCard key={index} {...task} />
            ))}
        </div>
    );
}