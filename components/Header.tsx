import React from 'react';

const Header: React.FC = () => {
  const navItems: { href: string, label: string }[] = [
    { href: '#oraculos', label: 'Oráculos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#cta', label: 'Comprar Axés' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="w-full max-w-6xl text-center py-8 px-4 sticky top-0 z-50 bg-ase-deep-blue/80 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="text-left">
            <h1 className="text-4xl font-serif font-bold text-ase-gold">Àlá Àse</h1>
            <p className="text-md text-gray-300">Oráculos de Axé</p>
        </div>
        <nav>
          <ul className="flex justify-center space-x-4 md:space-x-8">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`py-2 px-1 md:px-2 text-base font-semibold transition-colors duration-300 border-b-2 border-transparent text-gray-300 hover:text-ase-gold hover:border-ase-gold`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;