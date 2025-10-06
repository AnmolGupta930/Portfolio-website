"use client";
import React from "react";
import Card from "../card";
import Image from "next/image";
import { IconPointFilled } from "@tabler/icons-react";
import { TypewriterEffect } from "../typewritter";
import ThemeButton from "../themebutton";
import Link from "next/link";
import { CurrentDateTime } from "../curr-time";

export default function MainCard() {
  const wordsToAnimate = [
    "UI/UX_Designer",
    "Design_Engineer",
    "Problem_Solver",
  ];
  return (
    <>
      <Card title="info">
        <div className="flex flex-col gap-8 px-2 pt-2">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative"><Image
                className="rounded-full"
                src={"/profile.jpg"}
                alt="image"
                width={100}
                height={100}
              ></Image>
              <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-foreground/10" />
              </div>

              <div className="mb-2 flex flex-col justify-end">
                <h1 className="font-h text-foreground text-3xl">Anmol.</h1>
                {/* <p className="font-p text-foreground text-sm">anmolgupta30may@gmail.com|9301555483</p> */}
                <div className="flex max-sm:flex max-sm:flex-col">
                  <Link
                    className="font-p text-foreground text-sm tracking-tight select-text hover:underline"
                    target="_blank"
                    href={
                      "https://mail.google.com/mail/?view=cm&fs=1&to=anmolgupta30may@gmail.com"
                    }
                  >
                    anmolgupta30may@gmail.com
                  </Link>
                  <p className="font-p text-foreground text-sm tracking-tight">
                    <span className="max-sm:hidden">|</span>+919301555483
                  </p>
                </div>
              </div>
            </div>
            <ThemeButton />
          </div>
          <div className="">
            <h2 className="font-h text-foreground text-lg">
              <TypewriterEffect words={wordsToAnimate}></TypewriterEffect>
            </h2>
            <p className="font-p text-foreground text-sm tracking-tight">
              Greetings, I&apos;m a 23-year-old front-end developer currently
              based in Bangalore, India.
            </p>
          </div>
          <div className="flex items-end justify-between gap-4 max-sm:flex max-sm:flex-col max-sm:items-start">
            <div className="w-full">
              <p className="font-p text-foreground/90 text-[12px] tracking-tight">
                &quot;I do front-end not because it&apos;s easy,
                <br className="max-sm:hidden" /> but because I thought it would
                be.&quot;
              </p>
            </div>
            <div className="flex w-full flex-col items-end max-sm:mt-4">
              <p className="font-p text-foreground flex items-center text-sm tracking-tight">
                <span>
                  <IconPointFilled className="size-4 text-green-400" />
                </span>
                Available for work
              </p>
              {/* <p className="font-p text-foreground/90 text-[12px] tracking-tight">  </p> */}
              <CurrentDateTime />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
