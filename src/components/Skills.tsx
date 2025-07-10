import React from 'react';
import { Code, Database, Smartphone, Cloud, Palette, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Three.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS', level: 70 },
        { name: 'Android', level: 70 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 82 },
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Blender', level: 75 },
        { name: 'UI/UX', level: 88 },
      ]
    },
    {
      title: 'Tools',
      icon: Cpu,
      skills: [
        { name: 'Git', level: 95 },
        { name: 'VS Code', level: 92 },
        { name: 'Linux', level: 85 },
        { name: 'Webpack', level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-sky-400">Skills</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-sky-500/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-sky-500/10 rounded-lg">
                  <category.icon size={24} className="text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-sky-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;