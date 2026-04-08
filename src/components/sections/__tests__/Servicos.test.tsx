import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Servicos from "../Servicos";
import { CONTACT } from "@/lib/constants";
import { services as PRICING_CONTENT } from "@/data/services";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
    target,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
  }) => (
    <a href={href} className={className} target={target}>
      {children}
    </a>
  ),
}));

describe("Servicos", () => {
  it("renderiza o título da seção", () => {
    render(<Servicos />);
    expect(
      screen.getByRole("heading", { name: PRICING_CONTENT.title }),
    ).toBeInTheDocument();
  });

  it("renderiza o subtítulo da seção", () => {
    render(<Servicos />);
    expect(screen.getByText(PRICING_CONTENT.subtitle)).toBeInTheDocument();
  });

  it("renderiza o nome de cada plano", () => {
    render(<Servicos />);
    for (const plan of PRICING_CONTENT.plans) {
      expect(
        screen.getByRole("heading", { name: plan.name }),
      ).toBeInTheDocument();
    }
  });

  it("renderiza a descrição de cada plano", () => {
    render(<Servicos />);
    for (const plan of PRICING_CONTENT.plans) {
      expect(screen.getByText(plan.description)).toBeInTheDocument();
    }
  });

  it("renderiza o prazo de cada plano", () => {
    render(<Servicos />);
    for (const plan of PRICING_CONTENT.plans) {
      expect(screen.getByText(plan.duration)).toBeInTheDocument();
    }
  });

  it("exibe o label 'Mais Vendido' apenas no plano em destaque", () => {
    render(<Servicos />);
    const labels = screen.getAllByText("Mais Vendido");
    expect(labels).toHaveLength(1);

    const highlightedPlan = PRICING_CONTENT.plans.find((p) => p.highlight);
    expect(highlightedPlan).toBeDefined();
  });

  it("não exibe o label 'Mais Vendido' em planos sem destaque", () => {
    render(<Servicos />);
    const nonHighlightedPlans = PRICING_CONTENT.plans.filter(
      (p) => !p.highlight,
    );
    for (const plan of nonHighlightedPlans) {
      const heading = screen.getByRole("heading", { name: plan.name });
      const card = heading.closest("div[class*='relative']");
      expect(card?.textContent).not.toContain("Mais Vendido");
    }
  });

  it("exibe o preço antigo riscado quando disponível", () => {
    render(<Servicos />);
    const plansWithOldPrice = PRICING_CONTENT.plans.filter((p) => p.oldPrice);
    for (const plan of plansWithOldPrice) {
      expect(screen.getByText(`De R$ ${plan.oldPrice}`)).toBeInTheDocument();
    }
  });

  it("não exibe preço antigo em planos sem desconto", () => {
    render(<Servicos />);
    const plansWithoutOldPrice = PRICING_CONTENT.plans.filter(
      (p) => !p.oldPrice,
    );
    for (const plan of plansWithoutOldPrice) {
      expect(screen.queryByText(`De R$ ${plan.price}`)).not.toBeInTheDocument();
    }
  });

  it("renderiza apenas as features incluídas de cada plano", () => {
    render(<Servicos />);
    for (const plan of PRICING_CONTENT.plans) {
      const includedFeatures = plan.features.filter((f) => f.included);
      for (const feature of includedFeatures) {
        expect(screen.getAllByText(feature.text).length).toBeGreaterThan(0);
      }
    }
  });

  it("gera o link do WhatsApp com o nome do plano correto", () => {
    render(<Servicos />);
    for (const plan of PRICING_CONTENT.plans) {
      const expectedMessage = `Olá Felipe, estou interessado no pacote ${plan.name}, podemos conversar?`;
      const expectedHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(expectedMessage)}`;
      const button = screen.getByText(`Eu quero o plano ${plan.name}`, {
        exact: false,
      });
      expect(button.closest("a")).toHaveAttribute("href", expectedHref);
    }
  });

  it("os links do WhatsApp abrem em nova aba", () => {
    render(<Servicos />);
    for (const plan of PRICING_CONTENT.plans) {
      const button = screen.getByText(`Eu quero o plano ${plan.name}`, {
        exact: false,
      });
      expect(button.closest("a")).toHaveAttribute("target", "_blank");
    }
  });

  it("renderiza a seção com o id correto para âncora", () => {
    render(<Servicos />);
    expect(document.getElementById("servicos")).toBeInTheDocument();
  });
});
