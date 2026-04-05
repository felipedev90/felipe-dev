import type { FaqItem } from "@/types";

export const faq: FaqItem[] = [
  {
    id: "prazo",
    question: "Qual é o prazo de entrega?",
    answer:
      "O prazo varia conforme o escopo do projeto. Landing pages levam cerca de 1 semana; sites institucionais, de 2 a 4 semanas.",
  },
  {
    id: "tecnologias",
    question: "Quais tecnologias você utiliza?",
    answer:
      "Trabalho principalmente com Next.js, TypeScript, Tailwind CSS e Node.js. A stack é definida de acordo com as necessidades do projeto.",
  },
  {
    id: "manutencao",
    question: "Você oferece suporte após a entrega?",
    answer:
      "Sim, ofereço 30 dias de suporte gratuito após a entrega. Planos de manutenção mensal também estão disponíveis.",
  },
  {
    id: "pagamento",
    question: "Como funciona o pagamento?",
    answer:
      "50% na assinatura do contrato e 50% na entrega final. Aceito PIX e transferência bancária.",
  },
];
