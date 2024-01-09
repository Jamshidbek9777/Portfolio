import React from "react";
import {
  Title,
  SubTitle,
  Container,
  PhoneNumber,
  Telegram,
  Email,
} from "./style";
export const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <SubTitle>You can contact me through the adressess below</SubTitle>
      <PhoneNumber> Phone number: +998932059777</PhoneNumber>
      <Telegram href="https://t.me/Jamshidbek_Rasulov">
        {" "}
        Telegram: @Jamshidbek_Rasulov
      </Telegram>
      <Email>Email: jamshidbekrasulovuz@gmail.com</Email>
    </Container>
  );
};
export default Contact;
