import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ThreeBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-sky-400/30 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/20 to-cyan-400/20 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Creative</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
              Developer
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I craft interactive digital experiences with modern web technologies and creative design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 backdrop-blur-sm"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 backdrop-blur-sm"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 backdrop-blur-sm"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-slate-400 hover:text-white transition-colors duration-200"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;