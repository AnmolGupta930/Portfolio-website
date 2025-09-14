import Link from "next/link";
import React, { ReactNode } from "react";
import cn from "../lib/utils/cn";

export default function LinkBtn({
  className,
  children,
  link,
}: {
  className?: string;
  children?: ReactNode;
  link: string;
}) {
  return (
    <>
      <Link
        draggable={false}
        href={link}
        target="_blank"
        className={cn(
          "relative flex size-full items-center justify-center rounded-xl  bg-[#aaa18e] dark:bg-[#3c3c3c]",
          className,
        )}
      >
        <div className="absolute inset-0 flex -translate-[3px] items-center justify-center rounded-xl bg-gradient-to-b from-[#fcefd4] from-0% to-[#777061] to-100% active:translate-none dark:from-[#515151] dark:to-[#272727]">
          <div className="flex size-[75%] items-center justify-center rounded-2xl bg-gradient-to-t from-[#fcefd4] from-0% to-[#777061] to-100% blur-[1px] dark:from-[#515151] dark:to-[#232323]"></div>
          <div className="text-foreground absolute flex size-[100] items-center justify-center blur-none">
            {children}
          </div>
        </div>
      </Link>
    </>
  );
}
