import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We don't just execute campaigns; we develop comprehensive strategies that align with your business objectives and drive measurable results."
    },
    {
      icon: TrendingUp,
      title: "Proven Growth",
      description: "Our data-driven approach has helped hundreds of clients achieve sustainable growth with an average ROI increase of 340%."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our diverse team of marketing specialists brings decades of combined experience across all digital marketing disciplines."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning campaigns and industry certifications demonstrate our commitment to excellence and innovation."
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
            Why Choose
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {" "}Augmentum
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            We combine strategic thinking with tactical execution to deliver marketing solutions that drive real business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassmorphicCard key={index} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl mb-4"
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </GlassmorphicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;