import Hero from "@/components/sections/Hero";
import Especialidades from "@/components/sections/Especialidades";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Servicos from "@/components/sections/Servicos";
import Sobre from "@/components/sections/Sobre";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Especialidades />
        <ComoFunciona />
        <Servicos />
        <Sobre />
      </main>
    </>
  );
}
