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

const BannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  height: 120px;
  margin: 0 calc(50% - 50vw);
  margin-top: 6rem;
  background-color: ${(props) => props.theme.colors.primary.brightRed};
`;

const BannerTitle = styled.h1`
  margin: auto;
  color: white;
  width: 300px;
`;
const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 0.1rem;
  color: ${(props) => props.theme.colors.primary.brightRed};
  background-color: white;
  border: none;
  border-radius: 20px;
  margin: auto;
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Article />
      <Recommend />
      <BannerContainer>
        <BannerTitle>Simplify how your team works today.</BannerTitle>
        <BannerButton>Get Started</BannerButton>
      </BannerContainer>
    </Container>
  );
}
