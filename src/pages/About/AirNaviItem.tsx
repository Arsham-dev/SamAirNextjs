import { FC } from "react";
import styled from "styled-components";
interface AirNaviItemProps {
  title: string;
  count: number;
  image: string;
  index: number;
}
const AirNaviItemBase = styled.div<{ index: number }>`
  width: 400px;
  height: 200px;
  background: #f9c7c7;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    height: 114px;
    width: 250px;
    border-radius: 0px 10px 10px 0px;
    margin: ${({ index }: any) =>
      index % 2 === 1 ? "0px auto 0 20px" : "0px 20px 0 auto"};
  }
`;
const AirNaviItemImage = styled.img`
  width: 190px;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  @media (max-width: 768px) {
    width: 108px;
  }
`;
const AirNaviItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
`;
const AirNaviItemTextTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 33px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 23px;
  }
`;
const AirNaviItemTextCount = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }
`;
const AirNaviItem: FC<AirNaviItemProps> = ({ count, image, title, index }) => {
  return (
    <AirNaviItemBase index={index}>
      <AirNaviItemImage src={image} alt="AirNaviItem" />
      <AirNaviItemText>
        <AirNaviItemTextTitle>{title}</AirNaviItemTextTitle>
        <AirNaviItemTextCount>{`تعداد:  ${count} عدد`}</AirNaviItemTextCount>
      </AirNaviItemText>
    </AirNaviItemBase>
  );
};
export default AirNaviItem;
