import styled from "@emotion/styled";
import Header from "components/header";
import Hero from "components/hero";
import Article from "components/article";
import Recommend from "components/recommend";
import Banner from "components/banner";
import Footer from "components/footer"

const Container = styled.main`
  max-width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Article />
        <Recommend />
      </Container>
      <Banner />
      <Footer />
    </>
  );
}
