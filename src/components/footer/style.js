import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  width: 100%;
  /* max-width: 1200px; */
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 2rem 0;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Navs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  /* max-width: 1200px; */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Copyright = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;
export {
  Container,
  Title,
  NavLink,
  Navs,
  SocialMediaIcons,
  SocialMediaIcon,
  Copyright,
};
