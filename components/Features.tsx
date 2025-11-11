import React from 'react';

type Page = 'home' | 'payment';
interface FeaturesProps {
    navigateTo: (page: Page) => void;
}

const FeatureCard: React.FC<{ title: string, description: string, icon: React.ReactNode, button?: React.ReactNode }> = ({ title, description, icon, button }) => (
    <div className="bg-slate-900/50 backdrop-blur-md border border-ase-gold/30 rounded-2xl p-8 w-full text-center flex flex-col items-center">
        <div className="mb-4 text-ase-gold">{icon}</div>
        <h3 className="text-2xl font-serif text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
        {button && <div className="mt-6">{button}</div>}
    </div>
);

// --- Ícones dos Orixás ---
const ExuIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10m-4-2l4 4 4-4m-4 9v-5M5 21h14"/></svg>;
const OgunIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 17.5l7-7-3-3-7 7-5.5-5.5-3 3 5.5 5.5z"/><path d="M5 19l-2 2"/></svg>;
const OxossiIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3l-5 5"/><path d="M21 9l-9 9"/><path d="M3 11l8-8"/><path d="M13 21l8-8"/><path d="M9 21V10C9 4 4 3 4 3"/></svg>;
const OssaimIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM12 2c0 10 10 10 0 20C2 12 12 2 12 2zM12 12a2 2 0 100-4 2 2 0 000 4z"/></svg>;
const ObaluaieIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18l12-12M6 6l12 12M12 2v20"/></svg>;
const XangoIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.68 14.68c-1.334 1.334-3.623 1.334-4.957 0L2.5 7.5l4-4L14.68 11.72a3.5 3.5 0 010 4.957z"/><path d="M9.32 9.32c1.334-1.334 3.623-1.334 4.957 0L21.5 16.5l-4 4L9.32 12.28a3.5 3.5 0 010-4.957z"/></svg>;
const YansaIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const YemanjaIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6c3 0 5-2 8-2s5 2 8 2M3 12c3 0 5-2 8-2s5 2 8 2M3 18c3 0 5-2 8-2s5 2 8 2"/></svg>;
const IbejiIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="6" r="2"/><path d="M7 8v5l-2 4h4l-2-4"/><circle cx="17" cy="6" r="2"/><path d="M17 8v5l-2 4h4l-2-4"/><path d="M10.5 11h3"/></svg>;
const OxalaIcon = () => <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12c-3.2 4-8.2 4-11.4 0C7.4 8 4.2 8 1 12m21 0c-3.2-4-8.2-4-11.4 0C7.4 16 4.2 16 1 12"/><path d="M12 2v20"/></svg>;


const orixas = [
  { name: 'Exu', title: 'Guardião dos Caminhos', description: 'O mensageiro dos Orixás, que rege a comunicação, o comércio e a transformação. Sem ele, nada se faz.', references: 'Comidas: Farofa com dendê (padê), cachaça. Cores: Vermelho e Preto.', icon: <ExuIcon /> },
  { name: 'Ogun', title: 'Senhor do Ferro e da Guerra', description: 'Orixá do trabalho, da coragem e do progresso tecnológico. Abre os caminhos com sua espada.', references: 'Comidas: Feijoada, inhame. Cor: Azul-marinho.', icon: <OgunIcon /> },
  { name: 'Oxóssi', title: 'Rei das Matas e da Fartura', description: 'Orixá da caça, da fartura e do conhecimento. Protetor dos animais e provedor do alimento.', references: 'Comidas: Milho, frutas, porco do mato. Cor: Verde, Azul-turquesa.', icon: <OxossiIcon /> },
  { name: 'Ossaim', title: 'Senhor das Folhas e da Cura', description: 'Detentor do axé de todas as plantas, Orixá da cura, dos segredos da natureza e da magia.', references: 'Comidas: Fumo, mel, cachaça. Cores: Verde e Branco.', icon: <OssaimIcon /> },
  { name: 'Obaluaiê', title: 'Rei da Terra e da Saúde', description: 'Orixá da terra, do sol e da saúde. Rei da pipoca, protege contra as doenças e rege as passagens da vida.', references: 'Comidas: Pipoca (doburu), feijão preto. Cores: Preto, Branco e Vermelho.', icon: <ObaluaieIcon /> },
  { name: 'Xangô', title: 'Orixá da Justiça e do Trovão', description: 'Rei de Oyó, rege o equilíbrio, a justiça, os trovões e o fogo. Seu machado equilibra a razão e a emoção.', references: 'Comidas: Amalá (quiabo com dendê). Cores: Vermelho e Branco, Marrom.', icon: <XangoIcon /> },
  { name: 'Yansã', title: 'Rainha dos Ventos e Tempestades', description: 'Guerreira audaciosa, senhora dos ventos, das paixões e das almas. Representa o movimento e a liberdade.', references: 'Comidas: Acarajé. Cores: Vermelho, Marrom, Coral.', icon: <YansaIcon /> },
  { name: 'Yemanjá', title: 'Rainha do Mar e Mãe de Todos', description: 'Mãe de quase todos os Orixás. Protetora da família, rege a maternidade, a fertilidade e a abundância.', references: 'Comidas: Peixe, manjar branco, arroz. Cores: Azul claro, Branco, Prata.', icon: <YemanjaIcon /> },
  { name: 'Ibeji', title: 'Os Gêmeos Divinos', description: 'Orixás crianças que regem a alegria, a pureza e a dualidade. Trazem sorte, doçura e prosperidade à vida.', references: 'Comidas: Caruru, doces, balas. Cores: Todas as cores, Rosa e Azul.', icon: <IbejiIcon /> },
  { name: 'Oxalá', title: 'O Grande Criador', description: 'O Orixá maior, criador do mundo e da humanidade. Símbolo da paz, da fé, da sabedoria e da pureza. Veste-se de branco.', references: 'Comidas: Canjica branca, inhame. Cor: Branco.', icon: <OxalaIcon /> },
];

const OrixaCard: React.FC<{ name: string; title: string; description: string; references: string; icon: React.ReactNode; }> = ({ name, title, description, references, icon }) => (
    <div className="bg-slate-900/50 backdrop-blur-md border border-ase-purple/30 rounded-2xl flex flex-col overflow-hidden h-full">
        <div className="w-full h-48 flex items-center justify-center bg-ase-deep-blue/40 p-6 text-ase-gold/80">
            {icon}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h4 className="text-2xl font-serif font-bold text-ase-gold">{name}</h4>
            <p className="text-md font-semibold text-gray-300 mb-3">{title}</p>
            <p className="text-gray-400 leading-relaxed text-sm mb-4 flex-grow">{description}</p>
            <div className="border-t border-ase-purple/20 pt-3 mt-auto">
                <p className="text-xs text-gray-400"><strong className="text-ase-turquoise">Referências:</strong> {references}</p>
            </div>
        </div>
    </div>
);


const Features: React.FC<FeaturesProps> = ({ navigateTo }) => {
  return (
    <section id="oraculos" className="py-20 w-full max-w-6xl px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white">
            Oráculos Sagrados ao seu Alcance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                button={
                    <button 
                        onClick={() => navigateTo('payment')} 
                        className="bg-ase-gold/20 text-ase-gold hover:bg-ase-gold/30 font-bold text-lg py-3 px-10 rounded-lg transition-all duration-300">
                        Consultar Oráculo
                    </button>
                }
            />
        </div>
        
        <div id="orixas" className="mt-32">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white">
                Guiados pela Força dos Orixás
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {orixas.map(orixa => <OrixaCard key={orixa.name} {...orixa} />)}
            </div>
        </div>

    </section>
  );
};

export default Features;