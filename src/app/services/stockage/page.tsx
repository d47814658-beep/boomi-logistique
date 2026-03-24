'use client';
import { motion } from 'framer-motion';
import { Lock, Key, Camera, CheckCircle } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { BentoCard } from '@/components/ui/BentoCard';
import Link from 'next/link';

export default function ServiceStockage() {
  const fadeInUp: any = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 bg-brand-midnight text-white overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-brand-orange/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-extrabold leading-tight tracking-tight mb-8">
              Ne laissez plus le manque d’espace <br/><span className="text-brand-orange">freiner votre croissance.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
              Stockage sécurisé, gestion d’inventaire et expédition à la demande. Le partenaire logistique idéal pour les e-commerçants et les entreprises au Bénin.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="py-32 bg-brand-light-gray relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BentoCard className="h-full"><div className="w-14 h-14 rounded-2xl bg-brand-midnight flex items-center justify-center mb-8"><Camera className="w-7 h-7 text-white" /></div><h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">Sécurité Absolue</h3><p className="text-gray-600">Vos marchandises sont entreposées dans un environnement hautement surveillé.</p></BentoCard>
            <BentoCard className="h-full"><div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8"><Lock className="w-7 h-7 text-brand-orange" /></div><h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">Flexibilité Totale</h3><p className="text-gray-600">Que vous ayez besoin de stocker un seul carton ou l’inventaire complet de votre boutique.</p></BentoCard>
            <BentoCard className="h-full bg-brand-midnight text-white"><div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8"><Key className="w-7 h-7 text-brand-emerald" /></div><h3 className="text-2xl font-heading font-bold mb-4">Réactivité (Fulfillment)</h3><p className="text-gray-400">Une commande tombe sur votre site ? Nous expédions instantanément depuis votre stock.</p></BentoCard>
          </div>
        </div>
      </section>
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Idéal pour qui ?</h2>
              <ul className="space-y-6 mb-10">{["Revendeurs E-commerce sans local physique","Entreprises B2B ayant des excédents de stock","Particuliers en transition de logement"].map((item,i)=>(<li key={i} className="flex gap-4 text-gray-600 text-lg items-center"><span className="w-3 h-3 rounded-full bg-brand-orange shrink-0" />{item}</li>))}</ul>
            </motion.div>
            <motion.div {...fadeInUp} className="bg-brand-light-gray rounded-[2rem] p-10 md:p-12 border border-gray-100 shadow-soft text-center">
              <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">Besoin d’un espace ?</h3>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto">Nos tarifs s’adaptent au m³ et à la durée de stockage.</p>
              <Link href="/contact"><MegaButton fullWidth>Louer un espace de stockage</MegaButton></Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
