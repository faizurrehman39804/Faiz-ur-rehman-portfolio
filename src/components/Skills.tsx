import React from 'react';

const skills = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React.js", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "Node.js", color: "#8cc84b" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Express.js", color: "#ffffff" },
  { name: "Framer Motion", color: "#0055ff" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Claude AI", color: "#cc6699" },
  { name: "Antigravity", color: "#7952b3" },
  { name: "Git & GitHub", color: "#f05032" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="mb-16">
        <h2 className="heading-font text-5xl md:text-7xl text-foreground mb-4 -skew-x-6">MY STACK</h2>
        <p className="text-primary font-medium tracking-widest uppercase">Frontend & Backend</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div key={index} className="group relative" tabIndex={0}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
