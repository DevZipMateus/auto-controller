
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location = () => {
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

  const businessInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      content: "Rua Odilon Martins de Andrade, 355",
      action: "Ver no Google Maps",
      link: "https://maps.google.com/?q=Rua+Odilon+Martins+de+Andrade,+355"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: "(21) 96456-5364",
      action: "Ligar Agora",
      link: "tel:+5521964565364"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      content: "Segunda a Sexta: 8h às 18h",
      action: "Agendar Visita",
      link: "https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20à%20Auto%20Controller%20System."
    }
  ];

  return (
    <section id="location" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0"
          >
            LOCALIZAÇÃO
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-900 mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            Venha Nos Conhecer
            <br />
            <span className="text-blue-600">Pessoalmente</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto opacity-0 px-4 sm:px-0"
          >
            Estamos localizados estrategicamente para melhor atendê-lo. 
            Visite nossa sede e conheça de perto nossa estrutura e equipe especializada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Informações de contato */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="opacity-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {businessInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-900 mb-2 text-lg">
                        {info.title}
                      </h4>
                      <p className="text-gray-700 mb-3 text-base">
                        {info.content}
                      </p>
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-2 transition-colors"
                      >
                        <span>{info.action}</span>
                        <Navigation className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-4 text-lg">
                Cobertura de Atendimento
              </h4>
              <div className="space-y-2 text-gray-700">
                <p>🇧🇷 <strong>Nacional:</strong> Todo território brasileiro</p>
                <p>🌎 <strong>Internacional:</strong> América Latina</p>
                <p>📍 <strong>Sede:</strong> Rio de Janeiro - RJ</p>
                <p>🚚 <strong>Instalação:</strong> Atendimento in-loco</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="opacity-0"
          >
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6789012345!2d-43.2096!3d-22.9035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11c63e0b4b7a5e!2sRua%20Odilon%20Martins%20de%20Andrade%2C%20355%20-%20Rio%20de%20Janeiro%2C%20RJ!5e0!3m2!1sen!2sbr!4v1234567890123!5m2!1sen!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Auto Controller System"
                className="w-full h-96 sm:h-[400px]"
              ></iframe>
            </div>
            <div className="mt-6 bg-blue-900 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-3">Como Chegar</h4>
              <ul className="space-y-2 text-sm">
                <li>🚗 <strong>De carro:</strong> Estacionamento disponível</li>
                <li>🚌 <strong>Transporte público:</strong> Diversas linhas de ônibus</li>
                <li>🚇 <strong>Metrô:</strong> Estação mais próxima a 800m</li>
                <li>📍 <strong>Referência:</strong> Próximo ao centro comercial</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          ref={el => elementsRef.current[5] = el}
          className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center text-white opacity-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Pronto para Conhecer Nossos Serviços?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Visite nossa sede, conheça nossa equipe e descubra como podemos ajudar 
            a proteger seu patrimônio com a melhor tecnologia em segurança automotiva.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20à%20Auto%20Controller%20System."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              AGENDAR VISITA
            </a>
            <a 
              href="tel:+5521964565364"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
            >
              LIGAR AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
