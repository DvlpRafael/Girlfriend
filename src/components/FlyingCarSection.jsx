import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Car } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const FlyingCarSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-hp-black overflow-hidden">
      
      <SectionHeading icon={Car}>O Carro Voador</SectionHeading>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center mt-12 relative z-10">
        
        {/* Imagem Parallax */}
        <motion.div 
          ref={ref}
          className="relative aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-[0_0_60px_rgba(20,50,150,0.3)] ring-1 ring-hp-blue/20"
        >
          <motion.img 
            style={{ y, scale: 1.2 }}
            src="/flying_car.png" 
            alt="Flying Ford Anglia" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hp-black via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Texto Romântico */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col space-y-8 text-center lg:text-left"
        >
          <div className="relative">
            <span className="text-6xl text-hp-blue font-harry absolute -top-8 -left-6 opacity-30">"</span>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light relative z-10">
              Sinceramente? Eu seria completamente louco igual o Rony Weasley...
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Eu roubaria um carro voador, enfrentaria o Salgueiro Lutador de peito aberto e bateria de frente com a fúria da Molly Weasley...
          </p>
          
          <p className="text-3xl md:text-5xl text-hp-gold font-harry tracking-wider leading-relaxed text-glow">
            ...tudo isso só pra ter a chance de te ver.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
