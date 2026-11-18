import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import BusinessDev from "@/components/BusinessDev";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import CodeConnect from "@/components/CodeConnect";
import StarBackground from "@/components/StarBackground";
import CustomCursor from "@/components/CustomCursor";
import Marquee from "@/components/Marquee";
import Magnetic from "@/components/Magnetic";
import TextRoll from "@/components/TextRoll";

export default function App() {
  const heroCardRef = useRef<HTMLDivElement>(null);
  const [heroCardMouse, setHeroCardMouse] = useState({ x: 0, y: 0 });
  const [heroCardHovered, setHeroCardHovered] = useState(false);

  const handleHeroCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    setHeroCardMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="text-foreground selection:bg-primary/30 relative min-h-screen bg-[#111216] overflow-hidden">
      {/* Osmo Interactive Fluid Follower Cursor */}
      <CustomCursor />

      {/* Twinkling Star Canvas Background */}
      <StarBackground />

      {/* Floating Glass Navbar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[88vh] flex items-center relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="flex-1 relative">
                {/* Status chip */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_#00f541]" />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted">
                    Full-Stack Engineer • Available for Hire
                  </span>
                </motion.div>

                {/* Massive Osmo Kinetic Heading with semantic H1 for Top SEO Ranking */}
                <h1
                  className="leading-[0.88] tracking-tight heading-font select-none"
                  style={{ fontSize: "clamp(3.5rem, 16vw, 11rem)" }}
                  aria-label="Faiz Ur Rehman — Full-Stack Software Developer"
                >
                  <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <span className="text-primary inline-block drop-shadow-[0_0_35px_rgba(0,245,65,0.25)]">
                      SOFTWARE
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <span className="text-foreground inline-block ml-2 md:ml-6 hover:text-white transition-colors">
                      DEVELOPER
                    </span>
                  </motion.div>
                </h1>

                {/* Animated Interactive SVG Radar Graphic */}
                <div className="hidden lg:block absolute right-[-5%] top-[-10%] pointer-events-none opacity-40 hover:opacity-80 transition-opacity">
                  <svg width="380" height="380" viewBox="0 0 400 400" fill="none">
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      stroke="#00f541"
                      strokeWidth="1"
                      strokeDasharray="10 10"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 200 200"
                        to="360 200 200"
                        dur="60s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="200"
                      cy="200"
                      r="120"
                      stroke="#00f541"
                      strokeWidth="0.5"
                      strokeDasharray="5 5"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360 200 200"
                        to="0 200 200"
                        dur="45s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="200" cy="200" r="60" stroke="#00d4f5" strokeWidth="0.5">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 200 200"
                        to="360 200 200"
                        dur="30s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <line x1="20" y1="200" x2="380" y2="200" stroke="#00f541" strokeWidth="0.3" />
                    <line x1="200" y1="20" x2="200" y2="380" stroke="#00f541" strokeWidth="0.3" />
                    <circle cx="200" cy="200" r="4" fill="#00f541" />
                    <circle cx="320" cy="200" r="3" fill="#00d4f5" />
                    <circle cx="80" cy="200" r="3" fill="#00d4f5" />
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8 md:mt-10 max-w-[560px] relative z-10"
                >
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                    Hi! I'm <span className="text-foreground font-semibold">Faiz Ur Rehman</span>. I build end-to-end full-stack applications with Next.js, MERN stack, and high-performance APIs, augmented with cutting-edge AI workflows and Awwwards-inspired fluid motion.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Magnetic strength={0.3}>
                      <a
                        href="#connect"
                        className="inline-flex items-center gap-2.5 bg-[#00f541] text-[#000000] px-7 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,245,65,0.5)] transition-all shadow-lg"
                      >
                        <TextRoll activeClassName="text-black">LET'S TALK</TextRoll>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </Magnetic>

                    <Magnetic strength={0.2}>
                      <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 hover:border-primary/50 text-sm font-semibold tracking-wider uppercase text-white hover:text-primary transition-all backdrop-blur-sm"
                      >
                        <TextRoll activeClassName="text-primary">EXPLORE WORK</TextRoll>
                      </a>
                    </Magnetic>
                  </div>
                </motion.div>
              </div>

              {/* Stats Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex lg:flex-col gap-6 sm:gap-8 lg:gap-10 lg:items-end mt-8 lg:mt-0 relative z-10"
              >
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left lg:text-right min-w-[130px] hover:border-primary/40 transition-colors">
                  <h5 className="heading-font text-4xl md:text-5xl text-primary leading-none">
                    1+
                  </h5>
                  <p className="text-xs uppercase font-mono tracking-wider text-muted mt-2">
                    Years Exp.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left lg:text-right min-w-[130px] hover:border-primary/40 transition-colors">
                  <h5 className="heading-font text-4xl md:text-5xl text-secondary leading-none">
                    10+
                  </h5>
                  <p className="text-xs uppercase font-mono tracking-wider text-muted mt-2">
                    GitHub Repos
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left lg:text-right min-w-[130px] hover:border-primary/40 transition-colors">
                  <h5 className="heading-font text-4xl md:text-5xl text-white leading-none">
                    100%
                  </h5>
                  <p className="text-xs uppercase font-mono tracking-wider text-muted mt-2">
                    Commitment
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OSMO KINETIC INFINITE MARQUEE */}
        <div className="my-12">
          <Marquee
            items={[
              "Full-Stack Architecture",
              "Next.js 15 & React 19",
              "Node.js & Express APIs",
              "MongoDB Data Modeling",
              "Tailwind CSS & Framer Motion",
              "Awwwards Fluid Motion",
              "AI-Augmented Development",
              "High Performance & SEO",
            ]}
            speed={30}
          />
        </div>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              className="mb-16 max-w-[850px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-px bg-primary" />
                <p className="text-primary font-mono text-xs uppercase tracking-widest">
                  // About Faiz
                </p>
              </div>
              <h2 className="heading-font text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight -skew-x-2">
                I build reliable full-stack software with solid architecture, refined UX, and code that scales.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="heading-font text-3xl md:text-4xl text-foreground mb-6">
                  Hi, I'm Faiz Ur Rehman.
                </h3>
                <div className="space-y-5 text-muted leading-relaxed text-base md:text-lg">
                  <p>
                    I'm based in Pakistan and currently in my 2nd Year of education. I work as a junior full-stack developer and care deeply about end-to-end delivery: designing performant APIs, normalized databases, fluid frontend polish, and modern architecture.
                  </p>
                  <p>
                    Day to day I use Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS to craft web experiences, along with AI-assisted tools like Claude AI and Antigravity to accelerate engineering across the stack.
                  </p>
                </div>

                {/* Quick Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div>
                    <span className="text-xs font-mono uppercase text-muted">Specialization</span>
                    <p className="font-bold text-foreground text-sm mt-1">MERN & Next.js Stack</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-muted">Availability</span>
                    <p className="font-bold text-primary text-sm mt-1">Full-Time / Freelance</p>
                  </div>
                </div>
              </motion.div>

              {/* Osmo Spotlight Portrait Card */}
              <motion.div
                ref={heroCardRef}
                onMouseMove={handleHeroCardMouseMove}
                onMouseEnter={() => setHeroCardHovered(true)}
                onMouseLeave={() => setHeroCardHovered(false)}
                className="relative w-full aspect-[4/5] max-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#16171d]/90 backdrop-blur-md shadow-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                data-cursor="FAIZ"
              >
                {/* Dynamic Cursor Spotlight Overlay */}
                <div
                  className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
                  style={{
                    opacity: heroCardHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${heroCardMouse.x}px ${heroCardMouse.y}px, rgba(0, 245, 65, 0.15), transparent 70%)`,
                  }}
                />

                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#111216] via-transparent to-transparent opacity-80" />

                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <img
                    src="/faaa.png"
                    alt="Faiz Ur Rehman"
                    className="w-full h-full object-cover rounded-2xl filter saturate-[1.05] contrast-[1.02]"
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary">
                      Faiz Ur Rehman
                    </p>
                    <p className="text-sm font-semibold text-white">Full-Stack Software Developer</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#00f541]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* REMAINING SECTIONS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-10 space-y-28 md:space-y-36">
          <Skills />
          <BusinessDev />
          <Experience />
          <Projects />
          <Blog />

          {/* Marquee Divider Before Connect */}
          <div className="py-6">
            <Marquee
              items={[
                "Ready To Build Something Great?",
                "Open For Opportunities",
                "Clean Code • Scalable Architecture",
                "Fast Response Within 24 Hours",
              ]}
              speed={28}
              direction="right"
            />
          </div>

          <CodeConnect />
        </div>
      </main>
    </div>
  );
}
