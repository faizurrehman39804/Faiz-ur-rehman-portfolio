"use client";

import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from './icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border transition-transform duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="/" className="relative block h-10 w-[min(100%,13rem)] shrink-0 md:h-11 md:w-[min(100%,15.5rem)] hover:opacity-90 transition-opacity flex items-center heading-font text-2xl lg:text-3xl tracking-widest italic lowercase">
          <span className="text-primary">faiz</span>
          <span className="text-foreground">urrehman</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-muted hover:text-primary transition-colors uppercase tracking-widest">HOME</a>
          <a href="#about" className="text-sm font-medium text-muted hover:text-primary transition-colors uppercase tracking-widest">ABOUT ME</a>
          <a href="#skills" className="text-sm font-medium text-muted hover:text-primary transition-colors uppercase tracking-widest">STACK</a>
          <a href="#experience" className="text-sm font-medium text-muted hover:text-primary transition-colors uppercase tracking-widest">EXPERIENCE</a>
          <a href="#projects" className="text-sm font-medium text-muted hover:text-primary transition-colors uppercase tracking-widest">PROJECTS</a>
          <a href="#blog" className="text-sm font-medium text-muted hover:text-primary transition-colors uppercase tracking-widest">BLOG</a>
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Faiz0072" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/faizurrehman" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:faiz@example.com" className="ml-2 text-muted hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-sm text-muted hover:text-primary transition-colors uppercase tracking-widest">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-sm text-muted hover:text-primary transition-colors uppercase tracking-widest">About Me</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block text-sm text-muted hover:text-primary transition-colors uppercase tracking-widest">Stack</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="block text-sm text-muted hover:text-primary transition-colors uppercase tracking-widest">Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-sm text-muted hover:text-primary transition-colors uppercase tracking-widest">Projects</a>
          <a href="#blog" onClick={() => setIsOpen(false)} className="block text-sm text-muted hover:text-primary transition-colors uppercase tracking-widest">Blog</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
