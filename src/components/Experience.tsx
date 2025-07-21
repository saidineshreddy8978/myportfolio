import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
  type: 'work',
  title: 'Frontend Developer',
  company: 'CODEXINTERN',
  location: 'Work From Home',
  period: '1 Month',
  description: `Developed and maintained responsive web pages using HTML, CSS, and JavaScript. Built dynamic UI components with React.js and collaborated closely with designers and backend developers to enhance user experience. Optimized website performance, ensured cross-browser compatibility, and resolved UI/UX issues for improved site functionality. Utilized Git/GitHub for version control and efficient code collaboration.`,
  achievements: [
    'Increased application performance by 40%',
    'Led a team of 5 developers',
    'Implemented CI/CD pipelines',
  ],
}
,
    {
      type: 'education',
      title: 'B-tech',
      company: 'parul University of Technology',
      location: 'limda,vadodara,gujarat',
      period: '2022 - present',
      description: 'Focused on software engineering, data structures, algorithms, and web technologies. current 7.1 GPA.',
      achievements: [],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 code-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-neon-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-neon-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${exp.type === 'work' ? 'bg-primary-500/20' : 'bg-neon-500/20'}`}>
                      {exp.type === 'work' ? (
                        <Briefcase className={`w-5 h-5 ${exp.type === 'work' ? 'text-primary-500' : 'text-neon-500'}`} />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-neon-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-200">{exp.title}</h3>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-neon-500 rounded-full"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-neon-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-dark-900 rounded-full"></div>
              </div>

              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;