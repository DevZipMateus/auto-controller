import React from 'react';
import { Truck, Wrench, Shield, Smartphone, Route, Clock, Users, MapPin } from 'lucide-react';

const AdvancedSolutions = () => {
  const solutions = [
    {
      icon: <Route className="h-8 w-8" />,
      title: "Logística Inteligente",
      description: "Solução projetada para otimizar os processos de entrega, oferecer planejamento de rotas e adaptar a entrega às necessidades comerciais dos seus clientes.",
      features: [
        "Criação e importação de pedidos",
        "Distribuição de pedidos entre unidades",
        "Planejamento automático de rotas",
        "Monitoramento da execução das rotas",
        "Comunicação com entregadores via chat",
        "Notificações para clientes por e-mail e SMS",
        "Relatórios de execução das rotas"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Gestão de Manutenção de Frotas",
      description: "Solução completa para acompanhamento de manutenção de frotas, incluindo planejamento, controle e registro de gastos. Reduza custos operacionais e evite manutenções críticas.",
      features: [
        "Criação de intervalos de serviço",
        "Controle de custos de operação do veículo",
        "Controle da validade de documentos",
        "Notificações para manutenção preventiva",
        "Geração de relatórios detalhados",
        "Controle de peças de reposição",
        "Análise de desempenho por km"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Monitoramento do Comportamento",
      description: "Avalie o desempenho dos motoristas com base em pontos de penalidade para violações como excesso de velocidade, aceleração desnecessária e frenagem brusca.",
      features: [
        "Detecção automática de violações",
        "Análise de comportamento de condução",
        "Educação e disciplina dos motoristas",
        "Redução de custos com combustível",
        "Aumento da vida útil do veículo",
        "Melhoria da segurança da frota",
        "Relatórios de performance"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Rastreador GPS Mobile",
      description: "Transforme seu smartphone em um rastreador GPS completo. Monitore funcionários de campo, envie tarefas e controle a execução através de um sistema abrangente.",
      features: [
        "Transformação do celular em rastreador",
        "Rastreamento de funcionários de campo",
        "Envio e controle de tarefas",
        "Configuração remota 24/7",
        "Acesso via aplicativo web",
        "Diagnósticos em tempo real",
        "Monitoramento pessoal integrado"
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="advanced-solutions" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Soluções Avançadas
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tecnologias inovadoras para revolucionar a gestão e monitoramento da sua frota
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${solution.gradient} text-white shadow-lg`}>
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Principais Funcionalidades:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <a 
                    href="https://wa.me/5521964565364?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20soluções%20avançadas%20da%20Auto%20Controller%20System." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${solution.gradient} text-white font-medium text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <span>Saiba Mais</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-6 lg:p-8 border border-primary/20">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Pronto para Revolucionar sua Operação?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Descubra como nossas soluções avançadas podem transformar a gestão da sua frota e otimizar seus resultados.
            </p>
            <a 
              href="https://wa.me/5521964565364?text=Olá!%20Quero%20conhecer%20todas%20as%20soluções%20avançadas%20da%20Auto%20Controller%20System%20e%20receber%20um%20orçamento%20personalizado." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Solicitar Consultoria Gratuita</span>
              <Users className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSolutions;