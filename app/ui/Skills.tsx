"use client";
import Content from '@/components/ui/Content'
interface Skill {
  name: string;
  percentage: number;
}
const skills: Skill[] = [
  { name: "Photoshop", percentage: 90 },
  { name: "Final Cut", percentage: 80 },
  { name: "Studio Photography", percentage: 85 },
  { name: "Motion Video", percentage: 75 },
];
export default function Skills() {
  return (
    <div className="w-full md:w-1/3 p-4">
      <Content>
      <h2 className="text-xl font-semibold mb-2 text-white">MY SKILLS</h2>
      <p className="text-gray-500 mb-4">
        We possess a diverse set of skills that have been honed over years of
        experience. Whether working on design, photography, or video production,
        I deliver results that exceed expectations.
      </p>
      <div>
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4 text-secondary">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded h-2">
              <div
                className="bg-primary h-2 rounded"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      </Content>
    </div>
  );
}
