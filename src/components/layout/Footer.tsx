import { CONTACT } from "@/lib/constants";
import { WhatsappIcon } from "../ui/WhatsAppIcon";
import { LinkedinIcon } from "../ui/LinkedinIcon";
import { GithubIcon } from "../ui/GithubIcon";
import Container from "../ui/Container";
import { BookUser, MapPin, Mail } from "lucide-react"; // Importei MapPin e Mail

export default function Footer() {
  return (
    <footer className="text-background border-t-2 border-secondary py-6">
      <Container>
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center justify-center">
          {/* COLUNA 1: Bio */}
          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-2">
            <p className="font-bold font-mono">{`${new Date().getFullYear()} • ${CONTACT.name}`}</p>
            <p className="font-mono text-muted text-md mb-4">
              Desenvolvedor Web
            </p>
            <p className="font-mono text-sm opacity-70">
              Todos os direitos reservados.
            </p>
          </div>

          {/* DIVISOR 1 */}
          <div className="hidden md:flex md:col-span-1 justify-center">
            <div className="w-px bg-secondary/50 h-48"></div>
          </div>

          {/* COLUNA 2: Social/Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 w-full">
            <div className="flex flex-col items-center gap-4 py-2">
              <WhatsappIcon className="w-5 h-5" />
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted font-heading tracking-widest uppercase hover:text-secondary transition-colors"
              >
                Orçamentos
              </a>
            </div>
            <div className="flex flex-col items-center gap-4 py-2">
              <BookUser className="w-5 h-5" />
              <a
                href={CONTACT.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted font-heading tracking-widest uppercase hover:text-secondary transition-colors"
              >
                Portfólio
              </a>
            </div>
            <div className="flex flex-col items-center gap-4 py-2">
              <LinkedinIcon className="w-5 h-5" />
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted font-heading tracking-widest uppercase hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex flex-col items-center gap-4 py-2">
              <GithubIcon className="w-5 h-5" />
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted font-heading tracking-widest uppercase hover:text-secondary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* DIVISOR 2  */}
          <div className="hidden md:flex md:col-span-1 justify-center">
            <div className="w-px bg-secondary/50 h-48"></div>
          </div>

          {/* COLUNA 3 */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start gap-8 w-full">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2 text-secondary">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-mono tracking-widest uppercase">
                  Localização
                </span>
              </div>
              <p className="text-sm text-muted font-medium">Jundiaí / SP</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2 text-secondary">
                <Mail className="w-5 h-5" />
                <span className="text-xs font-mono tracking-widest uppercase">
                  E-mail
                </span>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-muted hover:text-secondary transition-colors break-all"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* RODAPÉ INFERIOR */}
      <div className="text-center pt-6 md:pt-5 lg:pt-8 px-10 md:p-2 border-t border-secondary text-[10px] tracking-[0.2em] text-on-surface/30 uppercase">
        © {new Date().getFullYear()} Criado e desenvolvido por{" "}
        <strong>
          <a
            href="https://felipe-silva90-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-container transition-colors"
          >
            Felipe Augusto
          </a>
        </strong>{" "}
        🍃
      </div>
    </footer>
  );
}
