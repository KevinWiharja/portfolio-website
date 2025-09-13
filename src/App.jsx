import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects, experience, skills, testimonials, typingTexts } from './data/portfolioData';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [currentSkill, setCurrentSkill] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [skillAnimations, setSkillAnimations] = useState({});
  const heroRef = useRef(null);

  // Enhanced typewriter effect
  useEffect(() => {
    let timeout;
    const currentText = typingTexts[currentSkill];
    
    if (isTyping && typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 100);
    } else if (isTyping && typedText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    } else if (!isTyping && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setCurrentSkill((prev) => (prev + 1) % typingTexts.length);
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentSkill]);

  // Enhanced mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll handler with performance optimization
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          const sections = ['home', 'about', 'experience', 'projects', 'testimonials', 'contact'];
          const scrollY = window.scrollY + 100;
          
          sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                setActiveSection(section);
              }
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for skill animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillName = entry.target.dataset.skill;
            setSkillAnimations(prev => ({ ...prev, [skillName]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll('[data-skill]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };


  const themeClasses = "bg-gray-950 text-gray-100";

  return (
    <div className={`${themeClasses} min-h-screen w-full font-sans antialiased relative transition-colors duration-500`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`,
            right: '10%',
            top: '60%'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
            left: '60%',
            top: '80%'
          }}
        />
      </div>

      {/* Header */}
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero 
        isLoaded={isLoaded}
        typedText={typedText}
        scrollToSection={scrollToSection}
      />

      {/* About Section */}
      <About 
        skills={skills}
        hoveredSkill={hoveredSkill}
        setHoveredSkill={setHoveredSkill}
      />

      {/* Experience Section */}
      <Experience experience={experience} />

      {/* Projects Section */}
      <Projects 
        projects={projects}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
      />

      {/* Testimonials Section
      <Testimonials testimonials={testimonials} /> */}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;