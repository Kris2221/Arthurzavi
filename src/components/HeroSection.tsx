import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import arthurHero from "@/assets/hero-novo.jpg.jpeg";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5534984007634&text=Oie%21+Quero+entender+como+comecar+no+Zavi+Team&type=phone_number&app_absent=0";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.34, 0.62]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background pt-20 pb-16 md:pb-32"
    >
      <motion.div
        className="absolute inset-y-0 right-0 z-0 w-full overflow-hidden md:w-[56%]"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={arthurHero}
          alt="Arthur Zavitoski"
          className="h-full w-full object-cover object-[center_18%] brightness-[0.82] contrast-125 saturate-[0.92]"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          opacity: overlayOpacity,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.985) 0%, rgba(0,0,0,0.94) 24%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.08) 68%, rgba(0,0,0,0.34) 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.08) 34%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 72% 34%, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.08) 18%, rgba(0,0,0,0) 44%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 48%, #000000 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 -bottom-24 z-[1] h-48"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.08), rgba(0,0,0,0) 65%)",
        }}
      />

      <motion.div className="container relative z-10 mx-auto px-4" style={{ y: textY }}>
        <div className="mx-auto max-w-[940px] text-center md:mx-0 md:max-w-[58%] md:pt-16 md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.34em] text-primary md:text-xs md:tracking-[0.5em]">
              Metodo ZAVI • transformacao real
            </span>
          </motion.div>

          <h1 className="mb-6 text-[12.5vw] font-black leading-[0.84] tracking-tighter text-white md:mb-8 md:text-[9.2vw] lg:text-[8vw]">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              MUDE SEU
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-primary"
            >
              FISICO
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mx-auto mb-8 max-w-xl md:mx-0 md:mb-12"
          >
            <p className="text-[15px] font-medium leading-relaxed text-white/60 md:text-xl">
              Uma consultoria criada por quem ja pesou 130kg, venceu o proprio processo e hoje ajuda alunos reais a emagrecer, ganhar massa muscular e construir disciplina com treino e alimentacao que funcionam.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row md:gap-4 md:justify-start"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[320px] overflow-hidden rounded-full bg-primary px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground transition-all duration-500 hover:scale-[1.05] hover:bg-secondary hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] sm:w-auto sm:max-w-none sm:px-10 sm:py-5 md:px-12 md:py-6 md:text-sm md:tracking-widest"
            >
              <span className="relative z-10 flex items-center gap-3">
                Quero comecar
                <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
            </a>

            <button
              onClick={() => document.querySelector("#consultoria")?.scrollIntoView({ behavior: "smooth" })}
              className="group w-full max-w-[320px] rounded-full border border-primary/20 px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:w-auto sm:max-w-none sm:px-10 sm:py-5 md:px-12 md:py-6 md:text-sm md:tracking-widest"
            >
              Entender o metodo
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
