"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleLinkHoverEvents = () => {
      const interactables = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])'
      );

      interactables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });

      return () => {
        interactables.forEach((el) => {
          el.removeEventListener("mouseenter", () => setIsHovering(true));
          el.removeEventListener("mouseleave", () => setIsHovering(false));
        });
      };
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    // We use a MutationObserver to detect new DOM elements and re-bind hover events
    const observer = new MutationObserver(() => {
      handleLinkHoverEvents();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    const cleanupHover = handleLinkHoverEvents();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      cleanupHover();
      document.body.style.cursor = 'auto'; // Restore on unmount
    };
  }, [isVisible]);

  // Don't render on mobile screens since cursor makes no sense there
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;
  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "transparent",
      border: "1px solid hsl(var(--primary) / 0.5)",
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "hsl(var(--primary) / 0.1)",
      border: "1px solid hsl(var(--primary))",
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0, // dot disappears on hover
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
           willChange: "transform"
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[100] mix-blend-difference"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
        }}
        style={{
          willChange: "transform"
       }}
      />
    </>
  );
}
