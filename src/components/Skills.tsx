import React from 'react';
import { motion, type Variants } from 'framer-motion';

const skills = [
  { name: "HTML", color: "#ffffff" },
  { name: "React.js", color: "#61dafb" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "Node.js", color: "#8cc84b" },
  { name: "Express.js", color: "#ffffff" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Framer Motion", color: "#0055ff" },
  { name: "shadcn/ui", color: "#cc6699" },
  { name: "Git & GitHub", color: "#f05032" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-font text-5xl md:text-7xl text-foreground mb-4 -skew-x-6">MY STACK</h2>
        <p className="text-primary font-medium tracking-widest uppercase">Frontend & Backend</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group relative" 
            tabIndex={0}
          >
            <div className="relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-[#1a1a1a] px-4 py-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_36px_-6px_rgba(0,245,65,0.32)] hover:-translate-y-1">

              {/* Radial Gradient Hover Background */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none bg-[radial-gradient(400px_circle_at_50%_0%,rgba(0,245,65,0.15),transparent_70%)]"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-inner bg-background border border-border group-hover:border-primary/30 transition-colors">
                  <div className="text-xl font-black heading-font" style={{ color: skill.color }}>
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <span className="text-sm font-bold text-foreground/90 group-hover:text-foreground transition-colors tracking-wide">{skill.name}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
