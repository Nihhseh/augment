import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProcess from '../components/OurProcess';
import OurServices from '../components/OurServices';
import ClientSuccessStories from '../components/ClientSuccessStories';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navbar />
        <Header />
        <WhyChooseUs />
        <OurProcess />
        <OurServices />
        <ClientSuccessStories />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
};

export default Home;