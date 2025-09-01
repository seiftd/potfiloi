'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  features: string[];
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce React App",
      description: "A modern e-commerce platform built with React and TypeScript",
      category: "E-Commerce",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/project-ecommerce.svg",
      demoUrl: "/api/projects/ecommerce-react",
      codeUrl: "https://github.com/touatiseif/ecommerce-react",
      features: ["Shopping Cart", "User Authentication", "Payment Integration", "Product Search", "Order Management"],
    },
    {
      id: 2,
      title: "Blog Platform with CMS",
      description: "A content management system for blogs with Next.js",
      category: "Content",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "/images/project-blog.svg",
      demoUrl: "/api/projects/blog-cms",
      codeUrl: "https://github.com/touatiseif/blog-cms",
      features: ["Content Management", "SEO Optimization", "Markdown Support", "User Roles", "Analytics"],
    },
    {
      id: 3,
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with Vue.js",
      category: "Food & Beverage",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
      image: "/images/project-restaurant.svg",
      demoUrl: "/api/projects/restaurant-management",
      codeUrl: "https://github.com/touatiseif/restaurant-management",
      features: ["Menu Management", "Order Tracking", "Inventory Control", "Staff Management", "Reporting"],
    },
    {
      id: 4,
      title: "SaaS Platform",
      description: "Enterprise SaaS solution with subscription management",
      category: "SaaS",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      image: "/images/project-saas.svg",
      demoUrl: "/api/projects/saas-platform",
      codeUrl: "https://github.com/touatiseif/saas-platform",
      features: ["User Management", "Subscription Billing", "Team Collaboration", "API Integration", "Analytics"],
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      category: "Productivity",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Socket.io", "MongoDB"],
      image: "/images/project-task-manager.svg",
      demoUrl: "/api/projects/task-management",
      codeUrl: "https://github.com/touatiseif/task-management",
      features: ["Real-time Updates", "Team Collaboration", "Task Assignment", "Progress Tracking", "Notifications"],
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      category: "Analytics",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Twitter API"],
      image: "/images/project-social-media-app.svg",
      demoUrl: "/api/projects/social-dashboard",
      codeUrl: "https://github.com/touatiseif/social-dashboard",
      features: ["Social Analytics", "Content Scheduling", "Engagement Metrics", "Multi-platform", "Reports"],
    },
    {
      id: 7,
      title: "E-Learning Platform",
      description: "Online learning management system",
      category: "Education",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/project-learning-platform.svg",
      demoUrl: "/api/projects/elearning",
      codeUrl: "https://github.com/touatiseif/elearning",
      features: ["Course Management", "Video Streaming", "Progress Tracking", "Certificates", "Discussion Forums"],
    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Warehouse and inventory tracking system",
      category: "Logistics",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      image: "/images/project-inventory-management.svg",
      demoUrl: "/api/projects/inventory",
      codeUrl: "https://github.com/touatiseif/inventory",
      features: ["Stock Tracking", "Barcode Scanning", "Supplier Management", "Reports", "Alerts"],
    },
    {
      id: 9,
      title: "Real Estate Platform",
      description: "Property listing and management system",
      category: "Real Estate",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "/images/project-real-estate-platform.svg",
      demoUrl: "/api/projects/real-estate",
      codeUrl: "https://github.com/touatiseif/real-estate",
      features: ["Property Listings", "Search & Filters", "Virtual Tours", "Agent Management", "Lead Generation"],
    },
    {
      id: 10,
      title: "Healthcare Management",
      description: "Patient and appointment management system",
      category: "Healthcare",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/project-healthcare-appointments.svg",
      demoUrl: "/api/projects/healthcare",
      codeUrl: "https://github.com/touatiseif/healthcare",
      features: ["Patient Records", "Appointment Scheduling", "Medical History", "Billing", "Reports"],
    },
    {
      id: 11,
      title: "Fitness Tracking App",
      description: "Personal fitness and workout tracking",
      category: "Health & Fitness",
      technologies: ["React Native", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/project-fitness-tracker.svg",
      demoUrl: "/api/projects/fitness",
      codeUrl: "https://github.com/touatiseif/fitness",
      features: ["Workout Tracking", "Progress Charts", "Nutrition Log", "Social Features", "Goals"],
    },
    {
      id: 12,
      title: "Travel Booking Platform",
      description: "Flight and hotel booking system",
      category: "Travel",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      image: "/images/project-booking-system.svg",
      demoUrl: "/api/projects/travel",
      codeUrl: "https://github.com/touatiseif/travel",
      features: ["Flight Search", "Hotel Booking", "Payment Processing", "User Reviews", "Travel Insurance"],
    },
    {
      id: 13,
      title: "Music Streaming App",
      description: "Online music streaming platform",
      category: "Entertainment",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/project-music-player.svg",
      demoUrl: "/api/projects/music",
      codeUrl: "https://github.com/touatiseif/music",
      features: ["Music Streaming", "Playlists", "User Library", "Recommendations", "Offline Mode"],
    },
    {
      id: 14,
      title: "Job Board Platform",
      description: "Job posting and application system",
      category: "Employment",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "/images/project-job-board.svg",
      demoUrl: "/api/projects/job-board",
      codeUrl: "https://github.com/touatiseif/job-board",
      features: ["Job Postings", "Application Tracking", "Resume Parser", "Company Profiles", "Notifications"],
    },
    {
      id: 15,
      title: "Event Management",
      description: "Event planning and ticketing system",
      category: "Events",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/project-event-management.svg",
      demoUrl: "/api/projects/events",
      codeUrl: "https://github.com/touatiseif/events",
      features: ["Event Creation", "Ticket Sales", "Attendee Management", "Calendar Integration", "Analytics"],
    },
    {
      id: 16,
      title: "Financial Dashboard",
      description: "Personal finance tracking and budgeting",
      category: "Finance",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      image: "/images/project-expense-tracker.svg",
      demoUrl: "/api/projects/finance",
      codeUrl: "https://github.com/touatiseif/finance",
      features: ["Expense Tracking", "Budget Planning", "Investment Portfolio", "Reports", "Goals"],
    },
    {
      id: 17,
      title: "Recipe Management",
      description: "Recipe collection and meal planning app",
      category: "Food & Beverage",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/project-recipe-collection.svg",
      demoUrl: "/api/projects/recipes",
      codeUrl: "https://github.com/touatiseif/recipes",
      features: ["Recipe Database", "Meal Planning", "Shopping Lists", "Nutrition Info", "Social Sharing"],
    },
    {
      id: 18,
      title: "Weather App",
      description: "Weather forecast and location-based app",
      category: "Weather",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API", "Geolocation"],
      image: "/images/project-weather-app.svg",
      demoUrl: "/api/projects/weather",
      codeUrl: "https://github.com/touatiseif/weather",
      features: ["Current Weather", "Forecasts", "Location Search", "Weather Maps", "Alerts"],
    },
    {
      id: 19,
      title: "Language Learning",
      description: "Interactive language learning platform",
      category: "Education",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/project-learning-platform.svg",
      demoUrl: "/api/projects/language",
      codeUrl: "https://github.com/touatiseif/language",
      features: ["Interactive Lessons", "Progress Tracking", "Speech Recognition", "Gamification", "Community"],
    },
    {
      id: 20,
      title: "Pet Care App",
      description: "Pet health and care management",
      category: "Pet Care",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      image: "/images/project-healthcare-appointments.svg",
      demoUrl: "/api/projects/pet-care",
      codeUrl: "https://github.com/touatiseif/pet-care",
      features: ["Pet Profiles", "Health Records", "Vaccination Tracking", "Appointment Reminders", "Vet Directory"],
    },
    {
      id: 21,
      title: "Smart Home Dashboard",
      description: "IoT device management and automation",
      category: "IoT",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "MQTT", "WebSocket"],
      image: "/images/project-project-management.svg",
      demoUrl: "/api/projects/smart-home",
      codeUrl: "https://github.com/touatiseif/smart-home",
      features: ["Device Control", "Automation Rules", "Energy Monitoring", "Security Alerts", "Mobile App"],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'E-Commerce', label: 'E-Commerce' },
    { id: 'Content', label: 'Content' },
    { id: 'Food & Beverage', label: 'Food & Beverage' },
    { id: 'SaaS', label: 'SaaS' },
    { id: 'Productivity', label: 'Productivity' },
    { id: 'Analytics', label: 'Analytics' },
    { id: 'Education', label: 'Education' },
    { id: 'Logistics', label: 'Logistics' },
    { id: 'Real Estate', label: 'Real Estate' },
    { id: 'Healthcare', label: 'Healthcare' },
    { id: 'Health & Fitness', label: 'Health & Fitness' },
    { id: 'Travel', label: 'Travel' },
    { id: 'Entertainment', label: 'Entertainment' },
    { id: 'Employment', label: 'Employment' },
    { id: 'Events', label: 'Events' },
    { id: 'Finance', label: 'Finance' },
    { id: 'Weather', label: 'Weather' },
    { id: 'Pet Care', label: 'Pet Care' },
    { id: 'IoT', label: 'IoT' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechClass = (tech: string) => {
    const techMap: { [key: string]: string } = {
      'React': 'tech-react',
      'Next.js': 'tech-nextjs',
      'Vue.js': 'tech-vue',
      'TypeScript': 'tech-typescript',
      'Tailwind CSS': 'tech-tailwind',
      'Node.js': 'tech-node',
      'Python': 'tech-python',
    };
    return techMap[tech] || 'tech-badge';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">🚀 My Digital Workshop</span>
            <br />
            <span className="text-white">Where Ideas Come to Life</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore 21 professionally crafted landing pages and applications, each showcasing 
            cutting-edge web development practices, innovative design, and creative problem-solving.
            Ready to bring your vision to reality? Get any project for just $50!
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.category}</p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`${getTechClass(tech)} text-xs`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, '_blank');
                      }}
                    >
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('/payment', '_blank');
                      }}
                    >
                      Get This Project - $50
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-12"
        >
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              🚀 Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Get any of these professional landing pages for just $50, or a custom admin dashboard for $30. 
              Transform your ideas into reality with modern, responsive, and scalable web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/payment', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all text-lg"
              >
                🎯 Get Started - Choose Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/contact', '_blank')}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all text-lg"
              >
                💬 Let&apos;s Discuss Your Needs
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300">{selectedProject.description}</p>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className={`${getTechClass(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  View Live Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/payment', '_blank')}
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all"
                >
                  Get This Project - $50
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
