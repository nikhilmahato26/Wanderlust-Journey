import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";

export default function Loader({ onFinished }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // 20ms steps
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onFinished();
          }, 400); // Small delay for visual satisfaction
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-50 bg-[#111827] flex flex-col items-center justify-center select-none overflow-hidden">
      {/* Decorative mountain grid background in loader */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,86,49,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Compass Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#D97706] mb-8 relative shadow-[0_0_50px_rgba(217,119,6,0.1)]"
        >
          <Compass className="w-10 h-10 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full border border-dashed border-[#D97706]/40 scale-110 animate-[spin_20s_linear_infinite_reverse]" />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="font-luxury font-extrabold text-2xl sm:text-4xl text-white tracking-widest uppercase">
            THE WANDERLUST
          </h1>
          <h2 className="font-heading italic text-[#D97706] text-sm sm:text-lg tracking-widest">
            — Expeditions & Rentals —
          </h2>
        </motion.div>

        {/* Loading Progress Percentage */}
        <div className="mt-12 w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#1E5631] via-[#D97706] to-[#1E5631]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 font-luxury font-semibold text-xs tracking-widest text-gray-500 uppercase"
        >
          {Math.round(progress)}% Loaded
        </motion.div>
      </div>

      {/* Mountain outline drawing background */}
      <div className="absolute bottom-0 w-full opacity-10">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 200L150 110L320 170L500 70L710 160L920 50L1120 120L1280 80L1440 180V200H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
