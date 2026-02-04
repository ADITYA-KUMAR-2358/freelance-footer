"use client";

import { motion } from "framer-motion";

export default function OrbitLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      
      {/* Main arc */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-1/2 top-[-420px]
        h-[1000px] w-[1800px] -translate-x-1/2 rounded-full
        bg-gradient-to-b from-white/20 via-white/8 to-transparent blur-2xl"
      />

      {/* Purple orbit */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-[-360px]
        h-[900px] w-[1600px] -translate-x-1/2 rounded-full
        bg-gradient-to-b from-[#d36efa]/35 via-[#d36efa]/15 to-transparent blur-3xl"
      />

      {/* Moving sweep */}
      <motion.div
        animate={{ x: ['-30%', '30%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-[-300px]
        h-[800px] w-[1200px] -translate-x-1/2 rounded-full
        bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl"
      />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.12]
        bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[length:18px_18px]" />
    </div>
  );
}