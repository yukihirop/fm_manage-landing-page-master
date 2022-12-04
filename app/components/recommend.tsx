import React from "react";
import styled from "@emotion/styled";
import { Recommend as IRecommend } from "interfaces";
import GetStarted from "./get-started";

const RecommendTitle = styled.h1`
  text-align: center;
  vertical-align: center;
  margin-bottom: 4rem;
  font-size: 2.5rem;
`;

const RecommendContainer = styled.section`
  margin-top: 4rem;

  ul {
    margin-top: 1rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  li {
    width: 32%;
  }
`;
const RecommendItem = styled.section`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral.veryLightGray};
  padding: 1rem;
  font-size: 0.8rem;
  position: relative;
`;
const RecommendItemProfile = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: -30px;
`;
const RecommendItemTitle = styled.h1`
  margin-top: 2rem;
`;
const RecommendItemDesc = styled.p``;

const RecommendGetStartedContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const Recommend = () => {
  const recommends: IRecommend[] = [
    {
      profile: "./images/avatar-anisha.png",
      name: "Anisha Li",
      desc: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      profile: "./images/avatar-ali.png",
      name: "Ali Bravo",
      desc: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      profile: "./images/avatar-richard.png",
      name: "Richard Watts",
      desc: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    },
    // {
    //   profile: "",
    //   name: "Shanai Gough",
    //   desc: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    // }
  ];

  return (
    <RecommendContainer>
      <RecommendTitle>What they've said</RecommendTitle>
      <ul>
        {recommends.map((recommend, index) => (
          <li key={index}>
            <RecommendItem>
              <RecommendItemProfile src={recommend.profile} />
              <RecommendItemTitle>{recommend.name}</RecommendItemTitle>
              <RecommendItemDesc>{recommend.desc}</RecommendItemDesc>
            </RecommendItem>
          </li>
        ))}
      </ul>
      <RecommendGetStartedContainer>
        <GetStarted />
      </RecommendGetStartedContainer>
    </RecommendContainer>
  );
};

export default Recommend;
