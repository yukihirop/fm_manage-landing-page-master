import React from "react";
import styled from "@emotion/styled";
import { md } from "styles/media-query";

const BannerContainer = styled.section`
  height: 120px;
  margin-top: 6rem;
  background-color: ${(props) => props.theme.colors.primary.brightRed};

  ${md} {
    height: 360px;
  }
`;

const BannerCenter = styled.div`
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${md} {
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
  }
`;

const BannerTitle = styled.h1`
  color: white;
  width: 300px;
  margin: auto 0;

  ${md} {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 100%;

    span {
      display: inline-block;
    }
  }
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

  ${md} {
    margin: 0 auto;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerCenter>
        <BannerTitle><span>Simplify how</span> <span>your team works</span> <span>today.</span></BannerTitle>
        <BannerButton>Get Started</BannerButton>
      </BannerCenter>
    </BannerContainer>
  );
};

export default Banner;
