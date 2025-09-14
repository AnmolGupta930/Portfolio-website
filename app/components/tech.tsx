"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useState } from "react";
import cn from "../lib/utils/cn";
type techType = {
  title: string;
  logo: ReactNode;
};
export default function Tech({
  className,
  technologies,
}: {
  technologies: techType[];
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={cn("text-foreground ml-2 flex", className)}>
      {technologies.map((tech, idx) => (
        <motion.div
          key={idx}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          className="border-foreground/60 bg-card/50 text-foreground -ml-2 flex cursor-pointer flex-row items-center justify-center rounded-full border-2 p-1 backdrop-blur-2xl"
        >
          <motion.div className="m-auto">{tech.logo}</motion.div>

          {hovered === idx && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="font-p mx-1 text-sm whitespace-nowrap"
            >
              {tech.title}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
