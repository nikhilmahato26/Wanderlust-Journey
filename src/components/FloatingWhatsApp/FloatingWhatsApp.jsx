import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../../data/contactInfo";

export default function FloatingWhatsApp() {
  return (
    <a
      href={contactInfo.whatsappLink("Hello The Wanderlust Journeys, I'm visiting Manali and want to enquire about vehicle bookings.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.3)] transition-all duration-300 hover:scale-110 group hover:-translate-y-1"
    >
      {/* Animated Ripple Circles */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 scale-125 animate-pulse" />
      
      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-8 h-8 relative z-10" />
      
      {/* Quick Tooltip */}
      <span className="absolute right-16 bg-[#111827] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md border border-white/10 font-body">
        Chat with us
      </span>
    </a>
  );
}
