"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const DESTINATIONS = [
  { label: "Mediterranean" },
  { label: "Caribbean" },
  { label: "Indian Ocean" },
  { label: "South Pacific" },
  { label: "Norwegian Fjords" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Globe() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onCanPlay = () => setVideoReady(true);
    video.addEventListener("canplay", onCanPlay);
    video.play().catch(() => {});
    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section id="destinations" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src="/Globe Animation Prompt.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-[#0D1318]/70" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0D1318] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 inline-block text-[11px] font-medium tracking-[0.5em] uppercase text-white/30"
        >
          Global Reach
        </motion.span>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Sail Anywhere.
          <br />
          <span className="font-light text-white/40">Arrive Everywhere.</span>
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mb-12 max-w-lg text-base font-light leading-relaxed text-white/40 md:text-lg"
        >
          Yacht charters across the world{"'"}s most coveted waters. Tell us
          where you want to be, and we{"'"}ll take care of everything else.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-3"
        >
          {DESTINATIONS.map((dest, i) => (
            <motion.span
              key={dest.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="border border-white/10 px-4 py-1.5 text-[10px] font-medium tracking-[0.25em] uppercase text-white/45 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:text-white"
            >
              {dest.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.a
          {...fadeUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          href="#charter"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block border border-white/15 px-10 py-3.5 text-[10px] font-medium tracking-[0.35em] uppercase text-white/70 backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:text-white"
        >
          Plan Your Charter
        </motion.a>
      </div>
    </section>
  );
}
