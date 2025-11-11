import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Disclaimer from '../components/Disclaimer';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';

type Page = 'home' | 'payment';

interface HomePageProps {
  navigateTo: (page: Page, hash?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="w-full flex flex-col items-center animate-fade-in-up">
      <Hero navigateTo={navigateTo} />
      <Features navigateTo={navigateTo} />
      <Testimonials />
      <Disclaimer />
      <FinalCTA />
      <Contact />
    </div>
  );
};

export default HomePage;