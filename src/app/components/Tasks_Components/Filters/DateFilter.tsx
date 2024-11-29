export const DateFilter = ({ value, onChange }: {
    value: string;
    onChange: (date: string) => void
}) => {
    const dates = ['Anytime', 'Past 24 hours', 'Past week', 'Past month'];

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-medium mb-3 text-black">Date posted</h4>
            {dates.map((date) => (
                <label key={date} className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input
                        type="radio"
                        name="datePosted"
                        value={date}
                        checked={value === date}
                        onChange={(e) => onChange(e.target.value)}
                        className="mr-2 text-blue-500"
                    />
                    <span className="text-sm text-gray-600">{date}</span>
                </label>
            ))}
        </div>
    );
};
