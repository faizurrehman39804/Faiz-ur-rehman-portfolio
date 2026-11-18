import React from "react";
import { motion } from "framer-motion";

interface TextRollProps {
  children: string;
  className?: string;
  activeClassName?: string;
  isHovered?: boolean;
}

export default function TextRoll({
  children,
  className = "",
  activeClassName = "text-primary",
  isHovered,
}: TextRollProps) {
  // If controlled externally by isHovered prop
  const isControlled = typeof isHovered === "boolean";

  return (
    <span
      className={`relative inline-flex flex-col overflow-hidden select-none whitespace-nowrap leading-tight group/roll ${className}`}
    >
      {/* Primary text that moves up on hover */}
      <span
        className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isControlled
            ? isHovered
              ? "-translate-y-full"
              : "translate-y-0"
            : "group-hover/roll:-translate-y-full group-hover:-translate-y-full"
        }`}
      >
        {children}
      </span>

      {/* Duplicate text that enters from bottom on hover */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${activeClassName} ${
          isControlled
            ? isHovered
              ? "translate-y-0"
              : "translate-y-full"
            : "translate-y-full group-hover/roll:translate-y-0 group-hover:translate-y-0"
        }`}
      >
        {children}
      </span>
    </span>
  );
}
