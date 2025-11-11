import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Disclaimer from './components/Disclaimer';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';


const App: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(255,215,0,0.05) 1px, transparent 0),
      linear-gradient(to bottom right, #0a192f, black)
    `,
    backgroundSize: '25px 25px, 100% 100%',
  };
  
  return (
    <div style={backgroundStyle} className="text-white min-h-screen flex flex-col items-center font-sans">
      <div className="w-full flex flex-col items-center">
        <Header />
        <main className="w-full flex-grow flex flex-col items-center">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Disclaimer />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;