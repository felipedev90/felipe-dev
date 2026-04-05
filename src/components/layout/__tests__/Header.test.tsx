import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

// MobileNav usa "use client" e useState - mock para isolar o Header
vi.mock("../MobileNav", () => ({
  default: () => <button aria-label="Abrir menu">Menu</button>,
}));

describe("Header", () => {
  it("renderiza o nome do desenvolvedor", () => {
    render(<Header />);
    expect(screen.getByText(CONTACT.name)).toBeInTheDocument();
  });

  it("o nome é um link para a página inicial", () => {
    render(<Header />);
    expect(screen.getByText(CONTACT.name).closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("renderiza o subtítulo de cargo", () => {
    render(<Header />);
    expect(screen.getByText("Desenvolvedor web")).toBeInTheDocument();
  });

  it("renderiza todos os links de navegação desktop", () => {
    render(<Header />);
    for (const link of NAV_LINKS) {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    }
  });

  it("os links de navegação apontam para os hrefs corretos", () => {
    render(<Header />);
    for (const link of NAV_LINKS) {
      expect(screen.getByText(link.label).closest("a")).toHaveAttribute(
        "href",
        link.href
      );
    }
  });

  it("renderiza o link de orçamento via WhatsApp", () => {
    render(<Header />);
    const orcamento = screen.getByText("Orçamento");
    expect(orcamento).toBeInTheDocument();
    expect(orcamento.closest("a")).toHaveAttribute(
      "href",
      `https://wa.me/${CONTACT.whatsapp}`
    );
  });

  it("renderiza o botão de menu mobile", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: "Abrir menu" })).toBeInTheDocument();
  });
});
