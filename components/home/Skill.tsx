import React from "react";
import SkillsSection from "./SkillSection";
import { Title } from "../common/Title";
import { SubTitle } from "../common/SubTitle";
import { Text } from "../common/Text";

function Skill() {
  return (
    <section
      id="skill"
      className="min-h-screen  border-b border-zinc-300 py-10"
    >
      <Title className="text-center">Skills</Title>
      <Text className="text-center">
        Comprehensive technical expertise and professional competencies
        developed through years of hands-on experience
      </Text>
      <SkillsSection />
    </section>
  );
}

export default Skill;
