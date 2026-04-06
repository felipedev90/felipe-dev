import Image from "next/image";
import { HERO_CONTENT, CONTACT } from "@/lib/constants";
import Link from "next/link";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[50dvh] py-12 lg:py-24 overflow-hidden"
    >
      <Container>
        <div className="h-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* LADO ESQUERDO: Texto (Ocupa 7 colunas no desktop) */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
            {/*
            <div className="flex items-center gap-3 mb-4 justify-start">
              {/* Container da bolinha 
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-secondary font-mono uppercase font-medium text-sm sm:text-base tracking-wider ">
                {HERO_CONTENT.availability}
              </span>
            </div>
            */}
            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1.05] text-on-surface mb-6">
              {HERO_CONTENT.title} <br />
              <span className="font-heading text-transparent bg-clip-text bg-linear-to-r from-secondary via-tertiary to-secondary animate-gradient-x">
                {HERO_CONTENT.highlight}
              </span>
            </h1>
            <p className="font-sans text-lg text-muted md:text-xl text-on-surface-variant max-w-xl mb-8 leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`https://wa.me/${CONTACT.whatsapp}`}
                className=" font-mono uppercase text-center md:text-start bg-secondary text-black font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-amber-400/60 transition-all hover:scale-105 "
              >
                Solicitar Orçamento
              </Link>
              <Link
                href={`https://wa.me/${CONTACT.whatsapp}`}
                className=" font-mono uppercase text-center md:text-start text-black font-semibold py-4 px-8 border border-secondary rounded-lg shadow-lg hover:bg-amber-400/60 transition-all hover:scale-105"
              >
                Ver Planos
              </Link>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6 text-sm text-muted">
              <p>✓ Sem compromisso</p> <p className="hidden sm:block">·</p>{" "}
              <p>✓ Resposta rápida</p> <p className="hidden sm:block">·</p>{" "}
              <p>✓ Orçamento personalizado</p>
            </div>
          </div>

          {/* LADO DIREITO: Imagem (Ocupa 5 colunas no desktop) */}
          <div className="block md:col-span-5 lg:col-span-6 relative h-75 md:h-125 lg:h-150">
            <Image
              src={HERO_CONTENT.image}
              alt={HERO_CONTENT.title}
              fill
              priority
              className="object-contain object-right"
              sizes="100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
