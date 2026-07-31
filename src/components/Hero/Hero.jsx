import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ChevronDown } from "lucide-react";
import BookingForm from "../BookingForm/BookingForm";

const heroBgImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", // majestic mountains
  "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1920&q=80", // Himalayan snowy roads
  "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1920&q=80", // Thar driving offroad
  "https://images.unsplash.com/photo-1595662979146-5debe49ee312?auto=format&fit=crop&w=1920&q=80"  // Jimny adventure high-altitude Spiti
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBgImages.length);
    }, 7000); // 7s slide transitions
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#111827] flex flex-col justify-center items-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Background Cinematic Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={heroBgImages[currentBg]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            alt="Himalayan Adventure Background"
          />
        </AnimatePresence>
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/80 via-transparent to-[#111827]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(30,86,49,0.25),transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-8 mt-12 md:mt-16">
        {/* Cinematic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <Compass className="w-4 h-4 text-[#D97706] animate-[spin_12s_linear_infinite]" />
          <span className="font-luxury font-bold text-[10px] sm:text-xs text-white tracking-widest uppercase">
            Himalayan Expeditions & Self Drive Rentals
          </span>
        </motion.div>

        {/* Hero Headings */}
        <div className="space-y-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Explore The Himalayas <br />
            <span className="font-luxury font-extrabold tracking-wider text-stroke sm:text-stroke-none text-white sm:text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-white to-[#1E5631] uppercase">
              Without Limits
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-medium"
          >
            Premium Self Drive Cars, 4x4 Taxi Services & Himalayan Adventure Tours From Manali.
          </motion.p>
        </div>

        {/* Booking Form Component Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="w-full mt-4"
        >
          <BookingForm />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden md:flex flex-col items-center gap-1 cursor-pointer pt-8 text-gray-500 hover:text-white transition-colors"
          onClick={() => {
            const nextSection = document.getElementById("about");
            if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="font-luxury font-bold text-[9px] tracking-widest uppercase">
            Scroll To Explore
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
