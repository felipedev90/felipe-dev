import Container from "../ui/Container";
import Image from "next/image";
import { about_content } from "@/data/about";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-10 md:py-15 lg:py-20 bg-linear-to-b from-secondary/30 to-transparent w-full"
    >
      <Container>
        <div className="text-center mb-16">
          <div className="max-w-2xl m-auto border opacity-5 mb-12" />
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {about_content.title}
          </h2>
          <p className="text-muted mt-4">{about_content.subtitle}</p>
        </div>
        <div className="w-full mx-auto md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="relative z-10 w-full aspect-square border-1-8 border-secondary overflow-hidden">
              <Image
                src={about_content.image}
                alt="Foto do desenvolvedor"
                fill
                quality={75}
                className="object-cover lg:object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="rounded-tl-full absolute -bottom-8 -right-2 md:-bottom-6 md:-right-6 p-4 md:p-8 z-20 bg-linear-to-br from-secondary/80 to-secondary/50 backdrop-blur-sm shadow-2xl">
              <span className="block font-heading text-2xl md:text-5xl font-black text-on-secondary leading-none text-end">
                100%
              </span>
              <span className="block font-heading text-sm font-bold uppercase tracking-widest text-on-secondary mt-1">
                de Clientes satisfeitos
              </span>
            </div>
          </div>

          <div className="space-y-6 text-lg text-black/60  font-mono leading-relaxed pt-4 md:pt-0">
            {about_content.content.split("\n").map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
