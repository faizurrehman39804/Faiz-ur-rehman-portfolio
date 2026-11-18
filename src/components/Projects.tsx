import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink, Github } from "./icons";
import Magnetic from "./Magnetic";
import TextRoll from "./TextRoll";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "AI & Tools" | "Client SaaS";
  techStack: string[];
  description: string;
  highlights: string[];
  metrics: string;
  status: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  accentColor: string;
}

const projectsData: Project[] = [
  {
    id: "hotel-management",
    title: "Hotel Management System (HotelOS)",
    subtitle: "Enterprise Hospitality Operations & Property ERP",
    category: "Full-Stack",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MUI"],
    description:
      "End-to-end hotel operations and property management system designed from comprehensive Figma system architecture. Features unified guest journey tracking from reservation to check-out, single-folio billing, collision-free room reservation guardrails, real-time housekeeping lifecycle, and operational reports.",
    highlights: ["Single-Folio Billing", "Collision-Free Engine", "Housekeeping Dispatch"],
    metrics: "100% Collision-Free Room Booking Logic",
    status: "Featured Case Study",
    githubUrl: "https://github.com/SMIT-Bootcamp/HotelManagement.git",
    liveUrl: "",
    image: "",
    accentColor: "#00f541",
  },
  {
    id: "pollify",
    title: "Pollify — Community Polling & Voting Platform",
    subtitle: "Real-Time Opinion Aggregation & Public Sentiment Engine",
    category: "Full-Stack",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Vercel"],
    description:
      "Pollify is an interactive community polling platform where every opinion deserves to be counted. Create polls in seconds, collect votes in real-time, and discover what your community truly thinks through a clean, responsive interface with tamper-resistant vote auditing.",
    highlights: ["Real-Time Poll Sync", "IP & Device Tamper Guards", "Analytics Charts"],
    metrics: "Instant WebSocket Vote Propagation",
    status: "Production Live",
    githubUrl: "https://github.com/faizurrehman39804/pollify-frontend.git",
    liveUrl: "https://pollify-frontend-sf7o-delta.vercel.app",
    image: "/Poolify.png",
    accentColor: "#00d4f5",
  },
  {
    id: "devpulse-ai",
    title: "DevPulse — AI Workflow & Code Intelligence Engine",
    subtitle: "Autonomous Pull Request Reviewer & Velocity Analytics",
    category: "AI & Tools",
    techStack: ["Next.js 15", "TypeScript", "Claude API", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "An intelligent developer co-pilot and automated code triage system. Leverages LLM agent pipelines to analyze GitHub pull requests, identifying security regressions, performance bottlenecks, and architectural anomalies with automated inline suggestions.",
    highlights: ["Automated PR Security Scans", "Zero-Latency Webhook Queue", "Sprint Velocity Insights"],
    metrics: "3.5x Faster Pull Request Triage",
    status: "Active Deployment",
    githubUrl: "https://github.com/faizurrehman39804",
    liveUrl: "https://github.com/faizurrehman39804",
    image: "",
    accentColor: "#a855f7",
  },
  {
    id: "aurasaas-crm",
    title: "AuraSaaS — B2B Client Pipeline & Revenue CRM",
    subtitle: "Client Prospecting, Opportunity Scoping & Proposal System",
    category: "Client SaaS",
    techStack: ["Next.js", "React 19", "TypeScript", "Express.js", "MongoDB", "Recharts"],
    description:
      "A tailored client discovery and business development management suite designed to convert cold outreach into structured freelance and agency contracts. Features multi-stage pipeline stages, proposal version tracking, and conversion funnels.",
    highlights: ["Prospect Qualification Matrix", "Deal Flow Funnel", "Contract Milestone Scoping"],
    metrics: "Structured Discovery to Closing Pipeline",
    status: "Internal Platform",
    githubUrl: "https://github.com/faizurrehman39804",
    liveUrl: "https://github.com/faizurrehman39804",
    image: "",
    accentColor: "#00f541",
  },
  {
    id: "nexus-commerce",
    title: "NexusCommerce — High-Concurrency Storefront Hub",
    subtitle: "Optimistic Cart Architecture & Atomic Inventory Engine",
    category: "Full-Stack",
    techStack: ["Next.js 15", "React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
    description:
      "Ultra-responsive e-commerce architecture engineered for zero cart friction and reliable flash-sale concurrency. Utilizes atomic inventory reservation locks, cached product catalogs, Stripe webhook verification, and an administrative order dispatch board.",
    highlights: ["Sub-80ms Catalog Queries", "Atomic Stock Reservation", "Stripe Checkout & Webhooks"],
    metrics: "Zero Inventory Over-Allocation",
    status: "Full Architecture",
    githubUrl: "https://github.com/faizurrehman39804",
    liveUrl: "https://github.com/faizurrehman39804",
    image: "",
    accentColor: "#38bdf8",
  },
  {
    id: "syncflow-workspace",
    title: "SyncFlow — Real-Time Collaborative Workspace",
    subtitle: "Multi-User Kanban & Instant Presence State Engine",
    category: "Full-Stack",
    techStack: ["React 19", "Node.js", "Express", "Socket.io", "MongoDB", "Framer Motion"],
    description:
      "Real-time team collaboration system featuring multi-user collaborative boards, drag-and-drop workflow lanes, optimistic UI state reconciliation, and role-based workspace permissions with instant conflict resolution.",
    highlights: ["Live Cursor & Presence Sync", "Optimistic State Reconciliation", "Custom Role RBAC"],
    metrics: "Sub-40ms WebSocket Broadcast Latency",
    status: "Interactive Platform",
    githubUrl: "https://github.com/faizurrehman39804",
    liveUrl: "https://github.com/faizurrehman39804",
    image: "",
    accentColor: "#f59e0b",
  },
];

const categories = ["ALL", "FULL-STACK", "AI & TOOLS", "CLIENT SAAS"] as const;

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      data-cursor={project.liveUrl && project.liveUrl !== "#" ? "LIVE ↗" : "CODE ↗"}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#16171d]/90 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(0,245,65,0.14)]"
    >
      {/* Osmo Cursor-following Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 65, 0.14), transparent 60%)`,
        }}
      />

      {/* Media / Visual Blueprint Preview */}
      <div className="aspect-[16/9] w-full bg-[#0d0e12] relative overflow-hidden flex items-center justify-center border-b border-white/5 p-3 sm:p-4">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-contain rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full relative rounded-xl overflow-hidden border border-white/5 flex flex-col justify-between p-5 bg-gradient-to-br from-[#13141a] to-[#0a0b0e]">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(${project.accentColor} 1.5px, transparent 1.5px)`,
                backgroundSize: "18px 18px",
              }}
            />

            {/* Top Blueprint Row */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-primary/50 transition-colors" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-muted bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                {project.category}
              </span>
            </div>

            {/* Center Monogram / Blueprint Graphic */}
            <div className="relative z-10 my-auto text-center">
              <span
                className="heading-font text-6xl md:text-7xl opacity-20 group-hover:opacity-40 transition-all duration-700 inline-block group-hover:scale-105 select-none"
                style={{ color: project.accentColor }}
              >
                {project.title.substring(0, 2).toUpperCase()}
              </span>
              <p className="text-xs font-mono text-muted/60 mt-1 uppercase tracking-wider">
                {project.subtitle}
              </p>
            </div>

            {/* Bottom Key Metric Strip */}
            <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-primary/80">
              <span>● {project.metrics}</span>
              <span className="text-muted/60">{project.status}</span>
            </div>
          </div>
        )}

        {/* Floating Category Pill */}
        <div className="absolute top-4 right-4 z-20">
          <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-primary border border-primary/30 shadow-md">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-7 md:p-8 flex-1 flex flex-col relative z-20">
        <div className="mb-3">
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest">
            {project.category}
          </span>
          <h3 className="heading-font text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors tracking-wide mt-1">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-muted/80 mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-muted leading-relaxed mb-6 text-sm flex-1">
          {project.description}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
          {project.highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-primary/90 border border-white/10 hover:border-primary/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto pt-5 border-t border-white/10">
          <Magnetic strength={0.25}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-muted hover:text-white hover:border-white/30 transition-all uppercase tracking-wider"
              aria-label={`View source code for ${project.title}`}
            >
              <Github size={15} />
              <TextRoll activeClassName="text-white">SOURCE CODE</TextRoll>
            </a>
          </Magnetic>

          {project.liveUrl && project.liveUrl !== "#" ? (
            <Magnetic strength={0.25}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/40 text-xs font-bold text-primary hover:bg-primary hover:text-black transition-all uppercase tracking-wider shadow-[0_0_15px_rgba(0,245,65,0.2)]"
                aria-label={`Launch live demo for ${project.title}`}
              >
                <ExternalLink size={15} />
                <TextRoll activeClassName="text-black">LIVE DEMO</TextRoll>
              </a>
            </Magnetic>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted/40 uppercase tracking-wider px-3 py-2 cursor-default">
              <ExternalLink size={13} />
              Repository
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") return projectsData;
    return projectsData.filter((p) => p.category.toUpperCase() === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      {/* Header */}
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-px bg-primary" />
            <p className="text-primary font-mono text-xs uppercase tracking-widest">
              // Ryan Ringer-Duffy Style Case Studies
            </p>
          </div>
          <h2 className="heading-font text-5xl md:text-7xl text-foreground -skew-x-3">
            FEATURED PROJECTS
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mt-2 leading-relaxed">
            A curated showcase of production-grade full-stack architectures, real-time engines, and AI-augmented developer tooling shipped by Faiz Ur Rehman.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all select-none ${
                  isActive
                    ? "text-black font-bold bg-primary shadow-[0_0_15px_rgba(0,245,65,0.4)]"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Grid of Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
