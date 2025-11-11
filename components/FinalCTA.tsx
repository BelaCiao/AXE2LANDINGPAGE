import React from 'react';

const ShieldCheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

const PaymentIcons: React.FC = () => (
    <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 font-bold flex items-center">
            <span>PIX</span>
        </div>
        <div className="bg-gray-800 rounded-lg px-3 py-2 flex items-center gap-2">
            <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.3,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.7,0 35,0 Z" opacity=".07"/><path fill="#fff" d="M35,1 L3,1 C1.9,1 1,1.9 1,3 L1,21 C1,22.1 1.9,23 3,23 L35,23 C36.1,23 37,22.1 37,21 L37,3 C37,1.9 36.1,1 35,1 Z"/><path fill="#1A1F71" d="M14.2,16.5 L10.5,16.5 L12.4,7.5 L16.1,7.5 L14.2,16.5 Z M25.6,7.5 L22.8,7.5 L21.1,13.5 L19.9,7.5 L17.1,7.5 L19.4,16.5 L22.2,16.5 L25.6,7.5 Z M29.1,10.1 C29.1,9 28.1,8.3 27,8.3 C26.3,8.3 25.7,8.6 25.4,9 L25.1,7.7 L22.8,7.7 L23.5,16.5 L25.8,16.5 L25.8,10.5 C25.8,9.9 26.3,9.6 26.8,9.6 C27.2,9.6 27.5,9.8 27.5,10.3 L27.5,16.5 L29.8,16.5 L29.8,10.1 L29.1,10.1 Z M33.2,12.3 C33.2,14.6 31.3,15.8 29.6,16.2 L29.6,16.5 L30.9,16.5 C32.9,16.5 34.1,15.1 34.4,13.2 L34.5,12.3 L33.2,12.3 Z M30.8,12.1 C31.3,11.8 31.5,11.4 31.5,10.9 C31.5,10 30.9,9.7 30.2,9.7 L29.5,9.7 L29.5,12 L30.8,12.1 Z M9.5,7.5 L6.3,16.5 L3.8,16.5 L7.1,7.5 L9.5,7.5 Z"/></g></svg>
            <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-mastercard"><title id="pi-mastercard">Mastercard</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.3,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.7,0 35,0 Z" opacity=".07"/><path fill="#fff" d="M35,1 L3,1 C1.9,1 1,1.9 1,3 L1,21 C1,22.1 1.9,23 3,23 L35,23 C36.1,23 37,22.1 37,21 L37,3 C37,1.9 36.1,1 35,1 Z"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22,12 C22,14.7 20.2,17.1 17.8,18.1 C16.9,18.6 15.9,19 15,19 C11.1,19 8,15.9 8,12 C8,8.1 11.1,5 15,5 C15.9,5 16.9,5.4 17.8,5.9 C20.2,6.9 22,9.3 22,12 Z"/></g></svg>
        </div>
        <div className="bg-gray-800 rounded-lg px-3 py-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 15v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4M8 11h8M12 3v12"/></svg>
            <span className="text-white ml-2 font-semibold">Boleto</span>
        </div>
    </div>
);

const PackageCard: React.FC<{
    name: string;
    price: string;
    credits: string;
    bonus?: string;
    tag: string;
    popular: boolean;
}> = ({ name, price, credits, bonus, tag, popular }) => (
    <div className={`relative bg-slate-900/50 p-8 rounded-2xl border flex flex-col text-center transition-transform duration-300 ${popular ? 'border-ase-gold scale-105 shadow-2xl shadow-ase-gold/30' : 'border-ase-purple/30'}`}>
        {popular && (
            <div className="absolute top-0 right-0 bg-ase-gold text-ase-deep-blue font-bold text-xs py-1 px-4 rounded-bl-lg rounded-tr-xl">
                {tag}
            </div>
        )}
        <h4 className="text-2xl font-serif font-bold text-white mb-4">{name}</h4>
        <p className="text-5xl font-bold text-white mb-2">
            <span className="text-xl align-top mr-1">R$</span>{price}
        </p>
        <p className="text-2xl font-semibold text-ase-gold mb-6">
            {credits} Axés {bonus && <span className="text-white text-base font-normal">+ {bonus} Bônus</span>}
        </p>
        <p className="text-gray-400 mb-8 h-10 flex items-center justify-center">{!popular && tag}</p>
        <button className={`w-full mt-auto font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${popular ? 'bg-ase-gold hover:bg-yellow-400 text-ase-deep-blue shadow-lg shadow-ase-gold/40' : 'bg-ase-purple/80 hover:bg-ase-purple text-white'}`}>
            Comprar {credits} Axés
        </button>
    </div>
);

const FinalCTA: React.FC = () => {
    const packages = [
        { name: 'Caminho Aberto', price: '19,90', credits: '5', tag: 'Ideal para iniciar.', popular: false },
        { name: 'Odu de Fartura', price: '39,90', credits: '12', bonus: '2', tag: 'MAIS VENDIDO!', popular: true },
        { name: 'Firmeza Total', price: '99,90', credits: '30', bonus: '5', tag: 'Maior economia e +5 Axés grátis.', popular: false }
    ];

    return (
        <section id="cta" className="py-20 bg-gradient-to-t from-ase-purple/30 to-transparent">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl font-serif text-ase-gold mb-4">Dê o próximo passo na sua jornada de Axé!</h3>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-white">
                  Escolha o Pacote de Axé que Combina com Seu Caminho
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20 animate-fade-in-up">
                    {packages.map(pkg => <PackageCard key={pkg.name} {...pkg} />)}
                </div>

                <div className="max-w-3xl mx-auto">
                  <h3 className="text-3xl font-serif font-bold mb-6 text-white">Escolha Como o Axé Vai Circular</h3>
                  <p className="text-gray-400 mb-8">Pagamento seguro e processado pelos melhores gateways do mercado.</p>
                  <PaymentIcons />
                </div>
                
                <div className="mt-20 max-w-4xl mx-auto bg-slate-900/50 p-6 rounded-xl border border-ase-purple/30 flex flex-col md:flex-row items-center gap-6 text-left">
                    <div className="flex-shrink-0 text-ase-turquoise">
                        <ShieldCheckIcon className="w-16 h-16 md:w-24 md:h-24"/>
                    </div>
                    <div className="flex-grow space-y-4">
                       <div>
                            <h4 className="text-xl font-bold text-white">Compra Segura e Garantida</h4>
                            <p className="text-gray-400 text-sm">Seus dados estão protegidos. Utilizamos criptografia de ponta e gateways de pagamento confiáveis para garantir a segurança da sua transação.</p>
                       </div>
                        <div className="border-t border-ase-purple/20 pt-4">
                            <p className="text-sm text-gray-400">
                                <strong className="text-ase-gold/80">Lembre-se:</strong> O Àse-Orí oferece guias e conselhos. Não realizamos Ebós ou Rituais. Consulte seu Babalorixá de confiança.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FinalCTA;