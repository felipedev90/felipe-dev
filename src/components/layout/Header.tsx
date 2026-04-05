import { CONTACT, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      {/* Título do Header */}
      <Link href="/">{CONTACT.name}</Link>

      {/* Navegação do Header */}
      <nav aria-label="Navegação Principal">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button className="md:hidden">Menu</button>
    </header>
  );
}
