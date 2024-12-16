import { DollarSign } from 'lucide-react';

export const TaskPayFilter = ({
                                  value,
                                  onChange
                              }: {
    value: string;
    onChange: (range: string) => void;
}) => {
    const ranges = [
        { value: 'any', label: 'Any amount' },
        { value: 'under50', label: 'Under $50' },
        { value: '50to100', label: '$50 - $100' },
        { value: '100to200', label: '$100 - $200' },
        { value: 'over200', label: 'Over $200' }
    ];

    return (
        <div>
            <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <h4 className="font-medium text-gray-900">Task Pay</h4>
            </div>

            <div className="space-y-2">
                {ranges.map((range) => (
                    <label
                        key={range.value}
                        className="flex items-center gap-3 p-2 rounded-lg cursor-pointer
                                 transition-all hover:bg-gray-50 relative group"
                    >
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="taskPay"
                                value={range.value}
                                checked={value === range.value}
                                onChange={(e) => onChange(e.target.value)}
                                className="w-4 h-4 border-2 border-gray-300
                                         text-blue-600 rounded-full
                                         focus:ring-2 focus:ring-blue-500/20
                                         checked:border-blue-600
                                         transition-all cursor-pointer"
                            />
                            {value === range.value && (
                                <div className="absolute inset-0 rounded-full
                                              border-2 border-blue-600"></div>
                            )}
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900
                                       transition-colors">
                            {range.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};