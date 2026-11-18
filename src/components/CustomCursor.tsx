import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for fluid follower feel
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for custom cursor text
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute("data-cursor") || "VIEW");
        setIsPointer(true);
        return;
      } else {
        setCursorText("");
      }

      // Check if interactive element
      const interactive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer");
      setIsPointer(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Osmo Ring / Badge Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: cursorText ? 1 : isPointer ? 1.5 : 1,
          width: cursorText ? 72 : 36,
          height: cursorText ? 72 : 36,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-300 flex items-center justify-center ${
            cursorText
              ? "bg-[#00f541] text-[#000000] font-bold text-[11px] tracking-widest shadow-[0_0_25px_rgba(0,245,65,0.6)]"
              : isPointer
              ? "border border-[#00f541]/80 bg-[#00f541]/10 backdrop-blur-[1px] shadow-[0_0_15px_rgba(0,245,65,0.3)]"
              : "border border-white/30 bg-transparent"
          }`}
        >
          {cursorText && <span className="uppercase select-none">{cursorText}</span>}
        </div>
      </motion.div>

      {/* Inner Dot Follower (Only when not showing text) */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
          style={{
            x: dotX,
            y: dotY,
          }}
          animate={{
            scale: isPointer ? 0 : 1,
            opacity: isPointer ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#00f541] shadow-[0_0_8px_#00f541]" />
        </motion.div>
      )}
    </>
  );
}
