import React from "react";
// import {
//   IconBrandReactNative,
//   IconBrandNextjs,
//   IconBrandTailwind,
//   IconBrandVue,
// } from "@tabler/icons-react";
import ProjectCard from "../project-card";
import ProjectSlider from "../project-slider";

// import Tech from "../tech";

// const project1 = [
//   {
//     title: "React",
//     logo: <IconBrandReactNative className="size-5" />,
//   },
//   {
//     title: "Next.js",
//     logo: <IconBrandNextjs className="size-5" />,
//   },
//   {
//     title: "Tailwind CSS",
//     logo: <IconBrandTailwind className="size-5" />,
//   },
//   {
//     title: "Vue",
//     logo: <IconBrandVue className="size-5" />,
//   },
// ];

const cards = [
  // <ProjectCard
  //   link="https://chanhdai.com/"
  //   imglink="/tailwind.png"
  //   title="Title1"
  //   description="This is the description of the project ,thisis a very you are a good lad  good project"
  //   techs={<Tech technologies={project1} />}
  // />,
  <ProjectCard
    key={1}
    link="/"
    imglink="/loader.gif"
    title="No projects yet x_x"
    description="Front end projects will get added here"
  />,
];

export default function Frontend() {
  return (
    <>
      <ProjectSlider cards={cards} />
    </>
  );
}
