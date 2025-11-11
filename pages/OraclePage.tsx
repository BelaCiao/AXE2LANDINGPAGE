import React, { useState, useEffect } from 'react';
import { ciganasCards, CardData } from '../data/ciganas';

// Fisher-Yates shuffle algorithm
const shuffleDeck = (deck: CardData[]): CardData[] => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CardResult: React.FC<{ card: CardData, position: string }> = ({ card, position }) => (
  <div className="border border-ase-gold/20 rounded-lg p-6 flex flex-col sm:flex-row gap-6 bg-black/20 w-full animate-fade-in-up">
    <div className="flex-shrink-0 w-full sm:w-48 bg-slate-100/10 rounded-md p-4 flex flex-col justify-center items-center">
        <img src={card.image} alt={card.name} className="rounded-lg w-full object-cover"/>
    </div>
    <div className="flex-grow">
        <h3 className="font-bold text-lg text-ase-turquoise">{position}</h3>
        <h4 className="text-2xl font-serif text-white mb-2">{card.name}</h4>
        <p className="text-gray-300 leading-relaxed">{card.description}</p>
    </div>
  </div>
);

interface OraclePageProps {
  navigateTo: (page: 'home' | 'oracle', hash?: string) => void;
}

const OraclePage: React.FC<OraclePageProps> = ({ navigateTo }) => {
  const [deck, setDeck] = useState<CardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardData[]>([]);
  const [isReadingDone, setIsReadingDone] = useState(false);

  useEffect(() => {
    setDeck(shuffleDeck(ciganasCards));
  }, []);

  const handleCardClick = (card: CardData) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      const newSelectedCards = [...selectedCards, card];
      setSelectedCards(newSelectedCards);
      if (newSelectedCards.length === 3) {
        setTimeout(() => setIsReadingDone(true), 1000); // Wait for flip animation
      }
    }
  };
  
  const resetReading = () => {
      setIsReadingDone(false);
      setSelectedCards([]);
      // A small delay to allow the state to update before reshuffling, ensuring a fresh deck feel.
      setTimeout(() => {
        setDeck(shuffleDeck(ciganasCards));
      }, 100);
  };

  const readingPositions = ['O Passado - A Raiz', 'O Presente - A Situação', 'O Futuro - O Conselho'];

  return (
    <section className="w-full max-w-6xl py-20 px-4 flex flex-col items-center animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-white">
        Oráculo Cigano
      </h2>
      
      {!isReadingDone && (
        <>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                Concentre-se em sua pergunta, respire fundo e escolha 3 cartas para revelar as tendências do seu caminho.
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-4">
                {deck.map((card) => {
                    const isSelected = selectedCards.find(c => c.id === card.id);
                    return (
                        <div key={card.id} className={`card-container w-24 h-36 ${isSelected ? 'flipped' : ''}`} onClick={() => handleCardClick(card)}>
                            <div className="card-inner">
                                <div className="card-front bg-ase-purple border-2 border-ase-gold/50 flex items-center justify-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-ase-gold opacity-50">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="3" />
                                        <line x1="12" y1="2" x2="12" y2="9" />
                                        <line x1="12" y1="15" x2="12" y2="22" />
                                        <line x1="22" y1="12" x2="15" y2="12" />
                                        <line x1="9" y1="12" x2="2" y2="12" />
                                        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                                        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                                        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                                        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                                    </svg>
                                </div>
                                <div className="card-back bg-black">
                                    <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
      )}

      {isReadingDone && (
          <>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                Esta é a mensagem das cartas para você. Reflita sobre como essa orientação se aplica ao seu momento.
            </p>
            <div className="w-full max-w-4xl space-y-6">
                {selectedCards.map((card, index) => (
                    <CardResult key={card.id} card={card} position={readingPositions[index]} />
                ))}
            </div>

            {/* --- Attractive CTA to Unlock Full Version --- */}
            <div className="w-full max-w-4xl mt-16 p-8 bg-gradient-to-br from-ase-purple/30 to-ase-deep-blue border border-ase-gold/30 rounded-2xl text-center animate-fade-in-up">
                <h3 className="text-3xl font-serif font-bold text-ase-gold mb-4">Gostou da sua Leitura?</h3>
                <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                    Esta é apenas uma amostra do poder dos oráculos. No app <strong>Àlá Àse</strong>, você acessa a <strong>Mesa Real Cigana completa</strong>, com análises profundas para amor, trabalho, espiritualidade e muito mais.
                </p>
                <button 
                    onClick={() => navigateTo('home', '#cta')} 
                    className="bg-ase-gold hover:bg-yellow-400 text-ase-deep-blue font-bold text-lg py-4 px-12 rounded-lg shadow-lg shadow-ase-gold/40 transform hover:scale-105 transition-all duration-300 animate-subtle-pulse">
                    Desvendar Leitura Completa
                </button>
            </div>
            
            <button onClick={resetReading} className="mt-8 text-ase-turquoise hover:text-white font-semibold py-2 px-6 transition-colors duration-300 border-b-2 border-transparent hover:border-ase-turquoise">
                Fazer Nova Leitura
            </button>
          </>
      )}

    </section>
  );
};

export default OraclePage;