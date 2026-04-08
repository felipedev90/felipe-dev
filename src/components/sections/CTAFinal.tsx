import { CONTACT } from "@/lib/constants";
import Link from "next/link";
import { WhatsappIcon } from "../ui/WhatsAppIcon";

export default function CTAFinal() {
  return (
    <section className="bg-black text-foreground py-12 border-t-2 border-secondary">
      <div className="container flex flex-col items-center justify-center m-auto p-4 gap-10 lg:gap-12">
        <div>
          <h2 className="text-4xl text-center  md:text-6xl font-heading uppercase mb-6 ">
            Vamos trabalhar juntos?
          </h2>
          <p className="md:text-lg text-center mb-6">
            Entre em contato comigo para discutir seu projeto e como posso
            ajudar a torná-lo realidade.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Link
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-secondary text-lg px-6 py-4 text-white tracking-widest border border-foreground  rounded font-mono uppercase  hover:scale-105 active:scale-95 transition-all "
          >
            Orçamento
            <WhatsappIcon className="w-5 h-5 ml-6 mb-1 inline-block" />
          </Link>
        </div>
      </div>
    </section>
  );
}
