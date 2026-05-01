import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hogwarts_purple_night.png")', y: y1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-hp-purple/30 via-hp-black/60 to-hp-black" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center px-4 w-full max-w-5xl flex-1"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div 
            className="flex justify-center items-center gap-3 mb-6 text-hp-gold/80 font-harry tracking-[0.3em] uppercase text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5" />
            <span>Lumos Maxima</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-harry text-transparent bg-clip-text bg-gradient-to-b from-white via-hp-gold to-[#8A6A1C] drop-shadow-[0_0_50px_rgba(211,166,37,0.7)] leading-[1.1] mb-8">
            Para a bruxinha que<br />roubou meu coração
          </h1>
        </motion.div>
      </motion.div>

      <motion.button
        style={{ opacity }}
        onClick={handleScroll}
        className="relative z-30 mb-16 flex flex-col items-center gap-4 cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="px-8 py-4 border border-hp-gold/40 rounded-full bg-hp-black/60 backdrop-blur-xl text-hp-gold font-harry tracking-[0.2em] text-sm uppercase transition-all duration-300 group-hover:bg-hp-purple/40 group-hover:border-hp-gold group-hover:shadow-[0_0_30px_rgba(76,29,149,0.8)] group-hover:text-white">
          Embarque na Plataforma 9 ¾
        </span>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-hp-gold opacity-80" />
        </motion.div>
      </motion.button>
    </section>
  );
};
