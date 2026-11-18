import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number; // duration in seconds
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  items,
  speed = 25,
  direction = "left",
  className = "",
}: MarqueeProps) {
  // Duplicate array 3 times to ensure seamless infinite loop
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap flex relative select-none py-3 border-y border-white/5 bg-[#0e0f12]/60 backdrop-blur-sm ${className}`}>
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#111216] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#111216] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 shrink-0"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="heading-font text-xl md:text-2xl tracking-widest text-muted/70 hover:text-primary transition-colors flex items-center gap-4 uppercase">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_rgba(0,245,65,0.8)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
