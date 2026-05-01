import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const PensieveSection = () => {
  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hp-purple/10 via-blue-900/5 to-transparent rounded-full blur-[50px] animate-[spin_60s_linear_infinite]" />
      </div>
      
      <SectionHeading icon={Eye}>O Espelho da Alma</SectionHeading>
      
      <div className="max-w-4xl w-full text-center mb-16 relative z-20">
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
          Dizem que não precisamos dominar a <span className="text-hp-gold font-harry tracking-wider">Legilimência</span> para enxergar a alma de alguém...
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full max-w-5xl relative group perspective-1000"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-hp-purple via-hp-gold to-hp-purple rounded-lg blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
        
        <div className="relative aspect-[21/9] md:aspect-[3/1] rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-black">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("https://i.imgur.com/HpTgBgK.png")' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hp-black via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 ring-1 ring-inset ring-hp-gold/30 rounded-lg pointer-events-none" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="max-w-3xl w-full text-center mt-16 relative z-20"
      >
        <p className="text-2xl md:text-3xl text-hp-gold font-harry leading-relaxed drop-shadow-[0_0_15px_rgba(211,166,37,0.4)]">
          "Basta me perder nesses olhos para saber que encontrei a magia mais pura que existe."
        </p>
      </motion.div>
    </section>
  );
};
