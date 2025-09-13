import React from 'react';
import { 
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Briefcase
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: "Email", value: "kevin.wiharja.business@gmail.com", link: "mailto:alex@aidev.com", subtitle: "Available 24/7 for business inquiries" },
    { icon: Phone, title: "Phone", value: "+62 877-2899-1668", link: "tel:+1234567890", subtitle: "Available anytime — let's talk!" },
    { icon: Globe, title: "Location", value: "Jakarta, IND", link: "#", subtitle: "Open to remote collaboration" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/KevinWiharja", color: "from-gray-600 to-gray-800", hoverColor: "group-hover:from-cyan-500 group-hover:to-blue-600" },
    { icon: Linkedin, href: "https://linkedin.com/in/kevin-wiharja", color: "from-blue-600 to-blue-800", hoverColor: "group-hover:from-cyan-500 group-hover:to-blue-600" },
    // { icon: Briefcase, href: "https://glints.com/profile/aidev", color: "from-green-600 to-green-800", hoverColor: "group-hover:from-cyan-500 group-hover:to-blue-600" },
    { icon: Mail, href: "mailto:kevin.wiharja.business@gmail.com", color: "from-cyan-600 to-cyan-800", hoverColor: "group-hover:from-cyan-500 group-hover:to-blue-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-50"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            Ready to collaborate on your next AI project? Let's build something amazing together.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Contact Info Cards with enhanced animations */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group relative overflow-hidden hover:scale-105">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <contact.icon className="w-8 h-8 text-white relative z-10" />
                </div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2 group-hover:scale-105 transition-transform duration-300 relative z-10">{contact.title}</h3>
                <a href={contact.link} className="text-lg text-gray-300 hover:text-cyan-400 transition-colors mb-2 group-hover:scale-105 transition-transform duration-300 relative z-10">
                  {contact.value}
                </a>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 relative z-10">{contact.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-6 bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-110"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full group-hover:animate-ping"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <social.icon className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110 transform relative z-10 group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
