import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ExternalLink } from './icons';

const blogPosts = [
  {
    title: "Mastering React Server Components",
    date: "Oct 10, 2026",
    excerpt: "An in-depth guide to understanding and utilizing React Server Components in your Next.js applications for better performance.",
    category: "React"
  },
  {
    title: "Building Scalable APIs with Express and MongoDB",
    date: "Sep 25, 2026",
    excerpt: "Learn how to structure your backend projects using Express.js and MongoDB to handle high traffic and complex data models.",
    category: "Backend"
  },
  {
    title: "The Future of AI in Web Development",
    date: "Sep 12, 2026",
    excerpt: "Exploring how AI agents and tools like GitHub Copilot and Antigravity are changing the landscape of frontend and backend development.",
    category: "AI & Tech"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55
    }
  }
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 scroll-mt-20">
      <motion.div 
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="heading-font text-5xl md:text-7xl text-foreground mb-4 -skew-x-6">LATEST WRITING</h2>
          <p className="text-primary font-medium tracking-widest uppercase">My Blog</p>
        </div>
        <a href="https://github.com/faizurrehman39804?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground transition-colors uppercase tracking-widest">
          View All Posts <ExternalLink size={16} />
        </a>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {blogPosts.map((post, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-[#1a1a1a] p-6 md:p-8 transition-colors duration-300 hover:border-primary/50 hover:shadow-[0_0_36px_-6px_rgba(0,245,65,0.2)] cursor-pointer"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-medium px-3 py-1 bg-background text-primary rounded-full border border-primary/20">
                {post.category}
              </span>
              <span className="text-xs text-muted font-medium tracking-widest">{post.date}</span>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-muted leading-relaxed mb-6 flex-1 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="mt-auto pt-4 border-t border-border/50 flex items-center text-sm font-medium text-muted group-hover:text-foreground transition-colors uppercase tracking-widest">
              Read More
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Blog;
