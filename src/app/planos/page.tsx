import Servicos from "@/components/sections/Servicos";
import Link from "next/link";

export default function PlanosPage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <Link
          href="/"
          className="text-sm text-muted mt-12 lg:mt-24 inline-block"
        >
          &larr; Voltar para Home
        </Link>
        <Servicos />
      </div>
    </main>
  );
}
