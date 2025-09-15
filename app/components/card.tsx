import { ReactNode } from "react";
import cn from "../lib/utils/cn";
import { IconCircleFilled } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Card({
  children,
  className,
  title,
}: {
  className?: string;
  children?: ReactNode;
  title: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-auto rounded-2xl",
        "border-foreground/50 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-foreground)]/50",
      )}
    >
      <motion.div
        drag
        dragSnapToOrigin={true}
        dragTransition={{
          bounceStiffness: 100,
          bounceDamping: 15,
        }}
        className={cn(
          "border-foreground/85 h-auto w-full flex-col rounded-2xl border-[2px]",
          "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(27,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        )}
      >
        <div className="border-foreground/85 bg-card flex min-h-10 cursor-grab items-center justify-between rounded-tl-2xl rounded-tr-2xl border-b-2 px-2">
          <div className="flex">
            <IconCircleFilled className="size-4 text-[#e2442f]" />
            <IconCircleFilled className="size-4 text-[#ffc901]" />
            <IconCircleFilled className="size-4 text-[#23a094]" />
          </div>
          <p className="font-p text-foreground text-sm"> {`@${title}.exe`}</p>
        </div>
        <div
          className={cn(
            "bg-card/50 text-foreground flex-auto rounded-br-2xl rounded-bl-2xl px-2 pt-2 pb-4 shadow-[inset_-1px_-5px_10px]/20 backdrop-blur-[4px]",
            className,
          )}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
