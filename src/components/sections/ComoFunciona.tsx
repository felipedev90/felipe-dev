import Container from "../ui/Container";
import { HOW_IT_WORKS_CONTENT } from "@/lib/constants";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {HOW_IT_WORKS_CONTENT.title}
          </h2>
          <p className="text-muted  mt-2 max-w-2xl text-sm lg:text-base">
            {HOW_IT_WORKS_CONTENT.subtitle}
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col group items-center lg:border-r last:border-r-0 border-muted pr-8 lg:pr-12 transition-transform hover:-translate-y-2"
            >
              <div className="w-10 h-10 rounded-full bg-secondary font-bold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>

              <h3 className="text-xl font-heading uppercase font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
