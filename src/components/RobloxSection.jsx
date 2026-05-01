import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Zap, Shield } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const RobloxSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-hp-black">
      <SectionHeading icon={Zap}>A Sala Precisa</SectionHeading>
      
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl w-full perspective-1000"
      >
        <motion.div 
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] border-[1px] border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(76,29,149,0.3)] transform-style-3d transition-transform ease-out duration-200"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none rounded-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center translate-z-50">
            <div className="relative aspect-video rounded-xl overflow-hidden ring-4 ring-hp-gold/20 shadow-[0_0_50px_rgba(211,166,37,0.2)] bg-black group z-50">
              {/* Added controls=1 and mute=0 so sound works and can be adjusted */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ccXBNz_18Vs?autoplay=0&mute=0&loop=1&playlist=ccXBNz_18Vs&controls=1&showinfo=0&rel=0" 
                title="Roblox Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105"
              />
              <div className="absolute inset-0 ring-inset ring-1 ring-white/10 rounded-xl pointer-events-none" />
            </div>

            <div className="flex flex-col justify-center space-y-8 translate-z-30 pointer-events-none">
              <div className="relative">
                <Shield className="absolute -top-6 -left-2 md:-top-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 text-hp-purple/10 rotate-12" />
                <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-light relative z-10 drop-shadow-md">
                  <span className="text-5xl text-hp-gold font-harry mr-2 leading-none">"</span>
                  ahh desculpa por isso tambem KKKKKKKKKKKKKKKKKKKKK, quer dizer, achei que vc tinha a mov sinistra
                  <span className="text-5xl text-hp-gold font-harry ml-2 leading-none">"</span>
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-hp-gold/60 font-light pt-4 border-t border-white/5">
                <span className="uppercase tracking-[0.3em] text-xs">Torneio Tribruxo - Edição Roblox</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
