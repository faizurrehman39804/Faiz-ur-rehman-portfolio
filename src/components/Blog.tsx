import React, { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "./icons";
import Magnetic from "./Magnetic";
import TextRoll from "./TextRoll";

const blogPosts = [
  {
    title: "Mastering React Server Components & Streaming in Next.js 15",
    date: "Nov 12, 2026",
    excerpt:
      "An in-depth guide to understanding React Server Components, hydration boundaries, and selective streaming for sub-second page loads in modern production applications.",
    category: "Next.js 15",
    readTime: "6 min read",
    url: "https://github.com/faizurrehman39804",
  },
  {
    title: "Designing Zero-Collision Room Reservation Engines in MongoDB",
    date: "Oct 28, 2026",
    excerpt:
      "How we engineered the single-folio billing and collision-free room booking logic in Explore Pakistan Hotel SaaS using MongoDB ACID multi-document transactions and atomic date-overlap validation.",
    category: "Backend & DB",
    readTime: "8 min read",
    url: "https://github.com/faizurrehman39804",
  },
  {
    title: "Optimistic State Reconciliation with WebSockets in Pollify",
    date: "Oct 10, 2026",
    excerpt:
      "Architecting tamper-resistant, real-time voting platforms where thousands of votes synchronize in sub-40ms intervals without race conditions or database deadlocks.",
    category: "WebSockets",
    readTime: "5 min read",
    url: "https://github.com/faizurrehman39804",
  },
  {
    title: "The Future of AI Agents & LLM Pipelines in Full-Stack Engineering",
    date: "Sep 22, 2026",
    excerpt:
      "Exploring how autonomous coding agents, prompt chaining, and automated PR review bots are transforming the velocity of modern software delivery teams.",
    category: "AI & Tools",
    readTime: "7 min read",
    url: "https://github.com/faizurrehman39804",
  },
  {
    title: "Bridging Technical Engineering with Client Discovery & Sales",
    date: "Sep 05, 2026",
    excerpt:
      "Why the most successful developers don't just write clean code — they understand client hunting, qualification criteria, and how to communicate real business ROI.",
    category: "Business Dev",
    readTime: "5 min read",
    url: "https://github.com/faizurrehman39804",
  },
  {
    title: "Building Scalable RESTful Architectures with Express & TypeScript",
    date: "Aug 18, 2026",
    excerpt:
      "Standardizing controllers, services, DTO validation, and centralized error handling middleware to maintain enterprise-grade API codebases.",
    category: "Architecture",
    readTime: "6 min read",
    url: "https://github.com/faizurrehman39804",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
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
      data-cursor="READ"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#16171d]/85 p-7 sm:p-8 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_16px_40px_rgba(0,245,65,0.12)]"
    >
      {/* Osmo Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 65, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/5 text-primary border border-white/10">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        <h3 className="heading-font text-2xl text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between relative z-10">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-white transition-colors uppercase tracking-widest"
          aria-label={`Read article: ${post.title}`}
        >
          <TextRoll activeClassName="text-white">READ CASE ARTICLE</TextRoll>
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 scroll-mt-20">
      <motion.div
        className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-px bg-primary" />
            <p className="text-primary font-mono text-xs uppercase tracking-widest">
              // Engineering Notes & Deep Dives
            </p>
          </div>
          <h2 className="heading-font text-5xl md:text-7xl text-foreground -skew-x-3">
            TECHNICAL WRITING
          </h2>
          <p className="text-muted text-sm md:text-base mt-2 max-w-xl">
            Articles, architecture decisions, and real-world system patterns learned while shipping full-stack products.
          </p>
        </div>

        <Magnetic strength={0.2}>
          <a
            href="https://github.com/faizurrehman39804?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-primary/50 text-xs font-bold text-primary hover:text-white transition-all uppercase tracking-widest shadow-sm"
          >
            <TextRoll activeClassName="text-white">ALL REPOSITORIES</TextRoll>
            <ExternalLink size={14} />
          </a>
        </Magnetic>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {blogPosts.map((post, idx) => (
          <BlogCard key={idx} post={post} />
        ))}
      </motion.div>
    </section>
  );
}
