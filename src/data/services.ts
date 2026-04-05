import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "landing",
    name: "Landing Page",
    description: "Página de conversão focada em resultado.",
    price: "R$ 1.500",
    features: [
      { label: "Design responsivo", included: true },
      { label: "Até 5 seções", included: true },
      { label: "Formulário de contato", included: true },
      { label: "Painel administrativo", included: false },
      { label: "E-commerce", included: false },
    ],
  },
  {
    id: "site-institucional",
    name: "Site Institucional",
    description: "Site completo para sua empresa ou marca pessoal.",
    price: "R$ 3.500",
    highlighted: true,
    features: [
      { label: "Design responsivo", included: true },
      { label: "Até 10 páginas", included: true },
      { label: "Formulário de contato", included: true },
      { label: "Painel administrativo", included: true },
      { label: "E-commerce", included: false },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Loja virtual completa pronta para vender.",
    price: "R$ 7.000",
    features: [
      { label: "Design responsivo", included: true },
      { label: "Páginas ilimitadas", included: true },
      { label: "Formulário de contato", included: true },
      { label: "Painel administrativo", included: true },
      { label: "E-commerce", included: true },
    ],
  },
];
