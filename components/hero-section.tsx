"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5531992297310&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21+Cliquei+no+link%3A+Solicite+um+or%C3%A7amento&type=phone_number&app_absent=0";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      id="inicio"
    >
      {/* Background Video/Image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K8SQHNniySQT2D84s4cMMl9B1PeMDy.png"
          alt="Drink Freedom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A0A0A]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/images/logo-freedom.png"
            alt="Freedom Drinks"
            width={200}
            height={100}
            className="h-auto w-40 md:w-52"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4 text-sm font-medium tracking-[0.4em] uppercase text-white/60 md:text-base"
        >
          Desde 1999
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mb-6 max-w-4xl font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Transformamos Momentos
          <br />
          <span className="text-[#A61C1C]">em Memorias</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-10 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg"
        >
          Bartenders profissionais para eventos exclusivos. 
          Formaturas, aniversarios, casamentos e muito mais.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden bg-[#A61C1C] px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase text-white transition-all duration-500"
          >
            <span className="relative z-10">Solicitar Orcamento</span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-[#A61C1C] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Solicitar Orcamento
            </span>
          </motion.a>
          
          <motion.a
            href="#drinks"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white/30 px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase text-white transition-all duration-500 hover:border-white hover:bg-white/10"
          >
            Ver Drinks
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[9px] font-medium tracking-[0.4em] uppercase text-white/40">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-[#A61C1C]/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
