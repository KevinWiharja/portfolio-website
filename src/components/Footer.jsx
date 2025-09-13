import React from 'react';
import { Coffee, Heart, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800/50 bg-gray-950/80 backdrop-blur relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 text-center relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
            Future AI Engineer
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto hover:text-gray-300 transition-colors duration-300 cursor-default">
            Building the future with artificial intelligence. Let's create something extraordinary together.
          </p>
        </div>
        
        {/* Fun interactive elements */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-default">
            <Coffee className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
            <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">Powered by coffee</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-default">
            <Heart className="w-4 h-4 text-pink-400 group-hover:animate-pulse" />
            <span className="text-sm text-gray-400 group-hover:text-pink-400 transition-colors">Made with love</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-default">
            <Rocket className="w-4 h-4 text-purple-400 group-hover:animate-bounce" />
            <span className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">Always innovating</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300 cursor-default">
            © 2025 Kevin Wiharja. Crafted with passion using React, Tailwind CSS, and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
