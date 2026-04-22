import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Dumbbell, MessageCircle, Trophy } from "lucide-react";

const beneficios = [
  {
    icon: ClipboardCheck,
    title: "Analise personalizada",
    desc: "Entendemos seu objetivo, rotina, historico e dificuldades para montar uma estrategia que faca sentido para voce.",
  },
  {
    icon: Dumbbell,
    title: "Protocolo de treino e dieta",
    desc: "Voce recebe um plano direto e aplicavel, com treino e dieta alinhados ao seu objetivo e nivel atual.",
  },
  {
    icon: MessageCircle,
    title: "Acompanhamento humanizado",
    desc: "Suporte proximo para tirar duvidas, ajustar o caminho e manter sua evolucao constante.",
  },
  {
    icon: Trophy,
    title: "Melhor resultado",
    desc: "Metodo validado na pratica para transformar esforco em resultado real, com direcao e consistencia.",
  },
];

const BeneficiosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          y: bgY,
          background:
            "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.14), transparent 28%), radial-gradient(circle at 80% 75%, hsl(var(--primary) / 0.08), transparent 30%)",
        }}
      />

      <div ref={ref} className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.5em] text-primary">
            depois de entrar no time
          </p>
          <h2 className="text-[2.45rem] font-black leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl">
            O QUE VOCE <br />
            <span className="text-primary italic">RECEBE</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative min-h-[280px] overflow-hidden rounded-[1.65rem] border p-6 shadow-[0_20px_70px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 md:min-h-[320px] md:p-8 ${
                i % 2 === 0
                  ? "border-primary/25 bg-primary text-black"
                  : "border-white/10 bg-black text-white"
              }`}
            >
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  i % 2 === 0
                    ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_42%)]"
                    : "bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_42%)]"
                }`}
              />

              <div className="relative flex h-full flex-col">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border md:mb-8 md:h-16 md:w-16 ${
                    i % 2 === 0
                      ? "border-black/15 bg-black/10 text-black"
                      : "border-primary/20 bg-primary/10 text-primary"
                  }`}
                >
                  <b.icon size={26} strokeWidth={2.1} />
                </div>

                <h3 className="text-xl font-black uppercase leading-[0.98] tracking-tight md:text-2xl [overflow-wrap:anywhere]">
                  {b.title}
                </h3>
                <p
                  className={`mt-4 text-[15px] font-semibold leading-relaxed md:mt-5 md:text-base ${
                    i % 2 === 0 ? "text-black/72" : "text-white/55"
                  }`}
                >
                  {b.desc}
                </p>

                <div
                  className={`mt-auto pt-8 text-[10px] font-black uppercase tracking-[0.32em] ${
                    i % 2 === 0 ? "text-black/45" : "text-primary/70"
                  }`}
                >
                  Zavi Team
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
