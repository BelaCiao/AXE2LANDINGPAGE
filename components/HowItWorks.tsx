import React from 'react';

const readingResult = [
  {
    number: 6,
    name: 'As Nuvens',
    keywords: 'Confusão, incerteza, dúvida, instabilidade',
    position: 'O Passado - A Raiz',
    description: 'Aponta para um período de confusão, dúvidas e incertezas. A situação não está clara. É preciso esperar a tempestade passar para tomar decisões.'
  },
  {
    number: 17,
    name: 'A Cegonha',
    keywords: 'Mudança, novidade, gravidez, viagem',
    position: 'O Presente - A Situação',
    description: 'Anuncia mudanças positivas, novidades e surpresas. Pode indicar uma mudança de casa, uma viagem ou a chegada de um bebê. É o movimento da vida.'
  },
  {
    number: 12,
    name: 'Os Pássaros',
    keywords: 'Comunicação, fofoca, conversas, agitação',
    position: 'O Futuro - O Conselho',
    description: 'Representa a comunicação, conversas e negociações. Pode também alertar para fofocas e mal-entendidos. Muita agitação e troca de informações.'
  }
];

const CardResult: React.FC<{ card: typeof readingResult[0] }> = ({ card }) => (
  <div className="border border-ase-gold/20 rounded-lg p-6 flex flex-col sm:flex-row gap-6 bg-black/20">
    <div className="flex-shrink-0 w-full sm:w-1/4 bg-slate-100/10 rounded-md p-4 text-center flex flex-col justify-center items-center">
        <span className="text-3xl font-serif font-bold text-ase-gold">{card.number}</span>
        <h4 className="text-xl font-bold mt-1 text-white">{card.name}</h4>
        <p className="text-xs text-gray-400 mt-2">{card.keywords}</p>
    </div>
    <div className="flex-grow">
        <h3 className="font-bold text-lg text-gray-300">{card.position}</h3>
        <h4 className="text-2xl font-serif text-white mb-2">{card.name}</h4>
        <p className="text-gray-400 leading-relaxed">{card.description}</p>
    </div>
  </div>
);


const HowItWorks: React.FC = () => {
    return (
      <section className="w-full max-w-4xl py-20 px-4 animate-fade-in-up">
        <h2 className="text-4xl font-serif text-center mb-2">Uma Leitura Clara e Intuitiva</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">Veja um exemplo de como sua Leitura Cigana será apresentada no aplicativo, trazendo clareza sobre as tendências do seu caminho.</p>
        
        <div className="space-y-6">
          {readingResult.map(card => <CardResult key={card.number} card={card} />)}
        </div>

        <div className="text-center mt-10">
          <a href="#cta" className="bg-ase-gold/20 text-ase-gold hover:bg-ase-gold/30 font-bold text-lg py-3 px-10 rounded-lg transition-all duration-300">
              Conheça o App
          </a>
        </div>
      </section>
    );
};

export default HowItWorks;