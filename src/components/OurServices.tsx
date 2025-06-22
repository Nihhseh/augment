import React from 'react';
import { motion } from 'framer-motion';
import { Search, MousePointer, Share2, Code } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const OurServices = () => {
  const services = [
    {
      icon: Search,
      title: "SEO",
      description: "Comprehensive search engine optimization strategies to improve your organic visibility and drive qualified traffic.",
      available: true,
      features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"]
    },
    {
      icon: MousePointer,
      title: "PPC Advertising",
      description: "Pay-per-click advertising campaigns across Google, Facebook, TikTok and other platforms. You only pay when users click your ads.",
      available: true,
      features: ["Google Ads Management", "Social Media Ads", "Keyword Bidding Strategy", "Landing Page Optimization"]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Complete social media management services that build community, engage audiences, and strengthen your brand presence.",
      available: true,
      features: ["Content Creation", "Community Management", "Social Strategy", "Performance Analytics"]
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Beautiful, conversion-focused websites that provide exceptional user experiences and drive results.",
      available: true,
      features: ["UI/UX Design", "Responsive Development", "CRO", "E-commerce"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {" "}Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive digital marketing solutions designed to accelerate your business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassmorphicCard key={index} delay={index * 0.1}>
                <div className="text-center h-full flex flex-col">
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl mb-4"
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs sm:text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 active:scale-95">
                    Learn More
                  </button>
                </div>
              </GlassmorphicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;