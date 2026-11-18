"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "./icons";
import Magnetic from "./Magnetic";
import TextRoll from "./TextRoll";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "STACK", href: "#skills" },
  { name: "CLIENT DEV", href: "#business-dev" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "BLOG", href: "#blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section tracking for active pill
      const sections = ["home", "about", "skills", "business-dev", "experience", "projects", "blog", "connect"];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* Osmo Supply Floating Glass Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? "py-2.5 md:py-3.5" : "py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <nav
            className={`w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-[#111216]/90 backdrop-blur-xl border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.45)]"
                : "bg-[#14151a]/60 backdrop-blur-md border border-white/5 shadow-lg"
            }`}
          >
            {/* Logo / Brand with live indicator */}
            <Magnetic strength={0.2}>
              <a
                href="#home"
                className="flex items-center gap-2.5 group cursor-pointer"
                aria-label="Faiz Ur Rehman - Home"
              >
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_8px_#00f541]" />
                </div>
                <div className="heading-font text-xl sm:text-2xl tracking-wider italic lowercase select-none">
                  <span className="text-primary group-hover:drop-shadow-[0_0_10px_rgba(0,245,65,0.6)] transition-all">
                    faiz
                  </span>
                  <span className="text-foreground">urrehman</span>
                </div>
              </a>
            </Magnetic>

            {/* Desktop Navigation Links */}
            <div
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1 rounded-full bg-black/25 border border-white/5"
              onMouseLeave={() => setHoveredNav(null)}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                const isHovered = hoveredNav === item.name;

                return (
                  <Magnetic key={item.name} strength={0.15}>
                    <a
                      href={item.href}
                      onMouseEnter={() => setHoveredNav(item.name)}
                      className={`relative px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-colors duration-200 select-none ${
                        isActive ? "text-primary" : "text-muted hover:text-white"
                      }`}
                    >
                      {/* Active / Hover sliding background pill */}
                      {isHovered && (
                        <motion.span
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 rounded-full bg-white/10 -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {isActive && !isHovered && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_#00f541]" />
                      )}
                      <TextRoll activeClassName="text-primary" isHovered={isHovered}>
                        {item.name}
                      </TextRoll>
                    </a>
                  </Magnetic>
                );
              })}
            </div>

            {/* Right Action: Magnetic CTA & Social Glass Icons */}
            <div className="hidden md:flex items-center gap-2 sm:gap-3">
              {/* Connect Button */}
              <Magnetic strength={0.25}>
                <a
                  href="#connect"
                  className="relative group overflow-hidden px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(0,245,65,0.15)] hover:shadow-[0_0_25px_rgba(0,245,65,0.5)] whitespace-nowrap flex items-center gap-1.5"
                >
                  <TextRoll activeClassName="text-black">CONNECT</TextRoll>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Magnetic>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-1.5 pl-1 border-l border-white/10">
                <Magnetic strength={0.3}>
                  <a
                    href="https://github.com/faizurrehman39804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <Github size={17} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a
                    href="https://www.linkedin.com/in/faiz-ur-r-2127193a2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={17} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a
                    href="mailto:faizurrehman39804@gmail.com"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-sm"
                    aria-label="Email Faiz"
                  >
                    <Mail size={17} />
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#connect"
                className="text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10"
              >
                Connect
              </a>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Osmo Style Mobile Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0e0f12]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-28 lg:hidden"
          >
            {/* Background geometric accents */}
            <div className="absolute top-1/4 right-5 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-5 w-72 h-72 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-primary/70 mb-4 font-mono">
                // Navigation
              </p>
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block heading-font text-3xl sm:text-4xl text-muted hover:text-primary transition-colors tracking-wide py-1"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom Contact & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="pt-6 border-t border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted">Get in touch</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/faizurrehman39804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/faiz-ur-r-2127193a2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:faizurrehman39804@gmail.com"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary"
                    aria-label="Email Faiz"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <a
                href="#connect"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-2xl bg-primary text-black font-bold uppercase tracking-widest text-center block shadow-[0_0_25px_rgba(0,245,65,0.4)]"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
