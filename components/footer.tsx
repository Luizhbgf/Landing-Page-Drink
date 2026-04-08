"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Drinks", href: "#drinks" },
  { label: "Servicos", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/freedomdrinks/" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=5531992297310&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] px-6 py-16 md:px-12 md:py-24">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A61C1C]/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Top: brand + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <Image
              src="/images/logo-freedom.png"
              alt="Freedom Drinks"
              width={180}
              height={90}
              className="mb-4 h-auto w-40"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/40">
              Transformando eventos em experiencias inesqueciveis desde 1999. 
              Bartenders profissionais e drinks autorais.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=5531992297310&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border border-[#A61C1C]/50 px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/70 transition-all duration-500 hover:border-[#A61C1C] hover:bg-[#A61C1C] hover:text-white"
          >
            Solicitar Orcamento
          </a>
        </motion.div>

        {/* Links grid */}
        <div className="mb-12 grid gap-10 border-t border-white/[0.08] pt-12 md:grid-cols-4 md:gap-8">
          <div>
            <h3 className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-white/25">
              Navegacao
            </h3>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/45 transition-colors duration-400 hover:text-[#A61C1C]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-white/25">
              Redes Sociais
            </h3>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/45 transition-colors duration-400 hover:text-[#A61C1C]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-white/25">
              Contato
            </h3>
            <p className="mb-2 text-sm font-medium text-white/45">
              (31) 99229-7310
            </p>
            <p className="text-sm font-medium text-white/45">
              @freedomdrinks
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-white/25">
              Servicos
            </h3>
            <p className="text-sm leading-relaxed text-white/45">
              Formaturas &middot; Aniversarios
              <br />
              Casamentos &middot; Corporativos
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            {["Politica de Privacidade", "Termos de Uso"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] font-medium tracking-wider text-white/20 transition-colors duration-400 hover:text-white/50"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-[10px] font-medium tracking-[0.15em] text-white/20">
            &copy; {new Date().getFullYear()} Freedom Drinks. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
