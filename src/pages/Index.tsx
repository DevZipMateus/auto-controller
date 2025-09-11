
import React, { useEffect, lazy } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import LazySection from '@/components/LazySection';
import { useParallax } from '@/hooks/useParallax';
import { Helmet } from 'react-helmet-async';

// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const Services = lazy(() => import('@/components/Services'));
const AdvancedSolutions = lazy(() => import('@/components/AdvancedSolutions'));
const Plans = lazy(() => import('@/components/Plans'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const EgestorERP = lazy(() => import('@/components/EgestorERP'));
const Location = lazy(() => import('@/components/Location'));
const Contact = lazy(() => import('@/components/Contact'));
const LogisticsSolutions = lazy(() => import('@/components/LogisticsSolutions'));
const Footer = lazy(() => import('@/components/Footer'));
const WhatsAppButton = lazy(() => import('@/components/WhatsAppButton'));

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
      
      <div className="click-spark-container">
        <main className="min-h-screen flex flex-col antialiased overflow-x-hidden relative contain-layout">
          {/* Reduced floating elements for better performance */}
          <div 
            className="fixed top-20 left-10 w-2 h-2 bg-white/10 rounded-full -z-10"
            style={getParallaxStyle(0.05)}
          ></div>
          <div 
            className="fixed bottom-32 right-20 w-2 h-2 bg-blue-600/10 rounded-full -z-10"
            style={getParallaxStyle(0.08)}
          ></div>
          
          <NavBar />
          <Hero />
          <div className="space-y-0 relative z-10">
            <LazySection>
              <div className="section-bg-semi">
                <About />
              </div>
            </LazySection>
            <LazySection>
              <div className="section-bg-alt">
                <Services />
              </div>
            </LazySection>
            <LazySection>
              <div className="section-bg-semi">
                <AdvancedSolutions />
              </div>
            </LazySection>
            <LazySection>
              <div className="section-bg-alt">
                <Plans />
              </div>
            </LazySection>
            <LazySection>
              <div className="section-bg-alt">
                <Testimonials />
              </div>
            </LazySection>
            <LazySection>
              <div className="section-bg-semi">
                <EgestorERP />
              </div>
            </LazySection>
            <LazySection>
              <div className="section-bg-alt">
                <LogisticsSolutions />
              </div>
            </LazySection>
            <LazySection>
              <div className="section-bg-semi">
                <Location />
              </div>
            </LazySection>
            <LazySection>
              <div className="section-bg-semi">
                <Contact />
              </div>
            </LazySection>
          </div>
          <LazySection>
            <Footer />
          </LazySection>
          <LazySection>
            <WhatsAppButton />
          </LazySection>
        </main>
      </div>
    </>
  );
};

export default Index;
