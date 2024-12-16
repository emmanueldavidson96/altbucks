import { Sparkles } from 'lucide-react';

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
        <div>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gray-400" />
                    <h4 className="font-medium text-gray-900">Skills</h4>
                </div>
                {selected.length > 0 && (
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {selected.length} selected
                    </span>
                )}
            </div>

            <div className="space-y-2">
                {skillsList.map((skill) => (
                    <label
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-lg
                                 hover:bg-gray-50 cursor-pointer group
                                 transition-all duration-200"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selected.includes(skill.name)}
                                    onChange={(e) => {
                                        const newSkills = e.target.checked
                                            ? [...selected, skill.name]
                                            : selected.filter(s => s !== skill.name);
                                        onChange(newSkills);
                                    }}
                                    className="w-4 h-4 border-2 border-gray-300 rounded
                                             text-blue-600
                                             checked:border-blue-600 checked:bg-blue-600
                                             focus:ring-2 focus:ring-blue-500/20
                                             transition-all duration-200 cursor-pointer"
                                />
                                {selected.includes(skill.name) && (
                                    <div className="absolute inset-0 rounded
                                                  border-2 border-blue-600"></div>
                                )}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-600
                                          group-hover:text-gray-900 transition-colors">
                                <span className="text-base">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </div>
                        </div>

                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100
                                       text-gray-500 group-hover:bg-gray-200
                                       transition-colors">
                            {skill.count}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};