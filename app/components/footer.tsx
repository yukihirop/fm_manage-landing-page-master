import React from "react";
import styled from "@emotion/styled";
import { md } from 'styles/media-query'

const FooterContainer = styled.footer`
  width: 100vw;
  height: 200px;
  background-color: ${(props) => props.theme.colors.neutral.veryDarkBlue};

  ${md} {
    height: auto;
    position: relative;
  }
`;

const FooterCenter = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  height: 100%;

  ${md} {
    row-gap: 2rem;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
`;

const FooterLogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 150px;

  ${md} {
    height: auto;
    width: 100%;
    flex-direction: column-reverse;
    margin-bottom: 4rem;
  }
`;

const FooterLogo = styled.h1`
  height: 60px;
  color: white;
  margin-top: 0;
  background-image: url("./images/logo-footer.svg");
  background-repeat: no-repeat;
  background-position-y: calc(50% + 4px);

  ${md} {
    width: 100%;
    margin: 0 auto;
    background-position-x: 50%;
  }
`;
const FooterLogoMenuList = styled.ul`
  width: 150px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  img {
    &:hover {
      cursor: pointer;
    }
  }

  ${md} {
    width: 100%;
    justify-content: space-around;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const FooterMenu = styled.section`
  display: flex;
  justify-content: space-around;
  width: 33%;

  ${md} {
    flex-direction: row;
    width: 100%;
  }
`;

const FooterMenuContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0;

  li {
    color: white;
    margin-bottom: 1rem;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary.brightRed};
    }
  }
`;

const FooterRight = styled.section`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;

  ${md} {
    width: 100%;
    text-align: center;
  }
`;

const FooterEmail = styled.section`
  margin-top: 0px;

  ${md} {
    width: 100%;
    margin: auto;
  }
`;

const FooterEmailInput = styled.input`
  min-width: 200px;
  height: 40px;
  border-radius: 25px;
  padding: 12.5px;
  color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
  margin-right: 0.5rem;
  border: none;
  font-size: 0.8rem;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary.brightRed};
  }

  ${md} {
    width: 80%;
  }
`;
const FooterEmailButton = styled.button`
  height: 40px;
  width: 60px;
  border-radius: 25px;
  padding: 12.5px;
  background-color: ${(props) => props.theme.colors.primary.brightRed};
  color: white;
  font-style: bold;
  border: none;
  line-height: 1;

  &:hover {
    cursor: pointer;
  }
`;

const FooterCopyright = styled.p`
  color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
  margin-bottom: 0px;
  font-size: .7rem;

  ${md} {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 2rem auto;
  }
`;

const Footer = () => {
  const snsList = [
    "icon-facebook.svg",
    "icon-youtube.svg",
    "icon-twitter.svg",
    "icon-pinterest.svg",
    "icon-instagram.svg",
  ];

  const footerMenuList1 = ["Home", "Pricing", "Products", "About Us"];

  const footerMenuList2 = ["Careers", "Community", "Privacy Policy"];

  return (
    <FooterContainer>
      <FooterCenter>
        <FooterLogoContainer>
          <FooterLogo />
          <FooterLogoMenuList>
            {snsList.map((sns, i) => (
              <li key={`${sns}-${i}`}>
                <img src={`./images/${sns}`} alt="sns" />
                <a href="#" />
              </li>
            ))}
          </FooterLogoMenuList>
        </FooterLogoContainer>
        <FooterMenu>
          <FooterMenuContainer>
            {footerMenuList1.map((menu, i) => (
              <li key={`${menu}-${i}`}>
                <a href="#" />
                {menu}
              </li>
            ))}
          </FooterMenuContainer>
          <FooterMenuContainer>
            {footerMenuList2.map((menu, i) => (
              <li key={`${menu}-${i}`}>
                <a href="#" />
                {menu}
              </li>
            ))}
          </FooterMenuContainer>
        </FooterMenu>
        <FooterRight>
          <FooterEmail>
            <FooterEmailInput
              type="text"
              placeholder="Updates in your inbox..."
            />
            <FooterEmailButton>Go</FooterEmailButton>
          </FooterEmail>
          <FooterCopyright>Copyright 2020. All Rights Reserved</FooterCopyright>
        </FooterRight>
      </FooterCenter>
    </FooterContainer>
  );
};

export default Footer;
