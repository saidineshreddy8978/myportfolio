import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';
import profile from "../../public/SAI-PROFILE.jpg";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'I believe great software comes from genuine passion for solving problems and creating meaningful experiences.',
    },
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'Every pixel matters. I focus on the small details that make a big difference in user experience.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies to stay at the forefront of development.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong believer in teamwork and open communication to achieve extraordinary results.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-neon-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
              Passionate Full-Stack Developer proficient in HTML, CSS, JavaScript, React.js, and backend technologies like 
              Node.js, Express.js, and MongoDB. Strong focus on UI/UX design, SEO optimization, and building scalable, user
              centric web applications. 
              Skilled in Figma for crafting intuitive interfaces and experienced in leveraging AI tools such as ChatGPT, Cursor AI, 
              21st.dev, Goark AI and Lovable to streamline development and enhance productivity. Passionate about prompt 
              engineering and integrating cutting-edge technologies to solve real-world problems efficiently. 
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden glass">
                <img
                  src={profile}
                  alt="Sai Dinesh Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-500/20 to-neon-500/20"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-4 border-dashed border-neon-500 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-semibold text-center mb-12">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-xl p-6 text-center hover:border-neon-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-neon-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;