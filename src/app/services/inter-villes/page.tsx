'use client';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Search, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { MegaButton } from '@/components/ui/MegaButton';
import { BentoCard } from '@/components/ui/BentoCard';
import Link from 'next/link';

export default function ServiceInterVilles() {
  const fadeInUp: any = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-light-gray">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-white text-brand-orange font-bold text-sm mb-8 shadow-soft">Cotonou ↔ Parakou ↔ Natitingou</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-heading font-extrabold text-brand-midnight leading-tight tracking-tight mb-8">
              Le pont logistique le plus sûr <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">entre le Sud et le Nord.</span>
            </motion.h1>
          </div>
        </div>
      </section>
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-midnight mb-6">Le Standard Boomi</h2>
            <p className="text-lg text-gray-600">Un protocole en 3 étapes garanti sans faille.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon:ShieldCheck,title:"1. La Récupération",desc:"Ne vous déplacez plus. Nous venons chercher le colis directement à votre porte."},{icon:Clock,title:"2. Le Transport",desc:"Un acheminement hautement sécurisé, suivi, et pensé pour protéger vos biens."},{icon:Search,title:"3. La Livraison",desc:"Une remise en mains propres rapide à la destination finale."}].map((step,i) => (
              <BentoCard key={i} className="h-full">
                <div className="w-16 h-16 rounded-full bg-brand-light-gray flex items-center justify-center mb-8 border border-gray-100"><step.icon className="w-8 h-8 text-brand-orange" /></div>
                <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 bg-brand-midnight text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Tarification Claire.</h2>
              <ul className="space-y-4 mb-10">
                {['Assurance de base incluse', 'Suivi SMS', 'Service Client VIP'].map((item,i) => (
                  <li key={i} className="flex gap-3 text-gray-300"><CheckCircle className="w-6 h-6 text-brand-emerald shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/expedier"><MegaButton>Programmer un envoi Inter-villes</MegaButton></Link>
            </motion.div>
            <motion.div {...fadeInUp} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-12">
              <h3 className="text-2xl font-heading font-bold mb-8">Grille Tarifaire Indicative</h3>
              <div className="space-y-6">
                {[{range:"Documents & Petits Colis (0-2kg)",price:"1.500 FCFA"},{range:"Colis Moyen (2-10kg)",price:"2.500 FCFA"},{range:"Bagages Extra (10-30kg)",price:"4.000 FCFA"},{range:"Matériel Volumineux",price:"Sur Devis"}].map((t,i) => (
                  <div key={i} className="flex justify-between items-center pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="text-gray-300 font-medium">{t.range}</span>
                    <span className="text-xl font-heading font-bold text-brand-orange">{t.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
