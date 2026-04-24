import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { useRef } from "react";
import { buildPlanWhatsappUrl, planGroups, planIncludedFeatures } from "@/data/plans";

const PlanosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planos" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,rgba(212,175,55,0.04)_100%)]" />

      <div ref={ref} className="container relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-secondary md:text-xs md:tracking-[0.5em]">
            Planos
          </p>
          <h2 className="text-[2.05rem] font-black leading-[0.9] tracking-tighter text-white sm:text-[2.55rem] md:text-7xl lg:text-8xl">
            ACOMPANHAMENTO <br /> <span className="text-secondary">ONLINE</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium text-white/55 md:mt-7 md:text-lg">
            Escolha a forma de acompanhamento que mais encaixa no seu momento. Se quiser acelerar o resultado com treino e alimentação no mesmo processo, o plano completo entrega o melhor encaixe.
          </p>
        </motion.div>

        <div className="space-y-10">
          {planGroups.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: groupIndex * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-[2rem] border ${
                group.featured ? "border-primary/25 bg-primary/[0.06]" : "border-white/10 bg-white/[0.025]"
              } p-4 shadow-[0_18px_60px_rgba(0,0,0,0.26)] md:p-8`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.accent}`} />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

              <div className="relative z-10 mb-6 flex flex-col gap-4 md:mb-8 md:gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-primary/85 md:text-[11px] md:tracking-[0.36em]">{group.eyebrow}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-black uppercase text-white md:text-5xl">{group.title}</h3>
                    {group.featured && (
                      <span className="rounded-full border border-primary/35 bg-primary/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-primary">
                        Mais completo
                      </span>
                    )}
                  </div>
                  <p className="mt-3 max-w-2xl text-[14px] font-medium leading-relaxed text-white/55 md:mt-4 md:text-base">{group.description}</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 px-4 py-4 backdrop-blur-sm md:px-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Todos os planos incluem</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {planIncludedFeatures.map((feature) => (
                      <span
                        key={`${group.id}-${feature}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/75 md:text-[11px] md:tracking-[0.16em]"
                      >
                        <Check size={12} className="text-primary" strokeWidth={3} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                {group.plans.map((plan) => (
                  <div
                    key={`${group.id}-${plan.name}`}
                    className={`group relative overflow-hidden rounded-[1.75rem] border p-4 transition-all duration-300 md:p-6 ${
                      plan.highlight
                        ? "border-primary/40 bg-black/65 shadow-[0_0_45px_rgba(212,175,55,0.12)]"
                        : "border-white/10 bg-black/45 hover:border-primary/20"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_55%,rgba(212,175,55,0.07))]" />

                    {plan.highlight && (
                      <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                        Recomendado
                      </span>
                    )}

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-6">
                        <p className="text-[13px] font-black uppercase tracking-[0.22em] text-primary md:text-sm md:tracking-[0.32em]">{plan.name}</p>
                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-white/35 md:text-sm md:tracking-[0.2em]">{plan.duration}</p>
                      </div>

                      <div className="mb-5 border-y border-white/10 py-4 md:mb-6 md:py-5">
                        <p className="text-[13px] font-black uppercase tracking-[0.16em] text-white/35 md:text-[15px] md:tracking-[0.2em]">
                          Valores
                        </p>
                        <p className="mt-2 text-2xl font-black tracking-tighter text-white md:text-4xl">Consulte no WhatsApp</p>
                      </div>

                      <div className="mb-6 space-y-3 md:mb-8">
                        <div className="flex items-start gap-3 text-[13px] font-medium text-white/68 md:text-sm">
                          <ShieldCheck size={18} className="mt-0.5 shrink-0 text-primary" />
                          Acompanhamento com ajuste baseado no seu objetivo e fase atual.
                        </div>
                        <div className="flex items-start gap-3 text-[13px] font-medium text-white/68 md:text-sm">
                          <Sparkles size={18} className="mt-0.5 shrink-0 text-primary" />
                          Entrada guiada diretamente no WhatsApp para alinhar pagamento e início.
                        </div>
                      </div>

                      <a
                        href={buildPlanWhatsappUrl(group.title, plan.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] transition-all duration-300 active:scale-95 md:py-4 md:text-sm md:tracking-[0.18em] ${
                          plan.highlight || group.featured
                            ? "bg-primary text-black shadow-[0_0_24px_rgba(212,175,55,0.22)] hover:shadow-[0_0_36px_rgba(212,175,55,0.32)]"
                            : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                        }`}
                      >
                        Escolher plano
                        <ArrowRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-white/10 bg-black/40 px-4 py-6 text-center backdrop-blur-sm md:mt-12 md:px-10 md:py-7"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-primary md:text-sm md:tracking-[0.3em]">Todos os planos incluem</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {planIncludedFeatures.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-[13px] font-semibold text-white/80 md:text-sm">
                <span className="mb-2 flex justify-center">
                  <Check size={18} className="text-primary" strokeWidth={3} />
                </span>
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanosSection;
