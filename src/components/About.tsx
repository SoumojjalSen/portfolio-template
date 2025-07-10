import React from 'react';
import { Download, Award, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Clock, value: '3+', label: 'Years Experience' },
    { icon: Users, value: '20+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-sky-400">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Passionate developer with a focus on creating beautiful, functional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-slate-300">
              <p className="text-lg leading-relaxed">
                I'm a full-stack developer with a passion for creating immersive digital experiences. 
                My journey in web development started with curiosity about how things work, and has 
                evolved into a career focused on building applications that make a difference.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in React, TypeScript, Three.js, and modern web technologies. When I'm not 
                coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-colors duration-200">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-sky-500/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sky-500/10 rounded-lg">
                    <Icon size={24} className="text-sky-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-slate-300">{label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;