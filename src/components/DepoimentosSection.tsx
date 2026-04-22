import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Aluno1 from "@/assets/Aluno1-optimized.jpg";
import Aluno2 from "@/assets/Aluno2-optimized.jpg";

const transformations = [
  { name: "Alexandre de Almeida", description: "Perda de gordura e definicao", image: Aluno1 },
  { name: "Arthur Moura", description: "Ganho de massa muscular", image: Aluno2 },
];

const DepoimentosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultados" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-20"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary md:text-xs md:tracking-[0.25em]">
            Resultados
          </p>
          <h2 className="text-[2rem] text-foreground md:text-5xl">
            Quem ja <span className="text-gradient-gold">transformou</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card shadow-[0_2px_20px_-4px_hsl(0_0%_0%/0.15)] transition-all duration-500 hover:-translate-y-[2px] hover:border-primary/20 hover:shadow-[0_8px_40px_-4px_hsl(228_100%_56%/0.15)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden">
                <img
                  src={t.image}
                  alt={`Transformacao de ${t.name}`}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                />
                <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-primary/10" />
              </div>

              <div className="p-5 text-center">
                <p className="text-lg font-semibold text-foreground">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">Mais resultados reais em breve.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
