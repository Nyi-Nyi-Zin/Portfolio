import React from "react";
import { Title } from "../common/Title";
import { SubTitle } from "../common/SubTitle";
import ExperienceCard, { ExperienceItem } from "./ExperienceCard";
import { experience } from "@/lib/constants"; // your array

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center border-b border-zinc-300 w-full py-12"
    >
      <Title>My Experience</Title>
      <SubTitle className="my-5">My Journey in Software Development</SubTitle>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.map((item: ExperienceItem, index: number) => (
          <div
            key={index}
            className={index === 0 ? "col-span-1 md:col-span-2" : "col-span-1"}
          >
            <ExperienceCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
