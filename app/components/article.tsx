import React from "react";
import styled from "@emotion/styled";
import { Article as IArticle } from "interfaces";
import { md } from "styles/media-query";

const ArticleContainer = styled.section`
  width: 100%;
  display: flex;
  margin-top: 2rem;

  ${md} {
    flex-direction: column;
    justify-content: center;
  }
`;
const ArticleMain = styled.div`
  width: 50%;
  padding: 0.5rem 0rem;

  ${md} {
    text-align: center;
    width: 100%;
    margin: 0 auto;
  }
`;
const ArticleMainTitle = styled.h2`
  margin-top: 0;
  font-size: 2rem;
  font-weight: 500;
`;
const ArticleMainDesc = styled.p`
  font-size: 0.8em;
  line-height: 1.5rem;
  width: 80%;
  color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};

  ${md} {
    margin: 0 auto;
    /* width: 100%; */
  }
`;
const ArticleAside = styled.aside`
  width: 50%;

  ul {
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  ${md} {
    width: 100%;
  }
`;
const ArticleAsideItemTitleContainer = styled.section`
  display: flex;

  ${md} {
    background-color: ${(props) => props.theme.colors.neutral.veryPaleRed};
    width: 100vw;
    margin: 0;
    margin-right: calc(50% - 50vw);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;
const ArticleAsideItemIndex = styled.span`
  width: 60px;
  height: 1.6rem;
  padding: 0.3rem 0.5rem;
  margin-right: 1rem;
  background-color: ${(props) => props.theme.colors.primary.brightRed};
  border-radius: 20px;
  text-align: center;
  color: white;
  vertical-align: middle;
  font-size: 0.8rem;
`;
const ArticleAsideItemTitle = styled.h3`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.6rem;
  vertical-align: middle;
`;
const ArticleAsideItemDesc = styled.p`
  font-size: 0.8rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
  margin-left: calc(60px + 1rem);
`;

const Article = () => {
  const articles: IArticle[] = [
    {
      title: "Track company-wide progress",
      desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      title: "Advanced built-in reports",
      desc: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      title: "Everything you need in one place",
      desc: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <ArticleContainer>
      <ArticleMain>
        <ArticleMainTitle>What&apos;s different about Manage?</ArticleMainTitle>
        <ArticleMainDesc>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </ArticleMainDesc>
      </ArticleMain>
      <ArticleAside>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <ArticleAsideItemTitleContainer>
                <ArticleAsideItemIndex>0{index + 1}</ArticleAsideItemIndex>
                <ArticleAsideItemTitle>{article.title}</ArticleAsideItemTitle>
              </ArticleAsideItemTitleContainer>
              <ArticleAsideItemDesc>{article.desc}</ArticleAsideItemDesc>
            </li>
          ))}
        </ul>
      </ArticleAside>
    </ArticleContainer>
  );
};

export default Article;
