import { IconBriefcase } from "@tabler/icons-react";
import Card from "../card";

import Link from "next/link";

export default function Experience() {
  type experience = {
    company?: string;
    companyLink: string;
    position?: string;
    startDate?: string;
    endDate?: string;
  };

  const experiences: experience[] = [
    {
      company: "Yellafin Pvt Ltd",
      companyLink: "https://yellafin.in/",
      position: "Wordpress Developer",
      startDate: "Mar,2025",
      endDate: "Jun,2025",
    },
  ];
  return (
    <>
      <Card title="experience">
        <div className="text-foreground flex flex-col">
          {experiences.map((work, idx) => (
            <div className="flex flex-col" key={idx}>
              <div className="flex items-center gap-2">
                <IconBriefcase />
                <Link
                  target="blank"
                  href={work.companyLink}
                  className="font-h text-lg hover:underline"
                >
                  {work.company}
                </Link>
              </div>
              <p className="font-p border-foreground/20 ml-3 border-l-[1px] px-5 text-sm">
                {work.position} <br /> {work.startDate}-{work.endDate}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
