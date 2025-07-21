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
      skills: [
        { name: 'React', level: 70, color: '#61DAFB' },
        // { name: 'TypeScript', level: 90, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 80, color: '#06B6D4' },
        { name: 'Next.js', level: 88, color: '#000000' },
        { name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 90, color: '#E34F26' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'Express.js', level: 80, color: '#000000' },
        { name: 'MongoDB', level: 82, color: '#47A248' },
        // { name: 'PostgreSQL', level: 80, color: '#336791' },
        // { name: 'Python', level: 75, color: '#3776AB' },
        { name: 'REST APIs', level: 80, color: '#FF6B35' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 80, color: '#F05032' },
        // { name: 'Docker', level: 78, color: '#2496ED' },
        // { name: 'AWS', level: 75, color: '#FF9900' },
        { name: 'Figma', level: 85, color: '#F24E1E' },
        { name: 'Photoshop', level: 80, color: '#31A8FF' },
        { name: 'Goark AI', level: 82, color: '#FCC624' },
        { name: 'Bolt AI', level: 82, color: '#FCC624' },
        { name: 'Cursor AI', level: 82, color: '#FCC624' },
        { name: 'Lovable AI', level: 82, color: '#FCC624' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-neon-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="skill-item"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-neon-500"
                        style={{
                          boxShadow: `0 0 10px ${skill.color}40`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-500 mb-2">0+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-500 mb-2">10+</div>
                <div className="text-gray-400">Technologies Learned</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;