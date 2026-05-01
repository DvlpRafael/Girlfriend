import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const BertieBottsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const beans = [...Array(15)].map((_, i) => ({
    color: ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'][Math.floor(Math.random() * 6)],
    size: Math.random() * 10 + 10,
    x: Math.random() * 100 - 50,
    delay: Math.random() * 2
  }));

  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-hp-black overflow-hidden">
      <SectionHeading icon={Sparkles}>Feijõezinhos de Todos os Sabores</SectionHeading>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Imagem Cinematic */}
        <motion.div
          ref={ref}
          style={{ y, opacity }}
          className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(211,166,37,0.15)] ring-1 ring-hp-gold/20"
        >
          <img
            src="/bertie_beans.png"
            alt="Bertie Bott's Every Flavour Beans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hp-black via-transparent to-transparent" />

          {/* Animação dos feijõezinhos caindo por cima da imagem */}
          {beans.map((bean, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full shadow-lg ${bean.color}`}
              style={{
                width: bean.size,
                height: bean.size * 1.5,
                left: `${50 + bean.x}%`,
                top: '-10%'
              }}
              animate={isInView ? {
                y: ['0%', '1000%'],
                rotate: [0, 360],
              } : {}}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: bean.delay,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>

        {/* Texto Romântico */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="relative">
            <span className="text-6xl text-hp-gold font-harry absolute -top-8 -left-6 opacity-30">"</span>
            <p className="text-2xl md:text-4xl text-white/90 leading-relaxed font-light relative z-10">
              Dizem que os feijõezinhos mágicos têm de literalmente todos os sabores que existem no mundo...
            </p>
          </div>

          <p className="text-xl md:text-3xl text-hp-gold font-harry tracking-wider leading-relaxed">
            Mas eu tenho certeza absoluta de que nenhum deles consegue ser melhor que chu.... beijar essa sua boca ai, rsrs.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
