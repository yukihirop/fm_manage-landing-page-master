import React, { useState } from "react";
import styled from "@emotion/styled";
import { md } from "styles/media-query";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  ${md} {
    justify-content: space-between;
  }
`;

const HeaderTitle = styled.h1`
  width: 160px;
  height: 60px;
  margin: auto 0;
  background-image: url("./images/logo.svg");
  background-repeat: no-repeat;
  background-position-y: calc(50% + 4px);

  &:hover {
    cursor: pointer;
  }
`;

const HeaderMenuContainer = styled.nav`
  font-size: 0.5rem;

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }

  li {
    width: 90px;
    margin-right: 0.25rem;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary.brightRed};
    }
  }

  ${md} {
    display: none;
  }
`;

const HeaderGettingStarted = styled.button`
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

  ${md} {
    display: none;
  }
`;

const HeaderMenuDesktop = () => {
  const menus = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <HeaderMenuContainer>
      <ul>
        {menus.map((menu, i) => (
          <li key={`${menu}-${i}`}>{menu}</li>
        ))}
      </ul>
    </HeaderMenuContainer>
  );
};

type HeaderMenuMobileProps = {
  bgImage: string;
};
const HeaderMenuMobile = styled.button<HeaderMenuMobileProps>`
  display: none;
  border: none;
  background-color: transparent;

  ${md} {
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(${(props) => props.bgImage});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderTitle>
        <a href="#"></a>
      </HeaderTitle>
      <HeaderMenuDesktop />
      <HeaderMenuMobile
        bgImage={
          open ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"
        }
        onClick={() => setOpen(!open)}
      />
      <HeaderGettingStarted>Get Started</HeaderGettingStarted>
    </HeaderContainer>
  );
};

export default Header;
