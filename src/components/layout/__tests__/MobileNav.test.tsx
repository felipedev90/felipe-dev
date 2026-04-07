import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MobileNav from "../MobileNav";
import { NAV_LINKS } from "@/lib/constants";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  ),
}));

describe("MobileNav", () => {
  it("renderiza o botão hamburguer", () => {
    render(<MobileNav />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("não exibe o menu de navegação inicialmente", () => {
    render(<MobileNav />);
    expect(
      screen.queryByRole("navigation", { name: "Menu mobile" }),
    ).not.toBeInTheDocument();
  });

  it("abre o menu ao clicar no botão hamburguer", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button"));

    expect(
      screen.getByRole("navigation", { name: "Menu mobile" }),
    ).toBeInTheDocument();
  });

  it("exibe todos os links de navegação quando aberto", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button"));

    for (const link of NAV_LINKS) {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    }
  });

  it("fecha o menu ao clicar no botão novamente (X)", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button")); // abre
    await user.click(screen.getByRole("button")); // fecha

    expect(
      screen.queryByRole("navigation", { name: "Menu mobile" }),
    ).not.toBeInTheDocument();
  });

  it("fecha o menu ao clicar em um link", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText(NAV_LINKS[0].label));

    expect(
      screen.queryByRole("navigation", { name: "Menu mobile" }),
    ).not.toBeInTheDocument();
  });

  it("os links apontam para os hrefs corretos", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button"));

    for (const link of NAV_LINKS) {
      expect(screen.getByText(link.label).closest("a")).toHaveAttribute(
        "href",
        link.href,
      );
    }
  });

  it("fecha o menu ao clicar fora da navegação", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByTestId("mobile-overlay"));

    expect(
      screen.queryByRole("navigation", { name: "Menu mobile" }),
    ).not.toBeInTheDocument();
  });
});
