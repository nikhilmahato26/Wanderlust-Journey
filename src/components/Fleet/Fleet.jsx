import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Users, Fuel, Activity, CheckCircle, Eye, ArrowRightLeft, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { fleet } from "../../data/fleet";
import { contactInfo } from "../../data/contactInfo";

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [compareList, setCompareList] = useState([]); // Array of vehicle IDs to compare
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Filters calculation
  const filteredFleet = fleet.filter((vehicle) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "4x4") return vehicle.specs.drivetrain.includes("4x4") || vehicle.specs.drivetrain.includes("4XPLOR") || vehicle.specs.drivetrain.includes("ALLGRIP");
    if (activeFilter === "large") return parseInt(vehicle.seating) >= 7;
    return true;
  });

  const handleToggleCompare = (id) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 3) {
          alert("You can compare up to 3 vehicles at a time.");
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  const clearCompareList = () => {
    setCompareList([]);
  };

  const getCompareVehicles = () => {
    return fleet.filter((vehicle) => compareList.includes(vehicle.id));
  };

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-[#111827] text-white relative">
      {/* Background Lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#1E5631]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-10 bg-[#1E5631]" />
              <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
                Luxury 4x4 Fleet
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
              Command Your Own <br />
              <span className="font-luxury font-extrabold text-[#D97706] tracking-wider uppercase">Himalayan Journey</span>
            </h2>
            <p className="font-body text-sm text-gray-400">
              Select from our range of powerful, high-clearance adventure SUVs. Specially prepared for extreme Himalayan drives, cold-start reliability, and off-road safety.
            </p>
          </div>

          {/* Filters & Compare Button */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              { id: "all", label: "All Vehicles" },
              { id: "4x4", label: "4x4 Expeditions" },
              { id: "large", label: "7 Seaters / Family" }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`py-2.5 px-5 rounded-full font-luxury font-bold text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === btn.id
                    ? "bg-[#D97706] text-white"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}

            {compareList.length > 0 && (
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="flex items-center gap-2 bg-[#1E5631] hover:bg-[#1E5631]/80 text-white py-2.5 px-5 rounded-full font-luxury font-bold text-xs tracking-wider uppercase transition-all animate-pulse"
              >
                <ArrowRightLeft className="w-3.5 h-3.5 text-[#D97706]" />
                Compare ({compareList.length})
              </button>
            )}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((vehicle) => {
              const isComparing = compareList.includes(vehicle.id);
              return (
                <motion.div
                  key={vehicle.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex flex-col group hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
                >
                  {/* Image Holder with hover scale */}
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Specs Pill */}
                    <div className="absolute top-4 left-4 bg-[#111827]/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 text-[10px] font-luxury font-bold uppercase tracking-widest text-[#D97706]">
                      <Compass className="w-3 h-3 animate-spin-slow" />
                      {vehicle.specs.drivetrain.includes("4x4") || vehicle.specs.drivetrain.includes("4XPLOR") || vehicle.specs.drivetrain.includes("ALLGRIP") ? "4x4 Mode Enabled" : "Rugged SUV"}
                    </div>

                    {/* Compare Selection Checkbox */}
                    <button
                      onClick={() => handleToggleCompare(vehicle.id)}
                      className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                        isComparing
                          ? "bg-[#D97706] border-[#D97706] text-white"
                          : "bg-[#111827]/60 border-white/20 text-gray-300 hover:bg-[#111827]/90 hover:border-white/40"
                      }`}
                      title={isComparing ? "Remove from comparison" : "Add to comparison"}
                    >
                      <ArrowRightLeft className="w-4 h-4" />
                    </button>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 right-4 bg-[#1E5631] text-white font-luxury font-extrabold text-sm px-4 py-2 rounded-xl shadow-lg border border-white/15">
                      ₹{vehicle.price} <span className="text-[10px] font-medium text-white/70">/ Day</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#D97706] transition-colors">
                        {vehicle.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.perfectFor.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/5 text-gray-300 text-[10px] font-bold font-body uppercase tracking-wider px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/5 font-body text-xs text-gray-400">
                      <div className="flex flex-col gap-1 items-start">
                        <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                          <Users className="w-3.5 h-3.5 text-[#D97706]" />
                          Seating
                        </span>
                        <span className="font-semibold text-white">{vehicle.seating}</span>
                      </div>
                      <div className="flex flex-col gap-1 items-start">
                        <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                          <Activity className="w-3.5 h-3.5 text-[#D97706]" />
                          Gearbox
                        </span>
                        <span className="font-semibold text-white truncate max-w-full">{vehicle.transmission.split("/")[0]}</span>
                      </div>
                      <div className="flex flex-col gap-1 items-start">
                        <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                          <Fuel className="w-3.5 h-3.5 text-[#D97706]" />
                          Fuel
                        </span>
                        <span className="font-semibold text-white">{vehicle.fuel}</span>
                      </div>
                    </div>

                    {/* Key Features bullet list */}
                    <div className="space-y-2">
                      <span className="font-luxury font-bold text-[10px] uppercase text-gray-500 tracking-wider block">
                        Vehicle Highlights
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-body text-gray-300">
                        {vehicle.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#1E5631] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-auto">
                      <a
                        href="#booking-section"
                        onClick={() => {
                          const bookingForm = document.getElementById("booking-section");
                          if (bookingForm) {
                            bookingForm.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="flex-1 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-luxury font-extrabold text-xs tracking-wider uppercase py-3 rounded-xl transition-all"
                      >
                        Book Now
                      </a>
                      
                      <a
                        href={contactInfo.whatsappLink(`Hello! I want to book a Self Drive ${vehicle.name} starting at ₹${vehicle.price}/day. Please guide me on booking process.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-luxury font-extrabold text-xs tracking-wider uppercase py-3 rounded-xl shadow-lg transition-all"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Vehicle Comparison Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1F2937] border border-white/10 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
                  <ArrowRightLeft className="w-6 h-6 text-[#D97706]" />
                  Fleet Comparison Specs
                </h3>
                <p className="font-body text-xs text-gray-400 mt-1">
                  Side-by-side details to choose the perfect rig for your expedition route.
                </p>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Compare Table */}
            <div className="p-6 overflow-x-auto max-h-[70vh] no-scrollbar">
              <table className="w-full text-left font-body text-sm text-gray-300 min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-gray-400">
                    <th className="py-4 font-semibold uppercase tracking-wider text-xs">Specification</th>
                    {getCompareVehicles().map((car) => (
                      <th key={car.id} className="py-4 px-4 font-luxury font-bold uppercase tracking-wider text-xs text-[#D97706]">
                        {car.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-4 font-semibold text-white">Daily Rental Price</td>
                    {getCompareVehicles().map((car) => (
                      <td key={car.id} className="py-4 px-4 text-white font-bold font-luxury">₹{car.price} / Day</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-white">Engine Capacity</td>
                    {getCompareVehicles().map((car) => (
                      <td key={car.id} className="py-4 px-4">{car.specs.engine}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-white">Horse Power</td>
                    {getCompareVehicles().map((car) => (
                      <td key={car.id} className="py-4 px-4">{car.specs.power}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-white">Ground Clearance</td>
                    {getCompareVehicles().map((car) => (
                      <td key={car.id} className="py-4 px-4">{car.specs.groundClearance}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-white">Drivetrain Architecture</td>
                    {getCompareVehicles().map((car) => (
                      <td key={car.id} className="py-4 px-4 font-semibold text-[#1E5631]">{car.specs.drivetrain}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-white">Seating Architecture</td>
                    {getCompareVehicles().map((car) => (
                      <td key={car.id} className="py-4 px-4">{car.seating}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-white">Fuel Configuration</td>
                    {getCompareVehicles().map((car) => (
                      <td key={car.id} className="py-4 px-4">{car.fuel} ({car.transmission})</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-white">Action</td>
                    {getCompareVehicles().map((car) => (
                      <td key={car.id} className="py-4 px-4">
                        <a
                          href={contactInfo.whatsappLink(`Hello! I want to book a Self Drive ${car.name}. Please guide me on booking.`)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-luxury font-bold text-[10px] tracking-wider uppercase py-2 px-4 rounded-lg transition-all"
                        >
                          <FaWhatsapp className="w-3.5 h-3.5" />
                          Rent Rig
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/10 flex justify-between items-center bg-[#111827]/40">
              <button
                onClick={clearCompareList}
                className="text-gray-400 hover:text-white text-xs font-semibold underline underline-offset-4"
              >
                Clear comparison list
              </button>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="bg-[#D97706] hover:bg-[#B45F06] text-white py-2 px-6 rounded-xl font-luxury font-bold text-xs tracking-wider uppercase transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
