import styled from 'styled-components'
import aboutAirplanImage from '@/assets/images/about/firstAirplane.svg'
import airNaviAirplanImage from '@/assets/images/about/secondAirplane.svg'
import airplanePictureLeft from '@/assets/images/about/airplanePictureLeft.svg'
import footer from '@/assets/images/about/footer.svg'
import airNaviPic from '@/assets/images/about/air-navi.svg'
import airplanePictureLeftMobile from '@/assets/images/about/airplanePictureLeftMobile.svg'
import useAbout from './useAbout'
import AirNaviItem from './AirNaviItem'
import BoardOfDirectorsItem from './BoardOfDirectorsItem'
import Image from 'next/image'

const AboutBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`
const AboutTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 104.69px;
  color: #000000;
  align-items: flex-end;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 39px;
    margin-bottom: 47px;
  }
`
const AboutTitleLine = styled.div`
  width: 505px;
  height: 10px;
  background: #000000;
  margin-bottom: 10px;
  @media (max-width: 400px) {
    width: 118px;
    height: 4px;
  }
`
const AboutDiscription = styled.div<{ src: string }>`
  display: flex;
  flex-direction: column;
  row-gap: 90px;
  position: relative;
  background-image: url(${(props: { src: string }) => props.src});
  width: 100%;
  padding: 185px 0;
  background-size: cover;
  @media (max-width: 768px) {
    padding: 0;
    background-image: none;
    margin-bottom: 48px;
    row-gap: 30px;
  }
`
const AboutDiscriptionLeft = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 7.1vw;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1180px) {
    flex-direction: column-reverse;
    margin-right: 0;
    row-gap: 30px;
    align-items: center;
  }
`
const AboutDiscriptionLeftImage = styled.div<{ src: string }>`
  width: 561px;
  background: linear-gradient(#ff0401, #ff0401) left no-repeat,
    url(${({ src }: { src: string }) => src}) right no-repeat;
  background-size: 168px, 393px;
  border-radius: 0px 20px 20px 0px;
  height: 287px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 1180px) {
    width: 100%;
    height: 153px;
    background: url(${(props: { src: string }) => props.src}) center no-repeat,
      linear-gradient(#ff0401, #ff0401) right no-repeat;
    background-size: 209px, 100%;
    border-radius: 0;
  }
`
const AboutDiscriptionLeftText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #4f4f4f;
  max-width: 505px;
  @media (max-width: 1180px) {
    max-width: 100%;
    padding: 0 34px;
    font-size: 12px;
    line-height: 30px;
  }
`
const AboutDiscriptionRight = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 7.1vw;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 1180px) {
    flex-direction: column-reverse;
    margin-left: 0;
    row-gap: 30px;
    align-items: center;
  }
`
const AboutDiscriptionRightImage = styled.div<{ src: string }>`
  width: 561px;
  background: url(${({ src }: { src: string }) => src}) right no-repeat,
    linear-gradient(#ff0401, #ff0401) left no-repeat;
  background-size: 393px, 168px;
  border-radius: 0px 20px 20px 0px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  height: 287px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 1180px) {
    width: 100%;
    height: 153px;
    background: url(${(props: { src: string }) => props.src}) center no-repeat,
      linear-gradient(#ff0401, #ff0401) right no-repeat;
    background-size: 209px, 100%;
    border-radius: 0;
  }
`
const AboutDiscriptionRightText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #4f4f4f;
  max-width: 505px;
  @media (max-width: 1180px) {
    max-width: 100%;
    padding: 0 34px;
    font-size: 12px;
    line-height: 30px;
  }
`
const AirNaviBase = styled.div<{ src: string }>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({ src }: { src: string }) => src});
  padding-bottom: 275px;
  background-size: cover;
  @media (max-width: 768px) {
    padding-bottom: 0;
    background-image: none;
    margin-bottom: 50px;
  }
`
const AirNavi = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 27px;
  width: fit-content;
  justify-content: space-around;
  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
    width: 100%;
    row-gap: 10px;
  }
`
const AirNaviTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding: 67px 19px;
  background: #ff0401;
  border-radius: 0 20px 20px 0;
  writing-mode: vertical-rl;
  @media (max-width: 1180px) {
    position: static;
    border-radius: 0;
    padding: 0;
    width: 100%;
    height: 31px;
    background: url(${airNaviPic}) center no-repeat,
      linear-gradient(#ff0401, #ff0401) right no-repeat;
    background-size: 152px, 100%;
    margin-bottom: 21px;
  }
`
const BoardOfDirectorsBase = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 142px;
  @media (max-width: 1180px) {
    flex-direction: column;
    margin-left: 0;
    row-gap: 49px;
    align-items: center;
  }
`
const BoardOfDirectorsTitle = styled.div`
  padding: 19px;
  background: #ff0401;
  border-radius: 20px 0 0 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  writing-mode: vertical-rl;
  @media (max-width: 1180px) {
    border-radius: 0;
    padding: 0;
    width: 100%;
    height: 31px;
    text-align: center;
    writing-mode: unset;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
  }
`
const BoardOfDirectorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 45px;
  width: fit-content;
  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const AboutFooter = styled(Image)`
  margin-bottom: 60px;
`
const About = () => {
  const { firstText, isTablet, secondText, airplane, director } = useAbout()

  return (
    <AboutBase>
      <AboutTitle>
        <span>درباره ما</span>
        <AboutTitleLine />
      </AboutTitle>
      <AboutDiscription src={aboutAirplanImage.src}>
        <AboutDiscriptionLeft>
          <AboutDiscriptionLeftImage
            src={
              isTablet ? airplanePictureLeftMobile.src : airplanePictureLeft.src
            }
          />
          <AboutDiscriptionLeftText>{firstText}</AboutDiscriptionLeftText>
        </AboutDiscriptionLeft>
        <AboutDiscriptionRight>
          <AboutDiscriptionRightImage
            src={
              isTablet ? airplanePictureLeftMobile.src : airplanePictureLeft.src
            }
          />
          <AboutDiscriptionRightText>{secondText}</AboutDiscriptionRightText>
        </AboutDiscriptionRight>
      </AboutDiscription>
      <AirNaviBase src={airNaviAirplanImage.src}>
        <AirNaviTitle>
          {!isTablet && (
            <span>
              ناوگان
              <br />
              هوایی
            </span>
          )}
        </AirNaviTitle>
        <AirNavi>
          {airplane?.map((item, index) => (
            <AirNaviItem
              index={index}
              count={1}
              title={item.model + ' ' + item.register}
              key={item.model + item.register}
              image={item.imageLink}
            />
          ))}
        </AirNavi>
      </AirNaviBase>
      <BoardOfDirectorsBase>
        <BoardOfDirectorsTitle>
          اعضای
          {!isTablet ? <br /> : ' '}
          هیئت مدیره
        </BoardOfDirectorsTitle>
        <BoardOfDirectorsContainer>
          {director?.map((item, index) => (
            <BoardOfDirectorsItem
              image={item.imageLink}
              name={item.name}
              position={item.position}
              key={index}
            />
          ))}
        </BoardOfDirectorsContainer>
      </BoardOfDirectorsBase>
      {!isTablet && <AboutFooter src={footer} alt="footer" />}
    </AboutBase>
  )
}
export default About
