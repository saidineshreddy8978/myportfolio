import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass py-3 shadow-2xl shadow-primary-500/10 border-b border-primary-500/20' 
          : 'py-6 bg-gradient-to-b from-dark-900/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-neon-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 relative z-10 group"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(0, 255, 136, 0.3)',
                  '0 0 30px rgba(59, 130, 255, 0.4)',
                  '0 0 20px rgba(0, 255, 136, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 bg-gradient-to-br from-primary-500 to-neon-500 rounded-xl flex items-center justify-center"
            >
              <Code2 className="text-white w-6 h-6" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles className="w-4 h-4 text-neon-500" />
            </motion.div>
          </div>
          <div>
            <span className="text-2xl font-bold gradient-text tracking-tight">SDR</span>
            <div className="text-xs text-gray-400 -mt-1">Full-Stack Dev</div>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center space-x-2 bg-dark-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700/50">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-primary-500 to-neon-500 shadow-lg shadow-primary-500/25'
                  : 'text-gray-300 hover:text-neon-500 hover:bg-white/5'
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-neon-500 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden relative z-10 p-3 rounded-xl bg-dark-800/50 backdrop-blur-md border border-gray-700/50 text-gray-300 hover:text-neon-500 hover:border-neon-500/50 transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.div>
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden glass mt-4 mx-6 rounded-2xl border border-primary-500/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-neon-500/10"></div>
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className={`relative block px-6 py-4 text-gray-300 hover:text-neon-500 transition-all duration-300 border-b border-gray-700/30 last:border-b-0 ${
                activeSection === item.id ? 'text-neon-500 bg-neon-500/10' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{item.name}</span>
                {activeSection === item.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-neon-500 rounded-full"
                  />
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;