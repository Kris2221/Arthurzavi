import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Preencha o formulário", desc: "Envie suas informações e objetivos." },
  { num: "02", title: "Análise do perfil", desc: "Arthur analisa seu histórico e necessidades." },
  { num: "03", title: "Plano personalizado", desc: "Receba treino e estratégia alimentar sob medida." },
  { num: "04", title: "Acompanhamento", desc: "Suporte contínuo com check-ins regulares." },
  { num: "05", title: "Evolução constante", desc: "Ajustes conforme seu progresso e feedback." },
];

const ComoFuncionaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
      <motion.div className="absolute inset-0 bg-gradient-section opacity-40" style={{ y: bgY }} />

      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none hidden md:block" />

      <div ref={ref} className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-20"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary md:text-xs md:tracking-[0.25em]">Passo a passo</p>
          <h2 className="text-[2rem] text-foreground md:text-5xl">
            Como <span className="text-gradient-gold">funciona</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium group flex items-start gap-4 p-5 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_hsl(228_100%_56%/0.12)] md:gap-6 md:p-7"
            >
              <motion.span
                className="text-gradient-gold mt-1 select-none text-xl font-extrabold leading-none md:text-2xl"
                whileHover={{ scale: 1.1 }}
              >
                {s.num}
              </motion.span>
              <div>
                <h3 className="mb-1.5 text-[14px] font-bold text-foreground md:text-[15px]">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
