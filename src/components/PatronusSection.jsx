import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const PatronusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="min-h-[70vh] md:min-h-[90vh] py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-[#020813] overflow-hidden">
      {/* Ethereal background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(125,211,252,0.15)_0%,_transparent_70%)] rounded-full blur-[60px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(224,242,254,0.2)_0%,_transparent_70%)] rounded-full blur-[40px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <SectionHeading icon={Shield}>O Feitiço do Patrono</SectionHeading>

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl w-full text-center relative z-20 flex flex-col items-center"
      >
        <div className="relative mb-12">
          {/* Ethereal Stag / Light representation */}
          <motion.div 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-sky-200/30 flex items-center justify-center relative bg-sky-900/20 backdrop-blur-sm"
            animate={{
              boxShadow: [
                '0 0 40px rgba(125,211,252,0.4), inset 0 0 20px rgba(125,211,252,0.4)',
                '0 0 80px rgba(224,242,254,0.6), inset 0 0 40px rgba(224,242,254,0.6)',
                '0 0 40px rgba(125,211,252,0.4), inset 0 0 20px rgba(125,211,252,0.4)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay rounded-full" />
            <span className="text-sky-100 font-harry text-3xl md:text-5xl tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(224,242,254,0.9)] opacity-90 relative z-10">
              Expecto
              <br />
              Patronum
            </span>
          </motion.div>
        </div>

        <div className="bg-sky-950/20 backdrop-blur-md border border-sky-400/20 rounded-[30px] p-8 md:p-12 shadow-[0_0_50px_rgba(14,165,233,0.1)]">
          <p className="text-xl md:text-2xl text-sky-100/90 font-light leading-relaxed mb-6">
            Dizem que para conjurar um Patrono corporificado, você precisa se concentrar na sua memória mais feliz. Uma lembrança tão poderosa que é capaz de afastar qualquer escuridão ou dementador.
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent mx-auto my-8" />
          <p className="text-2xl md:text-3xl text-white font-harry leading-relaxed drop-shadow-[0_0_10px_rgba(125,211,252,0.5)]">
            Desde que você entrou na minha vida, minha mente não precisa mais procurar. Apenas pensar no seu sorriso é a magia mais forte que eu poderia desejar.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
