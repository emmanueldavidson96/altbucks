'use client';

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
        <div className="bg-white rounded-lg shadow-sm p-4">
            <h4 className="font-medium mb-3 text-black">Task Pay</h4>
            {ranges.map((range) => (
                <label key={range.value}
                       className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input
                        type="radio"
                        name="taskPay"
                        value={range.value}
                        checked={value === range.value}
                        onChange={(e) => onChange(e.target.value)}
                        className="mr-2 text-blue-500"
                    />
                    <span className="text-sm text-gray-600">{range.label}</span>
                </label>
            ))}
        </div>
    );
};