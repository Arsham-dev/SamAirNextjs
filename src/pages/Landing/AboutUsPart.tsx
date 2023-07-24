import styled from 'styled-components'
import aboutUs from '../../assets/images/landing/about-us.svg'
import { useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'
import request from '../../componets/request'
import Link from 'next/link'
const AboutUsPartBase = styled.div`
  margin-top: 65.75px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 45px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 48px;
  width: 504px;
  font-weight: 400;
  line-height: 40px;
  font-size: 16px;
  color: #4f4f4f;
  margin-top: 10px;
  @media (max-width: 400px) {
    width: calc(100% - 72px);
    text-align: center;
  }
`
const MoreInfoButton = styled(Link)`
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  padding: 15.5px 78px;
  background-color: #ff0401;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.7;
  }
`
const AboutUsImage = styled.img`
  @media (max-width: 400px) {
    display: none;
  }
`
const AboutUsPart = () => {
  const [infoText, setinfoText] = useState<string>('')
  const getText = async () => {
    const { response } = await request('LandingText', 'GET')
    setinfoText(response?.text)
  }
  useEffectOnce(() => {
    getText()
  })
  return (
    <AboutUsPartBase>
      <AboutUsImage src={aboutUs} alt="about-us" />
      <Info>
        <span>{infoText}</span>
        <MoreInfoButton href="/about">بیشتر بخوانید</MoreInfoButton>
      </Info>
    </AboutUsPartBase>
  )
}
export default AboutUsPart
