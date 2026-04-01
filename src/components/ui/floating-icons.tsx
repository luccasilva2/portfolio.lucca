"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Database,
  Brain,
  Palette,
  Server,
  GitBranch,
  Terminal,
  Cpu
} from "lucide-react";

const icons = [
  { Icon: Code2, delay: 0 },
  { Icon: Smartphone, delay: 0.5 },
  { Icon: Database, delay: 1 },
  { Icon: Brain, delay: 1.5 },
  { Icon: Palette, delay: 2 },
  { Icon: Server, delay: 2.5 },
  { Icon: GitBranch, delay: 3 },
  { Icon: Terminal, delay: 3.5 },
  { Icon: Cpu, delay: 4 },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => {
        const randomX = 10 + (index * 10) % 80;
        const randomY = 10 + ((index * 15) % 70);

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.15, 0.15, 0],
              scale: [0.5, 1, 1, 0.5],
              y: [0, -30, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              delay: delay,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary/30" />
          </motion.div>
        );
      })}
    </div>
  );
}
