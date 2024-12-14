import { Search } from 'lucide-react';

export function TasksList() {
    return (
        <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6 text-black">Task List</h2>

            <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <button className="px-4 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <span>Filter</span>
                </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200">
                <table className="w-full">
                    <thead>
                    <tr className="border-b border-gray-200">
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Task Name</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Task Type</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Deadline</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Payout</th>
                        <th className="w-10"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Add task rows here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}