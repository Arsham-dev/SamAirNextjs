import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'
interface BoardOfDirectorsItemProps {
  name: string
  position: string
  image: string
}
const BoardOfDirectorsItemBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 318px;
  height: 100%;
  position: relative;
  @media (max-width: 768px) {
    width: 160px;
    height: 176.26px;
    margin-top: 20px;
  }
`
const Circle = styled.div`
  height: 351px;
  width: 318px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  background: rgba(255, 4, 1, 0.2);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    width: 160px;
    height: 176.26px;
  }
`

const BoardOfDirectorsItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #4f4f4f;
  border-radius: 30px;
  padding: 5px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`
const BoardOfDirectorsItemInfoText = styled.div`
  padding: 5px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`
const BoardOfDirectorsItemInfoTextTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
  }
`
const BoardOfDirectorsItemInfoTextPosition = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 26px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 16px;
    max-width: 100px;
  }
`
const BoardOfDirectorsItemInfoImage = styled(Image)`
  height: 247px;
  width: 250px;
  border-radius: 25px 25px 0px 0px;
  @media (max-width: 768px) {
    height: 125px;
    width: 127px;
  }
`
const BoardOfDirectorsItem: FC<BoardOfDirectorsItemProps> = ({
  image,
  name,
  position
}) => {
  return (
    <BoardOfDirectorsItemBase>
      <Circle />
      <BoardOfDirectorsItemInfo>
        <BoardOfDirectorsItemInfoImage
          alt="BoardOfDirectorsItemInfo"
          src={image}
        />
        <BoardOfDirectorsItemInfoText>
          <BoardOfDirectorsItemInfoTextTitle>
            {name}
          </BoardOfDirectorsItemInfoTextTitle>
          <BoardOfDirectorsItemInfoTextPosition>
            {`سمت: ${position}`}
          </BoardOfDirectorsItemInfoTextPosition>
        </BoardOfDirectorsItemInfoText>
      </BoardOfDirectorsItemInfo>
    </BoardOfDirectorsItemBase>
  )
}
export default BoardOfDirectorsItem
