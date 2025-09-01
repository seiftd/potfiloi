'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Dashboard {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  features: string[];
  metrics: { label: string; value: string; change: string }[];
}

const DashboardSection = () => {
  const [activeDashboard, setActiveDashboard] = useState(0);
  const [selectedDashboard, setSelectedDashboard] = useState<Dashboard | null>(null);

  const dashboards: Dashboard[] = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description: "Comprehensive business analytics and reporting dashboard with real-time data visualization",
      category: "Analytics",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "D3.js"],
      image: "/images/dashboard-analytics.svg",
      demoUrl: "/api/dashboards/analytics",
      codeUrl: "https://github.com/touatiseif/analytics-dashboard",
      features: [
        "Real-time data visualization",
        "Interactive charts and graphs",
        "Custom reporting tools",
        "Data export capabilities",
        "User role management"
      ],
      metrics: [
        { label: "Total Revenue", value: "$2.4M", change: "+12.5%" },
        { label: "Active Users", value: "45.2K", change: "+8.1%" },
        { label: "Conversion Rate", value: "3.2%", change: "+2.4%" },
        { label: "Avg. Session", value: "4m 32s", change: "+1.2%" }
      ]
    },
    {
      id: 2,
      title: "CRM Dashboard",
      description: "Customer relationship management dashboard for sales teams and customer service",
      category: "CRM",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux", "Node.js"],
      image: "/images/dashboard-crm.svg",
      demoUrl: "/api/dashboards/crm",
      codeUrl: "https://github.com/touatiseif/crm-dashboard",
      features: [
        "Customer data management",
        "Sales pipeline tracking",
        "Lead scoring and qualification",
        "Communication history",
        "Performance analytics"
      ],
      metrics: [
        { label: "Total Leads", value: "1,234", change: "+15.3%" },
        { label: "Conversion Rate", value: "24.8%", change: "+3.2%" },
        { label: "Avg. Deal Size", value: "$12.5K", change: "+7.8%" },
        { label: "Sales Velocity", value: "45 days", change: "-12.1%" }
      ]
    },
    {
      id: 3,
      title: "E-Commerce Admin Panel",
      description: "Complete e-commerce administration dashboard for online stores",
      category: "E-Commerce",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Vuex", "Node.js"],
      image: "/images/dashboard-ecommerce.svg",
      demoUrl: "/api/dashboards/ecommerce",
      codeUrl: "https://github.com/touatiseif/ecommerce-admin",
      features: [
        "Product management",
        "Order processing",
        "Inventory tracking",
        "Customer management",
        "Sales analytics"
      ],
      metrics: [
        { label: "Total Orders", value: "8,456", change: "+22.1%" },
        { label: "Revenue", value: "$156.7K", change: "+18.9%" },
        { label: "Avg. Order Value", value: "$18.50", change: "+5.2%" },
        { label: "Customer Satisfaction", value: "4.8/5", change: "+0.3" }
      ]
    }
  ];

  const getTechClass = (tech: string) => {
    const techMap: { [key: string]: string } = {
      'React': 'tech-react',
      'Next.js': 'tech-nextjs',
      'Vue.js': 'tech-vue',
      'TypeScript': 'tech-typescript',
      'Tailwind CSS': 'tech-tailwind',
      'Node.js': 'tech-node',
    };
    return techMap[tech] || 'tech-badge';
  };

  return (
    <section id="dashboards" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
            <span className="gradient-text">📊 Professional Admin Dashboards</span>
            <br />
            <span className="text-white">Transform Your Business Operations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond the front-end, I engineer robust administrative systems for data management, 
            analytics, and operational control that drive business success. Get any dashboard for just $30!
          </p>
        </motion.div>

        {/* Dashboard Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {dashboards.map((dashboard, index) => (
            <motion.button
              key={dashboard.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDashboard(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeDashboard === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {dashboard.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Dashboard Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Dashboard Preview */}
          <motion.div
            key={activeDashboard}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-xl overflow-hidden">
              {/* Dashboard Mockup */}
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 className="text-white font-semibold">{dashboards[activeDashboard].title}</h3>
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {dashboards[activeDashboard].metrics.map((metric, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <p className="text-gray-400 text-sm">{metric.label}</p>
                      <p className="text-white font-bold text-xl">{metric.value}</p>
                      <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white/10 rounded-lg p-4 h-32 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <p className="text-sm">Interactive Charts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDashboard(dashboards[activeDashboard])}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                View Details
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(dashboards[activeDashboard].demoUrl, '_blank')}
                className="flex-1 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/payment', '_blank')}
                className="flex-1 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all"
              >
                Get This Dashboard - $30
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Info */}
          <motion.div
            key={activeDashboard}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {dashboards[activeDashboard].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {dashboards[activeDashboard].description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {dashboards[activeDashboard].features.slice(0, 6).map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {dashboards[activeDashboard].technologies.map((tech) => (
                  <span key={tech} className={`${getTechClass(tech)}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Preview */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                {dashboards[activeDashboard].metrics.map((metric, index) => (
                  <div key={index} className="glass p-3 rounded-lg">
                    <p className="text-gray-400 text-xs">{metric.label}</p>
                    <p className="text-white font-bold">{metric.value}</p>
                    <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dashboard Modal */}
      {selectedDashboard && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="glass max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedDashboard.title}</h3>
              <button
                onClick={() => setSelectedDashboard(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Dashboard Preview */}
              <div className="space-y-6">
                <div className="glass rounded-xl overflow-hidden">
                  <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                    {/* Mockup Content */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <h3 className="text-white font-semibold">{selectedDashboard.title}</h3>
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {selectedDashboard.metrics.map((metric, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-3">
                          <p className="text-gray-400 text-xs">{metric.label}</p>
                          <p className="text-white font-bold">{metric.value}</p>
                          <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {metric.change}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Chart Placeholder */}
                    <div className="bg-white/10 rounded-lg p-4 h-24 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="text-xl mb-1">📊</div>
                        <p className="text-xs">Interactive Dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedDashboard.demoUrl, '_blank')}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    View Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('/payment', '_blank')}
                    className="flex-1 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all"
                  >
                    Get This Dashboard - $30
                  </motion.button>
                </div>
              </div>

              {/* Right - Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-gray-300">{selectedDashboard.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">All Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedDashboard.features.map((feature) => (
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
                    {selectedDashboard.technologies.map((tech) => (
                      <span key={tech} className={`${getTechClass(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            📊 Ready to Transform Your Business Operations?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Get any of these professional admin dashboards for just $30. 
            Streamline your business processes with powerful, data-driven solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/payment', '_blank')}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all text-lg"
          >
            🎯 Get Your Dashboard - Only $30
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardSection;
