import type { FaqItem } from "@/types";

export const WHATSAPP_URL = "https://wa.me/5511975059454";

export const faq: FaqItem[] = [
  {
    id: "acompanhamento",
    question: "E se eu não gostar do resultado?",
    answer:
      "Você acompanha o andamento e pode sugerir ajustes antes da entrega. As 2 rodadas de revisão existem justamente para garantir que o resultado final seja o que você esperava.",
  },
  {
    id: "conteudo",
    question: "Você cria o conteúdo do site?",
    answer:
      "Não. Os textos, fotos e informações do negócio são fornecidos pelo cliente. Posso te orientar sobre o que preparar, mas a produção doconteúdo não está inclusa no serviço",
  },
  {
    id: "google",
    question: "O site vai aparecer no Google?",
    answer:
      "Sim. Todo site que desenvolvo inclui SEO técnico: metadados, Schema.org e sitemap. Isso aumenta as chances de aparecer nas buscas locais. O posicionamento depende também do tempo e da concorrência do seu segmento",
  },
  {
    id: "entrega",
    question:
      "E se eu precisar atualizar o conteúdo do site depois da entrega?",
    answer:
      "Alterações em textos, fotos e informações após a entrega são cobradas à parte. Me chama quando precisar e passamos um orçamento rápido para o ajuste",
  },
  {
    id: "manutencao",
    question: "Você oferece suporte e manutenção após a entrega?",
    answer:
      "Sim, ofereço 30 dias de suporte gratuito após a entrega. Planos de manutenção mensal também estão disponíveis.",
  },
  {
    id: "pagamento",
    question: "Como funciona o pagamento?",
    answer:
      "Trabalho com um sistema de pagamento dividido: 50% no início do projeto e 50% na entrega, ou 25% na assinatura do contrato, 25% na aprovação do projeto e 50% na entrega final. Parcelamento via Mercado Pago também é possível. Para projetos maiores, podemos negociar um cronograma de pagamentos.",
    cta: {
      label:
        "Entre em contato para discutir as opções de pagamento e encontrar a melhor solução para o seu projeto",
      href: WHATSAPP_URL,
    },
  },
];
