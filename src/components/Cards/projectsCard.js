import React from "react";
import RegisterPage from "../../assets/imgs/register-page.png";
import HousePage from "../../assets/imgs/house.png";
import BrandMarket from "../../assets/imgs/Brandmarket.png";
import {
     Card,
     Image,
     Tags,
     Details,
     AllCards,
     Tag,
     Title,
     Description,
} from "../../components/Cards/style";
const ProjectsCard = () => {
     return (
          <AllCards>
               <Card>
                    <Image src={HousePage} />
                    <Tags>
                         <Tag>HTML</Tag>
                         <Tag>CSS</Tag>
                         <Tag>JS</Tag>
                         <Tag>React</Tag>
                    </Tags>
                    <Details>
                         <Title>(not finished)Fullstack app "Houzing"</Title>
                         <Description>
                              This is a website to sell or rent houses, you can
                              get for a rent if you visit a place.
                         </Description>
                    </Details>
               </Card>
               <Card>
                    <Image src={RegisterPage} />
                    <Tags>
                         {" "}
                         <Tag>HTML</Tag>
                         <Tag>CSS</Tag>
                         <Tag>JS</Tag>
                         <Tag>React</Tag>
                    </Tags>
                    <Details>
                         <Title>Login and Sign up </Title>
                         <Description>
                              This a simple web page made with JS, press login
                              button to login or press sign up button to sign up{" "}
                         </Description>
                    </Details>
               </Card>{" "}
               <Card href="https://velvety-dragon-f83652.netlify.app/">
                    <Image src={BrandMarket} />
                    <Tags>
                         {" "}
                         <Tag>Javascript</Tag>
                         <Tag>ReactJs</Tag>
                         <Tag>Styled components</Tag>
                         <Tag>Respsonsive design</Tag>
                    </Tags>
                    <Details>
                         <Title>E-commerce</Title>
                         <Description>
                              This is an e-commerce project for online shopping
                         </Description>
                    </Details>
               </Card>{" "}
          </AllCards>
     );
};

export default ProjectsCard;
