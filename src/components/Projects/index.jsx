import React from "react";
import ProjectsCard from "../Cards/projectsCard";
import {
  Container,
  Wrapper,
  Title,
  Descriptioin,
  HeadProjects,
  CardContainer,
} from "./style";
import { useState } from 'react'
const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Descriptioin>
          Here is some of my projects by learning web development
        </Descriptioin>
        <HeadProjects>Choose to see more info</HeadProjects>
        <CardContainer>
          <ProjectsCard />
        </CardContainer>
      </Wrapper>
    </Container>
  );
};
export default Projects;
