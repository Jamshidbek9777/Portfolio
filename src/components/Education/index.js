import React from "react";
import { Container, Wrapper, Title, Desc } from "./style";
import EducationCard from "../Cards/educationcrad";
import IDUM from "../Cards/IDUM";
import TUIT from "../Cards/TUIT";
import { education } from "../../data/data";
import DIMI from "../Cards/DIMI";

export const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self discovery and growth. My
          educational details are as follows
        </Desc>
        <TUIT education={education} />
        <IDUM education={education} />
        <DIMI education={education} /> <EducationCard education={education} />
      </Wrapper>
    </Container>
  );
};
export default Education;
