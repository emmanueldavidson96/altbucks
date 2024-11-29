export const SkillsFilter = ({selected, onChange}: { selected: string[]; onChange: (skills: string[]) => void
}) => {
    const skillsList = [
        { name: 'Design', color: 'bg-purple-100 text-purple-600', count: '14,208' },
        { name: 'Development', color: 'bg-blue-100 text-blue-600', count: '416' },
        { name: 'Marketing', color: 'bg-pink-100 text-pink-600', count: '600' },
        { name: 'Sales', color: 'bg-green-100 text-green-600', count: '19,397' }
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-medium mb-3 text-black">Skills</h4>
            {skillsList.map((skill) => (
                <div key={skill.name} className="flex justify-between items-center mb-2 hover:bg-gray-50 p-2 rounded">
                    <label className="flex items-center cursor-pointer flex-1">
                        <input
                            type="checkbox"
                            checked={selected.includes(skill.name)}
                            onChange={(e) => {
                                const newSkills = e.target.checked
                                    ? [...selected, skill.name]
                                    : selected.filter(s => s !== skill.name);
                                onChange(newSkills);
                            }}
                            className="mr-2 text-blue-500"
                        />
                        <span className={`text-sm px-2 py-1 rounded ${skill.color}`}>
              {skill.name}
            </span>
                    </label>
                    <span className="text-xs text-gray-400">{skill.count}</span>
                </div>
            ))}
        </div>
    );
};