import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'Next.js', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Figma', 'Photoshop', 'Goark AI', 'Bolt AI', 'Cursor AI', 'Lovable AI'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-dark-900 text-white">
      <div className="absolute inset-0 code-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skillset</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I've worked with during my journey.
          </p>
          <div className="w-24 h-1 mt-6 bg-gradient-to-r from-primary-500 to-neon-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="px-4 py-2 rounded-full border border-primary-500 text-sm bg-dark-800 hover:bg-primary-500 hover:text-black transition duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
