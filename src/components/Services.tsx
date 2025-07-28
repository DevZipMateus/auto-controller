
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Smartphone, Monitor, Car, Video, Shield, Satellite, MapPin, Settings, CheckCircle } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Car className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Rastreamento Veicular",
      subtitle: "GPS, GPRS e Satélite",
      description: "Monitoramento em tempo real de veículos e frotas com tecnologia GPS, GPRS e satélite, garantindo localização precisa 24/7.",
      features: ["Localização em tempo real", "Histórico de rotas", "Alertas de segurança", "Cerca eletrônica"],
      popular: true
    },
    {
      icon: <Video className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Vídeo Monitoramento",
      subtitle: "DVR Auto Vision com IA",
      description: "Sistema de vídeo monitoramento com inteligência artificial, gravação de imagens e transmissão online em tempo real.",
      features: ["Gravação HD", "Transmissão online", "Inteligência artificial", "Armazenamento seguro"],
      popular: false
    },
    {
      icon: <Shield className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "ADAS - Sensor de Fadiga",
      subtitle: "Assistente de Segurança",
      description: "Sistema avançado de assistência ao motorista com sensor de fadiga e alerta de colisão para máxima segurança.",
      features: ["Detecção de fadiga", "Alerta de colisão", "Monitoramento comportamental", "Relatórios detalhados"],
      popular: false
    },
    {
      icon: <Settings className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Gestão de Frotas",
      subtitle: "Controle e Manutenção",
      description: "Solução completa para gestão, controle de manutenção e monitoramento de combustível de frotas empresariais.",
      features: ["Controle de combustível", "Manutenção preventiva", "Relatórios gerenciais", "Otimização de rotas"],
      popular: false
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0"
          >
            NOSSOS SERVIÇOS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-900 mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            Soluções Completas em
            <br />
            <span className="text-blue-600">Segurança Automotiva</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto opacity-0 px-4 sm:px-0"
          >
            Oferecemos tecnologia de ponta para proteger seu patrimônio e otimizar sua operação 
            com sistemas integrados de monitoramento e gestão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className={cn(
                "relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 border-2",
                service.popular 
                  ? "border-blue-600 ring-2 sm:ring-4 ring-blue-100" 
                  : "border-gray-100 hover:border-blue-200"
              )}
            >
              {service.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                  MAIS PROCURADO
                </div>
              )}

              <div className={cn(
                "w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto",
                service.popular 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 text-gray-700"
              )}>
                {service.icon}
              </div>
              
              <h3 className="text-blue-900 font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-center">
                {service.title}
              </h3>
              
              <p className="text-blue-600 font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-center">
                {service.subtitle}
              </p>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-center text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={cn(
                  "w-full py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base",
                  service.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-900 hover:bg-blue-800 text-white"
                )}
                onClick={() => {
                  window.open('https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20' + service.title + '%20da%20Auto%20Controller%20System.', '_blank');
                }}
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          ))}
        </div>

        {/* Seção de diferenciais */}
        <div 
          ref={el => elementsRef.current[7] = el}
          className="bg-blue-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center opacity-0"
        >
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Por Que Escolher a Auto Controller?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-4xl mx-auto">
            Nossa experiência e tecnologia avançada garantem a melhor solução em segurança automotiva 
            para sua empresa ou veículo pessoal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300 mb-1 sm:mb-2">24/7</div>
              <div className="text-white font-semibold text-sm sm:text-base">Monitoramento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300 mb-1 sm:mb-2">Nacional</div>
              <div className="text-white font-semibold text-sm sm:text-base">Cobertura</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300 mb-1 sm:mb-2">Suporte</div>
              <div className="text-white font-semibold text-sm sm:text-base">Especializado</div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <button 
              onClick={() => {
                window.open('https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado%20para%20os%20serviços%20da%20Auto%20Controller%20System.', '_blank');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
            >
              SOLICITAR ORÇAMENTO PERSONALIZADO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
