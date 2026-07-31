import { motion } from "framer-motion";
import { Clock, Shield, Flame, Compass, HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { packages } from "../../data/packages";
import { contactInfo } from "../../data/contactInfo";

export default function AdventurePackages() {
  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#111827] text-white relative">
      {/* Visual background gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#1E5631]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
            Himalayan Road Trips
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            Curated Adventure Packages
          </h2>
          <p className="font-body text-sm text-gray-400">
            Handcrafted luxury road trips and expeditions. Fully managed itineraries including custom 4x4 backups, professional local guides, and premium mountain stays.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {packages.map((pkg, idx) => {
            const isSpiti = pkg.id === "spiti-winter";
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`bg-[#1F2937]/50 rounded-3xl overflow-hidden border border-white/5 flex flex-col md:flex-row group hover:border-[#D97706]/30 transition-all duration-500 hover:shadow-2xl ${
                  isSpiti ? "lg:col-span-2 border-[#1E5631]/50" : ""
                }`}
              >
                {/* Image Section */}
                <div className={`relative overflow-hidden md:w-1/2 aspect-video md:aspect-auto ${isSpiti ? "lg:w-2/5" : ""}`}>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1F2937]/80" />
                  
                  {/* Category / Difficulty Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#111827]/75 backdrop-blur-md text-[#D97706] text-[10px] font-luxury font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/10">
                      {pkg.difficulty}
                    </span>
                    {pkg.bestSeason && (
                      <span className="bg-[#1E5631] text-white text-[10px] font-luxury font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                        {pkg.bestSeason}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs font-semibold text-[#D97706] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {pkg.duration}
                      </span>
                      <div className="text-right">
                        <span className="text-[10px] text-gray-400 block font-semibold">Starting From</span>
                        <span className="font-luxury font-black text-xl text-white">
                          ₹{pkg.price}{" "}
                          <span className="text-[10px] font-medium text-gray-400">/{pkg.priceUnit}</span>
                        </span>
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#D97706] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="font-body text-sm text-gray-400 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="space-y-2.5">
                    <span className="font-luxury font-bold text-[10px] text-gray-500 uppercase tracking-widest block">
                      Expedition Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body text-gray-300">
                      {pkg.highlights.map((hight) => (
                        <div key={hight} className="flex items-center gap-2">
                          <Compass className="w-3.5 h-3.5 text-[#1E5631]" />
                          <span>{hight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Trigger */}
                  <div className="pt-4 border-t border-white/5 flex gap-4 mt-auto">
                    <a
                      href={contactInfo.whatsappLink(`Hi Wanderlust Journeys! I would like to query about the "${pkg.title}" package starting at ₹${pkg.price} per person. Please share availability.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#1E5631] hover:bg-[#1E5631]/80 text-white font-luxury font-bold text-xs tracking-wider uppercase py-3 rounded-xl transition-all"
                    >
                      <FaWhatsapp className="w-4 h-4 text-[#D97706]" />
                      Book Package
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
