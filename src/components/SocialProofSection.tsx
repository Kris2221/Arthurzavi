import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "ALUNOS ATIVOS" },
  { icon: TrendingUp, value: "98%", label: "TAXA DE SUCESSO" },
  { icon: Award, value: "5+", label: "ANOS NO MERCADO" },
];

const AnimatedCounter = ({ value, inView }: { value: string; inView: boolean }) => {
  const isNumeric = /^\d+/.test(value);
  if (!isNumeric) return <span>{value}</span>;

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {value}
    </motion.span>
  );
};

const SocialProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Decorative Editorial Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-0 left-10 text-[20vw] font-black leading-none">ELITE</div>
        <div className="absolute bottom-0 right-10 text-[20vw] font-black leading-none">ELITE</div>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-6xl mx-auto border-y border-white/5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`text-center py-20 px-8 ${
                i < stats.length - 1 ? "md:border-r border-white/5" : ""
              }`}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <s.icon className="text-primary/40" size={20} />
              </div>
              
              <p className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none">
                <AnimatedCounter value={s.value} inView={inView} />
              </p>
              
              <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Editorial Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-32 max-w-4xl mx-auto text-center"
        >
          <span className="text-primary text-6xl font-serif leading-none block mb-4 opacity-40">“</span>
          <h2 className="text-2xl md:text-4xl font-light text-white/90 italic leading-relaxed mb-8">
            Não é sobre treinar mais, é sobre treinar com a estratégia certa. O corpo dos seus sonhos é uma consequência da precisão matemática aplicada ao seu metabolismo.
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-primary/40" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Arthur Zavitoski</span>
            <div className="h-[1px] w-12 bg-primary/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
