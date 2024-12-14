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
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-medium mb-3 text-black">Number of Applications</h4>
            {ranges.map((range) => (
                <label key={range} className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input
                        type="radio"
                        name="applications"
                        value={range}
                        checked={value === range}
                        onChange={(e) => onChange(e.target.value)}
                        className="mr-2 text-blue-500"
                    />
                    <span className="text-sm text-gray-600">{range}</span>
                </label>
            ))}
        </div>
    );
};

