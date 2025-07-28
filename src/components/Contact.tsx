import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  // Estado para controlar os campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Rastreamento Veicular',
    message: ''
  });

  // Função para atualizar os campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para enviar os dados via WhatsApp
  const handleFormSubmit = () => {
    // Formatear mensagem para WhatsApp
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento.

*Dados de Contato:*
📝 Nome: ${formData.name}
📱 Telefone: ${formData.phone}
🔧 Serviço de Interesse: ${formData.service}

*Mensagem:*
${formData.message}

Aguardo retorno!`;

    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5521964565364?text=${encodedMessage}`;
    
    console.log('Mensagem formatada:', whatsappMessage);
    console.log('URL do WhatsApp:', whatsappUrl);
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({
      name: '',
      phone: '',
      service: 'Rastreamento Veicular',
      message: ''
    });
  };

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

  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      subtitle: "Resposta rápida",
      info: "(21) 96456-5364",
      description: "Atendimento instantâneo via WhatsApp. Tire dúvidas e solicite orçamentos rapidamente.",
      action: "Enviar Mensagem",
      link: "https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Auto%20Controller%20System.",
      bgColor: "bg-green-600 hover:bg-green-700",
      popular: true
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefone",
      subtitle: "Atendimento direto",
      info: "(21) 96456-5364",
      description: "Ligue diretamente para nossa equipe especializada para esclarecimentos e orçamentos.",
      action: "Ligar Agora",
      link: "tel:+5521964565364",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      popular: false
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-mail",
      subtitle: "Suporte técnico",
      info: "autocontrollerrastreamento@gmail.com",
      description: "Envie detalhes do seu projeto por e-mail e receba uma proposta personalizada.",
      action: "Enviar E-mail",
      link: "mailto:autocontrollerrastreamento@gmail.com?subject=Solicitação de Informações",
      bgColor: "bg-blue-900 hover:bg-blue-800",
      popular: false
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0"
          >
            CONTATO
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-900 mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            Entre em Contato
            <br />
            <span className="text-blue-600">Conosco</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto opacity-0 px-4 sm:px-0"
          >
            Estamos prontos para atendê-lo e oferecer a melhor solução em segurança automotiva 
            para suas necessidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 border-2 border-gray-100 hover:border-blue-200"
            >
              {method.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                  MAIS RÁPIDO
                </div>
              )}

              <div className="bg-gray-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 text-blue-600">
                {method.icon}
              </div>
              
              <h3 className="text-blue-900 font-bold text-lg sm:text-xl mb-2 text-center">
                {method.title}
              </h3>
              
              <p className="text-blue-600 font-semibold text-sm mb-3 text-center">
                {method.subtitle}
              </p>

              <div className="text-lg sm:text-xl font-bold text-blue-900 mb-4 text-center">
                {method.info}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm sm:text-base">
                {method.description}
              </p>
              
              <a 
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-block w-full py-3 sm:py-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 text-center ${method.bgColor}`}
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div 
            ref={el => elementsRef.current[6] = el}
            className="opacity-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
              Informações Adicionais
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Odilon Martins de Andrade, 355<br />
                      Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Horário de Atendimento</h4>
                    <div className="text-gray-600">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p className="text-blue-600 font-semibold mt-2">
                        📱 WhatsApp: 24h para emergências
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3">Área de Cobertura</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>🇧🇷 Todo território nacional</li>
                  <li>🌎 América Latina</li>
                  <li>🚚 Instalação in-loco</li>
                  <li>📞 Suporte técnico remoto</li>
                </ul>
              </div>
            </div>
          </div>

          <div 
            ref={el => elementsRef.current[7] = el}
            className="opacity-0"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">
                Solicite um Orçamento
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Nome
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="(21) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option>Rastreamento Veicular</option>
                    <option>Vídeo Monitoramento</option>
                    <option>ADAS - Sensor de Fadiga</option>
                    <option>Gestão de Frotas</option>
                    <option>Consultoria</option>
                    <option>Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>
              </div>
              
              <button 
                onClick={handleFormSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>ENVIAR SOLICITAÇÃO</span>
              </button>
            </div>
          </div>
        </div>

        <div 
          ref={el => elementsRef.current[8] = el}
          className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center text-white opacity-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Pronto para Proteger Seu Patrimônio?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo e descubra como nossa tecnologia pode transformar 
            a segurança do seu veículo ou frota.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20um%20orçamento%20urgente%20para%20os%20serviços%20da%20Auto%20Controller%20System."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
            >
              ORÇAMENTO URGENTE
            </a>
            <a 
              href="tel:+5521964565364"
              className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
            >
              LIGAR AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
