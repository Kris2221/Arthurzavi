import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, XCircle } from "lucide-react";
import athleteSilhouette from "@/assets/silhueta-atleta.png.png";

const dores = [
  "Você treina, tenta fazer dieta, mas não consegue manter constância",
  "Você já cansou de plano genérico que não encaixa na sua rotina",
  "Você se sente perdido sobre o que comer e como evoluir no treino",
  "Você começa motivado, mas desanima porque não vê resultado claro",
  "Você precisa de alguém olhando sua evolução e ajustando o caminho",
];

const DoresSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      <motion.div className="absolute inset-0 bg-gradient-section opacity-40" style={{ y: bgY }} />

      <div ref={ref} className="container relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 18 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-6 flex w-28 items-center justify-center md:mb-8 md:w-48"
          >
            <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl" />
            <img
              src={athleteSilhouette}
              alt="Silhueta de atleta"
              className="relative w-full object-contain opacity-90 drop-shadow-[0_0_26px_rgba(212,175,55,0.2)]"
              loading="lazy"
            />
          </motion.div>
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary md:text-xs md:tracking-[0.5em]">Antes do método</p>
          <h2 className="text-[2.35rem] font-black leading-[0.88] tracking-tighter text-white md:text-7xl lg:text-8xl">
            SE ISSO ACONTECE <br /> <span className="text-primary italic">COM VOCÊ</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium text-white/50 md:mt-7 md:text-lg">
            O problema talvez não seja falta de vontade. Pode ser falta de estratégia, direção e acompanhamento.
          </p>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {dores.map((d, i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-primary/20 md:items-center md:gap-6 md:px-8 md:py-6"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <XCircle className="text-primary" size={20} />
              </div>
              <span className="text-[13px] font-bold uppercase tracking-tight text-white/70 md:text-base">{d}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => document.querySelector("#consultoria")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-premium cta-glow group relative overflow-hidden rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver como o método resolve
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DoresSection;
