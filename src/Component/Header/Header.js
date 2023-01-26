import * as Styled from "./styled";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }; //window.scrollY === window.pageYOffset 둘은 같고, 0일때 스크롤 맨 위 초기값,
  //window.scrollY || document.documentElement.scrollTop 는 브라우저별 호환성때문에 사용

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <Styled.Wrapper scroll={scrollPosition > 100 ? true : false}>
      {/* 스크롤이 100px 초과일때 true, 100 이하면 false */}
      <Styled.Title>JD's Portfolio</Styled.Title>
      <Styled.Text>testtext</Styled.Text>
      <Styled.Text>testtext</Styled.Text>
    </Styled.Wrapper>
  );
};
export default Header;
