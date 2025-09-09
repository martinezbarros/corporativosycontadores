// pages/index.tsx
'use client'
import Link from 'next/link';
import { motion } from 'motion/react';
import AnimatedButton from './ui/motion/AnimatedButton';

const Home: React.FC = () => {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { ease: 'linear' },
          layout: { duration: 0.3 },
        }}
        className='mb-0.5'
      >
        {/* Hero */}
        <section className="py-24 bg-black text-white text-center relative">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
              Bufete de Abogados Corporativos y Contadores
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-[#BE9A42]">
              Soluciones legales y contables para empresas y particulares.  
              Especialistas en derecho corporativo, fiscalidad internacional y consultoría financiera.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-4">
              <AnimatedButton>
                <Link
                  href="/servicios"
                  className="bg-[#BE9A42] text-black font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  Nuestros Servicios
                </Link>
              </AnimatedButton>
              <AnimatedButton>
                <Link
                  href="/contacto"
                  className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#BE9A42] hover:text-black transition-colors"
                >
                  Agende una Consulta
                </Link>
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center shadow-md border-t-4 border-[#BE9A42]">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Derecho Corporativo
                </h3>
                <p className="text-gray-600">
                  Constitución y asesoría de sociedades, fusiones y adquisiciones,
                  cumplimiento legal y estructuras internacionales.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow-md border-t-4 border-[#BE9A42]">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Servicios Contables
                </h3>
                <p className="text-gray-600">
                  Auditorías, declaraciones fiscales, planificación tributaria y
                  optimización de recursos financieros.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center shadow-md border-t-4 border-[#BE9A42]">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Protección Patrimonial
                </h3>
                <p className="text-gray-600">
                  Fideicomisos, planificación patrimonial y estructuras fiduciarias
                  para blindar sus activos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#BE9A42]">
                  Experiencia Multidisciplinaria
                </h3>
                <p className="text-gray-600">
                  Combinamos abogados especializados y contadores públicos para
                  brindar soluciones integrales.
                </p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#BE9A42]">
                  Enfoque Internacional
                </h3>
                <p className="text-gray-600">
                  Estructuras legales y contables adaptadas a negocios con presencia
                  en múltiples jurisdicciones.
                </p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#BE9A42]">
                  Confianza y Transparencia
                </h3>
                <p className="text-gray-600">
                  Priorizamos relaciones duraderas con nuestros clientes basadas en
                  la ética y la transparencia profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-black text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Comience hoy a optimizar su negocio
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-[#BE9A42]">
              Nuestro equipo está listo para ayudarle a proteger su patrimonio y
              hacer crecer su empresa.
            </p>
            <AnimatedButton>
              <Link
                href="/contacto"
                className="inline-block bg-[#BE9A42] text-black font-semibold px-8 py-3 rounded-lg hover:bg-white transition-colors"
              >
                Solicitar Asesoría
              </Link>
            </AnimatedButton>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
