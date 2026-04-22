export const WHATSAPP_PHONE = "5534984007634";

export const planIncludedFeatures = [
  "Suporte continuo no WhatsApp",
  "Lista de substituicao de alimentos",
  "Contato direto com o Zavi Team",
];

export const planGroups = [
  {
    id: "treino",
    title: "Treino",
    eyebrow: "Direcao de treino",
    description: "Para quem quer um protocolo certeiro, com execucao orientada e progressao real.",
    accent: "from-white/[0.08] via-primary/[0.16] to-transparent",
    plans: [
      { name: "Mensal", price: "R$150,00", duration: "30 dias", highlight: false },
      { name: "Bimestral", price: "R$280,00", duration: "60 dias", highlight: false },
      { name: "Trimestral", price: "R$390,00", duration: "90 dias", highlight: true },
    ],
  },
  {
    id: "dieta",
    title: "Dieta",
    eyebrow: "Estrategia alimentar",
    description: "Para alinhar alimentacao ao seu objetivo com mais constancia, clareza e ajuste pratico.",
    accent: "from-primary/[0.08] via-white/[0.05] to-transparent",
    plans: [
      { name: "Mensal", price: "R$100,00", duration: "30 dias", highlight: false },
      { name: "Bimestral", price: "R$190,00", duration: "60 dias", highlight: false },
      { name: "Trimestral", price: "R$270,00", duration: "90 dias", highlight: false },
    ],
  },
  {
    id: "treino-dieta",
    title: "Treino + Dieta",
    eyebrow: "Acompanhamento completo",
    description: "A opcao mais completa para acelerar resultado com treino, alimentacao e ajuste no mesmo processo.",
    accent: "from-primary/[0.18] via-primary/[0.08] to-transparent",
    featured: true,
    plans: [
      { name: "Mensal", price: "R$200,00", duration: "30 dias", highlight: false },
      { name: "Bimestral", price: "R$380,00", duration: "60 dias", highlight: true },
      { name: "Trimestral", price: "R$550,00", duration: "90 dias", highlight: false },
    ],
  },
] as const;

export const buildPlanWhatsappUrl = (groupTitle: string, planName: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    `Oie! Fiquei interessado no plano ${groupTitle} - ${planName} e desejo mais informacoes sobre ele.`
  )}`;
