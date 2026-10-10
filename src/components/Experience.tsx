import React from 'react';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building full-stack web apps with Next.js, MERN stack, and modern UI libraries. Focused on scalable architectures and clean code.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Junior Software Developer",
    company: "Tech Startup",
    period: "2022 - 2023",
    description: "Contributed to developing scalable web applications and RESTful APIs, collaborating closely with the design and backend teams to ship high-quality features.",
    tech: ["React.js", "Express.js", "JavaScript", "REST APIs"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <div className="mb-16">
        <h2 className="heading-font text-5xl md:text-7xl text-foreground mb-4 -skew-x-6">EXPERIENCE</h2>
        <p className="text-primary font-medium tracking-widest uppercase">My Journey</p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative">
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 overflow-hidden rounded-2xl border border-border bg-[#1a1a1a] p-6 md:p-8 transition-colors duration-300 hover:border-primary/50 hover:shadow-[0_0_36px_-6px_rgba(0,245,65,0.2)]">
              
              {/* Timeline marker for aesthetic */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="md:w-1/4 shrink-0">
                <p className="text-primary font-medium tracking-widest text-sm mb-2">{exp.period}</p>
                <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
              </div>
              
              <div className="md:w-3/4">
                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{exp.title}</h4>
                <p className="text-muted leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((techItem, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-background text-primary rounded-full border border-primary/20">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
