import React from "react";
import styled from "@emotion/styled";
import { Recommend as IRecommend } from "interfaces";
import GetStarted from "./get-started";
import Slider from "react-slick";
import { useMediaQuery } from "usehooks-ts";


const RecommendTitle = styled.h1`
  text-align: center;
  vertical-align: center;
  margin-bottom: 4rem;
  font-size: 2.5rem;
`;

const RecommendContainer = styled.section`
  margin-top: 4rem;
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
  margin: 2rem 0.5rem;
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
  margin-top: 3rem;
`;

const RecommendSliderContainer = styled.section`
  width: 100%;
  margin-top: 1rem;
  padding: 0;
  justify-content: space-between;
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
    {
      profile: "./images/avatar-shanai.png",
      name: "Shanai Gough",
      desc: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    },
  ];

  const isMd = useMediaQuery("(max-width: 768px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMd ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <RecommendContainer>
      <RecommendTitle>What they've said</RecommendTitle>
      <RecommendSliderContainer>
        <Slider {...settings}>
          {recommends.map((recommend, index) => (
            <div key={`${recommend.profile}-${index}`}>
              <RecommendItem>
                <RecommendItemProfile src={recommend.profile} />
                <RecommendItemTitle>{recommend.name}</RecommendItemTitle>
                <RecommendItemDesc>{recommend.desc}</RecommendItemDesc>
              </RecommendItem>
            </div>
          ))}
        </Slider>
      </RecommendSliderContainer>
      <RecommendGetStartedContainer>
        <GetStarted />
      </RecommendGetStartedContainer>
    </RecommendContainer>
  );
};

export default Recommend;
