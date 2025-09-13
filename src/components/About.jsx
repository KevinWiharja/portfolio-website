import React from 'react';
import { 
  Zap,
  User,
  Github,
  Linkedin,
  Mail,
  Heart
} from 'lucide-react';

const About = ({ skills, hoveredSkill, setHoveredSkill }) => {
  return (
    <section id="about" className="py-20 bg-gray-900/30 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full animate-pulse"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300 cursor-default">
              Passionate and motivated Data Science undergraduate with a strong foundation in data related fields. 
              Currently learning text mining and excited to apply new knowledge in real-world projects.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300 cursor-default">
              Skilled in Python (Pandas, NumPy, Scikit-Learn), SQL, PySpark, and AWS, with an experience as a System Analyst Intern at my university's IT division. 
              Responsibilities include data dictionary standardization, database querying in SSMS, creating Figma mockups, designing test cases, documentation, and collaborating in cross-functional projects. 
              Driven by curiosity and enthusiasm to continuously learn and grow in the data science and analytics field.
            </p>
            
            {/* Interactive Skills with enhanced animations */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 animate-pulse" />
                Core Expertise
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <skill.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                    <span className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Profile Card */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 backdrop-blur border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105">
                <div className="w-full h-full rounded-xl bg-gray-900/80 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:scale-105 transition-transform duration-300 relative z-10">Kevin Wiharja</h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300 relative z-10">Undergraduate Student</p>
                  
                  {/* Animated social links */}
                  <div className="flex space-x-3 relative z-10">
                    {[
                      { icon: Github, color: 'hover:bg-gray-700', delay: '0ms', link: 'https://github.com/KevinWiharja' },
                      { icon: Linkedin, color: 'hover:bg-blue-600', delay: '100ms', link: 'https://linkedin.com/in/kevin-wiharja' },
                      { icon: Mail, color: 'hover:bg-cyan-600', delay: '200ms', link: 'mailto:kevin.wiharja.business@gmail.com' }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:shadow-lg cursor-pointer"
                        style={{ transitionDelay: social.delay }}
                      >
                        <social.icon className={`w-4 h-4 text-cyan-400 transition-colors duration-300 ${social.color}`} />
                      </a>
                    ))}
                  </div>

                  
                  {/* Floating hearts animation on hover */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <Heart 
                        key={i}
                        className="absolute w-3 h-3 text-pink-400 opacity-0 group-hover:opacity-70 transition-all duration-500 animate-bounce"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${1 + Math.random()}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
