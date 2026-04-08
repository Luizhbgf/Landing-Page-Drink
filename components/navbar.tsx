"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Drinks", href: "#drinks" },
  { label: "Servicos", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5531992297310&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%21+Cliquei+no+link%3A+Solicite+um+or%C3%A7amento&type=phone_number&app_absent=0";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Navbar appears after scrolling past the cinematic intro (approximately 1 screen height)
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md transition-all duration-500"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <a href="#inicio" className="relative z-50">
            <Image
              src="/images/logo-freedom.png"
              alt="Freedom Drinks"
              width={120}
              height={60}
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative px-5 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 transition-colors duration-500 hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-1 left-5 right-5 h-px origin-left scale-x-0 bg-[#A61C1C] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-[#A61C1C] px-6 py-2.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-white transition-all duration-500 hover:bg-[#C62828] md:block"
          >
            Orcamento
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 8, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="block h-[2px] w-6 bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 0.6, scaleX: 1 }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-6 bg-white"
            />
            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -8, width: 24 }
                  : { rotate: 0, y: 0, width: 16 }
              }
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="block h-[2px] bg-white self-end"
              style={{ width: menuOpen ? 24 : 16 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0A0A0A]/[0.98] backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                  className="py-4 font-serif text-3xl font-light tracking-[0.15em] uppercase text-white/80 transition-colors duration-400 hover:text-[#A61C1C]"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: NAV_LINKS.length * 0.08, ease: "easeOut" }}
                className="mt-6 bg-[#A61C1C] px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase text-white"
              >
                Solicitar Orcamento
              </motion.a>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="mt-10 h-px w-16 bg-[#A61C1C]/30"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
