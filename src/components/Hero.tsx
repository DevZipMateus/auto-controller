
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, Shield, Satellite, MapPin, Star } from 'lucide-react';

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(37, 99, 235, 0.6) 50%, rgba(29, 78, 216, 0.7) 100%), url('/lovable-uploads/b6f9aa28-f7a3-4717-8a71-240719f28d93.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Badge de credibilidade */}
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 opacity-0 shadow-lg"
          >
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            <span className="text-blue-900 font-medium text-xs sm:text-sm lg:text-base">Especialistas em Segurança Automotiva</span>
          </div>
          
          {/* Título principal */}
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 opacity-0 leading-tight tracking-tight"
            style={{ 
              animationDelay: '200ms',
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
            }}
          >
            AUTO CONTROLLER
            <br />
            <span 
              className="font-black"
              style={{
                background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none'
              }}
            >
              SYSTEM
            </span>
          </h1>
          
          {/* Slogan */}
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto mb-6 sm:mb-8 font-medium opacity-0 leading-relaxed tracking-wide px-2 sm:px-4"
            style={{ 
              animationDelay: '400ms',
              textShadow: '0 2px 15px rgba(0,0,0,0.5)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
            }}
          >
            A TECNOLOGIA DO FUTURO PRESENTE!
          </p>

          {/* Subtítulo descritivo */}
          <p 
            ref={el => elementsRef.current[3] = el}
            className="text-blue-100 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto mb-8 sm:mb-12 opacity-0 leading-relaxed px-2 sm:px-4"
            style={{ 
              animationDelay: '600ms',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Rastreamento e Monitoramento por <span className="text-white font-semibold">GPS • GPRS • Satélite</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">Vídeo Monitoramento com IA • ADAS • Gestão de Frotas</span>
          </p>

          {/* Estatísticas de credibilidade */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border border-white/30">
              <div className="flex items-center justify-center mb-2">
                <Satellite className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300 mr-2" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">24/7</div>
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium tracking-wide">Monitoramento</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border border-white/30">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300 mr-2" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Nacional</div>
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium tracking-wide">Cobertura</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border border-white/30">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 fill-current" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium tracking-wide">Alta Qualidade</div>
            </div>
          </div>

          {/* Diferenciais principais */}
          <div 
            ref={el => elementsRef.current[5] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 opacity-0"
            style={{ animationDelay: '1000ms' }}
          >
            <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-white/20">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300" />
              <span className="text-white font-medium tracking-wide text-sm sm:text-base">Segurança Garantida</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-white/20">
              <Satellite className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300" />
              <span className="text-white font-medium tracking-wide text-sm sm:text-base">Tecnologia Avançada</span>
            </div>
          </div>
          
          {/* Call to Actions */}
          <div 
            ref={el => elementsRef.current[6] = el}
            className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 opacity-0 px-4 sm:px-0"
            style={{ animationDelay: '1200ms' }}
          >
            <a 
              href="https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Auto%20Controller%20System." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-blue-500 hover:border-blue-400 tracking-wide"
            >
              SOLICITAR ORÇAMENTO
            </a>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/30 tracking-wide"
            >
              CONHEÇA NOSSA EMPRESA
            </button>
          </div>

          {/* Confiança adicional */}
          <div 
            ref={el => elementsRef.current[7] = el}
            className="mt-12 sm:mt-16 lg:mt-20 opacity-0"
            style={{ animationDelay: '1400ms' }}
          >
            <p className="text-blue-100 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 font-medium tracking-wide">
              Atuação em todo território Nacional e América Latina
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-blue-200 text-xs sm:text-sm font-medium tracking-wide">
              <span>• Central de Monitoramento 24h</span>
              <span>• Inteligência Embarcada</span>
              <span>• Suporte Técnico Especializado</span>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-float"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={24} className="sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default Hero;
