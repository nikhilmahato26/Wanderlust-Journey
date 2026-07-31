import { Car, Compass, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../../data/contactInfo";

export default function StickyMobileCTA() {
  const scrollToBooking = (type) => {
    const bookingForm = document.getElementById("booking-section");
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: "smooth" });
      // Dispatch a custom event to change the booking form tab if needed
      const event = new CustomEvent("setBookingType", { detail: type });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-[#111827]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-8px_30px_rgb(0,0,0,0.3)] px-3 py-3 flex items-center justify-between gap-2.5">
      {/* Book Self Drive */}
      <button
        onClick={() => scrollToBooking("self-drive")}
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#1E5631] text-white py-2 rounded-lg transition-transform active:scale-95 text-[10px] font-bold uppercase tracking-wider font-body"
      >
        <Car className="w-4 h-4 text-[#D97706]" />
        Self Drive
      </button>

      {/* Book Taxi */}
      <button
        onClick={() => scrollToBooking("taxi")}
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-white/5 border border-white/15 text-white py-2 rounded-lg transition-transform active:scale-95 text-[10px] font-bold uppercase tracking-wider font-body hover:bg-white/10"
      >
        <Compass className="w-4 h-4 text-[#D97706]" />
        Book Taxi
      </button>

      {/* WhatsApp */}
      <a
        href={contactInfo.whatsappLink("Hello, I would like to book a vehicle instantly with The Wanderlust Journeys. Please assist me.")}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#25D366] text-white py-2 rounded-lg transition-transform active:scale-95 text-[10px] font-bold uppercase tracking-wider font-body"
      >
        <FaWhatsapp className="w-4.5 h-4.5" />
        WhatsApp
      </a>

      {/* Call Now */}
      <a
        href={`tel:${contactInfo.phoneRaw}`}
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#D97706] text-white py-2 rounded-lg transition-transform active:scale-95 text-[10px] font-bold uppercase tracking-wider font-body"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
    </div>
  );
}
