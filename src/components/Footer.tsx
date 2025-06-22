import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const navigate = useNavigate();

  const handleSecretAdminClick = () => {
    navigate('/admin-login');
  };

  return (
    <footer className="py-8 sm:py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Logo />
              <span className="text-white text-xl sm:text-2xl font-bold">Augmentum</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Transforming digital presence through strategic marketing solutions that drive sustainable growth and lasting results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .979.219.979 1.219 0 .719-.219 1.406-.359 2.188-.219.937.359 1.719 1.406 1.719 1.687 0 2.987-1.781 2.987-4.354 0-2.271-1.625-3.856-3.949-3.856-2.695 0-4.281 2.018-4.281 4.105 0 .813.313 1.687.703 2.188.078.094.093.187.07.281-.078.313-.25 1.031-.281 1.156-.047.187-.156.234-.359.141-1.312-.609-2.125-2.531-2.125-4.081 0-3.313 2.406-6.344 6.938-6.344 3.640 0 6.469 2.594 6.469 6.062 0 3.625-2.281 6.531-5.437 6.531-1.062 0-2.062-.547-2.406-1.219 0 0-.528 2.016-.656 2.531-.234.938-.859 2.109-1.281 2.828C9.438 23.719 10.681 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">SEO</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">PPC Advertising</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Social Media Management</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Web Design & Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Our Process</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © 2024 Augmentum Marketing. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">Terms of Service</a>
            
            {/* Secret Admin Button */}
            <motion.button
              onClick={handleSecretAdminClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded text-white text-xs font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              A
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;