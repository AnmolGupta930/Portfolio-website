import React from "react";
import ProjectCard from "../project-card";
import ProjectSlider from "../project-slider";
import {
  IconBrandAdobeIllustrator,
  IconBrandAdobePhotoshop,
  IconBrandFigma,
} from "@tabler/icons-react";
import Tech from "../tech";

const project1 = [
  {
    title: "Figma",
    logo: <IconBrandFigma className="size-5" />,
  },
  {
    title: "Adobe Illustrator",
    logo: <IconBrandAdobeIllustrator className="size-5" />,
  },
  {
    title: "Adobe Photoshop",
    logo: <IconBrandAdobePhotoshop className="size-5" />,
  },
];

const cards = [
  <ProjectCard
    link="https://drive.google.com/drive/folders/1YFX1lPDCMuO12mcew-LTmuc9NB-msK_2?usp=sharing"
    imglink="https://drive.google.com/uc?export=view&id=1COMg1UTMNUp33X9GsLJVREyRVGX3luB2"
    title="EDA Club Name plate"
    description="Club name plate for Center of Excellence in Electronics Design Automation Hub"
    techs={<Tech technologies={project1} />}
  />,
  <ProjectCard
    link="https://drive.google.com/drive/folders/1YFX1lPDCMuO12mcew-LTmuc9NB-msK_2?usp=sharing"
    imglink="https://drive.google.com/uc?export=view&id=1rZx8f7W-nmCMIwoqj7k2fiUzZ_cKhos6"
    title="IEEE CEDA BANNER"
    description="College representation IEEE club, CEDA department banner"
    techs={<Tech technologies={project1} />}
  />,
  <ProjectCard
    link="https://drive.google.com/drive/folders/1YFX1lPDCMuO12mcew-LTmuc9NB-msK_2?usp=sharing"
    imglink="https://drive.google.com/uc?export=view&id=1YY2QNoK96kCSPgMEjjmJbU0jbFhGTYcW"
    title="EDA Standee design"
    description="EDA(Center of Excellence in Electronics Design Automation Hub) club inaugration standee"
    techs={<Tech technologies={project1} />}
  />,
  <ProjectCard
    link="https://drive.google.com/drive/folders/1YFX1lPDCMuO12mcew-LTmuc9NB-msK_2?usp=sharing"
    imglink="https://drive.google.com/uc?export=view&id=1Jont1pRNJGDNulbB48Mna9I56O4cu4e5"
    title="EDA Logo"
    description="EDA(Center of Excellence in Electronics Design Automation Hub) club logo"
    techs={<Tech technologies={project1} />}
  />,
  <ProjectCard
    link="https://drive.google.com/drive/folders/1YFX1lPDCMuO12mcew-LTmuc9NB-msK_2?usp=sharing"
    imglink="https://drive.google.com/uc?export=view&id=1T6RqazH8pkqXRJVXqHtZAzbo7oY_Pwzg"
    title="Monopoly IRL Poster"
    description="Poster design for IEEE club fest event"
    techs={<Tech technologies={project1} />}
  />,
];

export default function Graphics() {
  return (
    <>
      <ProjectSlider cards={cards} />
    </>
  );
}
