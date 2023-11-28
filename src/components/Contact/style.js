import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0px 0px 50px 0px;
  align-items: center;
  @media (max-width: 960px) {
  padding: 60px 0;
  }
`;
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const SubTitle = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const PhoneNumber = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 10px;
  font-weight: 500;
  margin: 22px 0;
  padding: 8px 18px;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: white;
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
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Telegram = styled.a`
  text-decoration: none;
  max-width: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 10px;
  font-weight: 500;
  margin: 22px 0;
  padding: 8px 18px;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: white;
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
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Email = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 10px;
  font-weight: 500;
  margin: 22px 0;
  padding: 8px 18px;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: white;
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
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export { Title, SubTitle, Container, PhoneNumber, Telegram, Email };
