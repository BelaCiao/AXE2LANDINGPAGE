import React, { useState } from 'react';

interface Package {
    name: string;
    price: string;
    credits: string;
}

interface PaymentModalProps {
    pkg: Package;
    onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-ase-emerald mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const PaymentModal: React.FC<PaymentModalProps> = ({ pkg, onClose }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isPaid, setIsPaid] = useState(false);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simula chamada de API
        setTimeout(() => {
            setIsProcessing(false);
            setIsPaid(true);
        }, 2000);
    };

    // TODO: Substitua '#' pelo link real do seu aplicativo.
    const finalAppUrl = "#";

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-slate-900 border border-ase-purple/50 rounded-2xl shadow-2xl shadow-ase-purple/20 w-full max-w-md m-4 p-8 relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-3xl leading-none">&times;</button>
                
                {isPaid ? (
                    <div className="text-center">
                        <CheckCircleIcon />
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Acesso Liberado!</h3>
                        <p className="text-gray-300 mb-6">Seu pagamento foi confirmado. Seus <strong>{pkg.credits} Axés</strong> foram adicionados. Clique abaixo para acessar a versão completa do Oráculo AXÉ CAMINHOS.</p>
                        <a 
                            href={finalAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-block text-center bg-ase-gold hover:bg-yellow-400 text-ase-deep-blue font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 mb-3 transform hover:scale-105"
                        >
                            Acessar o Oráculo Completo
                        </a>
                        <button 
                            onClick={onClose}
                            className="w-full text-gray-400 hover:text-white font-semibold py-2"
                        >
                            Fechar
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-serif font-bold text-center text-white mb-2">Finalizar Compra</h3>
                        <p className="text-center text-gray-400 mb-6">Você está adquirindo o pacote <strong className="text-ase-gold">{pkg.name}</strong>.</p>
                        
                        <form onSubmit={handlePayment} className="space-y-4">
                            <div>
                                <label htmlFor="cardName" className="block text-sm font-medium text-gray-300 mb-1">Nome no Cartão</label>
                                <input type="text" id="cardName" className="w-full bg-slate-800 border border-ase-purple/30 rounded-lg px-3 py-2 text-white focus:ring-ase-gold focus:border-ase-gold transition" placeholder="Nome completo" required />
                            </div>
                            <div>
                                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-1">Número do Cartão</label>
                                <input type="text" id="cardNumber" className="w-full bg-slate-800 border border-ase-purple/30 rounded-lg px-3 py-2 text-white focus:ring-ase-gold focus:border-ase-gold transition" placeholder="0000 0000 0000 0000" required />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300 mb-1">Validade</label>
                                    <input type="text" id="expiryDate" className="w-full bg-slate-800 border border-ase-purple/30 rounded-lg px-3 py-2 text-white focus:ring-ase-gold focus:border-ase-gold transition" placeholder="MM/AA" required />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-300 mb-1">CVC</label>
                                    <input type="text" id="cvc" className="w-full bg-slate-800 border border-ase-purple/30 rounded-lg px-3 py-2 text-white focus:ring-ase-gold focus:border-ase-gold transition" placeholder="123" required />
                                </div>
                            </div>
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={isProcessing}
                                    className="w-full flex justify-center items-center bg-ase-gold hover:bg-yellow-400 text-ase-deep-blue font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? <LoadingSpinner/> : `Pagar R$ ${pkg.price}`}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentModal;