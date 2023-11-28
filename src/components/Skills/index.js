import React from "react";
import base from "../../data/base";
import {
  SkillsSection,
  SectionTitle,
  SkillHeading,
  SectionContainer,
  SkillsCard,
  CardContent,
  SkillTitle,
  SkillsDescription,
} from "./styled";

export const Skills = () => {
  return (
    <SkillsSection className="skills--section" id="skills">
      <div className="portfolio--container">
        <SectionTitle className="section--title">My Skills</SectionTitle>
        <SkillHeading className="skills--section--heading">
          Here is my skills
        </SkillHeading>
      </div>
      <SectionContainer className="skills--section--container">
        {base.map((item, index) => (
          <SkillsCard key={index} className="skills--section--card">
            <CardContent className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </CardContent>
            <div className="skills--section--card--content">
              <SkillTitle className="skills--section--title">
                {item.title}
              </SkillTitle>
              <SkillsDescription className="skills--section--description">
                {item.description}
              </SkillsDescription>
            </div>
          </SkillsCard>
        ))}
      </SectionContainer>
    </SkillsSection>
  );
};
export default Skills;
