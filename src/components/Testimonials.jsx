import React from 'react';
import { Star, User } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">What People Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            Feedback from colleagues, clients, and collaborators
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-125 transition-transform duration-300" 
                    style={{ transitionDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic group-hover:text-white transition-colors duration-300 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-cyan-400 group-hover:scale-105 transition-transform duration-300">{testimonial.name}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.role}</div>
                </div>
              </div>
              
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-6xl text-cyan-400/10 font-serif group-hover:text-cyan-400/20 transition-colors duration-300">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
