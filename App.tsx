import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';

type Page = 'home' | 'payment';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const backgroundStyle = {
    backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(255,215,0,0.05) 1px, transparent 0),
      linear-gradient(to bottom right, #0a192f, black)
    `,
    backgroundSize: '25px 25px, 100% 100%',
  };

  const navigateTo = (page: Page, hash?: string) => {
    setCurrentPage(page);
    
    // Scroll to top or to a specific element after page change
    requestAnimationFrame(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };
  
  return (
    <div style={backgroundStyle} className="text-white min-h-screen flex flex-col items-center font-sans">
      <div className="w-full flex flex-col items-center">
        <Header navigateTo={navigateTo} />
        <main className="w-full flex-grow flex flex-col items-center">
          {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
          {currentPage === 'payment' && <PaymentPage />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;