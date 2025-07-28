
import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              elementsRef.current.forEach((el, index) => {
                if (el) {
                  setTimeout(() => {
                    el.classList.add('animate-slide-up');
                  }, index * 150);
                }
              });
            }
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "João Silva",
      company: "Transportes Silva Ltda",
      role: "Gerente de Frota",
      content: "A Auto Controller transformou completamente nossa operação. O monitoramento em tempo real nos permite ter controle total da frota e reduzir custos operacionais significativamente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Maria Santos",
      company: "Logística Express",
      role: "Diretora Operacional",
      content: "O sistema de vídeo monitoramento com IA nos proporcionou uma segurança incomparável. A tecnologia ADAS evitou diversos acidentes e protegeu nossos colaboradores.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e8e4a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Carlos Oliveira",
      company: "Distribuição Rio",
      role: "CEO",
      content: "Excelente suporte técnico e equipamentos de última geração. A central de monitoramento 24/7 nos dá total tranquilidade para focar no crescimento do negócio.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Ana Costa",
      company: "Frota Urbana",
      role: "Coordenadora de Segurança",
      content: "A gestão de combustível e manutenção preventiva revolucionou nossa operação. Conseguimos reduzir 30% dos custos com combustível e evitar quebras inesperadas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const stats = [
    { number: "98%", label: "Clientes Satisfeitos" },
    { number: "24/7", label: "Suporte Técnico" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "1000+", label: "Veículos Monitorados" }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0"
          >
            DEPOIMENTOS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-900 mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            O Que Nossos Clientes
            <br />
            <span className="text-blue-600">Dizem Sobre Nós</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto opacity-0 px-4 sm:px-0"
          >
            A satisfação dos nossos clientes é nossa maior conquista. Conheça as experiências 
            de quem já confia na Auto Controller System.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 border border-gray-100"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.company}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute top-0 left-0 w-6 h-6 text-blue-200 transform -translate-y-2" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base pl-8 italic">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div 
          ref={el => elementsRef.current[7] = el}
          className="bg-blue-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 opacity-0"
        >
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 text-center">
            Números Que Comprovam Nossa Excelência
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          ref={el => elementsRef.current[8] = el}
          className="text-center mt-12 sm:mt-16 opacity-0"
        >
          <h3 className="text-blue-900 text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Junte-se aos Nossos Clientes Satisfeitos
          </h3>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Faça parte do grupo de empresas que escolheram a Auto Controller System 
            para proteger seu patrimônio e otimizar suas operações.
          </p>
          <button 
            onClick={() => {
              window.open('https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20serviços%20da%20Auto%20Controller%20System%20e%20como%20vocês%20podem%20me%20ajudar.', '_blank');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
          >
            SOLICITE SEU ORÇAMENTO AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
