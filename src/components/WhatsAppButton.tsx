import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5534984007634&text=Oie%21+Gostaria+de+saber+mais+sobre+o+acompanhamento+on-line+ou+Personal+trainer&type=phone_number";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Play subtle sound using Web Audio API
  const playHoverSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4 note
      oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      // Audio context might be blocked by browser policy before user interaction
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-card text-primary px-4 py-2 rounded-xl shadow-2xl border border-primary/20 font-bold text-sm mb-2 pointer-events-none hidden md:block"
          >
            Fale conosco no WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => {
          setIsHovered(true);
          playHoverSound();
        }}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, brightness: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(212,175,55,0.4)] group overflow-hidden"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none" />
        
        {/* Shine effect on hover */}
        <motion.span 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
          animate={isHovered ? { x: ["-100%", "100%"] } : {}}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
        />

        <MessageCircle className="text-primary-foreground relative z-10" size={32} fill="currentColor" />
      </motion.a>

      {/* Mobile Label */}
      <div className="md:hidden bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <span className="text-[10px] font-black text-white uppercase tracking-widest">WhatsApp</span>
      </div>
    </div>
  );
};

export default WhatsAppButton;
