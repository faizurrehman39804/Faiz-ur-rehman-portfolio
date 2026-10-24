import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ExternalLink, Github } from './icons';

const projectsData = [
  {
    title: "Hotel Management System (HotelOS)",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MUI"],
    description: "End-to-end hotel operations and property management system designed from comprehensive Figma system architecture. Features unified guest journey tracking from reservation to check-out, single-folio billing, collision-free room reservation guardrails, real-time housekeeping lifecycle, and operational reports.",
    githubUrl: "https://github.com/faizurrehman39804",
    liveUrl: "#"
  },
  {
    title: "Poolify — Pooling & Ride-Sharing Platform",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    description: "Poolify is a modern pooling platform designed to make shared travel more convenient by connecting people traveling to similar destinations. The platform focuses on providing a user-friendly experience for discovering rides, coordinating journeys, and making transportation more accessible through a clean, responsive interface.",
    githubUrl: "https://github.com/Faiz0072",
    liveUrl: "#"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-font text-5xl md:text-7xl text-foreground mb-4 -skew-x-6">PROJECTS</h2>
        <p className="text-primary font-medium tracking-widest uppercase">Featured Work</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-[#1a1a1a] transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(0,245,65,0.2)]"
          >
            <div className="aspect-[16/10] w-full bg-background/50 relative overflow-hidden flex items-center justify-center border-b border-border">
              {/* Fallback geometric pattern for project image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00f541 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
              </div>

              <span className="heading-font text-6xl text-muted/20 group-hover:scale-110 group-hover:text-primary/20 transition-all duration-700">{project.title.substring(0, 2).toUpperCase()}</span>
            </div>

            <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted leading-relaxed mb-8 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold px-4 py-1.5 bg-background text-primary rounded-full border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-auto pt-6 border-t border-border/50">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-muted hover:text-foreground transition-colors uppercase tracking-widest group/link">
                  <Github size={18} />
                  Code
                  <span className="h-px w-0 bg-foreground transition-all duration-300 group-hover/link:w-4"></span>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-muted hover:text-foreground transition-colors uppercase tracking-widest group/link">
                  <ExternalLink size={18} />
                  Live Preview
                  <span className="h-px w-0 bg-foreground transition-all duration-300 group-hover/link:w-4"></span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
