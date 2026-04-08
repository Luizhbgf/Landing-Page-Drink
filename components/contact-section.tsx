"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5531992297310&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21+Cliquei+no+link%3A+Solicite+um+or%C3%A7amento&type=phone_number&app_absent=0";
const INSTAGRAM_LINK = "https://www.instagram.com/freedomdrinks/";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden">
      {/* Full-width image background */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vPr3KDrbIDJ6cqQNFoUkzi31r16Ne3.png"
          alt="Drink Freedom"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-12">
        <div className="grid w-full gap-16 md:grid-cols-2 md:gap-20">
          {/* Left -- copy */}
          <div className="flex flex-col justify-center">
            <motion.span
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6 block text-[11px] font-semibold tracking-[0.5em] uppercase text-[#A61C1C]"
            >
              Vamos Conversar
            </motion.span>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className="mb-8 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Seu Evento.
              <br />
              Nossa Arte.
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="mb-10 max-w-md text-base leading-relaxed text-white/50 md:text-lg"
            >
              Entre em contato conosco e vamos criar juntos uma experiencia 
              unica para seu evento. Orcamentos personalizados e atendimento exclusivo.
            </motion.p>

            {/* Contact info */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/70 transition-colors duration-500 hover:text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-[#A61C1C] group-hover:bg-[#A61C1C]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30">
                    WhatsApp
                  </span>
                  <span className="text-base font-medium">(31) 99229-7310</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/70 transition-colors duration-500 hover:text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-[#A61C1C] group-hover:bg-[#A61C1C]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30">
                    Instagram
                  </span>
                  <span className="text-base font-medium">@freedomdrinks</span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right -- CTA Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
              <h3 className="mb-4 font-serif text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Solicite seu Orcamento
              </h3>
              
              <p className="mb-8 text-sm leading-relaxed text-white/50">
                Clique no botao abaixo para falar diretamente com nossa equipe 
                pelo WhatsApp. Resposta rapida e atendimento personalizado.
              </p>

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden bg-[#A61C1C] py-5 text-sm font-bold tracking-[0.3em] uppercase text-white transition-all duration-500"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="relative z-10">Falar no WhatsApp</span>
                <div className="absolute inset-0 -translate-x-full bg-[#C62828] transition-transform duration-500 group-hover:translate-x-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </span>
              </motion.a>

              {/* Trust indicators */}
              <div className="mt-8 flex items-center justify-center gap-8 border-t border-white/[0.08] pt-8">
                {[
                  { value: "24h", label: "Resposta" },
                  { value: "100%", label: "Personalizado" },
                  { value: "25+", label: "Anos" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <span className="text-lg font-bold tabular-nums text-white">
                      {item.value}
                    </span>
                    <span className="mt-1 text-[9px] font-medium tracking-[0.2em] uppercase text-white/30">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
