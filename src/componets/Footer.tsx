import styled from 'styled-components'
import instagramLogo from '../assets/images/components/instagram-logo.svg'
import telegramLogo from '../assets/images/components/telegram-logo.svg'
import whatsappLogo from '../assets/images/components/whats-app-logo.svg'
import footerBottom from '../assets/images/components/footer-bottom.svg'
import footerTop from '../assets/images/components/footer-top.svg'

const Main = styled.footer`
  display: flex;
  flex-direction: column;
`
const TopPart = styled.div`
  position: relative;
`
const TopPartBackgroundImage = styled.div`
  background-image: url(${footerTop});
  background-size: cover;
  width: 100%;
  height: 68px;
  z-index: -1;
  position: absolute;
  top: -14px;
  left: 0px;
`
const TopPartSocialMediaInfo = styled.div`
  width: 100%;
  height: 62px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  background-image: url(${footerBottom});
  background-size: cover;
  z-index: 1000;
`
const BottomPart = styled.div`
  diplay: flex;
  flex-direction: column;
  background-color: #ff0401;
  align-items: center;
  padding-top: 17px;
  width: 100%;
`
const SocialMedia = styled.a`
  text-decoration: none;
  width: 29px;
  height: 27px;
  background-image: url(${(props) => props.media});
`
const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 51px;
  justify-content: center;
  align-items: center;
`
const SepratorLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  margin-top: 41px;
`
const Policy = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  padding: 2px 0;
  & > span {
    font-weight: 700;
  }
`
const Footer = () => {
  return (
    <Main>
      <TopPart>
        <TopPartBackgroundImage />
        <TopPartSocialMediaInfo>
          ما را در شبکه های اجتماعی دنبال کنید
        </TopPartSocialMediaInfo>
      </TopPart>
      <BottomPart>
        <SocialMediaContainer>
          <SocialMedia media={instagramLogo} href="#" />
          <SocialMedia media={telegramLogo} href="#" />
          <SocialMedia media={whatsappLogo} href="#" />
        </SocialMediaContainer>
        <SepratorLine />
        <Policy>
          کلیه حقوق این وبسایت متعلق به <span>هواپیمایی سام&nbsp;</span>می باشد
        </Policy>
      </BottomPart>
    </Main>
  )
}
export default Footer
