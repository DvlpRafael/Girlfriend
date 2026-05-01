import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Music, Play, Pause } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import sidokaMusic from '../assets/sidoka.mp3';

const AnimatedText = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: 'blur(5px)'
    }
  };

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-wrap gap-x-2 gap-y-1">
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const AmortentiaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const paragraphs = [
    "Eu fiquei pensando com calma sobre ontem e senti que precisava falar com você de um jeito mais claro, mais sincero, sem atropelo. Eu realmente não gostei da forma como eu me expressei naquele primeiro momento, porque não reflete o que eu quero ser pra você.",
    "Eu sei que às vezes a gente fala no impulso, e foi isso que aconteceu comigo. Mas, olhando depois, eu entendi que poderia ter te afetado, principalmente considerando tudo que você já vem carregando. E a última coisa que eu quero é que você se sinta mal, principalmente no momento que você ta passando.",
    "Mas o que eu quero construir com você de verdade, é um espaço leve. Não perfeito, não idealizado, mas leve de verdade, onde você não precisa medir palavra, eu sei que você tem dificuldade de se expressar e tá tudo bem, eu entendo, um ambiente onde você pode estar bem, mal, cansada, confusa, com medo, ansiosa e afins, e ainda assim se sentir acolhida. Eu não quero que você sinta que ta me incomodando, ou até mesmo que eu esteja te cobrando, e que você precisa instataneamente melhorar",
    "Eu gosto de você de um jeito muito consciente, sabe? Não é só sentimento bonito. É escolha, é espera, é perceber quem você é, com suas fases, seus momentos difíceis, suas forças e ainda assim querer estar aqui. Não pra te consertar, não pra te cobrar, mas pra caminhar do seu lado pro restoo da vida.",
    "E eu admiro muito você, muito mesmo. As vezes vc não percebe, se bemm que vc percebe que eu reparo, mas a forma como você lida com as coisas, mesmo quando tá tudo bagunçado tipoo ontem, diz muito sobre quem você é, eu vejo em você alguém que continua, mesmo quando seria mais fácil parar.",
    "Sobre mim, eu sei que ainda tenho o que melhorar, normal, todos temos, eu não sou perfeito e nem quero fingir ser, só que eu me importo de verdade com o que a gente tem, e quando eu erro, não é descaso, é falta de atenção, de maturidade naquele momento talvez, também acontece, masss eu to disposto a ajustar todas as coisas que forem precisas por você.",
    "A distância não ajuda, eu sei, tem dias que pesa, que dá vontade de simplesmente pular tudo isso e estar perto, resolver no olhar, no abraço, igual agora KKKKKKKK. Só queee ao mesmo tempo, eu acho que o que a gente tá construindo agora mostra muito sobre a gente, já parou pra pensar que mesmo sem o fácil, a gente continua escolhendo ficar?",
    "Eu não quero te prometer mil coisas ou ficar repetindo palavras. Eu prefiro te mostrar, no dia a dia, que eu tô aqui. De forma constante, tranquila, sem pressão. Não pra ocupar espaço, mas pra somar.",
    "Então fica em paz com o seu tempo, com as suas coisas. Não precisa se preocupar em corresponder nada agora, nem em estar 100% bem. Só cuida de você. De verdade.",
    "TE AMOOOOO, MUITAOOOOOOOO, MINHAA PRINCESA PRA SEMPRE"
  ];

  return (
    <section className="min-h-[70vh] md:min-h-screen py-16 md:py-32 flex flex-col items-center justify-center px-4 relative z-10 bg-hp-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-hp-purple/10 via-hp-black to-hp-black pointer-events-none" />

      <SectionHeading icon={Heart}>A Poção Amortentia</SectionHeading>

      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-12 items-start relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-4 relative lg:sticky lg:top-32 mb-12 lg:mb-0"
        >
          {/* Custom Music Player */}
          <div className="bg-gradient-to-b from-[#1a1a2e] to-black border border-hp-purple/30 rounded-[40px] p-8 shadow-[0_0_50px_rgba(76,29,149,0.4)] relative overflow-hidden group">

            <div className="absolute inset-0 bg-[#0a0a0f] z-0" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-hp-gold to-transparent z-10" />

            <div className={`absolute inset-0 bg-hp-purple/5 transition-opacity duration-1000 z-10 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay opacity-20 animate-[pulse_2s_ease-in-out_infinite]" />
            </div>

            <div className="flex flex-col items-center mb-8 text-center relative z-20">
              <div className="relative">
                <motion.div
                  className="w-32 h-32 rounded-full border-4 border-[#111] bg-[#050505] shadow-[0_0_30px_rgba(211,166,37,0.3),inset_0_0_20px_rgba(0,0,0,1)] flex items-center justify-center mb-6 relative overflow-hidden"
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 border-[2px] border-white/5 rounded-full m-2" />
                  <div className="absolute inset-0 border-[2px] border-white/5 rounded-full m-4" />
                  <div className="absolute inset-0 border-[2px] border-white/5 rounded-full m-6" />

                  <div className="w-10 h-10 bg-hp-purple rounded-full flex items-center justify-center shadow-inner">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>
                </motion.div>

                <button
                  onClick={togglePlay}
                  className="absolute bottom-4 right-[-10px] w-14 h-14 bg-hp-gold rounded-full flex items-center justify-center text-black hover:scale-110 hover:shadow-[0_0_20px_#D3A625] transition-all duration-300 z-30 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-black" /> : <Play className="w-6 h-6 fill-black ml-1" />}
                </button>
              </div>

              <h3 className="text-white font-harry text-3xl tracking-widest mb-1">Cê gosta né?</h3>
              <p className="text-hp-gold text-xs font-bold tracking-[0.2em] uppercase">Faixa Misteriosa</p>

              <div className="mt-6 flex gap-1 items-end h-8">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-hp-purple/50 rounded-t-full"
                    animate={isPlaying ? { height: ['20%', '100%', '30%', '80%', '20%'] } : { height: '10%' }}
                    transition={isPlaying ? { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 } : { duration: 0.5 }}
                  />
                ))}
              </div>
            </div>

            {/* Reprodutor Nativo - Imune a bloqueios de navegadores */}
            <audio
              ref={audioRef}
              src={sidokaMusic}
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </motion.div>

        <div className="lg:col-span-8 flex flex-col items-center">

          {/* A Carta de Hogwarts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full relative bg-[#f4e4bc] rounded-sm p-5 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[8px] border-double border-[#d4b483]"
          >
            {/* Textura de papel envelhecido */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-60 mix-blend-multiply pointer-events-none" />

            <div className="relative z-10">
              <div className="text-3xl md:text-5xl text-[#5c160c] font-harry mb-10 border-b-2 border-[#5c160c]/20 pb-6 text-center">
                ESCOLA DE MAGIA E BRUXARIA DE HOGWARTS (INVADI, PQ SOU TROUXA)
              </div>

              <div className="text-xl md:text-3xl text-[#2c1810] font-harry mb-8">
                <AnimatedText text="Minha Princesa," />
              </div>

              {paragraphs.map((text, idx) => (
                <div key={idx} className="text-base md:text-xl text-[#2c1810] font-serif leading-relaxed mb-6 text-justify">
                  <AnimatedText text={text} />
                </div>
              ))}

              {/* Assinatura / Finalização da carta */}
              <div className="mt-16 pt-8 border-t border-[#5c160c]/20 text-right">
                <p className="text-xl text-[#2c1810] font-serif mb-2">Com todo o meu amor,</p>
                <p className="text-4xl text-[#5c160c] font-harry">O seu Trouxa</p>
              </div>

              {/* Selo de Cera (Visual representation) */}
              <div className="absolute -bottom-8 -right-4 w-12 h-12 md:w-16 md:h-16 md:w-24 md:h-24 bg-[#7a1f16] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center border-4 border-[#5c160c] transform rotate-12">
                <div className="w-16 h-16 rounded-full border-2 border-[#5c160c] flex items-center justify-center">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-[#5c160c] fill-[#5c160c]" />
                </div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* After all this time quote moved below the letter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-6 mt-20 pt-12 border-t border-hp-purple/20 relative w-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-hp-gold/30 to-transparent" />
            <Heart className="w-12 h-12 text-hp-red fill-hp-red/50 drop-shadow-[0_0_30px_rgba(116,0,1,0.9)] animate-pulse" />
            <div className="text-center">
              <p className="text-white/60 font-harry text-2xl mb-3 tracking-widest">"Depois de todo esse tempo?"</p>
              <p className="text-hp-gold text-5xl font-harry tracking-[0.2em] uppercase text-glow">"Sempre."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
