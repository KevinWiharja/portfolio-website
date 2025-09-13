import React from 'react';
import { Target } from 'lucide-react';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-900/50 backdrop-blur p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] relative overflow-hidden">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:scale-105 transition-transform duration-300">{exp.role}</h3>
                    <h4 className="text-xl font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">{exp.company}</h4>
                  </div>
                  <span className="text-gray-400 bg-gray-800 px-4 py-2 rounded-full text-sm whitespace-nowrap group-hover:bg-cyan-400/20 group-hover:text-cyan-400 transition-all duration-300">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">{exp.description}</p>
                
                <div className="space-y-4 relative z-10">
                  <h5 className="font-semibold text-cyan-400 flex items-center">
                    <Target className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="w-4 h-4 rounded-full bg-cyan-400/20 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-cyan-400/40 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-gray-700 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110 cursor-default"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
