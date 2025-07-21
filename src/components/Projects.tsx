import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Code, Palette, Database } from "lucide-react";
import { a } from "framer-motion/client";
// import matheepho from '../../public/Screenshot 2025-07-21 110221.png';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Network Platform",
      description:
        "Built a full-stack social media app like Instagram with image sharing, likes, comments, chat, and real-time notifications.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/saidineshreddy8978/social-network",
      live: "#",
    },
    {
      title: "Matchee",
      description:
        "Designed a matchmaking website for cricket players to form teams, find nearby grounds, and schedule local matches easily",
      image:
        "https://wallpapers.com/images/hd/cricket-ground-background-a2rr2mi4xx5wedcl.jpg",
      tags: ["React", "java Script", "Tailwind"],
      category: "frontend",
      github: "https://github.com/saidineshreddy8978/matchee-local-play",
      live: "https://matchee-two.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with smooth animations, dark mode, and modern design principles.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Framer Motion", "Tailwind", "TypeScript"],
      category: "frontend",
      github: "https://github.com",
      live: "#",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects", icon: Code },
    { key: "frontend", label: "Frontend", icon: Palette },
    { key: "backend", label: "Backend", icon: Database },
    { key: "fullstack", label: "Full Stack", icon: Code },
    { key: "design", label: "Design", icon: Palette },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-neon-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === filterItem.key
                  ? "bg-gradient-to-r from-primary-500 to-neon-500 text-white"
                  : "glass text-gray-300 hover:text-neon-500"
              }`}
            >
              <filterItem.icon className="w-4 h-4" />
              {filterItem.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden hover:border-neon-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-dark-800/80 rounded-full text-gray-300 hover:text-neon-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-dark-800/80 rounded-full text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/saidineshreddy8978"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-500 text-primary-400 px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors"
            >
              View All Projects on GitHub
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
