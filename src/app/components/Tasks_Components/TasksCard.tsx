'use client';

interface TaskCardProps {
    title: string;
    category: string;
    description: string;
    earnings: number;
    deadline: string;
    postedTime: string;
}

const TaskCard = ({ title, category, description, earnings, deadline, postedTime }: TaskCardProps) => {
    // Category color mapping
    const getCategoryColor = (category: string) => {
        const colors = {
            'Design': 'bg-purple-100 text-purple-600',
            'Development': 'bg-blue-100 text-blue-600',
            'Marketing': 'bg-pink-100 text-pink-600',
            'Writing': 'bg-green-100 text-green-600',
            'default': 'bg-gray-100 text-gray-600'
        };
        return colors[category as keyof typeof colors] || colors.default;
    };

    return (
        <div className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                            {category}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                            <svg
                                className="w-3 h-3 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Posted {postedTime}
                        </span>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                {description}
            </p>

            {/* Footer Section */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-blue-600">
                            ${earnings}
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                            Earnings
                        </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                        <svg
                            className="w-4 h-4 mr-1 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        Deadline: {deadline}
                    </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium text-sm hover:bg-blue-50 transition-colors group-hover:bg-blue-400 group-hover:text-white">
                    View Details
                    <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TaskCard;