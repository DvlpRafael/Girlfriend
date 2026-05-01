import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const numParticles = isMobile ? 15 : 40;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(numParticles)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            background: Math.random() > 0.5 ? '#D3A625' : '#8B5CF6',
            boxShadow: `0 0 ${Math.random() * 15 + 5}px ${Math.random() > 0.5 ? '#D3A625' : '#8B5CF6'}`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export const FloatingCandles = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const numCandles = isMobile ? 8 : 15;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden perspective-1000">
      {[...Array(numCandles)].map((_, i) => (
        <motion.div
          key={`candle-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * (isMobile ? 80 : 50) + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            z: Math.random() * 500 - 250,
            opacity: 0.6 + Math.random() * 0.4,
          }}
          animate={{
            y: [0, -15, 10, 0],
            x: [0, 5, -5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        >
          {/* Corpo da Vela mais realista */}
          <div className="relative w-2 md:w-3 h-10 md:h-14 bg-gradient-to-b from-white via-[#f0f0f0] to-[#e0e0e0] rounded-sm shadow-[inset_0_0_5px_rgba(0,0,0,0.4),0_10px_15px_rgba(0,0,0,0.5)]">
            
            {/* O pavio */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-black" />

            {/* A Chama realista */}
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-4 md:w-3 md:h-5 bg-gradient-to-t from-white via-yellow-200 to-orange-500 rounded-[50%_50%_20%_20%] blur-[1px]"
              animate={{
                scale: [1, 1.1, 0.9, 1.05, 1],
                rotate: [0, -5, 5, -2, 0],
              }}
              transition={{ duration: 0.1 + Math.random() * 0.1, repeat: Infinity, ease: "linear" }}
            />
            {/* Brilho da chama */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 md:w-16 md:h-16 bg-[#ffaa00] rounded-full blur-[20px] opacity-30 mix-blend-screen pointer-events-none" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const GoldenSnitch = () => {
  const [caught, setCaught] = useState(false);

  return (
    <motion.div
      className="fixed z-[100] cursor-pointer p-8 flex items-center justify-center"
      initial={{ x: -100, y: window.innerHeight / 2 }}
      animate={{
        x: [window.innerWidth + 100, -100, window.innerWidth + 100],
        y: [window.innerHeight / 2, window.innerHeight / 4, window.innerHeight / 1.2, window.innerHeight / 2],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      onClick={() => setCaught(true)}
    >
      {/* Área visível do pomo */}
      <div className="relative w-5 h-5 bg-hp-gold rounded-full shadow-[0_0_20px_#D3A625]">
        <motion.div 
          className="absolute top-1 -left-6 w-6 h-3 bg-white/70 rounded-[100%_0_0_100%] origin-right filter blur-[1px]"
          animate={{ rotateZ: [-40, 40, -40], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 0.05, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1 -right-6 w-6 h-3 bg-white/70 rounded-[0_100%_100%_0] origin-left filter blur-[1px]"
          animate={{ rotateZ: [40, -40, 40], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 0.05, repeat: Infinity }}
        />
      </div>

      {/* Mensagem Safadinha/Fofa */}
      {caught && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-[#111] p-3 border border-hp-gold/30 rounded-lg shadow-lg w-48 text-center z-[110]" onClick={(e) => { e.stopPropagation(); setCaught(false); }}>
          <p className="text-[#d4b483] font-sans text-xs">
            Te peguei gostosa do caralho, sabia que esse apelido ia fazer sentido rsrs
          </p>
        </div>
      )}
    </motion.div>
  );
};

export const Hedwig = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      className="fixed z-[90] flex flex-col items-center cursor-pointer p-8"
      initial={{ x: -200, y: 100 }}
      animate={{
        x: [window.innerWidth + 200, -200],
        y: [100, 300, 150, 400, 100],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5
      }}
      onClick={() => setClicked(true)}
    >
      <div className="relative w-12 h-6 flex justify-center">
        {/* Asa Esquerda */}
        <motion.div 
          className="absolute top-0 right-1/2 w-10 h-6 bg-white rounded-[100%_0_0_100%] origin-right shadow-[0_0_10px_rgba(255,255,255,0.8)] border border-gray-200"
          animate={{ rotateZ: [-30, 30, -30] }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Corpo da Coruja */}
        <div className="w-6 h-8 bg-white rounded-full z-10 shadow-[0_0_15px_rgba(255,255,255,0.9)] border border-gray-100 flex justify-center relative">
          <div className="absolute top-2 w-1 h-1 bg-yellow-400 rounded-full" /> {/* Bico */}
        </div>
        {/* Asa Direita */}
        <motion.div 
          className="absolute top-0 left-1/2 w-10 h-6 bg-white rounded-[0_100%_100%_0] origin-left shadow-[0_0_10px_rgba(255,255,255,0.8)] border border-gray-200"
          animate={{ rotateZ: [30, -30, 30] }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* Cartinha flutuando amarrada nela */}
      <motion.div 
        className="w-6 h-4 bg-[#E8DCC4] border border-[#C4A484] shadow-md mt-1 relative flex items-center justify-center"
        animate={{ rotateZ: [-10, 10, -10], y: [0, 2, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 bg-red-700 rounded-full" /> {/* Selo de cera */}
      </motion.div>

      {/* Interação da Coruja */}
      {clicked && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-[#111] p-3 border border-hp-gold/30 rounded-lg shadow-lg w-56 text-center z-[110]" onClick={(e) => { e.stopPropagation(); setClicked(false); }}>
          <p className="text-white/90 font-sans text-xs">
            Correio coruja de Hogwarts: "Você é a bruxa mais linda desse mundo inteiro!" 🦉💌
          </p>
        </div>
      )}
    </motion.div>
  );
};

export const MalfoyApple = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="fixed bottom-32 left-4 md:bottom-20 md:left-20 z-[80] group flex flex-col items-start">
      <div 
        className="w-12 h-12 flex items-center justify-center cursor-pointer p-8 rounded-full hover:bg-white/5 transition-colors"
        onClick={() => setClicked(true)}
      >
        <div className="text-3xl filter drop-shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-[bounce_3s_ease-in-out_infinite]">🍏</div>
      </div>

      {clicked && (
        <div className="absolute bottom-full left-0 mb-2 bg-[#111] p-3 border border-green-500/30 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.2)] w-56 text-center z-[110]" onClick={(e) => { e.stopPropagation(); setClicked(false); }}>
          <p className="text-green-400/90 font-sans text-xs leading-relaxed">
            "Meu pai vai ficar sabendo... que eu sou completamente rendido por você." 🐍🍏
          </p>
        </div>
      )}
    </div>
  );
};

export const LunaSpectrespecs = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="fixed top-24 right-4 md:top-32 md:right-20 z-[80] group flex flex-col items-end">
      <div 
        className="w-12 h-12 flex items-center justify-center cursor-pointer p-8 rounded-full hover:bg-white/5 transition-colors"
        onClick={() => setClicked(true)}
      >
        <div className="text-3xl filter drop-shadow-[0_0_10px_rgba(236,72,153,0.4)] animate-[pulse_4s_ease-in-out_infinite] hover:scale-110 transition-transform">👓</div>
      </div>

      {clicked && (
        <div className="absolute top-full right-0 mt-2 bg-[#111] p-3 border border-pink-500/30 rounded-lg shadow-[0_0_20px_rgba(236,72,153,0.2)] w-64 text-center z-[110]" onClick={(e) => { e.stopPropagation(); setClicked(false); }}>
          <p className="text-pink-300/90 font-sans text-xs leading-relaxed">
            "As coisas que perdemos têm uma maneira de voltar para nós no final... Igual meu coração, que sempre volta pra você, quer dizer, pudim resolve as coisas também né" 👓🍮
          </p>
        </div>
      )}
    </div>
  );
};
