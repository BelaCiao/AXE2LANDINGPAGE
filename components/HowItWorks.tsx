import React from 'react';
import { ciganasCards, CardData } from '../data/ciganas';

const exampleCardsData = [
  { id: 6, position: 'O Passado - A Raiz' },
  { id: 17, position: 'O Presente - A Situação' },
  { id: 12, position: 'O Futuro - O Conselho' }
]
.map(example => {
    const cardData = ciganasCards.find(c => c.id === example.id);
    // Assuming cardData is always found for these hardcoded IDs
    return { ...cardData!, position: example.position };
})
.filter((card): card is CardData & { position: string } => card !== undefined);


interface ExampleCard {
    id: number;
    name: string;
    image: string;
    description: string;
    position: string;
}

const CardResult: React.FC<{ card: ExampleCard }> = ({ card }) => (
  <div className="border border-ase-gold/20 rounded-lg p-6 flex flex-col sm:flex-row gap-6 bg-black/20">
    <div className="flex-shrink-0 w-full sm:w-48 bg-slate-100/10 rounded-md p-4 flex flex-col justify-center items-center">
        <img src={card.image} alt={card.name} className="rounded-lg w-full object-cover"/>
    </div>
    <div className="flex-grow">
        <h3 className="font-bold text-lg text-ase-turquoise">{card.position}</h3>
        <h4 className="text-2xl font-serif text-white mb-2">{card.name}</h4>
        <p className="text-gray-300 leading-relaxed">{card.description}</p>
    </div>
  </div>
);


const HowItWorks: React.FC = () => {
    return (
      <section className="w-full max-w-4xl py-20 px-4 animate-fade-in-up">
        <h2 className="text-4xl font-serif text-center mb-2">Uma Leitura Clara e Intuitiva</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">Veja um exemplo de como sua Leitura Cigana será apresentada no aplicativo, trazendo clareza sobre as tendências do seu caminho.</p>
        
        <div className="space-y-6">
          {exampleCardsData.map(card => <CardResult key={card.id} card={card} />)}
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