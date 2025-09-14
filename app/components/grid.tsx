import MainCard from "./grid-items/main_card";
import Links from "./grid-items/links";
import TechStack from "./grid-items/tech_stack";
import Gif from "./grid-items/gif";
import Music from "./grid-items/music";
import Projects from "./grid-items/projects";
import Gallery from "./grid-items/gallery";
import { motion } from "motion/react";
import Experience from "./grid-items/experience";

export default function Grid() {
  return (
    <>
      <div className="my-10 sm:grid sm:grid-cols-3 sm:gap-4">
        <div className="flex flex-col sm:col-span-2 sm:gap-4">
          <motion.div
            initial={{
              y: -100,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0.5,
            }}
          >
            <MainCard />
          </motion.div>
          <div className="max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-2 sm:gap-4">
            <motion.div
              initial={{
                x: -100,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                type: "spring",
                duration: 0.7,
                bounce: 0.5,
              }}
              className="max-sm:mt-10 sm:col-span-1 sm:gap-4"
            >
              <TechStack />
            </motion.div>
            <div className="flex flex-col sm:gap-4">
              <div className="max-sm:hidden">
                <Gif />
              </div>
              <motion.div
                initial={{
                  y: 100,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  duration: 0.7,
                  bounce: 0.5,
                }}
                className="max-sm:mt-10"
              >
                <Music />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:col-span-1 sm:gap-4">
          <div className="max-sm:mt-10">
            <Links />
          </div>
          <motion.div
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0.5,
            }}
            className="max-sm:mt-10"
          >
            <Experience />
          </motion.div>
          <motion.div
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0.5,
            }}
            className="max-sm:mt-10"
          >
            <Projects />
          </motion.div>
          <motion.div
            initial={{
              y: 100,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0.5,
            }}
            className="max-sm:mt-10"
          >
            <Gallery />
          </motion.div>
        </div>
      </div>
    </>
  );
}
