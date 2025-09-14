import React, { ReactNode, useState, useRef } from "react";
import Card from "../card";
import {
  IconFolderCode,
  IconFolderStar,
  IconFolderHeart,
} from "@tabler/icons-react";
import useOutsideClick from "@/app/lib/utils/useOutsideClick";
import { motion } from "motion/react";
import Frontend from "../projects/frontend";
import Graphics from "../projects/graphics";
import Sketches from "../projects/sketches";
import Figma from "../projects/figma";

export default function Projects() {
  type folderItem = {
    title: string;
    icon: ReactNode;
    content: () => React.ReactNode;
  };

  const folders: folderItem[] = [
    {
      title: "Projects",
      icon: <IconFolderCode />,
      content: () => {
        return (
          <>
            <Card title="files/Projects">
              <Frontend />
            </Card>
          </>
        );
      },
    },
    {
      title: "Figma Designs",
      icon: <IconFolderStar />,
      content: () => {
        return (
          <>
            <Card title="files/Figma_Designs">
              <Figma />
            </Card>
          </>
        );
      },
    },
    {
      title: "Graphic Designs",
      icon: <IconFolderStar />,
      content: () => {
        return (
          <>
            <Card title="files/Graphic_Designs">
              <Graphics />
            </Card>
          </>
        );
      },
    },
    {
      title: "My Sketches",
      icon: <IconFolderHeart />,
      content: () => {
        return (
          <>
            <Card title="files/My_Sketches">
              <Sketches />
            </Card>
          </>
        );
      },
    },
  ];

  //animation variants
  const animation = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      delay: 0.3,
    },
    hidden: { opacity: 0, filter: "blur(10px)" },
  };

  //outside click hook use
  const [current, setCurrent] = useState<folderItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => {
    if (current != null) {
      setCurrent(null);
    }
  });

  return (
    <>
      <div className="relative">
        {/* every thing modal ---------------*/}
        {current && <div className="fixed inset-0 z-10 backdrop-blur-sm"></div>}

        {current && (
          <motion.div
            variants={animation}
            initial="hidden"
            animate="visible"
            // ref={modalRef}
            className="fixed inset-0 z-20 mx-auto flex max-w-sm flex-col justify-center max-sm:w-full"
          >
            <div ref={modalRef} className="mx-4">
              {current.content()}
            </div>
          </motion.div>
        )}
        {/* every thing modal ---------------*/}

        {/* every thing is inside card ---------------*/}
        <Card title="files">
          <div className="divide-foreground/20 border-foreground/10 text-foreground flex flex-col divide-y">
            {folders.map((folder, idx) => (
              <motion.button
                className="hover:bg-foreground/10 flex cursor-pointer items-center gap-2 px-2 py-2"
                key={idx}
                onClick={() => {
                  setCurrent(folder);
                }}
              >
                <div>{folder.icon}</div>
                <p className="font-p text-sm">{folder.title}</p>
              </motion.button>
            ))}
          </div>
        </Card>
        {/* every thing is inside card ---------------*/}
      </div>
    </>
  );
}
