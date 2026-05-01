import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const PotionBottle = () => {
  return (
    <div className="relative w-32 h-48 mx-auto mb-12 flex justify-center">
      {/* Brilho absurdo atrás da poção */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-hp-gold/30 rounded-full blur-[40px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* O Frasco de Vidro */}
      <div className="relative w-24 h-full flex flex-col items-center z-10">
        {/* Tampa de Cortiça */}
        <div className="w-8 h-6 bg-[#8B5A2B] rounded-t-sm shadow-[inset_0_4px_4px_rgba(0,0,0,0.5)] z-20 relative">
           <div className="absolute top-1 left-1 w-2 h-4 bg-white/10 rounded-full" />
        </div>
        
        {/* Gargalo do frasco */}
        <div className="w-6 h-8 bg-white/10 backdrop-blur-md border-x-2 border-white/30 z-10 relative">
          {/* Reflexo no gargalo */}
          <div className="absolute top-0 left-1 w-1 h-full bg-white/40 rounded-full blur-[1px]" />
        </div>
        
        {/* Corpo do Frasco (Formato de gota/lágrima) */}
        <div className="w-full flex-1 bg-white/5 backdrop-blur-md rounded-[50%_50%_40%_40%_/_70%_70%_40%_40%] border-2 border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.2),_0_10px_30px_rgba(211,166,37,0.5)] relative overflow-hidden flex flex-col justify-end">
          
          {/* O Líquido Dourado (Felix Felicis) */}
          <motion.div 
            className="w-full bg-gradient-to-t from-[#B8860B] via-hp-gold to-[#FFD700] relative"
            animate={{ height: ['60%', '65%', '60%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Linha brilhante na superfície do líquido */}
            <div className="absolute top-0 left-0 w-full h-2 bg-white/60 blur-[2px] rounded-full" />

            {/* Bolhas flutuantes subindo */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`bubble-${i}`}
                className="absolute bg-white/70 rounded-full"
                style={{
                  width: Math.random() * 6 + 2 + 'px',
                  height: Math.random() * 6 + 2 + 'px',
                  left: `${Math.random() * 80 + 10}%`,
                  bottom: '0%'
                }}
                animate={{
                  bottom: '100%',
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 10 - 5, 0]
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  ease: "easeIn",
                  delay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>

          {/* Reflexo forte de vidro na curva do frasco */}
          <div className="absolute top-4 left-2 w-3 h-20 border-l-[3px] border-white/60 rounded-[100%] blur-[1px] transform rotate-[15deg] pointer-events-none" />
          <div className="absolute bottom-4 right-3 w-8 h-8 bg-white/20 rounded-full blur-[4px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export const FelixFelicisSection = () => {
  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-gradient-to-b from-hp-black to-[#1a1505] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(211,166,37,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(211,166,37,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(211,166,37,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(211,166,37,0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Golden droplets falling */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`drop-${i}`}
            className="absolute w-1 h-8 bg-gradient-to-b from-hp-gold/0 via-hp-gold to-white rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '120vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <SectionHeading icon={Star}>Sorte Líquida</SectionHeading>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl w-full text-center relative z-20 bg-[#111]/40 backdrop-blur-md border border-hp-gold/20 rounded-[40px] p-5 md:p-16 shadow-[0_0_100px_rgba(211,166,37,0.1)] group"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hp-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[40px]" />
        
        {/* A Poção Animada */}
        <PotionBottle />
        
        <h3 className="text-4xl md:text-5xl font-harry text-hp-gold mb-8 drop-shadow-[0_0_15px_rgba(211,166,37,0.8)]">Felix Felicis</h3>
        
        <p className="text-xl md:text-2xl text-white/90 font-light leading-[2] relative z-10">
          Eles dizem que a Felix Felicis é a poção mais complexa de se fazer em toda Hogwarts... Mas eu acho que acidentalmente tomei um caldeirão inteiro no dia em que te conheci. 
          <br /><br />
          <span className="text-hp-gold font-medium text-2xl md:text-3xl font-harry tracking-wider">
            Porque sou o cara mais sortudo do mundo mágico e trouxa por ter você.
          </span>
        </p>
      </motion.div>
    </section>
  );
};
