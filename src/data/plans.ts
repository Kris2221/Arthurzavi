export const WHATSAPP_PHONE = "5534984007634";

export const planIncludedFeatures = [
  "Suporte contínuo no WhatsApp",
  "Lista de substituição de alimentos",
  "Contato direto com o Zavi Team",
];

export const planGroups = [
  {
    id: "treino",
    title: "Treino",
    eyebrow: "Direção de treino",
    description: "Para quem quer um protocolo certeiro, com execução orientada e progressão real.",
    accent: "from-white/[0.08] via-primary/[0.16] to-transparent",
    plans: [
      { name: "Mensal", duration: "30 dias", highlight: false },
      { name: "Bimestral", duration: "60 dias", highlight: false },
      { name: "Trimestral", duration: "90 dias", highlight: true },
    ],
  },
  {
    id: "dieta",
    title: "Dieta",
    eyebrow: "Estratégia alimentar",
    description: "Para alinhar alimentação ao seu objetivo com mais constância, clareza e ajuste prático.",
    accent: "from-primary/[0.08] via-white/[0.05] to-transparent",
    plans: [
      { name: "Mensal", duration: "30 dias", highlight: false },
      { name: "Bimestral", duration: "60 dias", highlight: false },
      { name: "Trimestral", duration: "90 dias", highlight: false },
    ],
  },
  {
    id: "treino-dieta",
    title: "Treino + Dieta",
    eyebrow: "Acompanhamento completo",
    description: "A opção mais completa para acelerar resultado com treino, alimentação e ajuste no mesmo processo.",
    accent: "from-primary/[0.18] via-primary/[0.08] to-transparent",
    featured: true,
    plans: [
      { name: "Mensal", duration: "30 dias", highlight: false },
      { name: "Bimestral", duration: "60 dias", highlight: true },
      { name: "Trimestral", duration: "90 dias", highlight: false },
    ],
  },
] as const;

export const buildPlanWhatsappUrl = (groupTitle: string, planName: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    `Olá! Tenho interesse no plano ${groupTitle} - ${planName} e gostaria de saber os valores e como funciona.`
  )}`;
