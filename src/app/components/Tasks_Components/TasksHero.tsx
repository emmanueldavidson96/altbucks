import React from 'react';
import Link from 'next/link';

export function TasksHero() {
    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-black">Recent Posts</h1>
            <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                Create a Task
            </Link>
        </div>
    );
}