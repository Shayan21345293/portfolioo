'use client';

import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Zap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code Advocate",
      description: "I believe in writing code that's not just functional, but elegant and maintainable."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding innovative solutions to real-world problems."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Every project I work on has a clear purpose and measurable impact on users and businesses."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Technology evolves rapidly, and I'm always eager to learn and adapt to new tools and frameworks."
    }
  ];

  const stats = [
    { number: "3+", label: "Websites Built" },
    { number: "2+", label: "Years Coding" },
    { number: "10+", label: "Technologies" },
    { number: "3+", label: "Current Role" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Hey there! 👋
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {portfolioData.personal.bio}
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600"
                >
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-lg border border-purple-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                Currently Working At
              </h4>
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Infinity Shipping Service</span> -
                Building robust web applications for shipping management and logistics.
              </p>
            </motion.div>
                      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-lg border border-purple-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                Side Working At
              </h4>
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Freelancing</span> -
                Freelancing on Fiverr and Upwork , Make my clients proud.
              </p>
            </motion.div>
            
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              What Drives Me
            </h3>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex-shrink-0 p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
