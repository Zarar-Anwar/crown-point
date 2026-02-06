import React from 'react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Stats from '../../components/Stats/Stats';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import IndustrySolutions from '../../components/IndustrySolutions/IndustrySolutions';
import Security from '../../components/Security/Security';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTA from '../../components/CTA/CTA';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <IndustrySolutions />
      <Security />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
