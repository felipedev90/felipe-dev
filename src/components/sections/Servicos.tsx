import { Check, X, MoveRight } from "lucide-react";
import { PRICING_CONTENT, CONTACT } from "@/lib/constants";
import Container from "../ui/Container";
import Link from "next/link";

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="py-10 md:py-15 lg:py-20 bg-linear-to-t from-secondary/30 to-transparent w-full"
    >
      <Container>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <div className="max-w-2xl m-auto border opacity-5 mb-12" />
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {PRICING_CONTENT.title}
          </h2>
          <p className="text-muted mt-4">{PRICING_CONTENT.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_CONTENT.plans.map((plan) => {
            const whatsappMessage = `Olá Felipe, estou interessado no pacote ${plan.name}, podemos conversar?`;
            const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col p-2 md:p-4 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white border-secondary shadow-2xl md:scale-105 z-10"
                    : "bg-white border-white/10 shadow-lg"
                }`}
              >
                {/* LABEL MAIS VENDIDO */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-secondary text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      Mais Vendido
                    </span>
                  </div>
                )}

                {/* Cabeçalho do Card */}
                <div className="mb-2 md:mb-8">
                  <h3 className="text-xl font-bold uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <p className="text-tertiary text-sm font-mono">
                    {plan.description}
                  </p>
                </div>

                {/* EXIBIÇÃO DO PREÇO */}
                <div className="flex flex-col mb-2 min-h-22.5 justify-center">
                  {plan.oldPrice && (
                    <span className="text-md text-muted line-through decoration-red-500/50">
                      De R$ {plan.oldPrice}
                    </span>
                  )}

                  <div className="flex md:flex-wrap md:items-center md:justify-center md:mb-4 items-baseline gap-1">
                    {plan.oldPrice && (
                      <>
                        <span className="text-xs font-bold uppercase text-muted mr-1">
                          A partir de
                        </span>
                        <span className="text-sm font-semibold text-muted">
                          R$
                        </span>
                      </>
                    )}
                    <span
                      className={
                        plan.oldPrice
                          ? "text-4xl font-black text-on-surface"
                          : "text-2xl font-black text-muted"
                      }
                    >
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Lista de Features */}
                <ul className="space-y-2 mb-2 flex-1">
                  {plan.features
                    .filter((feature) => feature.included)
                    .map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-start gap-3 text-sm"
                      >
                        {feature.included ? (
                          <Check
                            size={18}
                            className="text-green-500 shrink-0"
                          />
                        ) : (
                          <X size={18} className="text-red-500 shrink-0" />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-on-surface"
                              : "text-muted line-through"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                </ul>

                {/* Rodapé e Botão */}
                <div className="mt-auto pt-2 border-t border-white/5">
                  <p className="text-[10px] text-muted text-center mb-4 font-heading  uppercase tracking-widest">
                    {plan.duration}
                  </p>
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className={`w-full flex flex-wrap items-center justify-center gap-2 py-4 md:px-2 md:text-center md:text-sm rounded-xl font-black uppercase tracking-tighter transition-all hover:scale-[1.02] active:scale-95 ${
                      plan.highlight
                        ? "bg-secondary text-black hover:bg-secondary/80"
                        : "bg-white text-black border border-secondary"
                    }`}
                  >
                    Eu quero o plano {plan.name}
                    <MoveRight size={20} className="hidden lg:block" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
