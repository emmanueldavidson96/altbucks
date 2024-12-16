import { Calendar } from 'lucide-react';

export const DateFilter = ({ value, onChange }: {
    value: string;
    onChange: (date: string) => void
}) => {
    const dateOptions = [
        { value: '', label: 'Anytime' },
        { value: '24h', label: 'Past 24 hours' },
        { value: '7d', label: 'Past week' },
        { value: '30d', label: 'Past month' }
    ];

    return (
        <div>
            <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <h4 className="font-medium text-gray-900">Date posted</h4>
            </div>

            <div className="space-y-2">
                {dateOptions.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-center gap-3 p-2 rounded-lg cursor-pointer
                                 transition-all hover:bg-gray-50 relative group"
                    >
                        <div className="relative flex items-center">
                            <input
                                type="radio"
                                name="datePosted"
                                value={option.value}
                                checked={value === option.value}
                                onChange={(e) => onChange(e.target.value)}
                                className="w-4 h-4 border-2 border-gray-300
                                         text-blue-600 rounded-full
                                         focus:ring-2 focus:ring-blue-500/20
                                         checked:border-blue-600
                                         transition-all cursor-pointer"
                            />
                            {value === option.value && (
                                <div className="absolute inset-0 rounded-full
                                              border-2 border-blue-600"></div>
                            )}
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900
                                       transition-colors">
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};