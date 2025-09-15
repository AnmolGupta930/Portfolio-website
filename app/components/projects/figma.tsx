import React from "react";
import ProjectCard from "../project-card";
import ProjectSlider from "../project-slider";
import { IconBrandFigma, IconBrandFramer } from "@tabler/icons-react";
import Tech from "../tech";

const project1 = [
  {
    title: "Figma",
    logo: <IconBrandFigma className="size-5" />,
  },
  {
    title: "Framer",
    logo: <IconBrandFramer className="size-5" />,
  },
];

const project2 = [
  {
    title: "Figma",
    logo: <IconBrandFigma className="size-5" />,
  },
];

const cards = [
  <ProjectCard
    key={1}
    link="https://vibe-hive.framer.website/"
    imglink="https://drive.google.com/uc?export=view&id=1VIwirfPmi9FOfkhhq1vLVo9QqBok_QUd"
    title="VibeHive eCommerce App"
    description="VibeHive is the fun, gamified shopping app for Gen Z that turns browsing into an adventure."
    techs={<Tech technologies={project1} />}
  />,
  <ProjectCard
    key={2}
    link="https://discord-redesign.framer.website/"
    imglink="https://drive.google.com/uc?export=view&id=1jNk2j-uePdJATkcXBDKNlY-pAal2U4Ll"
    title="Discord UI/UX Redesign"
    description="Redesigning Discord's UI/UX to be cleaner, sleeker, more intuitive, and accessible for all users."
    techs={<Tech technologies={project1} />}
  />,
  <ProjectCard
    key={3}
    link="https://www.figma.com/proto/dRhJzDIazO17f4VdPioxRd/fintech-dashboard?page-id=4%3A3620&node-id=4-3621&p=f&viewport=307%2C106%2C0.12&t=Kyo8Cps7AyxJYZmH-1&scaling=scale-down&content-scaling=fixed"
    imglink="https://drive.google.com/uc?export=view&id=1SwkE05MOHkPZKE8CTZOMANv6cu1ng6SP"
    title="Fin Board Dashboard"
    description="A customizable Bento dashboard offering real-time sales insights for efficient decision-making."
    techs={<Tech technologies={project2} />}
  />,
];

export default function Figma() {
  return (
    <>
      <ProjectSlider cards={cards} />
    </>
  );
}
