import React from "react";
import ProjectCard from "../project-card";
import ProjectSlider from "../project-slider";

const cards = [
  <ProjectCard
    key={1}
    link="https://drive.google.com/drive/folders/1fs_BW6CaNq4Eoi9_4kuqyooMMrGQW5-X?usp=drive_link"
    imglink="https://drive.google.com/uc?export=view&id=16iR0l1RFR95gnBhIwajOKTEChKYh_wqF"
    title="Uzumaki by Junji Ito"
  />,
  <ProjectCard
    key={2}
    link="https://drive.google.com/drive/folders/1fs_BW6CaNq4Eoi9_4kuqyooMMrGQW5-X?usp=drive_link"
    imglink="https://drive.google.com/uc?export=view&id=1j_34eJFP6bbGV8_XUMEB_YeXMoPxhgPR"
    title="Berserk - Egg of the Perfect World"
  />,
  <ProjectCard
    key={3}
    link="https://drive.google.com/drive/folders/1fs_BW6CaNq4Eoi9_4kuqyooMMrGQW5-X?usp=drive_link"
    imglink="https://drive.google.com/uc?export=view&id=1cuVt6A6hrd9FyPbQr4H0z3EoavIJHwtk"
    title="晉維張"
  />,
  <ProjectCard
    key={4}
    link="https://drive.google.com/drive/folders/1fs_BW6CaNq4Eoi9_4kuqyooMMrGQW5-X?usp=drive_link"
    imglink="https://drive.google.com/uc?export=view&id=1vfctwUW8YkhR9i8f5glTaE3-2pEFC0SX"
    title="Friendly Spongebob"
  />,
  <ProjectCard
    key={5}
    link="https://drive.google.com/drive/folders/1fs_BW6CaNq4Eoi9_4kuqyooMMrGQW5-X?usp=drive_link"
    imglink="https://drive.google.com/uc?export=view&id=1ShqQ0LcoFXgYXysxpeJ64FSg2EYZmaCs"
    title="Toad Samurai"
  />,
];

export default function Sketches() {
  return (
    <>
      <ProjectSlider cards={cards} />
    </>
  );
}
