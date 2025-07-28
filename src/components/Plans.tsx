
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const Plans = () => {
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

  const plans = [
    {
      name: "Consultoria",
      subtitle: "Análise Especializada",
      description: "Avaliação completa das suas necessidades em segurança automotiva com recomendações personalizadas.",
      features: [
        "Análise de risco personalizada",
        "Relatório técnico detalhado",
        "Recomendações específicas",
        "Suporte técnico inicial",
        "Proposta comercial"
      ],
      popular: false,
      ctaText: "Solicitar Consultoria"
    },
    {
      name: "Locação",
      subtitle: "Flexibilidade Total",
      description: "Aluguel de equipamentos com manutenção incluída, ideal para empresas que buscam flexibilidade.",
      features: [
        "Equipamentos de última geração",
        "Manutenção preventiva incluída",
        "Suporte técnico 24/7",
        "Upgrade de tecnologia",
        "Sem investimento inicial"
      ],
      popular: true,
      ctaText: "Conhecer Planos"
    },
    {
      name: "Venda e Instalação",
      subtitle: "Solução Completa",
      description: "Aquisição de equipamentos com instalação profissional e garantia estendida.",
      features: [
        "Equipamentos próprios",
        "Instalação profissional",
        "Garantia estendida",
        "Treinamento da equipe",
        "Suporte pós-venda"
      ],
      popular: false,
      ctaText: "Solicitar Orçamento"
    }
  ];

  return (
    <section id="plans" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0"
          >
            NOSSOS PLANOS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-900 mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            Escolha a Modalidade
            <br />
            <span className="text-blue-600">Ideal para Você</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto opacity-0 px-4 sm:px-0"
          >
            Oferecemos diferentes modalidades de atendimento para atender às necessidades específicas 
            de cada cliente, desde consultoria até soluções completas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className={`relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 border-2 ${
                plan.popular 
                  ? "border-blue-600 ring-2 sm:ring-4 ring-blue-100" 
                  : "border-gray-100 hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>MAIS POPULAR</span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-blue-900 font-black text-xl sm:text-2xl mb-2">
                  {plan.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm sm:text-base mb-4">
                  {plan.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <h4 className="font-bold text-blue-900 mb-4 text-center">O que inclui:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`w-full py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-900 hover:bg-blue-800 text-white"
                }`}
                onClick={() => {
                  window.open(`https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20${plan.name}%20da%20Auto%20Controller%20System.`, '_blank');
                }}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Seção adicional */}
        <div 
          ref={el => elementsRef.current[6] = el}
          className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center opacity-0"
        >
          <h3 className="text-blue-900 text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Gestão de Controle e Manutenção
          </h3>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-4xl mx-auto">
            Além dos planos principais, oferecemos serviços especializados em gestão de controle 
            de manutenção e combustível, otimizando a operação da sua frota.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-blue-900 mb-2">Controle de Combustível</h4>
              <p className="text-gray-600 text-sm">Monitoramento em tempo real do consumo</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-blue-900 mb-2">Manutenção Preventiva</h4>
              <p className="text-gray-600 text-sm">Alertas automáticos de manutenção</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-blue-900 mb-2">Relatórios Gerenciais</h4>
              <p className="text-gray-600 text-sm">Análises detalhadas da frota</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h4 className="font-bold text-blue-900 mb-2">Otimização de Rotas</h4>
              <p className="text-gray-600 text-sm">Redução de custos operacionais</p>
            </div>
          </div>
          <button 
            onClick={() => {
              window.open('https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20Gestão%20de%20Controle%20e%20Manutenção%20da%20Auto%20Controller%20System.', '_blank');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
          >
            SAIBA MAIS SOBRE GESTÃO DE FROTAS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
