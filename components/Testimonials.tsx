
import React from 'react';

interface TestimonialCardProps {
    quote: string;
    name: string;
    location: string;
    avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, location, avatarUrl }) => (
    <div className="bg-slate-900/50 p-6 rounded-xl shadow-lg border border-ase-purple/30 flex flex-col">
        <p className="text-gray-300 italic mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center">
            <img src={avatarUrl} alt={`Avatar de ${name}`} className="w-12 h-12 rounded-full mr-4 border-2 border-ase-gold" />
            <div>
                <p className="font-bold text-white">{name}</p>
                <p className="text-sm text-gray-400">{location}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "Descobri um Orixá que nem imaginava! O AXÉ CAMINHOS mudou minha forma de ver a vida.",
            name: "Maria S.",
            location: "Salvador/BA",
            avatarUrl: "https://picsum.photos/seed/maria/100/100"
        },
        {
            quote: "A interpretação dos sonhos é incrivelmente precisa. Me ajudou a entender muitas coisas que estavam no meu subconsciente.",
            name: "João P.",
            location: "Rio de Janeiro/RJ",
            avatarUrl: "https://picsum.photos/seed/joao/100/100"
        },
        {
            quote: "As cartas ciganas foram diretas ao ponto. Uma orientação clara para o meu momento profissional. Recomendo!",
            name: "Ana C.",
            location: "São Paulo/SP",
            avatarUrl: "https://picsum.photos/seed/ana/100/100"
        }
    ];

    return (
        <section id="depoimentos" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white">
                    Quem Já Sentiu o Axé do AXÉ CAMINHOS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;