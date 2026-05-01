import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const MirrorOfErisedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isRevealed, setIsRevealed] = useState(false);

  // Foto padrão (olhos dela)
  const fotoDelaUrl = "https://i.imgur.com/HpTgBgK.png";

  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-[#0a0a0a] overflow-hidden">
      <SectionHeading icon={Eye}>O Espelho de Ojesed</SectionHeading>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative max-w-xl w-full aspect-[2/3] group cursor-pointer perspective-1000"
        onClick={() => setIsRevealed(true)}
      >
        {/* Glow dourado atrás do espelho */}
        <div className="absolute inset-0 bg-hp-gold/20 blur-[50px] rounded-t-[200px]" />
        
        {/* Moldura do Espelho (Arqueada no topo) */}
        <motion.div 
          className="absolute inset-0 rounded-t-[200px] border-[24px] border-[#2A2A2A] shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_0_80px_rgba(0,0,0,1)] bg-[#050505] overflow-hidden transform-style-3d"
          animate={isRevealed ? { rotateY: [0, 5, 0], scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Filete dourado interno da moldura */}
          <div className="absolute inset-0 border-[6px] border-hp-gold/40 rounded-t-[176px] pointer-events-none z-20" />
          
          {/* Inscrição do Espelho no topo */}
          <div className="absolute top-8 left-0 w-full flex justify-center z-20 pointer-events-none">
            <svg width="300" height="40" viewBox="0 0 300 40">
              <path id="curve" d="M 10 30 Q 150 -10 290 30" fill="transparent" />
              <text className="text-hp-gold/40 font-harry text-[10px] tracking-[0.4em] uppercase fill-hp-gold/40">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  Erised stra ehru oyt ube cafru oyt on wohsi
                </textPath>
              </text>
            </svg>
          </div>

          {/* Fundo do Espelho (A foto dela sem distorcer) */}
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-[3000ms] ease-out z-0
              ${isRevealed ? 'opacity-90 scale-100 filter-none' : 'opacity-0 scale-110 blur-md'}`}
          >
            <img 
              src={fotoDelaUrl} 
              alt="Reflexo" 
              className="w-full h-full object-contain mix-blend-screen"
              style={{ 
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
              }}
            />
          </div>

          {/* Névoa e Estado Inicial */}
          {!isRevealed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gradient-to-b from-hp-purple/10 via-black to-hp-gold/5">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
              <Sparkles className="w-12 h-12 text-hp-gold mb-6 animate-pulse opacity-70" />
              <span className="text-white/60 font-harry text-3xl tracking-widest text-center px-8 animate-pulse shadow-black drop-shadow-xl">
                Toque no vidro para revelar o feitiço
              </span>
            </div>
          )}

          {/* Gradiente escuro para legibilidade do texto pós-clique */}
          <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent z-10 transition-opacity duration-1000 pointer-events-none ${isRevealed ? 'opacity-100' : 'opacity-0'}`} />

          {/* Texto Revelado */}
          <div className={`absolute inset-x-0 bottom-12 flex flex-col items-center text-center px-8 z-20 transition-all duration-[2000ms] delay-500 pointer-events-none
            ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-2xl md:text-3xl text-hp-gold font-harry leading-relaxed drop-shadow-[0_0_15px_rgba(211,166,37,0.5)]">
              "O espelho mostra o desejo mais profundo do nosso coração..."
            </p>
            <div className="h-[1px] w-16 bg-hp-gold/50 my-4" />
            <p className="text-lg text-white/90 font-light italic leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Sempre que olho para ele, só consigo ver você.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
