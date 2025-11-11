
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full text-center p-6 text-xs text-gray-500">
            <div className="max-w-3xl mx-auto space-y-2">
                <p>
                    As interpretações são geradas por IA e devem ser consideradas como insights, não como verdades absolutas.
                    Este aplicativo foi criado com base em livros antigos e tradições raiz, com profundo respeito e cuidado pela
                    verdade sobre nossa religião.
                </p>
                <p>
                    <strong className="text-ase-gold/80">Importante:</strong> A tecnologia oferece guias para reflexão, mas o trabalho espiritual e ritualístico exige a
                    orientação de um líder religioso de confiança.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
