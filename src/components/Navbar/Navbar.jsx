import { useState, useEffect } from "react";
import { Menu, X, Phone, ShieldCheck, Compass } from "lucide-react";
import { contactInfo } from "../../data/contactInfo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", href: "#about" },
    { name: "Fleet", href: "#fleet" },
    { name: "4x4 Services", href: "#4x4-taxi" },
    { name: "Sightseeing", href: "#normal-taxi" },
    { name: "Expeditions", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-[#111827]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-5 bg-gradient-to-b from-[#111827]/85 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 p-1 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="The Wanderlust Journeys"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-luxury font-extrabold text-lg sm:text-xl text-white tracking-wider leading-none uppercase">
                The Wanderlust
              </span>
              <span className="font-heading italic text-[#D97706] text-xs sm:text-sm tracking-widest mt-0.5">
                Journeys
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium text-gray-300 hover:text-[#D97706] tracking-wide transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D97706] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact CTA Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="flex items-center gap-2 bg-[#1E5631] hover:bg-[#D97706] text-white py-2.5 px-5 rounded-full font-body text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg shadow-[#1E5631]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Support
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`lg:hidden fixed inset-0 top-[76px] bg-[#111827]/98 backdrop-blur-xl z-40 border-t border-white/5 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 py-8 space-y-6 flex flex-col h-full overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-luxury font-bold text-lg text-gray-200 hover:text-[#D97706] tracking-wider transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 space-y-4">
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="flex items-center justify-center gap-3 bg-[#1E5631] hover:bg-[#1E5631]/80 text-white w-full py-3.5 rounded-xl font-body font-bold text-sm tracking-wider uppercase transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={contactInfo.whatsappLink("Hello The Wanderlust Journeys, I would like to enquire about renting a vehicle.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#25D366]/80 text-white w-full py-3.5 rounded-xl font-body font-bold text-sm tracking-wider uppercase transition-all"
            >
              <Compass className="w-4 h-4" />
              WhatsApp Booking
            </a>
          </div>
          <div className="mt-auto pt-6 flex items-center justify-center gap-2 text-gray-500 text-xs font-body">
            <ShieldCheck className="w-4 h-4 text-[#1E5631]" />
            Licensed Adventure Operator
          </div>
        </div>
      </div>
    </nav>
  );
}
