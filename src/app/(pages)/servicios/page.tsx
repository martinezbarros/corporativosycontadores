// app/servicios/page.tsx
import React from 'react';
import { Metadata } from 'next';
import ServicesSection from '../../ui/components/ServicesSection';
import { getSiteInfo } from '../../lib/wordpress';
import HeroSection from '../../ui/components/HeroSection';

import * as motion from "motion/react-client";

const siteInfo = await getSiteInfo();
export const metadata: Metadata = {
  title: `Servicios - ${siteInfo.name}`,
  description: 'Servicios del Bufete: Asesoría legal corporativa, consultoría fiscal, auditoría contable, compliance regulatorio y planificación financiera para empresas.',
  keywords: ["asesoría corporativa", "consultoría fiscal", "auditoría contable", "compliance", "planificación financiera", "servicios integrados"]
};

export default async function Servicios() {
  return (
    <>
    <motion.div 
      layout 
      initial={{opacity: 0}}
      animate={{ opacity: 1 }} 
      transition={{
        default: { ease: "linear" },
        layout: { duration: 0.3 }
      }}>
      <HeroSection pageTitle="Servicios"/>
      <ServicesSection />
    </motion.div>
    </>
  );
}