import React from 'react';

const FeatureCard: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-slate-900/50 backdrop-blur-md border border-ase-gold/30 rounded-2xl p-8 w-full text-center flex flex-col items-center">
        <div className="mb-4 text-ase-gold">{icon}</div>
        <h3 className="text-2xl font-serif text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const Features: React.FC = () => {
  return (
    <section id="oraculos" className="py-20 w-full max-w-6xl px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white">
            Oráculos Sagrados ao seu Alcance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
            <FeatureCard 
                title="Diário de Sonhos"
                description="Desvende as mensagens ocultas em seus sonhos. O Oráculo de Àlá interpreta os símbolos e revela insights sobre seu caminho."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>}
            />
            <FeatureCard 
                title="Jogo de Búzios"
                description="Faça sua pergunta ao Awôro Ifá. A sabedoria ancestral dos búzios responde, trazendo clareza para suas decisões e intenções."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.2 7.8l-4.4 4.4-4.4 4.4"></path><path d="M7.8 7.8l8.8 8.8"></path></svg>}
            />
            <FeatureCard 
                title="Cartas Ciganas"
                description="Receba a orientação do Povo Cigano. Três cartas revelam as tendências do seu passado, presente e futuro com precisão e sabedoria."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>}
            />
        </div>
    </section>
  );
};

export default Features;