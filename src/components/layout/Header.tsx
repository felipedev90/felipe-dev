import { CONTACT, NAV_LINKS } from "@/lib/constants";
import Container from "../ui/Container";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between bg-white ">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Título do Header */}
          <div className="flex flex-col items-start gap-0">
            <Link
              href="/"
              className="text-xl lg:text-2xl font-mono font-extrabold tracking-wide uppercase leading-none"
            >
              {CONTACT.name}
            </Link>
            <span className="text-sm text-muted tracking-widest leading-none">
              Desenvolvedor web
            </span>
          </div>

          {/* Navegação do Header */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex gap-8 items-center"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono  tracking-tight uppercase font-bold hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary px-6 py-1 rounded font-mono uppercase tracking-wide hover:scale-105 active:scale-95 transition-all"
            >
              Orçamento
            </Link>
          </nav>

          {/* Mobile menu button */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
