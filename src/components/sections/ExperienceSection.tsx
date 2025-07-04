'use client';

import { motion } from 'framer-motion';
import { Building, Calendar, CheckCircle, Code } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const ExperienceSection = () => {
  const experience = portfolioData.experience[0]; // Current role

  return (
    <section id="experience" className="py-20 bg-gray-900">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500"></div>
            </div>

            <div className="relative z-10">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Building className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {experience.company}
                    </h3>
                    <p className="text-lg text-purple-400 font-semibold">
                      {experience.position}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{experience.duration}</span>
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 leading-relaxed mb-8 text-lg"
              >
                {experience.description}
              </motion.p>

              {/* Technologies Used */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-5 h-5 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">
                    Technologies Used
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">
                    Key Achievements
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Growing Every Day
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Working at Infinity Shipping Service has been an incredible learning experience. 
              I've had the opportunity to work on real-world projects that impact thousands of users, 
              collaborate with experienced developers, and continuously expand my technical skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
                <span className="text-purple-400 font-semibold">Current Focus:</span>
                <span className="text-gray-300">Scaling web applications</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
                <span className="text-cyan-400 font-semibold">Learning:</span>
                <span className="text-gray-300">Cloud technologies</span>
              </div>
              </div>
              <div className="space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
                <span className="text-cyan-400 font-semibold">Learning:</span>
                <span className="text-gray-300">AI & Agentic AI</span>
              </div>
            </div>
                </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
