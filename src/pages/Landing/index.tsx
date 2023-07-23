import styled from "styled-components";
import worldMap from "../../assets/images/landing/world-map2.svg";
import smallWorldMap from "../../assets/images/landing/small-world-map.svg";
import airplanOneFullscreen from "../../assets/images/landing/airplan-fly-one-fullscreen.svg";
import airplanOneMobile from "../../assets/images/landing/airplan-fly-one-mobile.svg";
import airplanTwoFullscreen from "../../assets/images/landing/airplan-fly-two-fullscreen.svg";
import airplanTwoMobile from "../../assets/images/landing/airplan-fly-two-mobile.svg";
import AboutUsPart from "./AboutUsPart";
import NewsPart from "./NewsPart";

import { useMediaQuery } from "usehooks-ts";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  @media (max-width: 400px) {
    align-items: center;
  }
`;
const Topic = styled.div<{ src: string }>`
  display: flex;
  position: relative;
  height: 572px;
  width: calc(100% - 200px);
  background-image: url(${({ src }: { src: string }) => src});
  background-size: cover;
  top: -165px;
  padding: 201px 100px 0 100px;
  margin-top: 62px;
  flex-direction: column;
  @media (max-width: 400px) {
    width: calc(100% - 52px);
    position: static;
    padding: 0;
    height: 341px;
    margin: auto;
    margin-top: 7px;
  }
`;
const TopicTitle = styled.div`
  font-weight: 700;
  font-size: 64px;
  text-align: right;
  color: #ff0401;
  @media (max-width: 400px) {
    font-size: 36px;
    text-align: center;
    margin-bottom: 32px;
    margin-top: 45px;
  }
`;
const TopicDescription = styled.p`
  font-weight: 400;
  font-size: 40px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #000000;
  width: 381px;
  @media (max-width: 400px) {
    font-size: 32px;
    width: 100%;
    text-align: center;
  }
`;
const AirplanImage = styled.img`
  margin: 0 auto;
  position: relative;
`;
const Landing = () => {
  const isSmallScreen = useMediaQuery("(max-width: 400px)");
  return (
    <Body>
      <Topic src={!isSmallScreen ? worldMap : smallWorldMap}>
        <TopicTitle>هواپیمایی سام</TopicTitle>
        <TopicDescription>
          آماده برای پرواز زمانی که شما آماده هستید
        </TopicDescription>
      </Topic>
      <AirplanImage
        src={!isSmallScreen ? airplanOneFullscreen : airplanOneMobile}
        alt="airplan-one"
      />
      <AboutUsPart />
      <AirplanImage
        src={!isSmallScreen ? airplanTwoFullscreen : airplanTwoMobile}
        alt="airplan-two"
      />
      <NewsPart />
    </Body>
  );
};
export default Landing;
