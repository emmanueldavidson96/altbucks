import { Users } from 'lucide-react';

export const ApplicationsFilter = ({
                                       value,
                                       onChange
                                   }: {
    value: string;
    onChange: (range: string) => void
}) => {
    const ranges = [
        'Less than 5 Applications',
        '5 - 10 Applications',
        '10 - 15 Applications',
        '15 - 20 Applications'
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-gray-400" />
                <h4 className="font-medium text-gray-900">Number of Applications</h4>
            </div>

            {/* Radio Options */}
            <div className="space-y-2">
                {ranges.map((range) => (
                    <label
                        key={range}
                        className="flex items-center gap-3 p-2 rounded-lg cursor-pointer
                                 transition-colors hover:bg-gray-50
                                 relative group"
                    >
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="applications"
                                value={range}
                                checked={value === range}
                                onChange={(e) => onChange(e.target.value)}
                                className="w-4 h-4 border-2 border-gray-300
                                         text-blue-600 rounded-full
                                         focus:ring-2 focus:ring-blue-500/20
                                         transition-all duration-200
                                         checked:border-blue-600
                                         cursor-pointer"
                            />
                            {value === range && (
                                <div className="absolute inset-0 rounded-full border-2 border-blue-600
                                              animate-pulse duration-200"></div>
                            )}
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                            {range}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};