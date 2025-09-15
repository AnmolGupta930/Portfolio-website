import React, { ReactNode } from "react";
import cn from "../lib/utils/cn";
import Link from "next/link";
import Image from "next/image";

type card = {
  title: string;
  description?: string;
  imglink: string;
  link: string;
  techs?: ReactNode;
};

export default function ProjectCard({
  title,
  description,
  imglink,
  link,
  techs,
}: card) {
  return (
    <>
      <div
        key={title}
        className={cn(
          "bg-card/90 text-foreground flex flex-col gap-3 rounded-2xl p-3",
          "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(27,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        )}
      >
        <Link href={link} target="blank">
          <Image
            alt={title}
            width={307}
            height={0}
            src={imglink}
            className={cn(
              "border-foreground/50 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-foreground)]/10",
              "rounded-2xl object-cover",
            )}
          ></Image>
        </Link>

        <div className="mx-3 mb-3 flex flex-col gap-3">
          <h2 className="font-h text-lg">{title}</h2>
          <p className="font-p text-sm tracking-tight">{description}</p>
          {techs}
        </div>
      </div>
    </>
  );
}
