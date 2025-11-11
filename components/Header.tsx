import React from 'react';

type Page = 'home' | 'payment';

interface HeaderProps {
  navigateTo: (page: Page, hash?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {

  const handleNavClick = (page: Page, hash?: string) => {
    navigateTo(page, hash);
  };

  return (
    <header className="w-full max-w-6xl text-center py-8 px-4 sticky top-0 z-50 bg-ase-deep-blue/80 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="text-left cursor-pointer" onClick={() => handleNavClick('home')}>
            <h1 className="text-4xl font-serif font-bold text-ase-gold">AXÉ CAMINHOS</h1>
            <p className="text-md text-gray-300">Oráculos de Axé</p>
        </div>
        <nav>
          <ul className="flex justify-center space-x-2 md:space-x-6">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className={`py-2 px-1 md:px-2 text-sm md:text-base font-semibold transition-colors duration-300 border-b-2 border-transparent text-gray-300 hover:text-ase-gold hover:border-ase-gold`}
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('home', '#demonstracao')}
                  className={`py-2 px-1 md:px-2 text-sm md:text-base font-semibold transition-colors duration-300 border-b-2 border-transparent text-gray-300 hover:text-ase-gold hover:border-ase-gold`}
                >
                  Demonstração
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('payment')}
                  className={`py-2 px-1 md:px-2 text-sm md:text-base font-semibold transition-colors duration-300 border-b-2 border-transparent text-gray-300 hover:text-ase-gold hover:border-ase-gold`}
                >
                  Comprar Axés
                </button>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
