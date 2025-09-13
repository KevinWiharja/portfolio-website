import React from 'react';
import { 
  Menu, 
  X,
  User,
  Briefcase,
  Code,
  MessageCircle,
  Mail
} from 'lucide-react';

const Header = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  isScrolled, 
  scrollToSection 
}) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    // { id: 'testimonials', label: 'Testimonials', icon: MessageCircle },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-xl py-2 border-b border-gray-700/50 shadow-2xl' : 'py-4'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center min-h-[60px]">
          <a 
            href="#home" 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 flex-shrink-0"
          >
            Future AI Engineer
          </a>
          
          {/* Desktop Navigation with enhanced hover effects */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8 flex-shrink-0">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group py-2 px-2 lg:px-3 font-medium transition-all duration-300 hover:text-cyan-400 relative flex items-center space-x-1 rounded-lg hover:bg-gray-800/30 text-sm lg:text-base whitespace-nowrap ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="hidden xl:block">{item.label}</span>
                <span className="xl:hidden">{item.label.slice(0, 4)}</span>
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>
          
          {/* Tablet Navigation - Simplified */}
          <nav className="hidden md:flex lg:hidden space-x-2 flex-shrink-0">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group p-2 transition-all duration-300 hover:text-cyan-400 relative rounded-lg hover:bg-gray-800/30 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                }`}
                title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 flex-shrink-0"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
          <div className="px-2 pt-2 pb-4 space-y-1 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:text-cyan-400 hover:bg-gray-800/50 hover:translate-x-2 space-x-2 ${
                  activeSection === item.id ? 'text-cyan-400 bg-gray-800/30' : 'text-gray-300'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
