import React from "react";
import Card from "../card";
import Image from "next/image";
import { ReactNode } from "react";
import {
  AppIcon,
  AppleWatchMenu,
  IconPlaceholder,
} from "../../components/tech-grid";

export default function TechStack() {
  const myIcons = [
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/mongo.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/local.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/tanstack.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/scss.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/css.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/spline.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/framer.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/figma.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/express.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/node.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/redux.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/motion.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        className="select-none"
        draggable={false}
        src={"/tailwind.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/shadcn.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/next.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/react.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/postman.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/github.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/git.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/yt.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/dribble.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/pinterest.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/illustrator.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/photoshop.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
    <IconPlaceholder>
      <Image
        draggable={false}
        src={"/wordpress.png"}
        alt="icon"
        width={40}
        height={40}
      ></Image>
    </IconPlaceholder>,
  ];
  return (
    <>
      <Card title="app" className="flex flex-col">
        <h1 className="font-h text-foreground text-3xl">Tech Stack</h1>
        <div className="mx-auto">
          {/* @ts-ignore */}
          <AppleWatchMenu icons={myIcons} />
        </div>
        <div>
          <h2 className="font-h text-foreground mt-2 text-lg">Front-end : </h2>
          <div className="flex flex-wrap gap-1">
            <TextPill>React</TextPill>
            <TextPill>Next.js</TextPill>
            <TextPill>Motion</TextPill>
            <TextPill>Tailwind CSS</TextPill>
            <TextPill>Tanstack Qwery</TextPill>
            <TextPill>Redux</TextPill>
          </div>
        </div>

        <div>
          <h2 className="font-h text-foreground mt-2 text-lg">Backend-end :</h2>
          <div className="flex flex-wrap gap-1">
            <TextPill>Node.js</TextPill>
            <TextPill>Express.js</TextPill>
          </div>
        </div>

        <div>
          <h2 className="font-h text-foreground mt-2 text-lg">
            Design Tools :
          </h2>
          <div className="flex flex-wrap gap-1">
            <TextPill>Figma</TextPill>
            <TextPill>Framer</TextPill>
            <TextPill>Spline</TextPill>
          </div>
        </div>
      </Card>
    </>
  );
}

const TextPill = ({ children }: { children: string }) => {
  return (
    <>
      <p className="font-p text-foreground border-foreground rounded-md border px-2 text-sm">
        {children}
      </p>
    </>
  );
};
