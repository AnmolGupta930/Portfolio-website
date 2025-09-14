import React, { ReactNode, useState } from "react";
import cn from "../lib/utils/cn";
import { IconCaretRightFilled, IconCaretLeftFilled } from "@tabler/icons-react";
import { AnimatePresence, motion, wrap } from "motion/react";

export default function ProjectSlider({ cards }: { cards: ReactNode[] }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const cardIndex = wrap(0, cards.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  //Animation
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <>
      <div className={cn("text-foreground flex flex-col gap-2")}>
        <div className="flex flex-row justify-end gap-2">
          <div className="flex-1"></div>
          <button
            onClick={() => paginate(-1)}
            className="bg-card cursor-pointer rounded-full p-2"
          >
            <IconCaretLeftFilled />
          </button>
          <button
            onClick={() => paginate(1)}
            className="bg-card cursor-pointer rounded-full p-2"
          >
            <IconCaretRightFilled />
          </button>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-2xl">
          <AnimatePresence>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                opacity: { duration: 0.2 },
              }}
            >
              {cards[cardIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
