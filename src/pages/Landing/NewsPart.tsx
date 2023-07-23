import styled from "styled-components";
import leftArrow from "../../assets/images/landing/arrow-left.svg";
import rightArrow from "../../assets/images/landing/arrow-right.svg";
import newsIcon from "../../assets/images/landing/news-icon.svg";
import useNewsPart from "./useNewsPart";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 34px;
  margin-top: 112px;
  margin-bottom: 105px;
  @media (max-width: 400px) {
    column-gap: 8px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const NewsPartImage = styled.img`
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 400px) {
    width: 6px;
    height: 10px;
  }
`;
const MainBase = styled.div`
  display: flex;
  flex-direction: column;
`;
const BaseHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-weight: 400;
  font-size: 20px;
  color: #4f4f4f;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const NewsItem = styled.div<{ src: string }>`
  width: 260px;
  height: 260px;
  background-image: url(${({ src }: { src: string }) => src});
  background-size: cover;
  border-radius: ${(props) =>
    props.tabIndex === 0
      ? "0 10px 0 0"
      : props.tabIndex === 3
      ? "10px 0  0 0"
      : props.tabIndex === 4
      ? "0 0 10px 0"
      : props.tabIndex === 7
      ? "0 0 0 10px"
      : "0"};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 400px) {
    max-width: 160px;
    max-height: 156px;
    border-radius: ${(props) =>
      props.tabIndex === 0
        ? "0 10px 0 0"
        : props.tabIndex === 1
        ? "10px 0  0 0"
        : props.tabIndex === 2
        ? "0 0 10px 0"
        : props.tabIndex === 3
        ? "0 0 0 10px"
        : "0"};
  }
`;
const NewsItemBottom = styled.div`
  display: flex;
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0.8) 32.86%,
    rgba(255, 255, 255, 0.64) 64.54%,
    rgba(255, 255, 255, 0.4) 98.81%
  );
  backdrop-filter: blur(10px);
  padding: 10px 16px 0 16px;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  border-radius: ${(props) =>
    props.tabIndex === 4
      ? "0 0 10px 0"
      : props.tabIndex === 7
      ? "0 0 0 10px"
      : "0"};

  @media (max-width: 400px) {
    font-size: 10px;
    padding: 4px 9.5px 0 9.5px;
    border-radius: ${(props) =>
      props.tabIndex === 2
        ? "0 0 10px 0"
        : props.tabIndex === 3
        ? "0 0 0 10px"
        : "0"};
  }
`;
const NewsItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const NewsIcon = styled.img`
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.8;
  }
`;
const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 12px;
    font-weight: 400;
  }
`;
const NewsPart = () => {
  const { isSmallScreen, pagination, setpagination, news } = useNewsPart();
  const totalPage = Math.floor(news.length / (isSmallScreen ? 4 : 8)) + 1;

  return (
    <Main>
      <NewsPartImage
        src={rightArrow}
        alt="right-arrow"
        onClick={() => {
          if (pagination < totalPage) setpagination(pagination + 1);
        }}
      />
      <MainBase>
        <BaseHeader>
          <span>اخبار و رویدادها</span>
          <Pagination>
            <span>{pagination}</span>
            <span>&nbsp;از&nbsp;</span>
            <span>{totalPage}</span>
          </Pagination>
        </BaseHeader>
        <NewsItemContainer>
          {news
            .slice(
              (pagination - 1) * (isSmallScreen ? 4 : 8),
              pagination * (isSmallScreen ? 4 : 8)
            )
            .map((item, index) => (
              <NewsItem tabIndex={index} key={index} src={item.imageLink}>
                <NewsItemBottom tabIndex={index}>
                  <span>
                    {item.text.length > 20
                      ? item.text.slice(0, 20) + "..."
                      : item.text}
                  </span>
                  <NewsIcon src={newsIcon} alt="news-icon" />
                </NewsItemBottom>
              </NewsItem>
            ))}
        </NewsItemContainer>
      </MainBase>
      <NewsPartImage
        src={leftArrow}
        alt="left-arrow"
        onClick={() => {
          if (pagination > 1) setpagination(pagination - 1);
        }}
      />
    </Main>
  );
};
export default NewsPart;
