import React from 'react';

const DreamIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;
const BuziosIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.2 7.8l-4.4 4.4-4.4 4.4"></path><path d="M7.8 7.8l8.8 8.8"></path></svg>;

const OracleCard: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-slate-900/50 backdrop-blur-md border border-ase-gold/30 rounded-2xl p-8 w-full text-center flex flex-col items-center h-full">
        <div className="mb-4 text-ase-gold">{icon}</div>
        <h3 className="text-2xl font-serif text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
    </div>
);


const OtherOracles: React.FC = () => {
    return (
        <div className="my-20 w-full max-w-5xl px-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white">
                Sua Jornada de Autoconhecimento Continua
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OracleCard
                    title="O Segredo de Àlá: Diário de Sonhos"
                    description="Grave seus sonhos e nossa IA, treinada na cosmologia Iorubá, revelará as mensagens de seu Orixá pessoal, interpretando os símbolos e trazendo conselhos profundos."
                    icon={<DreamIcon />}
                />
                <OracleCard
                    title="A Boca de Ifá: Jogo de Búzios"
                    description="Faça sua pergunta ao Awôro Ifá. A sabedoria ancestral dos 16 Odùs responde, trazendo clareza, alertas e a firmeza necessária para suas decisões."
                    icon={<BuziosIcon />}
                />
            </div>
        </div>
    );
};

export default OtherOracles;
