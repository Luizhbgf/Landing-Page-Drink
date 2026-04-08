"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    title: "Formaturas",
    description:
      "Celebre essa conquista com drinks exclusivos. Nossa equipe cria um cardapio personalizado para marcar esse momento especial.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    number: "01",
  },
  {
    title: "Aniversarios",
    description:
      "Desde festas intimistas ate grandes celebracoes. Drinks criativos que surpreendem seus convidados e tornam a data memoravel.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    number: "02",
  },
  {
    title: "Casamentos",
    description:
      "O brinde perfeito para o dia mais especial. Elegancia e sofisticacao em cada drink servido aos seus convidados.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    number: "03",
  },
  {
    title: "Corporativos",
    description:
      "Impressione clientes e colaboradores com um servico premium. Eventos de lancamento, confraternizacoes e celebracoes empresariais.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    number: "04",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative bg-[#0F0F0F] px-6 py-24 md:px-12 md:py-32"
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A61C1C]/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 md:mb-24 md:flex md:items-end md:justify-between">
          <div>
            <motion.span
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-4 block text-[11px] font-semibold tracking-[0.5em] uppercase text-[#A61C1C]"
            >
              Nossos Servicos
            </motion.span>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className="font-serif text-4xl font-bold tracking-tight text-white md:text-6xl"
            >
              Para Cada Ocasiao
            </motion.h2>
          </div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/50 md:mt-0 md:text-right"
          >
            Mais de 25 anos de experiencia criando momentos unicos. 
            Cada evento e tratado com dedicacao exclusiva.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeUp}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1 * (i + 1),
              }}
              className="group relative border-t border-white/[0.08] py-10 md:border-l md:border-t-0 md:px-8 md:py-12 md:first:border-l-0 md:first:pl-0"
            >
              {/* Number */}
              <span className="mb-6 block text-[10px] font-bold tracking-[0.3em] text-[#A61C1C]/40">
                {service.number}
              </span>

              {/* Icon */}
              <div className="mb-6 text-white/30 transition-colors duration-500 group-hover:text-[#A61C1C]">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 font-serif text-xl font-semibold tracking-tight text-white md:text-2xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed text-white/45">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#A61C1C]/50 transition-all duration-700 group-hover:w-full md:bottom-auto md:left-0 md:top-0 md:h-0 md:w-px group-hover:md:h-full group-hover:md:w-px" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
