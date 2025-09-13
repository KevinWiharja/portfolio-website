import React from 'react';
import { 
  Code,
  Github,
  ExternalLink,
  Eye
} from 'lucide-react';

const Projects = ({ projects, hoveredProject, setHoveredProject }) => {
  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            Selected work showcasing my expertise in AI, machine learning, and software engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/70 backdrop-blur rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-[1.02] relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project preview */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className={`w-16 h-16 text-cyan-400 transition-all duration-500 ${hoveredProject === index ? 'opacity-100 scale-125 rotate-12' : 'opacity-70'}`} />
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium">
                    Featured
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400 group-hover:scale-105 transition-transform duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {project.longDescription}
                </p>
                
                {/* Animated metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/50 rounded-xl group-hover:bg-gray-800/70 transition-colors duration-300">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={key} className="text-center group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                      <div className="text-lg font-bold text-cyan-400 group-hover:animate-bounce">{value}</div>
                      <div className="text-xs text-gray-400 capitalize group-hover:text-gray-300 transition-colors duration-300">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-gray-700 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110 cursor-default"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 group-hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <Github className="mr-2 w-4 h-4 relative z-10" />
                    <span className="relative z-10">Code</span>
                    <ExternalLink className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
                  </a>
                  {/* <a 
                    href={project.demo}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 group-hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                    <Eye className="mr-2 w-4 h-4 text-white relative z-10" />
                    <span className="relative z-10 text-white">Demo</span>
                    <ExternalLink className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white relative z-10" />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid with hover effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <Code className="w-8 h-8 text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <div className="flex space-x-2">
                  <a href={project.github} className="p-2 hover:bg-gray-800 rounded-lg transition-colors group-hover:scale-110 duration-300">
                    <Github className="w-4 h-4 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                  {/* <a href={project.demo} className="p-2 hover:bg-gray-800 rounded-lg transition-colors group-hover:scale-110 duration-300">
                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
                  </a> */}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:scale-105 transition-transform duration-300 relative z-10">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4 relative z-10">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-gray-800 text-cyan-400 rounded text-xs border border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs group-hover:text-cyan-400 transition-colors duration-300">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs relative z-10">
                {Object.entries(project.metrics).map(([key, value], i) => (
                  <div key={key} className="group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="font-bold text-cyan-400 group-hover:animate-pulse">{value}</div>
                    <div className="text-gray-500 capitalize group-hover:text-gray-400 transition-colors duration-300">{key}</div>
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

export default Projects;
