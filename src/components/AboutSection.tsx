'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: "Python", icon: "🐍", level: 90 },
  { name: "JavaScript", icon: "💻", level: 95 },
  { name: "React", icon: "⚛️", level: 90 },
  { name: "Node.js", icon: "🟢", level: 85 },
  { name: "SQL", icon: "🗄️", level: 80 },
  { name: "MongoDB", icon: "🍃", level: 75 },
  { name: "UI/UX Design", icon: "🎨", level: 85 },
  { name: "Figma", icon: "🎯", level: 80 },
  { name: "AI Integration", icon: "🤖", level: 85 },
];

const softSkills = [
  "Problem-Solving",
  "Communication", 
  "Project Management",
  "Team Collaboration",
  "Time Management",
  "Adaptability"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            From Code to Canvas: Engineering Beautiful Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A 25-year-old Software Engineering graduate from Algeria, powered by a passion for AI and a mastery of the full stack. 
            I hold certifications in Artificial Intelligence and am fluent in the languages that bring ideas to life. 
            I don't just write code; I solve problems and create seamless digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img
                  src="/images/profile-photo.jpg"
                  alt="Touati Seif - Full-Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to profile photo placeholder if image not found
                    e.currentTarget.src = "/images/profile-photo-placeholder.svg";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl">
                🚀
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Education & Certifications</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🎓</span>
                  <span>Software Engineering Degree</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🤖</span>
                  <span>Artificial Intelligence Certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🌍</span>
                  <span>Algeria - Available for Remote Work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-4 rounded-lg"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 mt-1">{skill.level}%</span>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
