import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, DollarSign, Star, ArrowRight } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const ClientSuccessStories = () => {
  const testimonials = [
    {
      quote: "I couldn't be happier with the results! The team at Augmentum Marketing is fantastic—professional, responsive, and truly dedicated. They helped increase our sales by 300% in just the first month.",
      author: "Jack Williams",
      role: "Head of Sales",
      company: "Cabin Fever Wellness",
      rating: 5,
      results: "300% sales increase"
    },
    {
      quote: "Working with Augmentum transformed our entire digital strategy. Their expertise in SEO and content marketing delivered results beyond our expectations.",
      author: "Sarah Chen",
      role: "Marketing Director", 
      company: "TechFlow Solutions",
      rating: 5,
      results: "250% traffic growth"
    },
    {
      quote: "The strategic approach and attention to detail is unmatched. Our conversion rates improved dramatically within weeks of implementation.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "GrowthLab Inc",
      rating: 5,
      results: "180% conversion boost"
    }
  ];

  const metrics = [
    {
      icon: TrendingUp,
      value: "456%",
      label: "Average conversion increase",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Target,
      value: "94%", 
      label: "Client satisfaction rate",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: DollarSign,
      value: "80%",
      label: "Average cost reduction",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Users,
      value: "150+",
      label: "Successful projects delivered",
      color: "from-purple-500 to-purple-700"
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
            Client
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {" "}Success Stories
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Real results from real clients. See how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left Column - Featured Case Study */}
          <div className="lg:col-span-2">
            <GlassmorphicCard className="h-full">
              <div className="p-2">
                <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs sm:text-sm font-bold rounded-lg mb-4 sm:mb-6">
                  Featured Case Study
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  How we helped Cabin Fever Wellness increase their sales by 300% in just the first month
                </h3>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10"
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-purple-400" />
                        <div className="text-lg sm:text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-400 leading-tight">{metric.label}</div>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </GlassmorphicCard>
          </div>

          {/* Right Column - Testimonials */}
          <div className="space-y-4 sm:space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassmorphicCard>
                  <div className="p-2">
                    {/* Star Rating */}
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold text-xs sm:text-sm">{testimonial.author}</div>
                        <div className="text-gray-400 text-xs">{testimonial.role}</div>
                        <div className="text-gray-500 text-xs">{testimonial.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-purple-400 font-bold text-xs sm:text-sm">{testimonial.results}</div>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicCard>
            <div className="text-center py-6 sm:py-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to see similar results?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto px-4">
                Join 150+ successful businesses that have transformed their digital presence with our strategic marketing solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                Start Your Success Story
              </motion.button>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;