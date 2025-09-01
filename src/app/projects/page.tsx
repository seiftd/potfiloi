'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "E-Commerce React App",
    description: "A modern e-commerce platform built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "/api/projects/ecommerce-react",
    codeUrl: "https://github.com/touatiseif/ecommerce-react",
    image: "/images/project-ecommerce.svg",
  },
  {
    id: 2,
    title: "Blog Platform with CMS",
    description: "A content management system for blogs with Next.js",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    demoUrl: "/api/projects/blog-cms",
    codeUrl: "https://github.com/touatiseif/blog-cms",
    image: "/images/project-blog-platform.svg",
  },
  {
    id: 3,
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with Vue.js",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
    demoUrl: "/api/projects/restaurant-management",
    codeUrl: "https://github.com/touatiseif/restaurant-management",
    image: "/images/project-restaurant-management.svg",
  },
  {
    id: 4,
    title: "SaaS Platform",
    description: "Enterprise SaaS solution with subscription management",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    demoUrl: "/api/projects/saas-platform",
    codeUrl: "https://github.com/touatiseif/saas-platform",
    image: "/images/project-saas-platform.svg",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Socket.io", "MongoDB"],
    demoUrl: "/api/projects/task-management",
    codeUrl: "https://github.com/touatiseif/task-management",
    image: "/images/project-task-manager.svg",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Twitter API"],
    demoUrl: "/api/projects/social-dashboard",
    codeUrl: "https://github.com/touatiseif/social-dashboard",
    image: "/images/project-social-media-app.svg",
  },
  {
    id: 7,
    title: "E-Learning Platform",
    description: "Online learning management system",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "/api/projects/elearning",
    codeUrl: "https://github.com/touatiseif/elearning",
    image: "/images/project-learning-platform.svg",
  },
  {
    id: 8,
    title: "Inventory Management",
    description: "Warehouse and inventory tracking system",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    demoUrl: "/api/projects/inventory",
    codeUrl: "https://github.com/touatiseif/inventory",
    image: "/images/project-inventory-management.svg",
  },
  {
    id: 9,
    title: "Real Estate Platform",
    description: "Property listing and management system",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    demoUrl: "/api/projects/real-estate",
    codeUrl: "https://github.com/touatiseif/real-estate",
    image: "/images/project-real-estate-platform.svg",
  },
  {
    id: 10,
    title: "Healthcare Management",
    description: "Patient and appointment management system",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "/api/projects/healthcare",
    codeUrl: "https://github.com/touatiseif/healthcare",
    image: "/images/project-healthcare-appointments.svg",
  },
  {
    id: 11,
    title: "Fitness Tracking App",
    description: "Personal fitness and workout tracking",
    technologies: ["React Native", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "/api/projects/fitness",
    codeUrl: "https://github.com/touatiseif/fitness",
    image: "/images/project-fitness-tracker.svg",
  },
  {
    id: 12,
    title: "Travel Booking Platform",
    description: "Flight and hotel booking system",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    demoUrl: "/api/projects/travel",
    codeUrl: "https://github.com/touatiseif/travel",
    image: "/images/project-booking-system.svg",
  },
  {
    id: 13,
    title: "Music Streaming App",
    description: "Online music streaming platform",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "/api/projects/music",
    codeUrl: "https://github.com/touatiseif/music",
    image: "/images/project-music-player.svg",
  },
  {
    id: 14,
    title: "Job Board Platform",
    description: "Job posting and application system",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    demoUrl: "/api/projects/job-board",
    codeUrl: "https://github.com/touatiseif/job-board",
    image: "/images/project-job-board.svg",
  },
  {
    id: 15,
    title: "Event Management",
    description: "Event planning and ticketing system",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "/api/projects/events",
    codeUrl: "https://github.com/touatiseif/events",
    image: "/images/project-event-management.svg",
  },
  {
    id: 16,
    title: "Financial Dashboard",
    description: "Personal finance tracking and budgeting",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    demoUrl: "/api/projects/finance",
    codeUrl: "https://github.com/touatiseif/finance",
    image: "/images/project-expense-tracker.svg",
  },
  {
    id: 17,
    title: "Recipe Management",
    description: "Recipe collection and meal planning app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "/api/projects/recipes",
    codeUrl: "https://github.com/touatiseif/recipes",
    image: "/images/project-recipe-collection.svg",
  },
  {
    id: 18,
    title: "Weather App",
    description: "Weather forecast and location-based app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API", "Geolocation"],
    demoUrl: "/api/projects/weather",
    codeUrl: "https://github.com/touatiseif/weather",
    image: "/images/project-weather-app.svg",
  },
  {
    id: 19,
    title: "Language Learning",
    description: "Interactive language learning platform",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "/api/projects/language",
    codeUrl: "https://github.com/touatiseif/language",
    image: "/images/project-learning-platform.svg",
  },
  {
    id: 20,
    title: "Pet Care App",
    description: "Pet health and care management",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    demoUrl: "/api/projects/pet-care",
    codeUrl: "https://github.com/touatiseif/pet-care",
    image: "/images/project-healthcare-appointments.svg",
  },
  {
    id: 21,
    title: "Smart Home Dashboard",
    description: "IoT device management and automation",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "MQTT", "WebSocket"],
    demoUrl: "/api/projects/smart-home",
    codeUrl: "https://github.com/touatiseif/smart-home",
    image: "/images/project-project-management.svg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Touati Seif
          </Link>
          <Link href="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            My Projects Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my collection of landing pages, web applications, and digital solutions
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.svg";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`tech-badge tech-${tech.toLowerCase().replace(/[^a-z]/g, '')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
