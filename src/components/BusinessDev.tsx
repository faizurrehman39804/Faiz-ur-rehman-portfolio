import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Target, 
  Funnel, 
  MessageSquare, 
  ClipboardCheck, 
  FileEdit, 
  TrendingUp,
  ArrowRight,
  CheckIcon
} from './icons';

interface SkillArea {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  keyPoints: string[];
  tags: string[];
}

const businessSkills: SkillArea[] = [
  {
    id: "prospecting",
    step: "01",
    title: "Client Hunting & Prospecting",
    description: "Identifying potential clients, researching prospects, and reaching out to relevant businesses.",
    icon: <Target size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />,
    accent: "from-primary/20 to-transparent",
    keyPoints: [
      "Industry research & target account identification",
      "Qualifying prospects against high-fit criteria",
      "Personalized, value-oriented outreach strategy"
    ],
    tags: ["Target Sourcing", "Prospect Qualification", "Cold Outreach"]
  },
  {
    id: "lead-generation",
    step: "02",
    title: "Lead Generation",
    description: "Finding potential customers, identifying business opportunities, and building prospect lists.",
    icon: <Funnel size={24} className="text-secondary group-hover:scale-110 transition-transform duration-300" />,
    accent: "from-secondary/20 to-transparent",
    keyPoints: [
      "Discovering unmet technical & design opportunities",
      "Building structured, verified prospect databases",
      "Multi-channel pipeline building & qualification"
    ],
    tags: ["Pipeline Building", "Prospect Lists", "Market Analysis"]
  },
  {
    id: "communication",
    step: "03",
    title: "Client Communication",
    description: "Understanding client needs, communicating project details clearly, and maintaining professional relationships.",
    icon: <MessageSquare size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />,
    accent: "from-primary/20 to-transparent",
    keyPoints: [
      "Translating complex technical concepts into clear terms",
      "Proactive milestone updates and expectation setting",
      "Responsive, transparent, and empathetic collaboration"
    ],
    tags: ["Active Listening", "Expectation Setting", "Relationship Building"]
  },
  {
    id: "requirements",
    step: "04",
    title: "Project Requirement Gathering",
    description: "Understanding client objectives, gathering project requirements, defining scope, and clarifying expected deliverables.",
    icon: <ClipboardCheck size={24} className="text-secondary group-hover:scale-110 transition-transform duration-300" />,
    accent: "from-secondary/20 to-transparent",
    keyPoints: [
      "Deep-dive discovery sessions to uncover core business goals",
      "Defining explicit project scope & technical specifications",
      "Setting acceptance criteria to mitigate scope creep"
    ],
    tags: ["Scope Definition", "Discovery Calls", "Deliverable Matrix"]
  },
  {
    id: "proposal-writing",
    step: "05",
    title: "Freelance Proposal Writing",
    description: "Preparing professional proposals, presenting suitable solutions, and communicating project value to potential clients.",
    icon: <FileEdit size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />,
    accent: "from-primary/20 to-transparent",
    keyPoints: [
      "Tailoring solution architecture to client objectives",
      "Transparent timeline, phased milestones, and cost breakdown",
      "Emphasizing real return-on-investment & business value"
    ],
    tags: ["Solution Architecture", "Value Proposition", "Milestone Scoping"]
  },
  {
    id: "business-development",
    step: "06",
    title: "Business Development",
    description: "Identifying growth opportunities, building professional relationships, and developing potential business partnerships.",
    icon: <TrendingUp size={24} className="text-secondary group-hover:scale-110 transition-transform duration-300" />,
    accent: "from-secondary/20 to-transparent",
    keyPoints: [
      "Exploring collaborative synergies with design & marketing partners",
      "Cultivating long-term professional networks & referral loops",
      "Aligning developer capabilities with evolving market demands"
    ],
    tags: ["Strategic Partnerships", "Networking", "Long-term Value"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const BusinessDev = () => {
  return (
    <section id="business-dev" className="py-20 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="heading-font text-5xl md:text-7xl text-foreground mb-4 -skew-x-6">
              BUSINESS & CLIENT DEV
            </h2>
            <p className="text-primary font-medium tracking-widest uppercase">
              Client Acquisition • Project Scoping • Strategic Growth
            </p>
          </div>
          <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg lg:text-right">
            Beyond engineering and clean code, I bridge the gap between technical execution and business objectives through disciplined prospecting, clear communication, and structured project scoping.
          </p>
        </div>
      </div>

      {/* 6 Skill Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {businessSkills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={cardVariants}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-[#1a1a1a] p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_36px_-6px_rgba(0,245,65,0.24)] hover:-translate-y-1.5 focus-within:border-primary/50"
            tabIndex={0}
            role="region"
            aria-label={skill.title}
          >
            {/* Ambient Radial Gradient on Hover */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none bg-[radial-gradient(450px_circle_at_50%_0%,rgba(0,245,65,0.12),transparent_70%)]" />

            {/* Top Indicator & Icon */}
            <div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 shadow-inner">
                  {skill.icon}
                </div>
                <span className="heading-font text-3xl md:text-4xl text-muted/30 group-hover:text-primary/70 transition-colors duration-300">
                  {skill.step}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                {skill.title}
              </h3>

              {/* Primary User-Provided Description */}
              <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Key Workflow Competencies */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-border/40">
                {skill.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/80">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
                      <CheckIcon size={10} />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags / Pills at Bottom */}
            <div className="relative z-10 pt-4 border-t border-border/40 mt-auto">
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[11px] font-semibold px-2.5 py-1 bg-background text-primary/90 group-hover:text-primary rounded-full border border-primary/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Consultative Call-to-Action Footer Banner */}
      <div className="mt-12 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border bg-[#16171c] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-primary/40 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        
        <div className="relative z-10 text-center md:text-left">
          <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">
            Need a developer who understands both product logic and business priorities?
          </h4>
          <p className="text-sm text-muted">
            I am available for full-time opportunities, high-impact freelance projects, and technical discovery.
          </p>
        </div>

        <a
          href="#connect"
          className="relative z-10 inline-flex items-center gap-2 bg-primary text-black font-semibold text-xs md:text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:opacity-90 hover:shadow-[0_0_24px_rgba(0,245,65,0.4)] transition-all shrink-0"
        >
          DISCUSS A PROJECT
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default BusinessDev;
