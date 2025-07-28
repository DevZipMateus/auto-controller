
import React, { useEffect, useRef } from 'react';
import { Shield, Satellite, MapPin, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Pessoal e Patrimonial",
      description: "Prioridade máxima na segurança, desde orientação preventiva até acionamento de autoridades competentes."
    },
    {
      icon: <Satellite className="h-8 w-8" />,
      title: "Inteligência Embarcada",
      description: "Pontos de referência pré-determinados, cerca virtual, alertas automáticos e controle remoto avançado."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Cobertura Nacional",
      description: "Atuação em todo território nacional e América Latina com suporte técnico especializado."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Suporte Logístico",
      description: "Soluções para área de logística, diferenciando estratégias de redução de custos operacionais."
    }
  ];

  const technologies = [
    "GPS", "GPRS", "GSM", "Satélite", "DVR Auto Vision", 
    "Transmissor Online", "Gravador de Imagens", "Vídeo Monitoramento", 
    "Inteligência Artificial", "ADAS", "Sensor de Fadiga"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0"
          >
            SOBRE NÓS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-900 mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            Especialistas em
            <br />
            <span className="text-blue-600">Segurança Automotiva</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto opacity-0 px-4 sm:px-0 leading-relaxed"
          >
            A Auto Controller é uma empresa especializada em segurança automotiva através de sistemas 
            e equipamentos de alta tecnologia, proporcionando tranquilidade e economia.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Texto descritivo */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="opacity-0 space-y-6"
          >
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prover aos nossos clientes segurança, tranquilidade e economia com custos acessíveis. 
                Nossa Central de Monitoramento está em constante vigilância, monitorando os eventos 
                de todos os veículos e equipamentos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nossa equipe é treinada para dar prioridade à segurança pessoal e proteção ao patrimônio, 
                desde orientação preventiva até acionamento das autoridades competentes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                Inovação Contínua
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Estamos em constante busca por novas tecnologias para sempre estar à frente com 
                produtos e serviços de qualidade e tecnologia de ponta, oferecendo evolução 
                gradativa e contínua nos quesitos tecnológicos.
              </p>
            </div>
          </div>

          {/* Características principais */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="opacity-0"
          >
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2 text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologias */}
        <div 
          ref={el => elementsRef.current[5] = el}
          className="bg-blue-900 rounded-2xl p-8 sm:p-12 text-center opacity-0"
        >
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Tecnologias Avançadas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div 
          ref={el => elementsRef.current[6] = el}
          className="mt-16 sm:mt-20 opacity-0"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">Confiança</h4>
              <p className="text-gray-600">Ganhando mercado devido à confiança depositada pelos clientes</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">Transparência</h4>
              <p className="text-gray-600">Transparência nas negociações e metodologia de trabalho</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Satellite className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">Tecnologia</h4>
              <p className="text-gray-600">Sempre à frente com tecnologia de ponta e inovação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
