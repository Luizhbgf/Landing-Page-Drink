"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const DRINKS = [
  {
    name: "Sense Red",
    description: "Vodka, licor de frutas vermelhas, espuma de laranja",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K8SQHNniySQT2D84s4cMMl9B1PeMDy.png",
  },
  {
    name: "Mia",
    description: "Rum, maracuja, espuma de baunilha",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LXkAV3MnwH4hlOpKe8OFaycgz5Ggk3.png",
  },
  {
    name: "Villans",
    description: "Frutasa, manjericão, gin e espuma de baunilha",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7cqfDAvCVCSfS8z86tvU9lUpaAEc91.png",
  },
  {
    name: "Passione",
    description: "Vodka, curacao blue, espuma de gengibre",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KyoONbCGQwoqYjfQ5pwxITERGlH7j7.png",
  },
  {
    name: "One Night",
    description: "Cachaca, maracuja, vinho tinto",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E8k1T8RC2OAdQ4NjWXYLUVSNKf9qi6.png",
  },
  {
    name: "La Dolce Vita",
    description: "Vodka, frutas vermelhas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9NPnafO1KaH2555TKUdJCrKCOaaBUx.png",
  },
  {
    name: "Free Beach",
    description: "Vodka, Frutas Amarelas, espuma de laranja",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vPr3KDrbIDJ6cqQNFoUkzi31r16Ne3.png",
  },
  {
    name: "War",
    description: "Maracuja, Whisky, Tangerina, Casmpari",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zX5ObDLu1HDNaKJZ8lsjgMx1rEwe69.png",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function DrinkCard({ drink, index }: { drink: typeof DRINKS[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      {...fadeUp}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-[#0F0F0F]"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={drink.image}
          alt={drink.name}
          fill
          className="object-cover transition-all duration-700"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="mb-2 font-serif text-xl font-semibold text-white md:text-2xl">
            {drink.name}
          </h3>
          <motion.p
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm font-light text-white/70"
          >
            {drink.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Hover border effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 border-2 border-[#A61C1C] pointer-events-none"
      />
    </motion.div>
  );
}

export default function DrinksGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      id="drinks"
      className="relative overflow-hidden bg-[#0A0A0A] px-6 py-24 md:px-12 md:py-32"
    >
      {/* Background accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#A61C1C] blur-[150px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#A61C1C] blur-[120px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.span
            {...fadeUp}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-4 block text-[11px] font-semibold tracking-[0.5em] uppercase text-[#A61C1C]"
          >
            Nossos Drinks
          </motion.span>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="mb-6 font-serif text-4xl font-bold tracking-tight text-white md:text-6xl"
          >
            Drinks Autorais
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-white/50 md:text-lg"
          >
            Cada drink e uma obra de arte. Criados com ingredientes selecionados 
            e tecnicas exclusivas para tornar seu evento inesquecivel.
          </motion.p>
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {DRINKS.map((drink, index) => (
            <DrinkCard key={drink.name} drink={drink} index={index} />
          ))}
        </div>

        {/* View more link */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://1link.pro/freedomdrinks?p=1707007361046u-19119/dinks-autorais"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm font-medium tracking-[0.2em] uppercase text-white/50 transition-colors duration-500 hover:text-white"
          >
            Ver cardapio completo
            <svg
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
