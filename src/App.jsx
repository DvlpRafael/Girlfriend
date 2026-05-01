import React, { useState, useEffect } from 'react';
import { Ear } from 'lucide-react';
import { FloatingParticles, FloatingCandles, GoldenSnitch, Hedwig, MalfoyApple, LunaSpectrespecs } from './components/GlobalEffects';
import { HeroSection } from './components/HeroSection';
import { MirrorOfErisedSection } from './components/MirrorOfErisedSection';
import { MaraudersMapSection } from './components/MaraudersMapSection';
import { PensieveSection } from './components/PensieveSection';
import { RobloxSection } from './components/RobloxSection';
import { FelixFelicisSection } from './components/FelixFelicisSection';
import { PatronusSection } from './components/PatronusSection';
import { AmortentiaSection } from './components/AmortentiaSection';
import { DobbySection } from './components/DobbySection';
import { BertieBottsSection } from './components/BertieBottsSection';
import { TimeTurnerSection } from './components/TimeTurnerSection';
import { FlyingCarSection } from './components/FlyingCarSection';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-hp-black min-h-screen text-white selection:bg-hp-purple selection:text-white overflow-x-hidden font-sans">
      <FloatingParticles />
      {mounted && <FloatingCandles />}
      {mounted && <GoldenSnitch />}
      {mounted && <Hedwig />}
      {mounted && <MalfoyApple />}
      {mounted && <LunaSpectrespecs />}

      <HeroSection />
      <MirrorOfErisedSection />
      <TimeTurnerSection />
      <PatronusSection />
      <FelixFelicisSection />
      <BertieBottsSection />
      <FlyingCarSection />
      <MaraudersMapSection />
      <PensieveSection />
      <AmortentiaSection />
      <RobloxSection />
      <DobbySection />

      <footer className="w-full py-24 flex flex-col items-center justify-center text-center text-hp-gold/30 text-xs font-harry tracking-[0.5em] relative z-10 bg-black border-t border-white/5 overflow-hidden">

        {/* Sorting Hat */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-12">
          <img
            src="/sorting_hat.png"
            alt="Sorting Hat"
            className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(211,166,37,0.1)] ring-1 ring-hp-gold/20 opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-full" />
        </div>

        MADE WITH EXTREME MAGIC &copy; {new Date().getFullYear()}
        <br />
        <span className="mt-12 inline-block text-hp-gold text-lg md:text-3xl font-light tracking-wide font-sans px-6 drop-shadow-[0_0_15px_rgba(211,166,37,0.5)] max-w-4xl leading-relaxed">
          "O Chapéu Seletor nem precisou encostar na minha cabeça para saber que a minha casa é onde você estiver."
        </span>

        {/* Easter Egg do George Weasley */}
        <div
          className="mt-16 relative flex flex-col items-center gap-4 group cursor-pointer z-50"
          onClick={() => {
            const el = document.getElementById('weasley-msg');
            el.style.opacity = el.style.opacity === '1' ? '0' : '1';
          }}
        >
          <Ear className="w-12 h-12 md:w-8 md:h-8 text-hp-gold/40 animate-pulse drop-shadow-[0_0_10px_rgba(211,166,37,0.3)] hover:text-hp-gold transition-colors duration-500" />
          <div id="weasley-msg" className="absolute bottom-full mb-4 w-64 p-4 bg-[#111] border border-hp-gold/30 rounded-lg shadow-[0_0_20px_rgba(211,166,37,0.4)] opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <p className="text-[#d4b483] font-sans text-sm tracking-normal normal-case leading-relaxed">
              Achou a que sobrou amorrr KKKKKKKKKKKKKKKKKKKKKKKKKKK👂✨
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
