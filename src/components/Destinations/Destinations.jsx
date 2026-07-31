import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";
import { destinations } from "../../data/destinations";

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 sm:py-28 bg-[#FFFFFF] text-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-10 bg-[#1E5631]" />
              <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
                Popular Destinations
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
              Himalayan Wonders <br />
              <span className="font-luxury font-extrabold text-[#1E5631] tracking-wider uppercase">Waiting to be Explored</span>
            </h2>
            <p className="font-body text-sm text-gray-500">
              Traverse the most iconic high-altitude passes, tunnels, waterfalls, valleys, and spiritual hot spots situated around Manali.
            </p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-150 flex flex-col hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                />
                
                {/* Altitude Pill */}
                <div className="absolute top-4 left-4 bg-[#111827]/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-[10px] font-luxury font-bold uppercase tracking-widest text-[#D97706]">
                  <Compass className="w-3 h-3 animate-spin-slow" />
                  {dest.altitude}
                </div>

                {/* Distance Badge */}
                <div className="absolute bottom-4 right-4 bg-[#1E5631] text-white text-[10px] font-luxury font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  {dest.distance}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <MapPin className="w-4 h-4 text-[#D97706]" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-luxury">Himachal Pradesh</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 group-hover:text-[#1E5631] transition-colors">
                  {dest.title}
                </h3>
                <p className="font-body text-xs text-gray-500 leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
