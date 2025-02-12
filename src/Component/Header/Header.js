import * as Styled from "./styled";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }; //window.scrollY === window.pageYOffset 둘은 같고, 0일때 스크롤 맨 위 초기값,
  //window.scrollY || document.documentElement.scrollTop 는 브라우저별 호환성때문에 둘중 하나만 참이어도 참이게끔 사용 (크로스브라우징)
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Styled.Wrapper scroll={scrollPosition > 100 ? true : false}>
      {/* 스크롤이 100px 초과일때 true, 100 이하면 false */}
      <Styled.Menu>
        <Styled.Title onClick={scrollToTop}>JD's Portfolio</Styled.Title>
        <Styled.WrapperMenu>
          <Link to="1" spy={true} smooth={true}>
            <Styled.Text>About me</Styled.Text>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <Styled.Text>Channel</Styled.Text>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <Styled.Text>Skills</Styled.Text>
          </Link>
          <Link to="4" spy={true} smooth={true}>
            <Styled.Text>Career</Styled.Text>
          </Link>
          <Link to="5" spy={true} smooth={true}>
            <Styled.Text>Projects</Styled.Text>
          </Link>
        </Styled.WrapperMenu>
      </Styled.Menu>
    </Styled.Wrapper>
  );
};
export default Header;
