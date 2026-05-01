import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const TimeTurnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-hp-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-hp-gold/5 via-hp-black to-hp-black pointer-events-none" />
      
      <SectionHeading icon={Clock}>O Vira-Tempo</SectionHeading>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center mt-12 relative z-10">
        
        {/* Texto Romântico (Esquerda) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col space-y-8 order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="relative">
            <p className="text-2xl md:text-4xl text-white/90 leading-relaxed font-light relative z-10">
              Se eu conseguisse roubar o Vira-Tempo da Hermione, eu juro que não hesitaria em voltar no passado...
            </p>
          </div>
          
          <p className="text-3xl md:text-5xl text-hp-gold font-harry tracking-wider leading-relaxed text-glow">
            ...só para poder te encontrar mais cedo e te amar por mais tempo.
          </p>
        </motion.div>

        {/* Imagem Cinematic Girando (Direita) */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
            {/* Efeito de brilho de fundo */}
            <motion.div 
              className="absolute inset-0 bg-hp-gold/20 rounded-full blur-[100px]"
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* A Imagem do Vira Tempo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-full overflow-hidden border-[4px] border-hp-gold/30 shadow-[0_0_50px_rgba(211,166,37,0.4)]"
            >
              <img 
                src="/time_turner.png" 
                alt="Time Turner" 
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
            
            {/* Círculos mágicos rodando em direções opostas */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border border-dashed border-hp-gold/40 pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] rounded-full border border-dotted border-hp-gold/20 pointer-events-none"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
