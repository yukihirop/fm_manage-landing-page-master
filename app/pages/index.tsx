import styled from "@emotion/styled";

const Container = styled.main`
  max-width: 1148px;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("./images/bg-simplify-section-desktop.svg") top right
    ${(props) => props.theme.colors.neutral.veryPaleRed};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`;

const HeaderTitle = styled.h1`
  width: 160px;
  height: 60px;
  margin: auto 0;
  background-image: url("./images/logo.svg");
  background-repeat: no-repeat;
  background-position-y: center;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderMenuContainer = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }

  li {
    width: 90px;
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.primary.brightRed};
    }
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
`;

export default function Home() {
  const menus = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle />
        <HeaderMenuContainer>
          <ul>
            {menus.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </HeaderMenuContainer>
        <HeaderGettingStarted>Get Started</HeaderGettingStarted>
      </HeaderContainer>
    </Container>
  );
}
