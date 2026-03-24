'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, LayoutPanelTop, Zap, Hammer } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { BentoCard } from '@/components/ui/BentoCard';
import Link from 'next/link';

export default function ServiceLocationStands() {
  const fadeInUp: any = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-midnight text-white">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-orange/20 rounded-full blur-[100px] opacity-60 mix-blend-screen" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-brand-orange font-bold text-sm mb-8 backdrop-blur-md">Foires • Salons • Événements d’Entreprise</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight tracking-tight max-w-5xl mx-auto mb-8">
            L’espace premium pour exposer <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">avec impact.</span>
          </motion.h1>
        </div>
      </section>
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Zéro Stress, 100% Impact</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon:LayoutPanelTop,title:"Installation Éclair",desc:"Dépliage facile sans outils complexes. Soyez prêt à vendre avant tout le monde."},{icon:Zap,title:"Résistance Tout-Terrain",desc:"Conçus pour affronter la météo béninoise."},{icon:Hammer,title:"Personnalisation",desc:"Adaptables selon l’identité de votre entreprise."}].map((step,i) => (
              <BentoCard key={i} className="h-full bg-brand-light-gray border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm"><step.icon className="w-8 h-8 text-brand-midnight" /></div>
                <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 bg-brand-light-gray relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-soft border border-gray-50 text-center">
            <Sparkles className="w-12 h-12 text-brand-orange mx-auto mb-6" />
            <h2 className="text-4xl font-heading font-bold text-brand-midnight mb-6">Réservez pour votre prochain événement</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">Parlez-nous de votre projet pour un devis instantané.</p>
            <Link href="/contact" className="w-full sm:w-auto">
              <MegaButton fullWidth>Réserver un stand pour mon événement <ArrowRight className="w-5 h-5 ml-2" /></MegaButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
