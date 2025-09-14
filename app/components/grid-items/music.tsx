import React from "react";
import Card from "../card";
import Image from "next/image";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import cn from "@/app/lib/utils/cn";
import Link from "next/link";
export default function Music() {
  return (
    <>
      <Card title="spotify">
        <div
          className={cn(
            "bg-card/40 flex flex-col items-center justify-end gap-3 rounded-2xl p-3",
            "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(27,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
          )}
        >
          <Image
            className="rounded-2xl"
            src={
              "https://i.discogs.com/UEYAD-jXBZCsDX6Qufxk7Y65vL5LyOY8fiR1gFP13Q8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzY2/NDM0LTE3MTY1Mzc0/NjUtNDYwNC5wbmc.jpeg"
            }
            alt="image"
            width={250}
            height={250}
            draggable={false}
          ></Image>
          <div className="flex w-[90%] items-center justify-between">
            <div className="lex flex-col items-start">
              <h1 className="font-h text-foreground text-lg">Backslide</h1>
              <Link
                href={
                  "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx?si=iZDu5-9ARpeJMnoBmmLooA"
                }
                target="_blank"
              >
                <h2 className="font-p text-foreground cursor-pointer text-sm hover:underline">
                  Twenty One Pilots
                </h2>
              </Link>
            </div>
            <div>
              <div className="bg-card group cursor-pointer rounded-full p-3">
                <Link
                  href={
                    "https://open.spotify.com/track/6fNaHkjAxP6rI2sZhT7QJn?si=faccb4123f6849ec"
                  }
                  target="_blank"
                >
                  <IconPlayerPlayFilled />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
