import Container from "../ui/Container";
import { faq } from "@/data/faq";
import FaqItem from "@/components/ui/FaqItem";

export default function Faq() {
  return (
    <section id="faq" className="py-12 md:py-24">
      <Container>
        <div className="text-center mb-16">
          <div className="max-w-2xl m-auto border opacity-5 mb-12" />
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Dúvidas Frequentes
          </h2>
        </div>
        <div className="space-y-4">
          {faq.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
