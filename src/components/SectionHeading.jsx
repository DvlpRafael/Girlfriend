import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex items-center justify-center gap-2 md:gap-4 mb-10 md:mb-16 w-full max-w-4xl mx-auto"
  >
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-hp-gold/50" />
    <div className="flex items-center gap-2 md:gap-3 px-2 md:px-4 shrink-0 max-w-[90%] md:max-w-[80%]">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-hp-gold shrink-0" />
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-harry text-transparent bg-clip-text bg-gradient-to-r from-[#D3A625] via-white to-[#D3A625] tracking-wider text-center drop-shadow-[0_0_15px_rgba(211,166,37,0.3)]">
        {children}
      </h2>
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-hp-gold/50" />
  </motion.div>
);
