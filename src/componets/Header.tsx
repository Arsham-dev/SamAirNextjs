import styled from "styled-components";
import logo from "../assets/images/components/logo.svg";
import moreOption from "../assets/images/components/more-option.svg";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderBase = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 100px;
  z-index: 1000;
  position: sticky;
  @media (max-width: 400px) {
    margin: 20px;
    align-items: flex-start;
  }
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.media});
  width: 132px;
  height: 82px;
`;
const PagesLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  border-bottom: 3px solid
    ${(props) => (props["aria-selected"] ? "#ff0401" : "transparent")};
  text-decoration: none;
  transition: all 0.5s linear;
  @media (max-width: 400px) {
    color: #fff;
  }
`;
const PageLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 70px;
  @media (max-width: 400px) {
    display: none;
  }
`;
const EmptyDiv = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
`;
const MoreOption = styled.img`
  display: none;
  @media (max-width: 400px) {
    display: flex;
    margin-top: 15px;
  }
`;
const Menu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "flex" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "100%" : "0")};
  height: 100vh;
  transition: width 0.5s linear;
  background-color: rgba(0, 0, 0, 0.9);
  row-gap: 40px;
`;
const Header = () => {
  const location = useRouter();
  const [isOpen, setisOpen] = useState(false);
  const onClose = () => {
    setisOpen(false);
  };

  return (
    <HeaderBase>
      <EmptyDiv />
      <PageLinkContainer>
        <PagesLink href="/" aria-selected={location.pathname === "/"}>
          صفحه اصلی
        </PagesLink>
        <PagesLink href="/about" aria-selected={location.pathname === "/about"}>
          درباره ما
        </PagesLink>
        <PagesLink href="/news" aria-selected={location.pathname === "/news"}>
          اخبار و رویداد‌ها
        </PagesLink>
        <PagesLink
          href="/contact"
          aria-selected={location.pathname === "/contact"}
        >
          ارتباط با ما
        </PagesLink>
      </PageLinkContainer>
      <MoreOption onClick={() => setisOpen(!isOpen)} src={moreOption} />
      <Logo media={logo} href="/" />
      <Menu isOpen={isOpen}>
        {isOpen && (
          <>
            <PagesLink href="/" onClick={onClose}>
              صفحه اصلی
            </PagesLink>
            <PagesLink href="/about" onClick={onClose}>
              درباره ما
            </PagesLink>
            <PagesLink href="/news" onClick={onClose}>
              اخبار و رویداد‌ها
            </PagesLink>
            <PagesLink href="/contact" onClick={onClose}>
              ارتباط با ما
            </PagesLink>
          </>
        )}
      </Menu>
    </HeaderBase>
  );
};
export default Header;
