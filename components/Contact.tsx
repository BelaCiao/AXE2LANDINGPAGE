import React, { useState } from 'react';

const MailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ase-turquoise">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const mailtoLink = `mailto:maicongn@hotmail.com?subject=${encodeURIComponent(`Contato Àlá Àse - ${formData.name}`)}&body=${encodeURIComponent(formData.message + `\n\nDe: ${formData.name}\nEmail: ${formData.email}`)}`;

    return (
        <section id="contato" className="py-20 w-full">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <div className="flex justify-center mb-6">
                    <MailIcon />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-white">
                    Fale Conosco
                </h2>
                <p className="text-gray-400 mb-12">
                    Tem alguma dúvida ou interesse em uma parceria? Preencha o formulário abaixo e entraremos em contato.
                </p>

                <form className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Seu Nome</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-slate-900/50 border border-ase-purple/30 rounded-lg px-4 py-3 text-white focus:ring-ase-gold focus:border-ase-gold transition"
                                placeholder="Seu nome completo"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Seu Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-slate-900/50 border border-ase-purple/30 rounded-lg px-4 py-3 text-white focus:ring-ase-gold focus:border-ase-gold transition"
                                placeholder="seu@email.com"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Sua Mensagem</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-slate-900/50 border border-ase-purple/30 rounded-lg px-4 py-3 text-white focus:ring-ase-gold focus:border-ase-gold transition"
                            placeholder="Deixe sua dúvida ou interesse aqui..."
                            required
                        ></textarea>
                    </div>
                    <div className="text-center pt-4">
                        <a
                            href={mailtoLink}
                            className="inline-block bg-ase-gold hover:bg-yellow-400 text-ase-deep-blue font-bold text-lg py-3 px-12 rounded-lg shadow-lg shadow-ase-gold/40 transform hover:scale-105 transition-all duration-300"
                        >
                            Enviar Mensagem
                        </a>
                         <p className="text-xs text-gray-500 mt-4">
                            Ao clicar, seu aplicativo de e-mail padrão será aberto.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;