import styled from 'styled-components'
import leftArrow from '@/assets/images/landing/arrow-left.svg'
import rightArrow from '@/assets/images/landing/arrow-right.svg'
import useNews from './useNews'
import Image from 'next/image'

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
`
const NewsPartImage = styled(Image)`
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 400px) {
    width: 6px;
    height: 10px;
  }
`
const MainBase = styled.div`
  display: flex;
  flex-direction: column;
`
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
`
const NewsItem = styled.div`
  width: 295px;
  display: flex;
  flex-direction: column;
  @media (max-width: 400px) {
    max-width: 160px;
  }
`
const NewsItemImage = styled(Image)`
  width: 100%;
  resize-mode: cover;
  margin-bottom: 10px;
  border: 0.5px solid #ff0401;
  aspect-ratio: 1/1;
`
const NewsItemDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgba(79, 79, 79, 0.5);
  margin-bottom: 20px;
  @media (max-width: 400px) {
    margin-bottom: 10px;
    font-size: 10px;
  }
`
const NewsItemText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  color: #4f4f4f;
  @media (max-width: 400px) {
    font-size: 12px;
    line-height: 30px;
  }
`
const NewsItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
`

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
`
const News = () => {
  const { isSmallScreen, pagination, setpagination, news } = useNews()
  const totalPage =
    Math.floor((news?.length || 0) / (isSmallScreen ? 4 : 8)) + 1
  return (
    <Main>
      <NewsPartImage
        src={rightArrow}
        alt="right-arrow"
        onClick={() => {
          if (pagination < totalPage) setpagination(pagination + 1)
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
            ?.slice(
              (pagination - 1) * (isSmallScreen ? 4 : 8),
              pagination * (isSmallScreen ? 4 : 8)
            )
            .map((item, index) => (
              <NewsItem tabIndex={index} key={item.title}>
                <NewsItemImage alt="NewsItem" src={item.imageLink} />
                <NewsItemDate>
                  {new Date(item.createdAt).toLocaleString('fa-IR')}
                </NewsItemDate>
                <NewsItemText>{item.text}</NewsItemText>
              </NewsItem>
            ))}
        </NewsItemContainer>
      </MainBase>
      <NewsPartImage
        src={leftArrow}
        alt="left-arrow"
        onClick={() => {
          if (pagination > 1) setpagination(pagination - 1)
        }}
      />
    </Main>
  )
}
export default News
