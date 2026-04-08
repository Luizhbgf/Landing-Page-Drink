"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "The Sundeck",
    description:
      "Endless sky. Endless sea. The upper sundeck is your stage -- lounge, dine, or simply disappear into the horizon.",
    number: "01",
  },
  {
    title: "The Cabins",
    description:
      "Five private suites, each designed like a five-star retreat at sea. Natural materials and floor-to-ceiling light.",
    number: "02",
  },
  {
    title: "The Crew",
    description:
      "A dedicated crew of eight ensures every detail is attended to before you even notice. Always one step ahead.",
    number: "03",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#0D1318] px-6 py-32 md:px-12 md:py-48"
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.span
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 block text-[11px] font-medium tracking-[0.5em] uppercase text-white/30"
        >
          The Experience
        </motion.span>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mb-24 text-4xl font-semibold tracking-tight text-white md:mb-32 md:text-6xl"
        >
          Life Aboard
        </motion.h2>

        <div className="grid gap-0 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeUp}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.15 * (i + 1),
              }}
              className="group relative border-t border-white/[0.06] py-10 md:border-l md:border-t-0 md:px-10 md:py-0 md:first:border-l-0 md:first:pl-0"
            >
              <span className="mb-6 block text-[10px] font-bold tracking-[0.3em] text-white/15">
                {feature.number}
              </span>
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-white">
                {feature.title}
              </h3>
              <p className="text-sm font-normal leading-relaxed text-white/45">
                {feature.description}
              </p>
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-white/20 transition-all duration-700 group-hover:w-full md:bottom-auto md:left-0 md:top-0 md:h-0 md:w-px group-hover:md:h-full group-hover:md:w-px" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
