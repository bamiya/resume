import * as Styled from "./styled";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <Styled.Wrapper scroll={scrollPosition > 100 ? true : false}>
      <Styled.Title>testtexttt</Styled.Title>
      <Styled.Text>testtext</Styled.Text>
      <Styled.Text>testtext</Styled.Text>
    </Styled.Wrapper>
  );
};
export default Header;
