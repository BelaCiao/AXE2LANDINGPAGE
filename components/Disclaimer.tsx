
import React from 'react';

const SankofaIcon: React.FC = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ase-turquoise">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        <path d="M7.5 3c-1.5 2-1.5 5 0 7"/>
        <path d="M16.5 3c1.5 2 1.5 5 0 7"/>
    </svg>
);


const Disclaimer: React.FC = () => {
    return (
        <section id="aviso" className="py-20">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <div className="flex justify-center mb-6">
                    <SankofaIcon />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Importante: Respeito e Tradição</h3>
                <p className="text-gray-400 leading-relaxed">
                    O AXÉ CAMINHOS é uma ferramenta de autoconhecimento e guia. Lembre-se sempre: para rituais, Ebós e aprofundamento na sua linhagem, consulte seu Pai de Santo, Mãe de Santo ou Guia Espiritual de confiança. Nosso aplicativo não substitui a força e a sabedoria da liturgia presencial.
                </p>
            </div>
        </section>
    );
};

export default Disclaimer;