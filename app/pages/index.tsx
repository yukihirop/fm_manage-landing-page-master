import styled from "@emotion/styled";
import Header from "components/header";
import Hero from "components/hero";
import Article from "components/article";
import Recommend from "components/recommend";

const Container = styled.main`
  max-width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
  /* background: ${(props) => props.theme.colors.neutral.veryPaleRed}; */
`;

const BigBannerContainer = styled.section`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.neutral.veryPaleRed};
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Article />
      <Recommend />
      <BigBannerContainer>

      </BigBannerContainer>
    </Container>
  );
}
