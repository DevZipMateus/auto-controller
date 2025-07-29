
import React from 'react';
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/044c3fee-f2d6-4b6a-8981-db6184159656.png" 
                alt="Auto Controller System Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Especialistas em segurança automotiva através de sistemas GPS, GPRS, GSM e Satélite. 
              A tecnologia do futuro presente!
            </p>
            <p className="text-blue-300 font-semibold text-lg mb-4">
              A TECNOLOGIA DO FUTURO PRESENTE!
            </p>
          </div>
          
          {/* Navegação */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#plans" 
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('plans');
                  }}
                >
                  Planos
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contato
            </h3>
            <div className="space-y-3 text-blue-200">
              <p>
                <strong>Endereço:</strong><br />
                Rua Odilon Martins de Andrade, 355<br />
                Rio de Janeiro - RJ
              </p>
              <p>
                <strong>Telefone:</strong><br />
                <a href="tel:+5521964565364" className="hover:text-white transition-colors">
                  (21) 96456-5364
                </a>
              </p>
              <p>
                <strong>E-mail:</strong><br />
                <a href="mailto:autocontrollerrastreamento@gmail.com" className="hover:text-white transition-colors">
                  autocontrollerrastreamento@gmail.com
                </a>
              </p>
              <p>
                <strong>Horário:</strong><br />
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-blue-800 mb-8" />
        
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="text-blue-200 text-sm">
            <p>&copy; {currentYear} Auto Controller System. Todos os direitos reservados.</p>
          </div>
          <div className="text-blue-200 text-sm md:text-right">
            <p>Desenvolvido com tecnologia de ponta • Cobertura Nacional</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
