import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const OurProcess = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your business, market, and competition to understand your unique challenges and opportunities."
    },
    {
      icon: PenTool,
      number: "02", 
      title: "Strategy Development",
      description: "Based on our analysis, we create a comprehensive marketing strategy tailored to your specific goals and target audience."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Implementation",
      description: "Our expert team executes the strategy with precision, ensuring every campaign element is optimized for maximum impact."
    },
    {
      icon: BarChart,
      number: "04",
      title: "Optimize & Scale",
      description: "We continuously monitor performance, optimize campaigns, and scale successful initiatives to drive sustained growth."
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
              {" "}Process
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A proven methodology that transforms your marketing challenges into sustainable growth opportunities.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-700 transform -translate-y-1/2 z-0 opacity-30"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <GlassmorphicCard key={index} delay={index * 0.1}>
                  <div className="text-center relative">
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl mb-4 relative"
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-400 to-purple-600 text-white text-xs sm:text-sm font-bold rounded-full flex items-center justify-center">
                          {step.number}
                        </span>
                      </motion.div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </GlassmorphicCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;