import styled from "@emotion/styled";
import Header from "components/header";
import Hero from "components/hero";
import Article from "components/article";
import Recommend from "components/recommend";
import Banner from "components/banner";

const Container = styled.main`
  max-width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
`;

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

const FooterLogContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`;
const FooterLog = styled.h1`
  width: 150px;
  height: 60px;
  color: white;
  margin-top: 0;
  background-image: url("./images/logo-footer.svg");
  background-repeat: no-repeat;
  background-position-y: calc(50% + 4px);
`;
const FooterLogMenuList = styled.ul`
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

export default function Home() {
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
    <>
      <Container>
        <Header />
        <Hero />
        <Article />
        <Recommend />
      </Container>
      <Banner />
      <FooterContainer>
        <FooterLogContainer>
          <FooterLog />
          <FooterLogMenuList>
            {snsList.map((sns, i) => (
              <li key={`${sns}-${i}`}>
                <img src={`./images/${sns}`} alt="sns" />
                <a href="#" />
              </li>
            ))}
          </FooterLogMenuList>
        </FooterLogContainer>
        <FooterMenu>
          {footerMenuList1.map((menu) => (
            <li>
              <a href="#" />
              {menu}
            </li>
          ))}
        </FooterMenu>
        <FooterMenu>
          {footerMenuList2.map((menu) => (
            <li>
              <a href="#" />
              {menu}
            </li>
          ))}
        </FooterMenu>
      </FooterContainer>
    </>
  );
}
