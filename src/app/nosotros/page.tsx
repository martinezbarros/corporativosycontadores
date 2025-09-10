// app/nosotros/page.tsx - Bufete Corporativo
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import * as motion from "motion/react-client";
import HeroSection from '../ui/components/HeroSection';
import AnimatedButton from '../ui/motion/AnimatedButton';

export const metadata: Metadata = {
  title: 'Nuestra Firma - Soluciones Legales y Contables Integradas',
  description: 'Bufete especializado en derecho corporativo y servicios contables para empresas. Ofrecemos asesoría integral que combina expertise legal y financiero para optimizar su negocio.',
};

export default function Nosotros() {
  return (
    <>
      <motion.div>
        <HeroSection pageTitle="Nosotros" />
        
        {/* Integración Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="hidden md:block lg:w-1/2">
                <div className="relative h-96 w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://bakerandalvarez.site/bufetedeabogadoscorporativosycontadores/wp-content/uploads/sites/4/2025/09/our-team-corporativo-scaled.jpg"
                    alt="Integración legal y contable"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-black mb-6">Soluciones Integradas para Empresas</h2>
                <p className="text-lg text-gray-700 mb-6">
                  El Bufete de Abogados Corporativos y Contadores se posiciona como la primera firma integrada en ofrecer soluciones legales y contables especializadas en estructuras internacionales y protección patrimonial. Nuestro equipo multidisciplinario cuenta con expertise en derecho comercial, servicios fiduciarios y asesoría de inversiones, con particular enfoque en la constitución de empresas offshore en Panamá y otras jurisdicciones preferentes. Esta integración única entre expertise legal y contable nos permite ofrecer a nuestros clientes corporativos una visión holística de sus operaciones internacionales.
                </p>
                <p className="text-lg text-gray-700">
                  Desarrollamos fundaciones de interés privado y fideicomisos para protección de patrimonio con un enfoque estratégico que considera simultáneamente las implicaciones legales, fiscales y contables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Nuestra Metodología de Trabajo</h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Un enfoque integrado que combina expertise legal y financiero para su ventaja competitiva
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Análisis Integral */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#f59e0b]">Análisis Integral</h3>
                <p className="text-white">
                  Evaluamos cada situación desde perspectivas legales y financieras para identificar sinergias y oportunidades.
                </p>
              </div>

              {/* Estrategia Combinada */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#f59e0b]">Estrategia Combinada</h3>
                <p className="text-white">
                  Desarrollamos planes que consideran simultáneamente implicaciones legales, fiscales y operativas.
                </p>
              </div>

              {/* Implementación Coordinada */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#f59e0b]">Implementación Coordinada</h3>
                <p className="text-white">
                  Nuestros equipos ejecutan estrategias de manera sincronizada, asegurando coherencia en todos los frentes.
                </p>
              </div>

              {/* Seguimiento Conjunto */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#f59e0b]">Seguimiento Conjunto</h3>
                <p className="text-white">
                  Monitoreamos resultados y ajustamos estrategias de forma coordinada entre áreas legal y contable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#e6eeff]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Soluciones Integradas para su Empresa</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-black">
              Aproveche la sinergia entre nuestros equipos legal y contable para optimizar su estructura 
              corporativa, minimizar riesgos y maximizar el valor de su negocio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedButton>
                <Link 
                  href="/contacto"
                  className="bg-black text-white px-8 py-3 rounded-md font-medium"
                >
                  Solicitar Auditoría Integral
                </Link>
              </AnimatedButton>
              <AnimatedButton>
                <Link 
                  href="/servicios"
                  className="border border-black text-black px-8 py-3 rounded-md font-medium"
                >
                  Ver Servicios Especializados
                </Link>
              </AnimatedButton>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
