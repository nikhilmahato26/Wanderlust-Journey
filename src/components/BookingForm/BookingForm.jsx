import { useState, useEffect } from "react";
import { Calendar, MapPin, Users, Car, Check, Send, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../../data/contactInfo";

export default function BookingForm() {
  const [rentalType, setRentalType] = useState("self-drive"); // 'self-drive', 'taxi', 'tour'
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
    vehicle: "Thar",
    pickupDate: "",
    returnDate: "",
    passengers: "2",
    name: "",
    phone: "",
    specialRequirements: ""
  });

  // Listen for the custom event from StickyMobileCTA
  useEffect(() => {
    const handleSetBookingType = (e) => {
      setRentalType(e.detail);
    };
    window.addEventListener("setBookingType", handleSetBookingType);
    return () => window.removeEventListener("setBookingType", handleSetBookingType);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getWhatsAppMessage = (actionType) => {
    const {
      pickupLocation,
      dropLocation,
      vehicle,
      pickupDate,
      returnDate,
      passengers,
      name,
      phone,
      specialRequirements
    } = formData;

    const rentalTypeLabel =
      rentalType === "self-drive"
        ? "🚗 Self Drive Car Rental"
        : rentalType === "taxi"
        ? "🚕 4x4 / Normal Taxi Service"
        : "🏔️ Himalayan Tour Package";

    const requirementsStr = specialRequirements ? `\n- *Special Request:* ${specialRequirements}` : "";

    return `Hello The Wanderlust Journeys!
I would like to request a *${actionType}* for:

*Service:* ${rentalTypeLabel}
*Vehicle:* ${vehicle}
*Pickup Location:* ${pickupLocation || "Manali"}
*Drop Location:* ${dropLocation || "Manali"}
*Pickup Date:* ${pickupDate}
*Return Date:* ${rentalType === "self-drive" ? returnDate : "N/A (One Way/Day Tour)"}
*Passengers:* ${passengers}
*Lead Name:* ${name}
*Contact Phone:* ${phone}${requirementsStr}

Please confirm availability and share pricing.`;
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.pickupDate) {
      alert("Please fill in Name, Phone, and Pickup Date to proceed.");
      return;
    }
    const message = getWhatsAppMessage("Booking Confirmation");
    window.open(contactInfo.whatsappLink(message), "_blank");
  };

  const handleGetQuote = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.pickupDate) {
      alert("Please fill in Name, Phone, and Pickup Date to get a quote.");
      return;
    }
    const message = getWhatsAppMessage("Quotation Request");
    window.open(contactInfo.whatsappLink(message), "_blank");
  };

  return (
    <div
      id="booking-section"
      className="w-full max-w-5xl mx-auto glass-effect rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-white/10"
    >
      {/* Tab Selectors */}
      <div className="flex border-b border-white/10 pb-4 mb-6 gap-2 sm:gap-4">
        {[
          { id: "self-drive", label: "Self Drive", icon: "🚗" },
          { id: "taxi", label: "Taxi Service", icon: "🚕" },
          { id: "tour", label: "Tour Packages", icon: "🏔️" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setRentalType(tab.id)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-luxury font-bold text-xs tracking-wider uppercase transition-all duration-300 ${
              rentalType === tab.id
                ? "bg-[#D97706] text-white shadow-lg shadow-[#D97706]/35"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Booking Form Fields */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pickup Location */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#D97706]" />
              Pickup Location
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. Manali Mall Road / Hotel"
              className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-all font-body text-sm placeholder-gray-500"
              required
            />
          </div>

          {/* Drop Location */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#D97706]" />
              Drop-off Location
            </label>
            <input
              type="text"
              name="dropLocation"
              value={formData.dropLocation}
              onChange={handleChange}
              placeholder="e.g. Manali, Rohtang, or Airport"
              className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-all font-body text-sm placeholder-gray-500"
              required
            />
          </div>

          {/* Vehicle Selection */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <Car className="w-4 h-4 text-[#D97706]" />
              Select SUV / Fleet
            </label>
            <select
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="w-full bg-[#111827] border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm"
            >
              <option value="Jimny">Maruti Jimny 4x4 (₹4,500/d)</option>
              <option value="Thar">Mahindra Thar 4x4 (₹5,500/d)</option>
              <option value="Thar Roxx">Mahindra Thar Roxx 4x4 (₹8,000/d)</option>
              <option value="Scorpio">Mahindra Scorpio Classic (₹7,000/d)</option>
              <option value="Fortuner">Toyota Fortuner Classic (₹6,000/d)</option>
              <option value="Hilux">Toyota Hilux 4x4 (₹10,000/d)</option>
              <option value="Scorpio N Sigma">Scorpio N Sigma 4x4 (₹12,000/d)</option>
              <option value="4x4 Taxi Option">4x4 Taxi (Rohtang/Shinkula/Baralacha)</option>
              <option value="Sightseeing Sedan/SUV">Sightseeing Taxi (Local/Sissu/Kullu)</option>
            </select>
          </div>

          {/* Pickup Date */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-[#D97706]" />
              Pickup Date & Time
            </label>
            <input
              type="datetime-local"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm"
              required
            />
          </div>

          {/* Return Date (Disable if not Self Drive) */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-[#D97706]" />
              Return Date & Time
            </label>
            <input
              type="datetime-local"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              disabled={rentalType !== "self-drive"}
              className={`w-full border text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm ${
                rentalType === "self-drive"
                  ? "bg-white/5 border-white/15"
                  : "bg-white/5 border-white/5 opacity-40 cursor-not-allowed"
              }`}
              required={rentalType === "self-drive"}
            />
          </div>

          {/* Passengers */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#D97706]" />
              No. of Passengers
            </label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              min="1"
              max="15"
              className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm"
              required
            />
          </div>

          {/* Guest Name */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm placeholder-gray-500"
              required
            />
          </div>

          {/* Guest Phone */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 9999999999"
              className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm placeholder-gray-500"
              required
            />
          </div>

          {/* Special Requirements */}
          <div className="space-y-2 md:col-span-2 lg:col-span-1">
            <label className="flex items-center gap-2 font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Special Requirements / Tour Route
            </label>
            <input
              type="text"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              placeholder="Snow chains, baby seat, Custom route..."
              className="w-full bg-white/5 border border-white/15 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm placeholder-gray-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
          <button
            onClick={handleBookNow}
            className="flex-1 flex items-center justify-center gap-2.5 bg-[#1E5631] hover:bg-[#1E5631]/90 text-white font-luxury font-extrabold text-sm tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Check className="w-5 h-5 text-[#D97706]" />
            Book Now
          </button>
          
          <button
            onClick={handleGetQuote}
            className="flex-1 flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D97706] to-[#e07a1b] hover:from-[#B45F06] hover:to-[#D97706] text-white font-luxury font-extrabold text-sm tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-4 h-4" />
            Get Quote
          </button>

          <a
            href={contactInfo.whatsappLink("Hello The Wanderlust Journeys, I have a custom inquiry about your taxi and car rental services.")}
            target="_blank"
            rel="noreferrer"
            className="flex sm:flex-none items-center justify-center gap-2.5 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-white font-luxury font-extrabold text-sm tracking-wider uppercase py-4 px-6 rounded-xl transition-all"
          >
            <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
            Quick Inquiry
          </a>
        </div>
      </form>
    </div>
  );
}
