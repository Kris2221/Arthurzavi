import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChartNoAxesColumn, ShieldCheck, TimerReset } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre o acompanhamento online ou personal trainer.";
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=5534984007634&text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}&type=phone_number`;

const ZaviHighlightSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-[#000000] py-20"
    >
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/[0.08] rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random(),
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-10 px-6 md:gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 block text-[11px] font-black uppercase tracking-[0.24em] text-primary md:mb-6 md:text-xs md:tracking-[0.3em]"
          >
            A força que você precisa
          </motion.span>

          <h2 className="mb-6 text-[2.7rem] font-black leading-[0.9] tracking-tighter text-white md:mb-8 md:text-7xl lg:text-8xl">
            SEU CORPO <br />
            <span className="text-secondary">PODE MAIS</span> <br />
            DO QUE IMAGINA.
          </h2>

          <p className="mb-8 max-w-lg text-[15px] font-medium leading-relaxed text-white/60 md:mb-12 md:text-xl">
            Treinos diretos, acompanhamento real e evolução visível. O método ZAVI foi criado para quem não aceita menos que o extraordinário.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-secondary px-7 py-4 text-sm font-black uppercase tracking-tight text-secondary-foreground shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] md:gap-4 md:px-10 md:py-5 md:text-lg"
          >
            Começar agora
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          style={{ y, rotate }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[560px]"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-primary/15 bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl md:rounded-[32px] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent_30%)] pointer-events-none" />

              <div className="relative flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between md:gap-5 md:pb-5">
                <div className="flex items-center gap-4">
                  <BrandLogo variant="emblem" className="h-14 w-14 shrink-0 md:h-20 md:w-20" />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.34em] text-primary/80">Método ZAVI</p>
                    <h3 className="mt-2 text-2xl font-black leading-none text-white md:mt-3 md:text-4xl">Alta performance</h3>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary/80">Foco</p>
                  <p className="mt-1 text-2xl font-black text-white">100%</p>
                </div>
              </div>

              <div className="relative mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-6">
                <div className="rounded-3xl border border-white/10 bg-black/50 p-4 md:p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <ChartNoAxesColumn size={18} />
                    <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary/80">Evolução real</span>
                  </div>
                  <p className="mt-5 text-4xl font-black leading-none text-white md:mt-6 md:text-5xl">+12</p>
                  <p className="mt-2 text-sm text-white/60">semanas com acompanhamento estratégico e ajuste constante.</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <ShieldCheck size={18} />
                    <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary/80">Estrutura</span>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[92%] rounded-full bg-primary shadow-[0_0_20px_rgba(212,175,55,0.45)]" />
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[84%] rounded-full bg-white/80" />
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[76%] rounded-full bg-white/40" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-white/60">Planejamento, execução e constância no mesmo sistema.</p>
                </div>
              </div>

              <div className="relative mt-4 rounded-3xl border border-white/10 bg-black/45 p-4 md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-sm">
                    <div className="flex items-center gap-3 text-primary">
                      <TimerReset size={18} />
                      <span className="text-[10px] font-black uppercase tracking-[0.28em] text-primary/80">Rotina inteligente</span>
                    </div>
                    <p className="mt-3 text-lg font-black leading-tight text-white md:text-2xl">
                      Menos aleatoriedade, mais direção para construir resultado de verdade.
                    </p>
                  </div>

                  <div className="flex items-end gap-2 self-start md:min-w-[170px] md:self-auto">
                    {[42, 68, 88, 120].map((height, index) => (
                      <div
                        key={height}
                        className={`w-6 rounded-t-full md:w-8 ${index === 3 ? "bg-primary shadow-[0_0_25px_rgba(212,175,55,0.35)]" : "bg-white/15"}`}
                        style={{ height: Math.max(32, Math.round(height * 0.8)) }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZaviHighlightSection;
