import React, { ReactNode, useState } from "react";
import LinkBtn from "../link-button";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandX,
  IconFileCvFilled,
  IconLink,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

export default function Links() {
  type links = {
    id: number;
    icon: ReactNode;
    title: string;
    link: string;
  };

  const btns: links[] = [
    {
      id: 1,
      icon: <IconFileCvFilled />,
      title: "My resume",
      link: "",
    },
    {
      id: 2,
      icon: <IconBrandLinkedinFilled />,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/anmol-gupta-6746a1221",
    },
    {
      id: 3,
      icon: <IconBrandX />,
      title: "X",
      link: "https://x.com/anmol__003",
    },
    {
      id: 4,
      icon: <IconBrandGithubFilled />,
      title: "Github",
      link: "https://github.com/AnmolGupta930",
    },
  ];

  const [hovered, setHovered] = useState<links | null>(null);

  return (
    <>
      <div className="flex w-full flex-col items-start gap-4 sm:mt-2">
        <div className="bg-card/50 border-card/70 text-foreground flex h-12 items-center justify-start rounded-full border-2 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(27,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] backdrop-blur-[2px] max-sm:hidden">
          <IconLink className="bg-card size-full w-[44.8px] rounded-full p-2 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(27,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]" />
          {(hovered && (
            <AnimatePresence>
              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: 1,
                  width: "auto",
                }}
                exit={{ opacity: 0, width: 0 }}
                transition={{
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="font-p mx-3 text-sm whitespace-nowrap"
              >
                {hovered.title}
              </motion.div>
            </AnimatePresence>
          )) || (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{
                ease: "easeInOut",
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="font-p mx-3 text-sm whitespace-nowrap"
            >
              Links...
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-4 gap-4 max-sm:mx-auto max-sm:max-w-full">
          {btns.map((btn, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHovered(btn)}
              onMouseLeave={() => setHovered(null)}
              className="col-span-1 size-[60px] rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(27,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            >
              <LinkBtn link={btn.link}>{btn.icon}</LinkBtn>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
