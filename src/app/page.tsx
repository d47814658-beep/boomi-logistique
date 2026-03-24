'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Package, Archive, LayoutGrid, CheckCircle } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { BentoCard } from '@/components/ui/BentoCard';
import Link from 'next/link';

export default function Home() {
  const fadeInUp: any = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6, ease: "easeOut" } };
  const stagger: any = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: "-100px" }, transition: { staggerChildren: 0.15 } };
  const itemFadeIn: any = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-light-blue rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange font-medium text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            La logistique sans stress au Bénin.
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-brand-midnight leading-tight tracking-tight max-w-5xl mx-auto mb-8">
            Restez chez vous. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">Boomi livre.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Gagnez du temps. Que ce soit pour un repas, des courses administratives ou l'expédition de vos marchandises, nous gérons chaque détail de A à Z.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/expedier" className="w-full sm:w-auto"><MegaButton fullWidth>Démarrer une course <ArrowRight className="w-5 h-5 ml-2" /></MegaButton></Link>
            <Link href="/#services" className="w-full sm:w-auto pt-4 sm:pt-0 sm:ml-4"><span className="font-medium text-brand-midnight underline underline-offset-4 decoration-2 decoration-brand-orange/50 hover:decoration-brand-orange transition-colors">Découvrir nos services</span></Link>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-32 bg-brand-light-gray relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">L’Écosystème Boomi</h2>
            <p className="text-lg text-gray-600">Tout ce dont vous avez besoin pour faire bouger votre business.</p>
          </motion.div>
          <motion.div variants={stagger} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={itemFadeIn}>
              <BentoCard gradient className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8"><Package className="w-7 h-7 text-brand-orange" /></div>
                  <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">Courses & Conciergerie</h3>
                  <p className="text-gray-600 mb-4 max-w-sm">Repas, courriers, factures ou courses au supermarché.</p>
                  <div className="text-brand-orange font-semibold text-sm mb-6 bg-brand-orange/10 px-3 py-1 rounded-full inline-block">À partir de 500 FCFA</div>
                </div>
                <Link href="/#tarifs" className="inline-flex items-center text-brand-orange font-bold hover:gap-2 transition-all">Découvrir le service <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </BentoCard>
            </motion.div>
            <motion.div variants={itemFadeIn}>
              <BentoCard className="h-full flex flex-col justify-between bg-brand-midnight text-white">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8"><Archive className="w-7 h-7 text-white" /></div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Le lien direct Nord-Sud.</h3>
                  <p className="text-gray-400 mb-8 max-w-sm">Envois nationaux sécurisés (Cotonou &lt;-&gt; Natitingou).</p>
                </div>
                <Link href="/services/inter-villes" className="inline-flex items-center text-white font-bold hover:gap-2 transition-all">Réserver un envoi <ArrowRight className="w-5 h-5 ml-2 text-brand-orange" /></Link>
              </BentoCard>
            </motion.div>
            <motion.div variants={itemFadeIn}>
              <BentoCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-light-blue flex items-center justify-center mb-8"><LayoutGrid className="w-7 h-7 text-brand-midnight" /></div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-brand-midnight">Stockage Boomi Logistics</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">E-commercants ou boutiques virtuelles, nous stockons et gérons vos inventaires.</p>
                </div>
                <Link href="/services/stockage" className="inline-flex items-center text-brand-orange font-bold hover:gap-2 transition-all">Voir nos solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </BentoCard>
            </motion.div>
            <motion.div variants={itemFadeIn} className="lg:col-span-3">
              <BentoCard className="h-full flex flex-col justify-between bg-brand-orange/5 border border-brand-orange/10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0"><LayoutGrid className="w-8 h-8 text-brand-orange" /></div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-2">Exposez avec impact.</h3>
                    <p className="text-gray-600 max-w-2xl">Foires, marchés ou lancements de produits. Louez nos stands dépliables premium.</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-auto">
                    <Link href="/services/location-stands"><MegaButton variant="outline">Louer un stand</MegaButton></Link>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="tarifs" className="py-32 bg-brand-light-gray relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Une tarification claire,<br/>zéro surprise.</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md">Nos tarifs de livraison express sont transparents et s'adaptent à votre localisation.</p>
              <Link href="/expedier"><MegaButton>Obtenir un devis exact</MegaButton></Link>
            </motion.div>
            <motion.div {...fadeInUp} className="flex flex-col gap-4">
              {[
                { label: 'Cotonou Centre-Ville', price: '500 FCFA' },
                { label: 'Akpakpa, Godomey, Calavi (proche)', price: '1 000 FCFA' },
                { label: 'Périphérie élargie (Ouédo, Togba, Zoca)', price: '1 500 FCFA' },
                { label: 'Porto-Novo, Sèmè-Podji', price: '3 500 FCFA' },
              ].map((tarif, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-600">{tarif.label}</div>
                  <div className="text-xl font-heading font-extrabold text-brand-midnight">{tarif.price}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-orange relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-8">Prêt à faire avancer vos projets ?</h2>
            <Link href="/expedier"><MegaButton variant="secondary" className="text-xl px-10 py-5">Expédier mon premier colis</MegaButton></Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
