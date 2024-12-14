'use client';

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
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-medium mb-3 text-black">Date posted</h4>
            {dateOptions.map((option) => (
                <label key={option.value} className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input
                        type="radio"
                        name="datePosted"
                        value={option.value}
                        checked={value === option.value}
                        onChange={(e) => onChange(e.target.value)}
                        className="mr-2 text-blue-500"
                    />
                    <span className="text-sm text-gray-600">{option.label}</span>
                </label>
            ))}
        </div>
    );
};
