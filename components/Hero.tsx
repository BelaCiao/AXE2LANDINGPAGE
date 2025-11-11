import React from 'react';

type Page = 'home' | 'payment';

interface HeroProps {
  navigateTo: (page: Page, hash?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <section className="w-full text-center py-24 md:py-32 px-4 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-ase-gold leading-tight">
            Desvende os Segredos que os Oráculos Guardam para Você
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl">
            Sonhos, búzios, cartas... Receba clareza e orientação para as suas decisões mais importantes. A sabedoria ancestral está ao seu alcance.
        </p>
        <div className="mt-10">
            <button
                onClick={() => navigateTo('payment')}
                className="bg-ase-gold hover:bg-yellow-400 text-ase-deep-blue font-bold text-lg py-4 px-12 rounded-lg shadow-lg shadow-ase-gold/40 transform hover:scale-105 transition-all duration-300 animate-subtle-pulse">
                Consultar Oráculos
            </button>
        </div>
    </section>
  );
};

export default Hero;