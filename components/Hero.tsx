import React from 'react';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="w-full text-center py-24 md:py-32 px-4 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-ase-gold leading-tight">
            Àlá Àse: Oráculos de Axé
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl">
            Conecte-se com a sabedoria ancestral. Interprete sonhos, consulte os búzios e receba a orientação das cartas ciganas na palma da sua mão.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#cta" className="bg-ase-gold hover:bg-yellow-400 text-ase-deep-blue font-bold text-lg py-4 px-12 rounded-lg shadow-lg shadow-ase-gold/40 transform hover:scale-105 transition-all duration-300 animate-subtle-pulse">
                Baixe o App Agora
            </a>
            <a 
                href="https://wa.me/5553999335369" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent border-2 border-ase-turquoise text-ase-turquoise font-bold text-lg py-3 px-8 rounded-lg transform hover:scale-105 hover:bg-ase-turquoise/10 transition-all duration-300"
            >
                <WhatsAppIcon />
                Fale Conosco
            </a>
        </div>
    </section>
  );
};

export default Hero;