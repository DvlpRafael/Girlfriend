import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Map as MapIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const MaraudersMapSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
    show: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 1.5 } }
  };

  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-[#161210]">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] mix-blend-overlay pointer-events-none" />
      
      <SectionHeading icon={MapIcon}>O Mapa do Maroto</SectionHeading>

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-[#E8DCC4] rounded-sm p-8 md:p-16 relative shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_60px_rgba(139,69,19,0.3)] border-[8px] border-[#C4A484] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/10 via-transparent to-[#8B4513]/20 pointer-events-none" />

        {!isRevealed ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
            <button 
              onClick={() => setIsRevealed(true)}
              className="group flex flex-col items-center gap-6 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#5C3A21] flex items-center justify-center bg-[#5C3A21]/5 group-hover:bg-[#5C3A21]/10 transition-colors">
                <Sparkles className="w-8 h-8 text-[#5C3A21] group-hover:animate-spin" />
              </div>
              <span className="text-3xl md:text-5xl font-harry text-[#5C3A21] tracking-widest text-center group-hover:text-[#3E2716] transition-colors">
                Juro solenemente não fazer nada de bom
              </span>
            </button>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col space-y-8 text-center min-h-[300px] justify-center"
          >
            <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-harry text-[#3E2716] mb-4">
              Os Srs. Aluado, Rabicho, Almofadinhas e Pontas
            </motion.h3>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl font-harry text-[#5C3A21] tracking-widest">
              Apresentam a melhor namorada de todos os tempos:
            </motion.p>
            <motion.p variants={itemVariants} className="text-5xl md:text-7xl font-harry text-[#8B0000] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] mt-8">
              VOCÊ!
            </motion.p>
            <motion.div variants={itemVariants} className="pt-12">
              <span className="inline-block px-6 py-2 border-t border-b border-[#5C3A21]/30 text-[#5C3A21] font-harry text-2xl tracking-widest italic">
                Malfeito Feito.
              </span>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
