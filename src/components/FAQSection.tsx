import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Funciona para iniciantes?", a: "Sim. O plano é adaptado ao seu nível, seja iniciante ou avançado, com orientação clara para você seguir sem ficar perdido." },
  { q: "Preciso ir à academia?", a: "O ideal é ter acesso à academia, mas também é possível adaptar o acompanhamento para home gym, dependendo da sua estrutura." },
  { q: "Tem suporte?", a: "Sim. Você tem suporte direto via WhatsApp para tirar dúvidas, ajustar rota e manter consistência no processo." },
  { q: "Como funciona a dieta?", a: "A estratégia alimentar é montada de forma prática e flexível, de acordo com seu objetivo, rotina e preferências." },
  { q: "Quanto tempo para ver resultado?", a: "Os primeiros resultados costumam aparecer entre 4 e 8 semanas quando existe consistência. O acompanhamento serve justamente para manter essa evolução." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-section opacity-40" />

      <div ref={ref} className="container relative z-10 mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-20"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary md:text-xs md:tracking-[0.25em]">
            Dúvidas
          </p>
          <h2 className="text-[2rem] text-foreground md:text-5xl">
            Perguntas <span className="text-gradient-gold">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="card-premium px-5 py-2 transition-colors duration-300 hover:border-primary/20 !border-border md:px-7"
                >
                  <AccordionTrigger className="text-left text-[14px] font-semibold text-foreground hover:no-underline md:text-[15px]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
