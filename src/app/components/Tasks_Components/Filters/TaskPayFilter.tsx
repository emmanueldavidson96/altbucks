export const TaskPayFilter = ({
                                  value,
                                  onChange
                              }: {
    value: string;
    onChange: (range: string) => void
}) => {
    const ranges = [
        '$50K - $80K',
        '$80K - $100K',
        '$100K - $120K',
        '$120K - $150K',
        '$150K - $200K',
        'Above $200K'
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <h4 className="font-medium mb-3 text-black">Task Pay</h4>
            {ranges.map((range) => (
                <label key={range} className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input
                        type="radio"
                        name="taskPay"
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
