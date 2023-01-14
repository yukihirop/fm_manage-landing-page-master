import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  width: 100vw;
  margin: 0 calc(50% - 50vw);
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.neutral.veryDarkBlue};
  align-items: center;
`;

const FooterLogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`;
const FooterLogo = styled.h1`
  width: 150px;
  height: 60px;
  color: white;
  margin-top: 0;
  background-image: url("./images/logo-footer.svg");
  background-repeat: no-repeat;
  background-position-y: calc(50% + 4px);
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
`;

const FooterMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 150px;
  margin: 0;

  li {
    color: white;
    /* margin: 0.1rem .2rem; */

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary.brightRed};
    }
  }
`;

const FooterEmail = styled.section`
  height: 150px;
`;
const FooterEmailInput = styled.input`
  height: 40px;
  border-radius: 25px;
  padding: 12.5px;
  color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
  margin-right: 0.5rem;
  border: none;
  font-size: .8rem;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary.brightRed};
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

  &:hover {
    cursor: pointer;
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
        {footerMenuList1.map((menu, i) => (
          <li key={`${menu}-${i}`}>
            <a href="#" />
            {menu}
          </li>
        ))}
      </FooterMenu>
      <FooterMenu>
        {footerMenuList2.map((menu, i) => (
          <li key={`${menu}-${i}`}>
            <a href="#" />
            {menu}
          </li>
        ))}
      </FooterMenu>
      <FooterEmail>
        <FooterEmailInput type="text" placeholder="Updates in your inbox..." />
        <FooterEmailButton>Go</FooterEmailButton>
      </FooterEmail>
    </FooterContainer>
  );
};

export default Footer;
