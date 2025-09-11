import React, { useEffect, useRef } from 'react';
import { Truck, Wrench, Shield, Smartphone, CheckCircle, MapPin, Clock, DollarSign } from 'lucide-react';

const LogisticsSolutions = () => {
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

  const solutions = [
    {
      icon: Truck,
      title: "Logística",
      description: "A solução projetada para otimizar os processos de entrega, oferecer planejamento de rotas e adaptar a entrega às necessidades comerciais dos seus clientes.",
      features: [
        "Criação e importação de pedidos",
        "Distribuir os pedidos entre as unidades",
        "Planejamento automático de rotas",
        "Monitorar a execução das rotas",
        "Comunicar com os entregadores via chat e notificações",
        "Envio de notificações aos clientes por e-mail e SMS",
        "Preparando relatórios após a execução das rotas"
      ]
    },
    {
      icon: Wrench,
      title: "Gestão de Manutenção de Frotas",
      description: "A solução para acompanhamento de manutenção de frotas, incluindo planejamento, controle e registro de gastos. Desenvolvemos a solução para quem quer reduzir seus custos de operação, evitar manutenções críticas e diminuir o tempo de permanência em estações de reparo.",
      features: [
        "Criação de intervalos de serviço",
        "Controle dos custos de operação do veículo",
        "Controle da validade dos documentos e autorizações dos condutores",
        "Criação de notificações para eventos relacionados à manutenção",
        "Atualização de documentos e autorizações de motoristas",
        "Geração de relatórios sobre os serviços realizados"
      ]
    },
    {
      icon: Shield,
      title: "Monitoramento do Comportamento de Motorista",
      description: "A solução que ajuda a avaliar o desempenho dos motoristas. Ele avalia as habilidades de condução com base em pontos de penalidade para violações como excesso de velocidade, aceleração desnecessária, frenagem brusca, aceleração em curva, etc.",
      features: [
        "Detecção de violações através de sensores instalados nos veículos",
        "Análise do comportamento ao dirigir",
        "Disciplinar e educar os motoristas",
        "Redução de custos com combustível",
        "Prolongamento da vida útil do veículo",
        "Melhoria da segurança da frota"
      ]
    },
    {
      icon: Smartphone,
      title: "Transforme seu Smartphone em Rastreador GPS",
      description: "O aplicativo é instalado em um dispositivo móvel, transformando-o em parte de um abrangente sistema de Monitoramento pessoal. O usuário rastreia funcionários de campo, envia tarefas e controla a execução delas.",
      features: [
        "Transformação do smartphone em rastreador GPS",
        "Rastreamento de funcionários de campo",
        "Envio de tarefas e controle de execução",
        "Configuração remota 24/7 através do aplicativo web",
        "Acesso a diagnósticos do aplicativo",
        "Sistema de monitoramento pessoal abrangente"
      ]
    }
  ];

  return (
    <section id="logistics-solutions" className="py-20 sm:py-24 lg:py-32">
      <div className="section-container">
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            ref={el => elementsRef.current[0] = el}
            className="section-title"
          >
            Soluções Avançadas
          </h2>
          <p 
            ref={el => elementsRef.current[1] = el}
            className="section-subtitle"
          >
            Tecnologia de ponta para otimizar sua operação e maximizar resultados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              ref={el => elementsRef.current[index + 2] = el}
              className="service-card opacity-0"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <solution.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  Principais Funcionalidades:
                </h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          ref={el => elementsRef.current[6] = el}
          className="text-center mt-16 lg:mt-20 opacity-0"
          style={{ animationDelay: '1400ms' }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Pronto para Revolucionar sua Operação?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções podem transformar 
              sua gestão de frotas e logística.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20soluções%20de%20logística%20da%20Auto%20Controller%20System." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Solicitar Demonstração</span>
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center space-x-2 bg-secondary text-secondary-foreground border border-border px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <span>Fale Conosco</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSolutions;