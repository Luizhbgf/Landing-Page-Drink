"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/* Animated counter for stats */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative overflow-hidden bg-[#0A0A0A] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header with image */}
        <div className="mb-16 grid items-center gap-12 md:mb-24 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <motion.div
              style={{ scale: imgScale, y: imgY }}
              className="absolute inset-0"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9NPnafO1KaH2555TKUdJCrKCOaaBUx.png"
                alt="Drink Freedom Drinks"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            
            {/* Logo overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <Image
                src="/images/logo-freedom.png"
                alt="Freedom Drinks"
                width={150}
                height={75}
                className="h-auto w-32 opacity-80"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-4 block text-[11px] font-semibold tracking-[0.5em] uppercase text-[#A61C1C]"
            >
              Nossa Historia
            </motion.span>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className="mb-8 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
            >
              Mais do que drinks.
              <br />
              <span className="text-white/40">Criamos experiencias.</span>
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="mb-6 text-base leading-relaxed text-white/60 md:text-lg"
            >
              Desde 1999, a Freedom Drinks transforma eventos em momentos inesqueciveis. 
              Nossa paixao pela arte da coquetelaria nos levou a criar drinks autorais 
              que encantam e surpreendem.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="text-base leading-relaxed text-white/60 md:text-lg"
            >
              Cada evento e unico, e por isso criamos cardapios personalizados 
              que refletem a personalidade e o estilo de cada celebracao.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-12 md:grid-cols-4"
        >
          {[
            { value: 25, suffix: "+", label: "Anos de Experiencia" },
            { value: 1000, suffix: "+", label: "Eventos Realizados" },
            { value: 50, suffix: "+", label: "Drinks Autorais" },
            { value: 100, suffix: "%", label: "Satisfacao" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-serif text-4xl font-bold tabular-nums text-white md:text-5xl">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
