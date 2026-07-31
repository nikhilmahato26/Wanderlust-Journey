import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import { faqs } from "../../data/faq";
import { contactInfo } from "../../data/contactInfo";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#111827] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
            Questions Answered
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-sm text-gray-400">
            Everything you need to know about permits, self-drive rentals, security deposits, and booking procedures in Manali.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left p-6 font-body font-bold text-base sm:text-lg focus:outline-none transition-colors hover:text-[#D97706]"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white">
                    {isOpen ? <Minus className="w-4 h-4 text-[#D97706]" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 font-body text-sm text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA link below FAQ */}
        <div className="mt-16 text-center space-y-4 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-heading text-xl sm:text-2xl font-bold">Have custom travel queries?</h3>
          <p className="font-body text-xs text-gray-400 max-w-lg mx-auto">
            Our Himalayan tour specialists are available 24/7. Chat with us on WhatsApp or call us to plan your specific off-road route.
          </p>
          <div className="pt-2">
            <a
              href={contactInfo.whatsappLink("Hi! I have some questions about self-drive rentals and tour permits in Manali.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#B45F06] text-white font-luxury font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-xl transition-all shadow-lg shadow-[#D97706]/20"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
