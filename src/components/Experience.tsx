import React, { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const experiences = [
  {
    title: "Full-Stack Software Developer",
    company: "Freelance & Independent Client Work",
    period: "2024 - Present",
    roleType: "Full-Time / Freelance",
    description:
      "Architecting and shipping production-grade full-stack web applications using Next.js 15, React 19, Node.js, Express, and MongoDB. Integrating AI-assisted developer workflows (Claude, Antigravity), building zero-collision booking systems, and optimizing web vitals for high-converting client platforms.",
    achievements: [
      "Engineered single-folio billing and conflict-free booking engines in HotelOS",
      "Delivered real-time polling application with sub-40ms WebSocket updates",
      "Executed discovery sessions, proposal scoping, and direct client delivery"
    ],
    tech: ["Next.js 15", "React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Associate Full-Stack Developer",
    company: "SMIT Bootcamp Collaborations & Startup Incubator",
    period: "2023 - 2024",
    roleType: "Bootcamp & Project Collaboration",
    description:
      "Collaborated on comprehensive full-stack team projects from complex Figma designs. Built authenticated RESTful APIs, designed normalized relational and NoSQL schemas, and engineered stateful frontend dashboards.",
    achievements: [
      "Co-authored hotel management property system from system-level Figma blueprints",
      "Implemented secure JWT role-based access control (RBAC) and data audit trails",
      "Managed CI/CD deployment pipelines to Vercel and render environments"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MUI", "Git & GitHub", "REST APIs"],
  },
  {
    title: "Frontend & Open-Source Contributor",
    company: "Community Labs & Independent Projects",
    period: "2022 - 2023",
    roleType: "Open-Source & Learning",
    description:
      "Built responsive, accessible web interfaces and component systems. Mastered core JavaScript engine behaviors, asynchronous programming patterns, DOM manipulation, and modern CSS architectures.",
    achievements: [
      "Built and deployed 10+ open-source repositories and utility projects on GitHub",
      "Practiced test-driven API consumption and structured error boundaries",
      "Mentored peers in modern frontend development and semantic HTML practices"
    ],
    tech: ["JavaScript (ES6+)", "HTML5 / Semantic SEO", "CSS3 / Tailwind", "TypeScript Basics", "GitHub"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
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
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#16171d]/85 p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_16px_40px_rgba(0,245,65,0.12)]"
    >
      {/* Osmo Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 65, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="md:w-1/3 shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block text-xs font-mono font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {exp.period}
            </span>
            <span className="text-[11px] font-mono text-muted/80">{exp.roleType}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
        </div>

        <div className="md:w-2/3">
          <h4 className="heading-font text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors">
            {exp.title}
          </h4>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Key Achievements */}
          <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
            {exp.achievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80 font-mono">
                <span className="text-primary mt-0.5">▹</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {exp.tech.map((techItem, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-3 py-1 bg-white/5 text-primary/90 rounded-full border border-white/10 hover:border-primary/40 transition-colors"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-20">
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
            // Career Progression
          </p>
        </div>
        <h2 className="heading-font text-5xl md:text-7xl text-foreground -skew-x-3">
          WORK EXPERIENCE
        </h2>
        <p className="text-muted text-sm md:text-base mt-2 max-w-xl">
          Hands-on software delivery across production web apps, client projects, and bootcamp engineering teams.
        </p>
      </motion.div>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </motion.div>
    </section>
  );
}
