"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function CinematicIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0.4, 1]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, that's okay
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Fixed video container */}
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 z-40 h-screen w-full overflow-hidden"
      >
        {/* Video background */}
        <motion.div style={{ scale }} className="absolute inset-0 h-full w-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            className="h-full w-full object-cover"
          >
            <source src="/videos/intro-cinematic.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Dark overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black/40"
        />

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/images/logo-freedom.png"
              alt="Freedom Drinks"
              width={200}
              height={100}
              className="h-auto w-40 md:w-52"
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-4 text-center font-serif text-4xl font-light tracking-wider text-white md:text-6xl lg:text-7xl"
          >
            <span className="block">A Arte de</span>
            <span className="mt-2 block text-primary">Celebrar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
            className="mb-12 max-w-xl text-center text-lg text-white/80 md:text-xl"
          >
            Drinks autorais que transformam seu evento em uma experiência inesquecível
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Role para descobrir
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative corners */}
        <div className="absolute left-8 top-8 h-16 w-16 border-l-2 border-t-2 border-white/20" />
        <div className="absolute right-8 top-8 h-16 w-16 border-r-2 border-t-2 border-white/20" />
        <div className="absolute bottom-8 left-8 h-16 w-16 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-8 right-8 h-16 w-16 border-b-2 border-r-2 border-white/20" />
      </motion.div>

      {/* Spacer to allow scrolling past the intro */}
      <div className="h-screen" />
    </div>
  );
}
