import React from "react";
import styled from "@emotion/styled";

const BannerContainer = styled.section`
  height: 120px;
  margin-top: 6rem;
  background-color: ${(props) => props.theme.colors.primary.brightRed};
`;

const BannerCenter = styled.div`
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BannerTitle = styled.h1`
  color: white;
  width: 300px;
  margin: auto 0;
`;
const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 0.1rem;
  color: ${(props) => props.theme.colors.primary.brightRed};
  background-color: white;
  border: none;
  border-radius: 20px;
  margin: auto 0;

  &:hover {
    cursor: pointer;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerCenter>
        <BannerTitle>Simplify how your team works today.</BannerTitle>
        <BannerButton>Get Started</BannerButton>
      </BannerCenter>
    </BannerContainer>
  );
};

export default Banner;
