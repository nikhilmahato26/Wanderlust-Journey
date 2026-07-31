import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../../data/contactInfo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Self Drive",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in Name and Phone number.");
      return;
    }
    
    // Construct WhatsApp message template
    const waMessage = `Hello The Wanderlust Journeys!
I have submitted a contact enquiry:

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not Provided"}
*Service of Interest:* ${formData.serviceType}
*Message:* ${formData.message || "No custom message"}

Please contact me back regarding this.`;

    window.open(contactInfo.whatsappLink(waMessage), "_blank");
    setSubmitted(true);
    // Reset form fields
    setFormData({ name: "", phone: "", email: "", serviceType: "Self Drive", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] text-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            Contact Our Adventure Desk
          </h2>
          <p className="font-body text-sm text-gray-500">
            Have questions about bookings, tariffs, routes, or custom itineraries? Send us an inquiry, call us directly, or drop a message on WhatsApp.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Column 1: Info Cards */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-150 space-y-8 shadow-sm flex-1">
              <h3 className="font-heading text-2xl font-bold text-gray-950 mb-4">
                The Wanderlust Journeys
              </h3>

              <div className="space-y-6">
                {/* Address block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E5631]/10 rounded-2xl flex items-center justify-center text-[#1E5631] shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-luxury font-bold text-xs uppercase text-gray-400 tracking-wider mb-1">
                      Office Address
                    </h5>
                    <p className="font-body text-sm text-gray-700 leading-relaxed">
                      {contactInfo.address.line1}, <br />
                      {contactInfo.address.line2}, <br />
                      {contactInfo.address.state} - {contactInfo.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E5631]/10 rounded-2xl flex items-center justify-center text-[#1E5631] shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-luxury font-bold text-xs uppercase text-gray-400 tracking-wider mb-1">
                      Direct Support Line
                    </h5>
                    <a
                      href={`tel:${contactInfo.phoneRaw}`}
                      className="font-luxury font-black text-lg text-gray-950 hover:text-[#1E5631] transition-colors block"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E5631]/10 rounded-2xl flex items-center justify-center text-[#1E5631] shrink-0 mt-0.5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-luxury font-bold text-xs uppercase text-gray-400 tracking-wider mb-1">
                      General Email Desk
                    </h5>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-body text-sm font-semibold text-gray-700 hover:text-[#1E5631] transition-colors block"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E5631]/10 rounded-2xl flex items-center justify-center text-[#1E5631] shrink-0 mt-0.5">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-luxury font-bold text-xs uppercase text-gray-400 tracking-wider mb-1">
                      Operating Hours
                    </h5>
                    <p className="font-body text-sm text-gray-700 font-semibold">
                      {contactInfo.operatingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#1E5631] hover:bg-[#1E5631]/90 text-white py-3.5 px-6 rounded-xl font-luxury font-bold text-xs tracking-wider uppercase transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call Support
                </a>
                <a
                  href={contactInfo.whatsappLink("Hello The Wanderlust Journeys! I would like to talk to your team regarding vehicle rentals.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 px-6 rounded-xl font-luxury font-bold text-xs tracking-wider uppercase transition-colors shadow-md"
                >
                  <FaWhatsapp className="w-4.5 h-4.5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-md border border-gray-150 relative">
              <iframe
                title="Office Location Map"
                src={contactInfo.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 2: Inquiry Form */}
          <div className="bg-[#111827] text-white p-8 sm:p-12 rounded-[2rem] border border-white/5 shadow-2xl flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold mb-2">Send an Inquiry</h3>
            <p className="font-body text-xs text-gray-400 mb-8 leading-relaxed">
              Fill out the form below and click Submit to send your request instantly to our booking assistant on WhatsApp.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm placeholder-gray-600"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 9999999999"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm placeholder-gray-600"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm placeholder-gray-600"
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="block font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Service of Interest
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-[#111827] border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm"
                >
                  <option value="Self Drive">Self Drive SUV Rental</option>
                  <option value="4x4 Taxi Route">4x4 Mountain Taxi</option>
                  <option value="Local Sightseeing">Local Sightseeing Cabs</option>
                  <option value="Expedition Package">Winter Spiti / Highway Tours</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block font-body text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Message / Special Request
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Share details of your travel plan..."
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#D97706] transition-all font-body text-sm placeholder-gray-600 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#D97706] hover:bg-[#B45F06] text-white py-4 rounded-xl font-luxury font-extrabold text-sm tracking-wider uppercase transition-colors shadow-lg shadow-[#D97706]/25"
              >
                <Send className="w-4 h-4" />
                Submit Enquiry
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-xs text-[#25D366] font-body bg-[#25D366]/10 p-3 rounded-lg border border-[#25D366]/20">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>Redirecting to WhatsApp for instant booking desk confirmation!</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
