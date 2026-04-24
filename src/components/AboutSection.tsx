import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import arthurRosto from "@/assets/arthur-rosto.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={sectionRef} id="sobre" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-section opacity-40" />

      <div ref={ref} className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
            style={{ y: imgY }}
          >
            <div className="group relative">
              <div className="h-72 w-64 overflow-hidden rounded-3xl border border-primary/20 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:h-[26rem] md:w-80">
                <img
                  src={arthurRosto}
                  alt="Arthur Zavitoski"
                  className="h-full w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-3xl transition-colors duration-500 group-hover:bg-primary/15" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: textY }}
          >
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.26em] text-primary md:text-xs md:tracking-[0.35em]">Por que confiar</p>
            <h2 className="mb-6 text-3xl font-black leading-[0.94] tracking-tighter text-white md:mb-8 md:text-6xl">
              Ele não vende teoria. <span className="text-primary">Ele viveu o processo.</span>
            </h2>
            <div className="mb-8 space-y-4 md:space-y-5">
              <p className="text-[15px] leading-relaxed text-white/65 md:text-lg">
                O Team Zavi não nasceu de uma promessa vazia. Nasceu da experiência real de quem já pesou 130kg, sentiu na pele a dificuldade de mudar e construiu resultado com treino, alimentação e constância.
              </p>
              <p className="text-[15px] leading-relaxed text-white/65 md:text-lg">
                Hoje, essa vivência virou uma consultoria personalizada para pessoas que querem parar de tentar sozinhas e seguir um caminho claro, acompanhado e ajustado de verdade.
              </p>
              <p className="text-[15px] leading-relaxed text-white/65 md:text-lg">
                Aqui você não recebe um PDF genérico. Você recebe direção, cobrança, suporte e estratégia baseada no que funciona na prática com alunos reais.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["Já pesou 130kg", "Alunos reais", "Treino e alimentação"].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-xl border border-primary/15 bg-primary/10 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.16em] text-primary"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
