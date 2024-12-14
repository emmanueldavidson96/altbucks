'use client';

export const SkillsFilter = ({
                                 selected,
                                 onChange
                             }: {
    selected: string[];
    onChange: (skills: string[]) => void;
}) => {
    const skillsList = [
        { name: 'Design', icon: '🎨', count: 14 },
        { name: 'Development', icon: '💻', count: 23 },
        { name: 'Marketing', icon: '📈', count: 8 },
        { name: 'Writing', icon: '✍️', count: 19 },
        { name: 'Data Analysis', icon: '📊', count: 7 },
        { name: 'Video Editing', icon: '🎥', count: 12 }
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-medium mb-3 text-black">Skills</h4>
            <div className="space-y-2">
                {skillsList.map((skill) => (
                    <div key={skill.name}
                         className="flex items-center justify-between hover:bg-gray-50 p-2 rounded">
                        <label className="flex items-center flex-1 cursor-pointer">
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
                            <span className="text-sm flex items-center gap-2 text-black">
                                {skill.icon} {skill.name}
                            </span>
                        </label>
                        <span className="text-xs text-gray-400">
                            {skill.count}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};