import React from "react";
import styled from "@emotion/styled";
import { md } from "styles/media-query";

const HeroContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 300px;
  margin-top: 4rem;

  ${md} {
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 0;
  }
`;
const HeroMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  ${md} {
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;
const HeroMainTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  width: 80%;
  margin: 1rem 0;
`;
const HeroMainDesc = styled.p`
  font-size: 0.8rem;
  line-height: 1.5rem;
  width: 70%;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
`;
const HeroMainButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 0.1rem;
  color: ${(props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props) => props.theme.colors.primary.brightRed};
  border: none;
  border-radius: 20px;
  box-shadow: 0px 10px 13px -7px ${(props) => props.theme.colors.primary.brightRed};

  &:hover {
    cursor: pointer;
    transform: translateY(1px);
  }
`;

const HeroGraph = styled.div`
  width: 50%;
  height: 400px;
  background-size: cover;
  background-image: url("./images/illustration-intro.svg");
  background-position: bottom right;
  background-repeat: no-repeat;
  transform: translateX(10px);

  ${md} {
    margin: 0 auto;
    width: 400px;
    height: 400px;
    background-position: center;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroMain>
        <HeroMainTitle>
          Bring everyone together to build better products.
        </HeroMainTitle>
        <HeroMainDesc>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </HeroMainDesc>
        <HeroMainButton>Get Started</HeroMainButton>
      </HeroMain>
      <HeroGraph />
    </HeroContainer>
  );
};

export default Hero;
