import styled from "@emotion/styled";
import Header from "components/header";
import Hero from "components/hero";
import Article from "components/article";

const Container = styled.main`
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
  background: ${(props) => props.theme.colors.neutral.veryPaleRed};
`;



export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Article/>
    </Container>
  );
}
