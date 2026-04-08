import Container from "../ui/Container";
import { specialties_content } from "@/data/specialties";
import Image from "next/image";
import { Gauge, Smartphone, Search } from "lucide-react";

const ICONS = {
  performance: Gauge,
  responsive: Smartphone,
  seo: Search,
};

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      className="relative w-full min-h-75 flex items-center overflow-hidden py-6 lg:py-12"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={specialties_content.image}
          alt="Background descritivo"
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
      </div>
      <Container className="relative z-10">
        <div className="max-w-2xl m-auto border opacity-5 mb-12" />
        <div className="flex flex-col items-center text-left  lg:mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {specialties_content.title}
          </h2>
          <p className="text-muted mt-2 max-w-2xl text-sm lg:text-base">
            {specialties_content.subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mt-2 md:mt-8">
          {specialties_content.specialties.map((speciality) => {
            const Icon = ICONS[speciality.id];

            return (
              <div
                key={speciality.title}
                className=" border border-white/20 rounded-2xl p-8 bg-white/10 backdrop-blur-md 
                 min-h-70 flex flex-col items-center justify-center  gap-2 transition-transform hover:-translate-y-2 shadow-xl"
              >
                <div className=" text-secondary">
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="font-heading text-xl font-semibold mb-2">
                  {speciality.title}
                </h3>
                <p className="text-sm text-gray-fg text-center">
                  {speciality.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
