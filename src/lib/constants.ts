export const CONTACT = {
  name: "Felipe Augusto",
  email: "augusto.felipedev@gmail.com",
  whatsapp: "+5511975059454",
  linkedin: "https://linkedin.com/in/felipesilva90",
  github: "https://github.com/felipedev90",
  portfolio: "https://felipe-silva90-portfolio.vercel.app/",
} as const;

export const NAV_LINKS = [
  {
    label: "Serviços",
    href: "/#servicos",
  },
  {
    label: "Projetos",
    href: "/#projetos",
  },
  {
    label: "Sobre",
    href: "/#sobre",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
] as const;

export const HERO_CONTENT = {
  title: "Você cuida do seu negócio. ",
  highlight: " Eu cuido do seu site.",
  subtitle:
    "Tenha uma vitrine digital impecável que passa a confiança que o seu trabalho merece.",
  availability: "Disponível para novos projetos",
  image: "/images/hero/hero1900p.webp",
} as const;

export const SPECIALTIES_CONTENT = {
  title: "Especialidades",
  subtitle:
    "Mais velocidade, melhor experiência e mais chances de ser encontrado.",
  image: "/images/especialidades/especialidades-bg1900.webp",
  specialties: [
    {
      id: "performance",
      title: "Sites de Alta Performance",
      description:
        "Lighthouse 90+ em todos os critérios. Seu site carrega rápido, aparece no Google e passa confiança para o cliente.",
    },
    {
      id: "responsive",
      title: "Design Responsivo",
      description:
        "Layout adaptado para celular, tablet e desktop. Mais de 80% das buscas locais acontecem pelo celular, seu site vai estar pronto.",
    },
    {
      id: "seo",
      title: "SEO Técnico Incluído",
      description:
        "Metadados, Schema.org e sitemap configurados em todo projeto. Seu negócio tem mais chances de aparecer nas buscas do Google.",
    },
  ],
} as const;

export const HOW_IT_WORKS_CONTENT = {
  title: "Como Funciona",
  subtitle: "Transparência em cada etapa do processo.",
  steps: [
    {
      title: "Briefing",
      description:
        "Você me conta tudo sobre o seu negócio: o que oferece, quem são seus clientes e como quer ser visto online. Quanto mais detalhes, melhor o resultado.",
    },
    {
      title: "Desenvolvimento",
      description:
        "Com base no briefing, desenvolvo seu site com foco em visual moderno, carregamento rápido e posicionamento no Google. Você acompanha o andamento e pode sugerir ajustes antes da entrega final",
    },
    {
      title: "Entrega",
      description:
        "Site publicado, dominio configurado e tudo funcionando. Você recebe acesso completo ao projeto e suporte para dúvidas.",
    },
  ],
} as const;
