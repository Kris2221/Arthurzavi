import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5534984007634&text=Oie%21+Li+as+informa%C3%A7%C3%B5es+do+site+e+fiquei+com+uma+d%C3%BAvida.+Pode+me+ajudar%3F&type=phone_number&app_absent=0";

const WhatsAppBadge = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute flex items-center justify-center rounded-full border-[6px] border-white/20 bg-[#22c55e] text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] ${className}`}
    animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  >
    <MessageCircle className="h-1/2 w-1/2 fill-white" strokeWidth={2.5} />
  </motion.div>
);

const PhoneMockup = () => (
  <motion.div
    className="relative mx-auto h-[320px] w-[170px] md:h-[430px] md:w-[230px]"
    initial={{ opacity: 0, x: -40, rotate: -5 }}
    whileInView={{ opacity: 1, x: 0, rotate: -4 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0 rounded-[2rem] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]" />
    <div className="absolute inset-[7px] overflow-hidden rounded-[1.6rem] bg-[#e7ffd9]">
      <div className="bg-[#075e54] px-4 py-3 text-left">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Zavi Treinador</p>
        <p className="mt-1 text-sm font-bold text-white">online agora</p>
      </div>

      <div className="space-y-3 p-4 text-left">
        <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[11px] font-semibold leading-relaxed text-black/75 shadow-sm">
          Tenho duvida sobre consultoria online e personal.
        </div>
        <div className="ml-auto max-w-[86%] rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-3 py-2 text-[11px] font-semibold leading-relaxed text-black/75 shadow-sm">
          Me chama aqui que eu te explico qual plano faz mais sentido para voce.
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[11px] font-semibold leading-relaxed text-black/75 shadow-sm">
          Quero entender como funciona o acompanhamento.
        </div>
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-3 py-2 text-[11px] font-semibold leading-relaxed text-black/75 shadow-sm">
          Perfeito. Vou tirar suas duvidas e te orientar no melhor caminho.
        </div>
      </div>
    </div>

    <WhatsAppBadge className="-right-10 top-5 h-20 w-20 md:-right-16 md:top-6 md:h-32 md:w-32" />
    <WhatsAppBadge className="-bottom-3 -left-8 h-20 w-20 md:-bottom-5 md:-left-14 md:h-28 md:w-28" />
  </motion.div>
);

const CTAFinalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="cta-final" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-[2rem] border border-primary/30 bg-primary px-5 py-10 shadow-[0_35px_120px_rgba(212,175,55,0.16)] md:gap-12 md:grid-cols-[0.9fr_1.4fr] md:px-14 md:py-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.28),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent_45%)]" />
          <div className="absolute -bottom-24 right-8 h-56 w-56 rounded-full bg-black/10 blur-3xl" />

          <div className="relative hidden md:block">
            <PhoneMockup />
          </div>

          <div className="relative text-center md:text-left">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-black/55">
              atendimento direto
            </p>
            <h2 className="text-3xl font-black leading-[0.96] tracking-[-0.04em] text-black md:text-6xl">
              Mais alguma duvida?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] font-semibold leading-relaxed text-black/70 md:mx-0 md:mt-6 md:text-2xl">
              Fale com o Zavi no WhatsApp e descubra qual acompanhamento combina melhor com seu objetivo.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-3 border-2 border-white bg-black px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] md:mt-9 md:px-9 md:py-5 md:text-sm md:tracking-[0.22em]"
            >
              Entrar em contato
              <MessageCircle size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
