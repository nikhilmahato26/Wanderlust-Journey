import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, CheckCircle2, ChevronRight, Phone, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { taxiServices4x4, normalTaxiServices, taxiFleet } from "../../data/services";
import { contactInfo } from "../../data/contactInfo";

export default function TaxiServices() {
  const [activeTab, setActiveTab] = useState("4x4"); // '4x4' or 'normal'

  return (
    <section id="taxi-services" className="py-20 sm:py-28 bg-[#FFFFFF] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
            Elite Mountain Cabs
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            Premium Taxi & Sightseeing
          </h2>
          <p className="font-body text-sm text-gray-500">
            Choose between rugged, safety-tested 4x4 SUV cabs for extreme mountain passes and luxury hatchbacks/MUVs for comfortable family sightseeing around Manali.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex bg-gray-100 p-1.5 rounded-full mt-6 border border-gray-200">
            <button
              onClick={() => setActiveTab("4x4")}
              className={`py-2 px-6 rounded-full font-luxury font-bold text-xs tracking-wider uppercase transition-colors ${
                activeTab === "4x4"
                  ? "bg-[#1E5631] text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              🏔️ 4x4 Pass Cabs
            </button>
            <button
              onClick={() => setActiveTab("normal")}
              className={`py-2 px-6 rounded-full font-luxury font-bold text-xs tracking-wider uppercase transition-colors ${
                activeTab === "normal"
                  ? "bg-[#1E5631] text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              🌸 Normal Local Cabs
            </button>
          </div>
        </div>

        {/* 4x4 Taxi Routes Section */}
        {activeTab === "4x4" && (
          <div id="4x4-taxi" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {taxiServices4x4.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-150 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-luxury font-bold text-[10px] uppercase tracking-wider bg-[#1E5631]/10 text-[#1E5631] px-3 py-1.5 rounded-full">
                      {service.type}
                    </span>
                    <span className="font-body text-xs font-semibold text-gray-400">
                      {service.duration}
                    </span>
                  </div>

                  {/* Route Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#1E5631] transition-colors">
                    {service.route}
                  </h3>

                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <span className="font-body text-xs text-gray-400 block font-semibold">Starting From</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-luxury font-black text-3xl text-gray-900">₹{service.price}</span>
                      <span className="font-body text-xs font-semibold text-gray-400">/ Full Vehicle</span>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <span className="font-luxury font-bold text-[10px] text-gray-400 uppercase tracking-widest block mb-2">
                      Package Inclusions
                    </span>
                    {service.includes.map((inc) => (
                      <div key={inc} className="flex items-center gap-2 text-xs font-body text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={`tel:${contactInfo.phoneRaw}`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gray-150 hover:bg-gray-200 text-gray-700 py-3.5 rounded-xl font-luxury font-bold text-xs tracking-wider uppercase transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Cabs
                  </a>
                  <a
                    href={contactInfo.whatsappLink(`Hello! I would like to book a 4x4 Taxi Service for ${service.route} at starting price of ₹${service.price}. Please assist.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 rounded-xl font-luxury font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#25D366]/20"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Book Taxi
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Normal Taxi Sightseeing Section */}
        {activeTab === "normal" && (
          <div id="normal-taxi" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {normalTaxiServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#111827] text-white rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.offers.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 border border-white/10 text-gray-300 text-[9px] font-bold font-body uppercase tracking-wider px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-[#D97706] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm text-gray-400 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-body mb-2">
                    <span>One Day Sightseeing</span>
                    <span className="text-[#D97706] font-bold">Customizable Route</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${contactInfo.phoneRaw}`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg text-xs font-luxury font-bold tracking-wider uppercase transition-colors border border-white/10"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Support
                    </a>
                    <a
                      href={contactInfo.whatsappLink(`Hi! I would like to book a local sightseeing cab for "${service.title}". Please share details and pricing.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-lg text-xs font-luxury font-bold tracking-wider uppercase transition-all"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      Chat Inquiry
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Available Taxi Fleet Sub-section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
              Fleet Options
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
              Our Professional Taxi Fleet
            </h3>
            <p className="font-body text-sm text-gray-500">
              Fully insured, clean, and customized tourist cabs driven by local pathfinders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {taxiFleet.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-150 flex flex-col group hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#111827]/75 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-luxury font-bold uppercase tracking-wider text-[#D97706]">
                    {vehicle.type}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-luxury font-bold text-sm text-gray-950 uppercase tracking-wide">
                      {vehicle.name}
                    </h4>
                    <span className="text-[10px] bg-[#1E5631]/10 text-[#1E5631] px-2 py-0.5 rounded font-bold font-body uppercase shrink-0">
                      {vehicle.capacity}
                    </span>
                  </div>
                  <p className="font-body text-xs text-gray-500 leading-relaxed mb-5">
                    {vehicle.description}
                  </p>
                  <a
                    href={contactInfo.whatsappLink(`Hi Wanderlust Journeys! I would like to book a Taxi service for "${vehicle.name}". Please share rates and availability.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto flex items-center justify-center gap-1.5 bg-[#1E5631] hover:bg-[#D97706] text-white py-2.5 rounded-xl font-luxury font-bold text-xs tracking-wider uppercase transition-colors"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5 text-[#D97706]" />
                    Book Cab
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
