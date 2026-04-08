import Hero from "@/components/sections/Hero";
import Especialidades from "@/components/sections/Especialidades";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Servicos from "@/components/sections/Servicos";
import Sobre from "@/components/sections/Sobre";
import Faq from "@/components/sections/Faq";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Especialidades />
        <ComoFunciona />
        <Servicos />
        <Sobre />
        <Faq />
        <CTAFinal />
      </main>
    </>
  );
}
