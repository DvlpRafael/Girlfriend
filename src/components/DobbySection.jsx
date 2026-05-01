import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const DobbySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 flex flex-col items-center justify-center px-4 relative z-10 bg-hp-black overflow-hidden border-t border-white/5">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl w-full text-center relative z-20 flex flex-col items-center"
      >
        <p className="text-xl md:text-2xl text-hp-gold/80 font-light italic leading-relaxed drop-shadow-[0_0_10px_rgba(211,166,37,0.3)]">
          "Dobby não tem um mestre, Dobby é um elfo livre..."
        </p>
        <div className="h-[1px] w-12 bg-hp-gold/30 my-6" />
        <p className="text-2xl md:text-4xl text-white font-harry tracking-wider">
          Mas se eu fosse um elfo, faria questão de entregar a minha meia para servir apenas a você.
        </p>
      </motion.div>
    </section>
  );
};
