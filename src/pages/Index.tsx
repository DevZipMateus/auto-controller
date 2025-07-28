
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Plans from '@/components/Plans';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClickSpark from '@/components/ClickSpark';
import { useParallax } from '@/hooks/useParallax';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const { getParallaxStyle } = useParallax();

  useEffect(() => {
    // Ensure smooth scroll behavior works properly
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Auto Controller System - Rastreamento e Tecnologia Automotiva</title>
        <meta name="description" content="Especialistas em segurança automotiva através de sistemas GPS, GPRS, GSM e Satélite. Monitoramento de frotas, vídeo monitoramento com IA e ADAS. A tecnologia do futuro presente!" />
        <meta name="keywords" content="rastreamento veicular, GPS, monitoramento frotas, segurança automotiva, ADAS, vídeo monitoramento, Auto Controller" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Auto Controller System" />
        <link rel="canonical" href="https://autocontroller.com.br" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Auto Controller System - Rastreamento e Tecnologia Automotiva" />
        <meta property="og:description" content="Especialistas em segurança automotiva através de sistemas GPS, GPRS, GSM e Satélite. A tecnologia do futuro presente!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autocontroller.com.br" />
        <meta property="og:image" content="/lovable-uploads/d89a9588-d7c5-4208-a21f-f292aa8e7825.png" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Controller System - Rastreamento e Tecnologia Automotiva" />
        <meta name="twitter:description" content="Especialistas em segurança automotiva através de sistemas GPS, GPRS, GSM e Satélite. A tecnologia do futuro presente!" />
        <meta name="twitter:image" content="/lovable-uploads/d89a9588-d7c5-4208-a21f-f292aa8e7825.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Auto Controller System",
            "description": "Empresa especializada em segurança automotiva através de sistemas GPS, GPRS, GSM e Satélite",
            "url": "https://autocontroller.com.br",
            "logo": "/lovable-uploads/d89a9588-d7c5-4208-a21f-f292aa8e7825.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+5521964565364",
              "contactType": "customer service",
              "availableLanguage": "Portuguese"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Odilon Martins de Andrade, 355",
              "addressLocality": "Rio de Janeiro",
              "addressRegion": "RJ",
              "addressCountry": "BR"
            }
          })}
        </script>
      </Helmet>
      
      <ClickSpark
        sparkColor="#1e3a8a"
        sparkSize={12}
        sparkRadius={20}
        sparkCount={6}
        duration={500}
        easing="ease-out"
        extraScale={1.2}
      >
        <main className="min-h-screen flex flex-col antialiased overflow-x-hidden relative">
          {/* Floating elements with JavaScript parallax */}
          <div 
            className="fixed top-20 left-10 w-3 h-3 bg-white/20 rounded-full animate-float -z-10"
            style={getParallaxStyle(0.1)}
          ></div>
          <div 
            className="fixed top-32 right-16 w-2 h-2 bg-primary/30 rounded-full animate-float animation-delay-500 -z-10"
            style={getParallaxStyle(0.15)}
          ></div>
          <div 
            className="fixed bottom-32 left-20 w-4 h-4 bg-blue-600/20 rounded-full animate-float animation-delay-300 -z-10"
            style={getParallaxStyle(0.25)}
          ></div>
          <div 
            className="fixed bottom-20 right-12 w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-700 -z-10"
            style={getParallaxStyle(0.2)}
          ></div>
          
          <NavBar />
          <Hero />
          <div className="space-y-0 relative z-10">
            <div className="section-bg-semi">
              <About />
            </div>
            <div className="section-bg-alt">
              <Services />
            </div>
            <div className="section-bg-semi">
              <Plans />
            </div>
            <div className="section-bg-alt">
              <Testimonials />
            </div>
            <div className="section-bg-semi">
              <Location />
            </div>
            <div className="section-bg-alt">
              <Contact />
            </div>
          </div>
          <Footer />
          <WhatsAppButton />
        </main>
      </ClickSpark>
    </>
  );
};

export default Index;
