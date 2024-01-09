import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Span = styled.span``;
const Nav = styled.div`
     background-color: ${({ theme }) => theme.card_light};
     height: 80px;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 1rem;
     position: sticky;
     top: 0;
     z-index: 10;
     @media screen and (max-width: 960px) {
          transition: 0.8s all ease;
     }
`;
const NavContainer = styled.div`
     display: flex;
     justify-content: space-between;
     height: 60px;
     z-index: -1;
     width: 100%;
     padding: 0 24px;
     max-width: 1200px;
     position: relative;
`;
const NavLogo = styled.div`
     width: 80%;
     padding: 0 6px;
     display: flex;
     align-items: center;
     justify-content: flex-start;
     cursor: pointer;
     color: white;
     text-decoration: none;
     @media screen and (max-width: 640px) {
          padding: 0 0px;
     }
`;
const MobileIcon = styled.div`
     display: none;
     @media screen and (max-width: 768px) {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-100%, 50%);
          font-size: 1.8rem;
          cursor: pointer;
          color: #d000ff;
     }
`;
const NavItems = styled.ul`
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     list-style: none;
     gap: 32px;
     @media screen and (max-width: 768px) {
          display: none;
     }
`;
const NavLink = styled.a`
     color: ${({ theme }) => theme.text_primary};
     font-weight: 500;
     cursor: pointer;
     text-decoration: none;
     transition: all 0.2s ease-in-out;
     &:hover {
          color: ${({ theme }) => theme.primary};
     }
`;
const ButtonContainer = styled.div`
     display: flex;
     align-items: center;
     justify-content: end;
     width: 80%;
     height: 100%;
     padding: 0 6px;
     @media screen and (max-width: 640px) {
          display: none;
     }
`;
const GithubButton = styled.a`
     text-decoration: none;
     /* background-color: transparent; */
     border: 1px solid ${({ theme }) => theme.primary};

     background: linear-gradient(
          225deg,
          hsla(271, 100%, 50%, 1) 0%,
          hsla(294, 100%, 50%, 1) 100%
     );
     background: -moz-linear-gradient(
          225deg,
          hsla(271, 100%, 50%, 1) 0%,
          hsla(294, 100%, 50%, 1) 100%
     );
     background: -webkit-linear-gradient(
          225deg,
          hsla(271, 100%, 50%, 1) 0%,
          hsla(294, 100%, 50%, 1) 100%
     );

     border-radius: 20px;
     justify-content: center;
     align-items: center;
     display: flex;
     padding: 0 20px;
     height: 70%;
     font-size: 1rem;
     font-weight: 500;
     cursor: pointer;
     /* color: ${({ theme }) => theme.primary}; */
     color: white;
     transition: 0.2s all ease-in-out;
     &:hover {
          box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
          transform: scale(1.05);

          background-color: ${({ theme }) => theme.primary};
          color: ${({ theme }) => theme.white};
     }
     @media screen and (max-width: 768px) {
          display: none;
          font-size: 0.8px;
     }
`;
const MobileMenu = styled.div`
     display: flex;
     flex-direction: column;
     position: absolute;
     left: 50%;
     transform: translate(-50%, 0);
     top: 70px;
     padding: 12px 40px 24px 40px;
     background-color: ${({ theme }) => theme.card_light};
     gap: 16px;
     /* border: 1px solid white; */
     width: 100%;
     /* display: flex;
  transition: all 1s ease-in-out;
  flex-direction: column;
  position: absolute;
  top: 0;
  transform: ${({ open }) => (open ? "trasnlateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "0")}; */
`;
const MobileLink = styled.a`
     color: ${({ theme }) => theme.text_primary};
     font-weight: 500;
     cursor: pointer;
     text-decoration: none;
     transition: all.2s ease-in-out;
     &:hover {
          color: ${({ theme }) => theme.primary};
     }
`;

export const Navbar = () => {
     const [open, setOpen] = useState(false);
     return (
          <Nav>
               <NavContainer>
                    <NavLogo>Portfolio</NavLogo>
                    <MobileIcon>
                         <FaBars
                              onClick={() => {
                                   setOpen(!open);
                              }}
                         />
                    </MobileIcon>
                    <NavItems>
                         <NavLink href="#home">Home</NavLink>
                         <NavLink href="#skills">Skills</NavLink>
                         <NavLink href="#projects">Projects</NavLink>
                         <NavLink href="#education">Education</NavLink>
                         <NavLink href="#contact">Contact</NavLink>
                    </NavItems>
                    <ButtonContainer>
                         <GithubButton href="https://github.com/Jamshidbek9777">
                              Github profile
                         </GithubButton>
                    </ButtonContainer>
               </NavContainer>
               {open && (
                    <MobileMenu open={open}>
                         <MobileLink
                              href="#home"
                              onClick={() => {
                                   setOpen(!open);
                              }}>
                              Home
                         </MobileLink>
                         <MobileLink
                              href="#skills"
                              onClick={() => {
                                   setOpen(!open);
                              }}>
                              Skills
                         </MobileLink>{" "}
                         <MobileLink
                              href="#projects"
                              onClick={() => {
                                   setOpen(!open);
                              }}>
                              Projects
                         </MobileLink>{" "}
                         <MobileLink
                              href="#education"
                              onClick={() => {
                                   setOpen(!open);
                              }}>
                              Education
                         </MobileLink>
                         <MobileLink
                              href="#contact"
                              onClick={() => {
                                   setOpen(!open);
                              }}>
                              Contact
                              <GithubButton
                                   style={{
                                        padding: "10px  16px",
                                        background: `${({ theme }) =>
                                             theme.primary}`,
                                        color: "white",
                                        width: "max-content",
                                   }}
                                   href="/"
                                   target="_blank">
                                   Github Profile
                              </GithubButton>
                         </MobileLink>
                    </MobileMenu>
               )}
          </Nav>
     );
};
export default Navbar;
