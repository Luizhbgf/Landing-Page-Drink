"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const EVENTS_IMAGES = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E8k1T8RC2OAdQ4NjWXYLUVSNKf9qi6.png",
    alt: "Drink em evento",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7cqfDAvCVCSfS8z86tvU9lUpaAEc91.png",
    alt: "Drink tropical",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zX5ObDLu1HDNaKJZ8lsjgMx1rEwe69.png",
    alt: "Drink especial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yZIOEfeF3f3lGhu9CvwpbDjZHieMW4.png",
    alt: "Drink classico",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function EventsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#0A0A0A] py-24 md:py-32"
    >
      {/* Header */}
      <div className="mx-auto mb-16 max-w-7xl px-6 md:mb-20 md:px-12">
        <motion.span
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 block text-center text-[11px] font-semibold tracking-[0.5em] uppercase text-[#A61C1C]"
        >
          Nossos Eventos
        </motion.span>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="text-center font-serif text-4xl font-bold tracking-tight text-white md:text-6xl"
        >
          Momentos Especiais
        </motion.h2>
      </div>

      {/* Horizontal scrolling images - Row 1 */}
      <motion.div
        style={{ x: x1 }}
        className="mb-4 flex gap-4"
      >
        {[...EVENTS_IMAGES, ...EVENTS_IMAGES].map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] w-[300px] flex-shrink-0 overflow-hidden md:w-[400px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        ))}
      </motion.div>

      {/* Horizontal scrolling images - Row 2 (opposite direction) */}
      <motion.div
        style={{ x: x2 }}
        className="flex gap-4"
      >
        {[...EVENTS_IMAGES.reverse(), ...EVENTS_IMAGES].map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] w-[300px] flex-shrink-0 overflow-hidden md:w-[400px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        ))}
      </motion.div>

      {/* Testimonial */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="mx-auto mt-16 max-w-3xl px-6 text-center md:mt-24 md:px-12"
      >
        <svg
          className="mx-auto mb-6 h-10 w-10 text-[#A61C1C]/30"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        <p className="mb-8 font-serif text-xl leading-relaxed text-white/70 md:text-2xl">
          A Freedom Drinks transformou nossa formatura em uma experiencia inesquecivel. 
          Os drinks estavam impecaveis e a equipe foi extremamente profissional.
        </p>
        
        <div>
          <p className="font-semibold text-white">Maria Clara</p>
          <p className="text-sm text-white/40">Formatura de Medicina - UFMG</p>
        </div>
      </motion.div>
    </section>
  );
}
