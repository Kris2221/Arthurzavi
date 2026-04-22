import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, MessageCircle, RefreshCw, UserCheck } from "lucide-react";

const diferenciais = [
  { icon: UserCheck, title: "Plano individual", desc: "Treino e alimentacao pensados para sua rotina, objetivo, nivel e dificuldade real." },
  { icon: RefreshCw, title: "Ajustes constantes", desc: "O plano evolui conforme sua resposta. Nada fica parado quando seu corpo muda." },
  { icon: CheckCircle, title: "Metodo pratico", desc: "Sem promessa magica: estrategia simples, execucao bem feita e acompanhamento serio." },
  { icon: MessageCircle, title: "Suporte direto", desc: "Voce tem orientacao para corrigir rota, tirar duvidas e manter consistencia." },
];

const ConsultoriaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} id="consultoria" className="relative overflow-hidden bg-[#000000] py-24 md:py-40">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-20 top-20 h-[600px] w-[600px] rounded-full bg-primary/[0.04] blur-[140px]"
      />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.025] blur-[120px]" />

      <div ref={ref} className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-start gap-14 md:gap-20 lg:flex-row">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-primary md:text-[10px] md:tracking-[0.5em]">A consultoria</p>
              <h2 className="mb-6 text-[2.45rem] font-black leading-[0.88] tracking-tighter text-white md:mb-8 md:text-7xl">
                O CAMINHO <br />
                <span className="text-primary">DO ZAVI TEAM</span>
              </h2>
              <p className="mb-10 max-w-xl text-[15px] font-medium leading-relaxed text-white/50 md:mb-12 md:text-xl">
                Voce entra em um processo guiado: entendemos seu ponto de partida, montamos uma estrategia possivel de seguir e ajustamos tudo com base na sua evolucao.
              </p>

              <div className="flex flex-col gap-8">
                {diferenciais.slice(0, 2).map((d) => (
                  <div key={d.title} className="flex items-start gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20">
                      <d.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">{d.title}</h3>
                      <p className="text-sm text-white/45">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

            <div className="grid gap-5 pt-4 md:gap-8 md:pt-12 md:grid-cols-2 lg:w-1/2">
              <div className="space-y-8">
              {diferenciais.slice(2, 4).map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.8, ease: "easeOut" }}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-primary/20 hover:bg-white/[0.05] md:p-10"
                >
                  <d.icon className="mb-6 text-primary transition-transform duration-500 group-hover:scale-110" size={32} />
                  <h3 className="mb-3 text-lg font-black uppercase tracking-tight text-white md:text-xl">{d.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-white/45">{d.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-5 pt-0 md:space-y-8 md:pt-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex min-h-[220px] flex-col justify-end rounded-2xl bg-primary p-6 shadow-[0_0_50px_rgba(212,175,55,0.2)] md:min-h-[300px] md:p-10"
              >
                <h4 className="mb-3 text-3xl font-black uppercase italic leading-[0.88] tracking-tighter text-background md:mb-4 md:text-4xl">
                  RESULTADO <br /> COM DIRECAO
                </h4>
                <p className="text-sm font-black uppercase tracking-widest text-background/70">
                  Treino, alimentacao e acompanhamento no mesmo processo.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaSection;
