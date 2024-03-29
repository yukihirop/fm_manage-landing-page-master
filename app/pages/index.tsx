import styled from "@emotion/styled";
import Header from "components/header";
import Hero from "components/hero";
import Article from "components/article";
import Banner from "components/banner";
import Footer from "components/footer";
import dynamic from "next/dynamic";
import Modal from "components/modal";
import { open } from "signals";

/**
 * @see https://github.com/vercel/next.js/issues/10608#issuecomment-962515503
 */
const Recommend = dynamic(() => import("components/recommend"), {
  ssr: false,
});

const Container = styled.main`
  max-width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default function Home() {
  return (
    <>
      {open.value && <Modal />}
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
