import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { buildPlanWhatsappUrl, planGroups, planIncludedFeatures } from "@/data/plans";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Consultoria", href: "#consultoria" },
  { label: "Resultados", href: "#resultados" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const PlansModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-black/55 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:p-9"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%)]" />
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-primary hover:text-black"
              aria-label="Fechar planos"
            >
              <X size={18} />
            </button>

            <div className="relative z-10 mb-8 max-w-4xl">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.4em] text-primary">
                Investimento no seu processo
              </p>
              <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-6xl">
                Acompanhamento online
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-white/55 md:text-lg">
                Escolha entre treino, dieta ou acompanhamento completo. O encaixe é feito diretamente no WhatsApp para você entrar com clareza no plano certo.
              </p>
            </div>

            <div className="relative z-10 space-y-5">
              {planGroups.map((group) => (
                <div
                  key={group.id}
                  className={`overflow-hidden rounded-[1.75rem] border ${
                    group.featured ? "border-primary/25 bg-primary/[0.07]" : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-5 md:flex-row md:items-end md:justify-between md:px-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.34em] text-primary/80">{group.eyebrow}</p>
                      <h3 className="mt-2 text-2xl font-black uppercase text-white md:text-4xl">{group.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white/55">{group.description}</p>
                    </div>
                    {group.featured && (
                      <span className="inline-flex w-fit rounded-full border border-primary/25 bg-primary/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-primary">
                        Melhor encaixe
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
                    {group.plans.map((plan) => (
                      <div key={`${group.id}-${plan.name}`} className="bg-black/55 p-5">
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">{plan.name}</p>
                            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/35">{plan.duration}</p>
                          </div>
                          {plan.highlight && (
                            <span className="rounded-full bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                              destaque
                            </span>
                          )}
                        </div>

                        <p className="mb-4 text-xl font-black uppercase tracking-[0.18em] text-white/80">Consulte valores no WhatsApp</p>

                        <ul className="mb-6 space-y-3">
                          {planIncludedFeatures.map((feature) => (
                            <li key={`${group.id}-${plan.name}-${feature}`} className="flex items-start gap-3 text-sm font-medium text-white/62">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                                <Check size={12} strokeWidth={4} className="text-primary" />
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <a
                          href={buildPlanWhatsappUrl(group.title, plan.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group mt-auto flex items-center justify-center gap-2 rounded-full py-4 text-sm font-black uppercase tracking-widest transition-all hover:-translate-y-1 ${
                            plan.highlight || group.featured
                              ? "bg-primary text-black shadow-[0_0_30px_rgba(212,175,55,0.28)]"
                              : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                          }`}
                        >
                          Quero este
                          <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const openPlans = () => {
    setOpen(false);
    setPlansOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-border bg-background/95 shadow-[0_4px_30px_rgba(0,0,0,0.35)]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <button onClick={() => handleClick("#hero")} className="transition-transform duration-300 hover:scale-[1.02]">
            <BrandLogo variant="compact" className="pointer-events-none" />
          </button>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="group relative text-[10px] font-black uppercase tracking-[0.2em] text-white/50 transition-all duration-300 hover:text-primary"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={openPlans}
              className="rounded-full bg-primary px-8 py-3 text-[10px] font-black uppercase tracking-widest text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:bg-secondary hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] active:scale-95"
            >
              Ver planos
            </button>
          </div>

          <button className="text-foreground md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container mx-auto flex flex-col gap-1 px-6 py-6">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="rounded-lg px-4 py-3 text-left text-muted-foreground transition-all duration-300 hover:bg-muted/50 hover:text-foreground"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={openPlans}
                className="btn-premium mt-3 rounded-lg bg-primary px-5 py-3.5 text-sm text-primary-foreground"
              >
                Ver planos
              </button>
            </div>
          </div>
        )}
      </nav>

      <PlansModal open={plansOpen} onClose={() => setPlansOpen(false)} />
    </>
  );
};

export default Navbar;
