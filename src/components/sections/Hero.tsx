import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { hero_content } from "@/data/hero";
import Link from "next/link";
import Container from "../ui/Container";
import { HeroImage, HeroText } from "./HeroAnimated";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[50dvh] py-12 lg:py-24 overflow-hidden"
    >
      <Container>
        <div className="h-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* LADO ESQUERDO: Texto (Ocupa 7 colunas no desktop) */}
          <HeroText className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
            <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
              <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1.05] text-on-surface mb-6">
                {hero_content.title} <br />
                <span className="font-heading text-transparent bg-clip-text bg-linear-to-r from-[#b9934a] via-tertiary to-[#b9934a] animate-gradient-x">
                  {hero_content.highlight}
                </span>
              </h1>
              <p className="font-sans text-lg text-muted md:text-xl text-on-surface-variant max-w-xl mb-8 leading-relaxed">
                {hero_content.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  className=" font-mono uppercase text-center md:text-start bg-secondary text-black font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-amber-400/60 transition-all hover:scale-105 "
                >
                  Solicitar Orçamento
                </Link>
                <Link
                  href="/planos"
                  className=" font-mono uppercase text-center md:text-start text-black font-semibold py-4 px-8 border border-secondary rounded-lg shadow-lg hover:bg-amber-400/60 transition-all hover:scale-105"
                >
                  Ver Planos
                </Link>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-sm text-muted">
                <p>✓ Resposta rápida</p> <p className="hidden sm:block">·</p>{" "}
                <p>✓ Orçamento personalizado</p>
              </div>
            </div>
          </HeroText>

          {/* LADO DIREITO: Imagem (Ocupa 5 colunas no desktop) */}
          <HeroImage className="block md:col-span-5 lg:col-span-6 relative h-75 md:h-125 lg:h-150">
            <div className="block md:col-span-5 lg:col-span-6 relative h-75 md:h-125 lg:h-150">
              <Image
                src={hero_content.image}
                alt={hero_content.title}
                fill
                priority
                className="object-contain object-right"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </HeroImage>
        </div>
      </Container>
    </section>
  );
}
