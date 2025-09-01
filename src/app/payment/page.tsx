'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'stripe',
    name: 'Credit/Debit Card',
    icon: '💳',
    description: 'Visa, Mastercard, American Express'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: '🔵',
    description: 'Fast and secure online payments'
  },
  {
    id: 'crypto',
    name: 'Cryptocurrency',
    icon: '₿',
    description: 'Bitcoin, Ethereum, USDT'
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    icon: '🏦',
    description: 'Direct bank transfer'
  }
];

export default function PaymentPage() {
  const [selectedProduct, setSelectedProduct] = useState<'landing' | 'dashboard'>('landing');
  const [selectedPayment, setSelectedPayment] = useState('stripe');
  const [isProcessing, setIsProcessing] = useState(false);

  const products = {
    landing: {
      title: 'Landing Page Development',
      price: 50,
      description: 'Professional landing page with modern design',
      features: [
        'Responsive design for all devices',
        'SEO optimized',
        'Contact forms',
        'Analytics integration',
        'Social media integration',
        'Content management system',
        'Performance optimization',
        '1 month of support'
      ]
    },
    dashboard: {
      title: 'Admin Dashboard Development',
      price: 30,
      description: 'Custom admin dashboard with full functionality',
      features: [
        'User authentication system',
        'Data visualization charts',
        'CRUD operations',
        'Role-based access control',
        'Real-time updates',
        'Export functionality',
        'Mobile responsive',
        '2 weeks of support'
      ]
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment processed successfully! You will receive an email with project details.');
    }, 2000);
  };

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
        <ClientOnly>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Get Your Custom Project
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your project type and complete your payment to get started
            </p>
          </motion.div>
        </ClientOnly>
      </section>

      {/* Product Selection */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Landing Page Option */}
          <ClientOnly>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`glass rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                selectedProduct === 'landing' ? 'ring-2 ring-blue-500 bg-blue-500/10' : 'hover:bg-white/5'
              }`}
              onClick={() => setSelectedProduct('landing')}
            >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">{products.landing.title}</h3>
              <div className="text-4xl font-bold text-blue-400 mb-2">${products.landing.price}</div>
              <p className="text-gray-300">{products.landing.description}</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              {products.landing.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          </ClientOnly>

          {/* Dashboard Option */}
          <ClientOnly>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`glass rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                selectedProduct === 'dashboard' ? 'ring-2 ring-blue-500 bg-blue-500/10' : 'hover:bg-white/5'
              }`}
              onClick={() => setSelectedProduct('dashboard')}
            >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-2">{products.dashboard.title}</h3>
              <div className="text-4xl font-bold text-blue-400 mb-2">${products.dashboard.price}</div>
              <p className="text-gray-300">{products.dashboard.description}</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              {products.dashboard.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          </ClientOnly>
        </div>
      </section>

      {/* Payment Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <ClientOnly>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-xl p-8"
          >
          <h2 className="text-3xl font-bold mb-6 text-center">Payment Details</h2>
          
          {/* Order Summary */}
          <div className="bg-black/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between items-center mb-2">
              <span>{products[selectedProduct].title}</span>
              <span className="text-blue-400 font-bold">${products[selectedProduct].price}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Processing Fee</span>
              <span className="text-gray-400">$2.99</span>
            </div>
            <hr className="border-white/20 my-3" />
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span className="text-green-400">${products[selectedProduct].price + 2.99}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`glass rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                    selectedPayment === method.id ? 'ring-2 ring-blue-500 bg-blue-500/10' : 'hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <div className="font-semibold">{method.name}</div>
                      <div className="text-sm text-gray-400">{method.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Button */}
          <ClientOnly>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
              onClick={handlePayment}
              disabled={isProcessing}
            >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing Payment...</span>
              </div>
            ) : (
              `Pay $${products[selectedProduct].price + 2.99}`
                          )}
            </motion.button>
          </ClientOnly>

          {/* Security Notice */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              🔒 Your payment information is secure and encrypted
            </p>
            <p className="text-sm text-gray-400 mt-2">
              💳 We accept all major credit cards and payment methods
            </p>
          </div>
        </motion.div>
        </ClientOnly>
      </section>
    </div>
  );
}
