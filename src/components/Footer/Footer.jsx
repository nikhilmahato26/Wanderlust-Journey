import { Shield, Mail, Phone, MapPin, Compass } from "lucide-react";
import { contactInfo } from "../../data/contactInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-24 lg:pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E5631]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 p-1 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="The Wanderlust Journeys"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-luxury font-extrabold text-lg text-white tracking-wider leading-none uppercase">
                  The Wanderlust
                </span>
                <span className="font-heading italic text-[#D97706] text-sm tracking-widest mt-0.5">
                  Journeys
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Premium Himalayan adventure, self-drive rentals, and high-altitude off-road expeditions. Based in Manali, driving you beyond horizons.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-body">
              <Shield className="w-4 h-4 text-[#1E5631]" />
              Government Approved Operator
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-luxury font-bold text-sm tracking-wider uppercase text-[#D97706] mb-6">
              Quick Exploration
            </h4>
            <ul className="space-y-3 font-body text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Every Road - About Us
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">
                  Our Self Drive Fleet
                </a>
              </li>
              <li>
                <a href="#4x4-taxi" className="hover:text-white transition-colors">
                  4x4 Taxi Services
                </a>
              </li>
              <li>
                <a href="#normal-taxi" className="hover:text-white transition-colors">
                  Sightseeing Packages
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Expeditions & Tours
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="font-luxury font-bold text-sm tracking-wider uppercase text-[#D97706] mb-6">
              Adventure Routes
            </h4>
            <ul className="space-y-3 font-body text-sm text-gray-400">
              <li>
                <a href="#4x4-taxi" className="hover:text-white transition-colors">
                  Manali to Rohtang Pass
                </a>
              </li>
              <li>
                <a href="#4x4-taxi" className="hover:text-white transition-colors">
                  Manali to Shinkula Pass
                </a>
              </li>
              <li>
                <a href="#4x4-taxi" className="hover:text-white transition-colors">
                  Manali to Baralacha Pass
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Winter Spiti Expedition
                </a>
              </li>
              <li>
                <a href="#normal-taxi" className="hover:text-white transition-colors">
                  Atal Tunnel & Sissu Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-luxury font-bold text-sm tracking-wider uppercase text-[#D97706] mb-6">
              Contact Desk
            </h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1E5631] shrink-0 mt-0.5" />
                <span>
                  {contactInfo.address.line1},
                  <br />
                  {contactInfo.address.line2},
                  <br />
                  {contactInfo.address.state} - {contactInfo.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1E5631] shrink-0" />
                <a href={`tel:${contactInfo.phoneRaw}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1E5631] shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#1E5631] shrink-0" />
                <span>Hours: {contactInfo.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-gray-500">
          <p>© {currentYear} {contactInfo.businessName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#faq" className="hover:text-gray-300 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Booking Support</a>
            <span className="text-[#D97706]">Designed with Adventure in Mind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
