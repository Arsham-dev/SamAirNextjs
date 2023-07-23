import styled from "styled-components";
import contactInfoImage from "../../assets/images/contact/info.png";

import address from "../../assets/images/contact/address.svg";
import phone from "../../assets/images/contact/phone.svg";
import post from "../../assets/images/contact/post.svg";
import person from "../../assets/images/contact/person.svg";
import emailIcon from "../../assets/images/contact/email.svg";

import Input from "../../componets/Input";
import { useState } from "react";
import request from "../../componets/request";
import { toast } from "react-toastify";
import Image from "next/image";

const ContactBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 50px;
  margin: 70px 0 150px 0;
  @media (max-width: 400px) {
    flex-direction: column;
    width: calc(100% - 20px);
    margin: 0 10px;
    row-gap: 50px;
  }
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 571px;
  width: 571px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const ContactInfoRedPart = styled.div`
  min-width: 95px;
  height: 100%;
  background-color: #ff0401;
  @media (max-width: 400px) {
    display: none;
  }
`;
const ContactInfoText = styled.div<{ image: string }>`
  height: calc(100%);
  background-image: url(${({ image }: { image: string }) => image});
  width: calc(100%);
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 30px 0 30px;
  @media (max-width: 400px) {
    border-radius: 20px;
  }
`;
const ContactInfoTextItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
`;
const ContactInfoTextItemTitle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  column-gap: 10px;
`;
const ContactInfoTextItemDescription = styled.div`
  display: flex;
`;
const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-left: 117px;
  width: 702px;
  @media (max-width: 400px) {
    width: 100%;
    margin: 0;
    align-items: center;
    margin-bottom: 50px;
  }
`;
const SubmitButtton = styled.button`
  width: 100%;
  text-align: center;
  font-family: "Shabnam";
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  background: #ff0401;
  border: 1px solid rgba(79, 79, 79, 0.3);
  padding: 16px 0;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    opacity: 0.7;
  }
`;
const ContactFormTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 79px;
  color: #000000;
  align-items: flex-end;
`;
const ContactFormTitleLine = styled.div`
  width: 345px;
  height: 6px;
  background: #000000;
  margin-bottom: 15px;
  @media (max-width: 400px) {
    display: none;
  }
`;
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [text, settext] = useState("");
  const sendMessage = async () => {
    const { status } = await request("Mail", "POST", {
      nameLname: name,
      email: email,
      message: text,
    });
    if (status === 200)
      toast("پیام شما با موفقیت ارسال شد", { type: "success" });
  };
  return (
    <ContactBase>
      <ContactInfo>
        <ContactInfoRedPart />
        <ContactInfoText image={contactInfoImage.src}>
          <ContactInfoTextItem>
            <ContactInfoTextItemTitle>
              <div>آدرس:</div>
              <Image src={address} alt="address" />
            </ContactInfoTextItemTitle>
            <ContactInfoTextItemDescription>
              تهران _ خیابان ستارخان ، دریا نو ۹ ، پلاک ۷
            </ContactInfoTextItemDescription>
          </ContactInfoTextItem>
          <ContactInfoTextItem>
            <ContactInfoTextItemTitle>
              <div>تلفن:</div>
              <Image src={phone} alt="phone" />
            </ContactInfoTextItemTitle>
            <ContactInfoTextItemDescription>
              02163493000
            </ContactInfoTextItemDescription>
          </ContactInfoTextItem>
          <ContactInfoTextItem>
            <ContactInfoTextItemTitle>
              <div>کدپستی:</div>
              <Image src={post} alt="address" />
            </ContactInfoTextItemTitle>
            <ContactInfoTextItemDescription>
              1393864516
            </ContactInfoTextItemDescription>
          </ContactInfoTextItem>
        </ContactInfoText>
      </ContactInfo>
      <ContactForm>
        <ContactFormTitle>
          <div>ارتباط با ما</div>
          <ContactFormTitleLine />
        </ContactFormTitle>
        <Input
          placeholder="نام و‌ نام‌ خانوادگی"
          value={name}
          onChange={(value) => setname(value)}
          icon={person}
          type="text"
        />
        <Input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(value) => setemail(value)}
          icon={emailIcon}
        />
        <Input
          placeholder="متن پیام"
          value={text}
          onChange={(value) => settext(value)}
          isTextArea
        />
        <SubmitButtton onClick={sendMessage}>ارسال پیام</SubmitButtton>
      </ContactForm>
    </ContactBase>
  );
};
export default Contact;
