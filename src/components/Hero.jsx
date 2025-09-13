import React from 'react';
import { 
  Brain,
  ArrowRight,
  Mail,
  Download,
  Clock,
  Rocket,
  BookOpen,
  Award
} from 'lucide-react';

const Hero = ({ 
  isLoaded, 
  typedText, 
  scrollToSection 
}) => {
  const stats = [
    { number: "<1", label: "Years Experience", icon: Clock },
    { number: "10+", label: "Projects Completed", icon: Rocket },
    { number: "3", label: "Certifications Earned", icon: BookOpen },
    { number: "2", label: "Coffee per day", icon: Award }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 relative z-10">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block p-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 mb-6 hover:scale-110 transition-transform duration-300">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Kevin Wiharja
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-300 h-12 flex items-center justify-center">
              {typedText}
              <span className="animate-pulse ml-1">|</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto hover:text-gray-300 transition-colors duration-300">
              Building intelligent systems that solve real-world problems. 
              Eager to learn on scalable AI solutions 
              to make a meaningful impact on people's lives.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <Mail className="mr-2 w-5 h-5 relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </button>
            <a 
              href="/CV.pdf" download
              className="group px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <Download className="mr-2 w-5 h-5 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download CV</span>
            </a>
          </div>

          {/* Enhanced Stats with counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-gray-900/50 backdrop-blur border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
