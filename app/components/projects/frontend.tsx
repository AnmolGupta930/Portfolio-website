import React from "react";
import {
  IconBrandReactNative,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandSupabase,
  IconBrandFramerMotion,
} from "@tabler/icons-react";
import ProjectCard from "../project-card";
import ProjectSlider from "../project-slider";
import Tech from "../tech";

const project1 = [
  {
    title: "React",
    logo: <IconBrandReactNative className="size-5" />,
  },
  {
    title: "Next.js",
    logo: <IconBrandNextjs className="size-5" />,
  },
  {
    title: "Tailwind CSS",
    logo: <IconBrandTailwind className="size-5" />,
  },
  {
    title: "Framer Motion",
    logo: <IconBrandFramerMotion className="size-5" />,
  },
  {
    title: "Supabase",
    logo: <IconBrandSupabase className="size-5" />,
  },
];

const cards = [
  <ProjectCard
    key={"front-end-1"}
    link="https://prep-pilot-jee.vercel.app/"
    // imglink="https://drive.google.com/uc?export=view&id=1VHpkjd-oUV7wx9iny4PaY1ycfO5nRlhs"
    imglink="https://drive.google.com/uc?export=view&id=1WS63FqPFFnmlIxzjUAlr8t1ZXPtNW1xT"
    title="Prep Pilot"
    description="Interactive Kanban board for JEE aspirants to track syllabus, manage revisions, and streamline workflow."
    techs={<Tech technologies={project1} />}
  />,
];

export default function Frontend() {
  return (
    <>
      <ProjectSlider cards={cards} />
    </>
  );
}
