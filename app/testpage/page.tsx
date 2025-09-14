"use client";
import React from "react";
import Card from "../components/card";
import cn from "../lib/utils/cn";
import MainCard from "../components/grid-items/main_card";
import TechStack from "../components/grid-items/tech_stack";
import Music from "../components/grid-items/music";
import LinkBtn from "../components/link-button";
import Links from "../components/grid-items/links";
import { IconBrandGithub, IconBrandGithubFilled } from "@tabler/icons-react";
import Projects from "../components/grid-items/projects";
import ProjectCard from "../components/project-card";
import ProjectSlider from "../components/project-slider";
import {
  IconBrandReactNative,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVue,
} from "@tabler/icons-react";
import Tech from "../components/tech";

function page() {
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
      title: "Vue",
      logo: <IconBrandVue className="size-5" />,
    },
  ];

  const cards = [
    <ProjectCard
      link="https://chanhdai.com/"
      imglink="https://drive.google.com/file/d/1TrEn_sdHAf_DW0I8nGTN4CRssBwwx-z_/view"
      title="Title1"
      description="This is the description of the project ,thisis a very you are a good lad  good project"
      techs={<Tech technologies={project1} />}
    />,
    <ProjectCard
      link="https://chanhdai.com/"
      imglink="/tailwind.png"
      title="Title2"
      description="This is the description of "
    />,
    <ProjectCard
      link="https://chanhdai.com/"
      imglink="/tailwind.png"
      title="Title3"
      description="This is the description of the project ,thisis a very good project"
    />,
  ];

  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center",
        "my-bg-pattern bg-background",
      )}
    >
      <div className="box size-[300px]"></div>
    </div>
  );
}

export default page;
