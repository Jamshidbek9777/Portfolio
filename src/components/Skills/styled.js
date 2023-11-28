import styled from "styled-components";

const SkillsSection = styled.div`
  display: flex;
  padding: 149.33px 85.33px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 106.667px;
`;
const SectionTitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 42px;
  font-weight: 600;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
const SkillHeading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: ${({ theme }) => theme.text_primary + 95};
  line-height: 32px;
`;
const SectionContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  gap: 42.6px;
  max-width: 1200px;
  width: 100%;
  &:hover {
  }
  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 350px;
  }
`;
const SkillsCard = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;
  border: 2px solid #854ce6;
  border-radius: 10.6px;
  min-height: 250px;
  transition: 0.2s all ease-in-out;
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  &:hover {
    transform: scale(1.01);
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-items: stretch;
`;
const SkillTitle = styled.h3`
  color: white;
  font-size: 25px;
  font-weight: 700;
  line-height: 45px;
`;
const SkillsDescription = styled.p`
  color: ${({ theme }) => theme.text_primary + 95};
`;
export {
  SkillsSection,
  SectionTitle,
  SkillHeading,
  SectionContainer,
  SkillsCard,
  CardContent,
  SkillTitle,
  SkillsDescription,
};
