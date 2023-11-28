import React from "react";
import {
  Container,
  Title,
  NavLink,
  Navs,
  SocialMediaIcons,
  SocialMediaIcon,
  Copyright,
} from "./style";
export const Footer = () => {
  return (
    <Container>
      <Title>Jamshidbek Rasulov</Title>
      <Navs>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Eduaction</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Navs>
      <SocialMediaIcons>
        <SocialMediaIcon></SocialMediaIcon>
      </SocialMediaIcons>
      <Copyright >© 2023 Jamshidbek Rasulov. All right reserved</Copyright>
    </Container>
  );
};
export default Footer;
