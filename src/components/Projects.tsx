import React, { useState } from 'react';
import { Github, ExternalLink, Code, Smartphone, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Globe
    },
    {
      id: 2,
      title: 'Mobile Task Manager',
      description: 'Cross-platform mobile app built with React Native and Firebase',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Smartphone
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard with D3.js and real-time data updates',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['D3.js', 'React', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://example.com',
      icon: Code
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-sky-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-sky-500/20 backdrop-blur-sm rounded-lg">
                    <project.icon size={20} className="text-sky-400" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>

              <div 
                className={`absolute inset-0 bg-gradient-to-r from-sky-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 pointer-events-none ${
                  hoveredProject === project.id ? 'opacity-100' : ''
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;