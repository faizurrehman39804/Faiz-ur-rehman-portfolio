import React, { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const skills = [
  { name: "Next.js 15", category: "Full-Stack Framework", color: "#ffffff", experience: "Production" },
  { name: "React.js 19", category: "Frontend Core", color: "#61dafb", experience: "Advanced" },
  { name: "TypeScript", category: "Type-Safe Language", color: "#3178c6", experience: "Daily Driver" },
  { name: "JavaScript ES6+", category: "Core Language", color: "#f7df1e", experience: "Native" },
  { name: "Node.js", category: "Backend Runtime", color: "#8cc84b", experience: "High Scale" },
  { name: "Express.js", category: "API Framework", color: "#ffffff", experience: "REST APIs" },
  { name: "MongoDB", category: "NoSQL Database", color: "#47a248", experience: "Data Modeling" },
  { name: "Tailwind CSS v4", category: "Styling & Tokens", color: "#06b6d4", experience: "Design Systems" },
  { name: "Framer Motion", category: "Fluid Animations", color: "#0055ff", experience: "Kinetic UI" },
  { name: "Socket.io", category: "Real-Time Sync", color: "#010101", experience: "WebSockets" },
  { name: "AI Agent APIs", category: "LLMs & Automation", color: "#a855f7", experience: "Claude / Gemini" },
  { name: "shadcn/ui", category: "Accessible UI", color: "#cc6699", experience: "Radix Primitives" },
  { name: "RESTful Architecture", category: "API Design", color: "#00f541", experience: "Security & DTOs" },
  { name: "Git & GitHub", category: "Version Control", color: "#f05032", experience: "Team Workflows" },
  { name: "Postman", category: "API Testing", color: "#ff6c37", experience: "Automated Tests" },
  { name: "Docker Basics", category: "Containerization", color: "#2496ed", experience: "Local Dev" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SkillCard({ skill }: { skill: (typeof skills)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#16171d]/80 p-4 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,245,65,0.15)]"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 65, 0.15), transparent 70%)`,
        }}
      />

      <div className="flex items-center gap-3.5 relative z-10">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/40 border border-white/10 group-hover:border-primary/40 transition-colors shadow-inner">
          <span
            className="text-lg font-black heading-font select-none"
            style={{ color: skill.color }}
          >
            {skill.name.charAt(0)}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-1">
            <h4 className="text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors truncate">
              {skill.name}
            </h4>
            <span className="text-[9px] font-mono uppercase text-muted/60 shrink-0">
              {skill.experience}
            </span>
          </div>
          <span className="text-[11px] text-muted font-mono uppercase tracking-wider block truncate mt-0.5">
            {skill.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-primary" />
          <p className="text-primary font-mono text-xs uppercase tracking-widest">
            // Core Arsenal & Tech Stack
          </p>
        </div>
        <h2 className="heading-font text-5xl md:text-7xl text-foreground -skew-x-3">
          TECH STACK & TOOLS
        </h2>
        <p className="text-muted text-sm md:text-base mt-2 max-w-xl">
          Modern full-stack technologies, databases, frameworks, and AI workflows leveraged to build scalable digital products.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}
