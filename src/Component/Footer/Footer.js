import * as Styled from "./styled";
//import { useLocation } from "react-router-dom";

const Footer = () => {
  //const location = useLocation();
  return (
    <Styled.Wrapper>
      <Styled.LogoBox>
        <Styled.Img src={"assets/logo.png"} alt="logo" />
        <Styled.LogoTitle>TRAVEL PLANNER</Styled.LogoTitle>
      </Styled.LogoBox>
      <Styled.IconBox>
        <Styled.Icon src={"assets/github.png"} alt="https://github.com/Bamiya" />
        <Styled.Icon src={"assets/github.png"} alt="github_img" />
        <Styled.Icon src={"assets/github.png"} alt="github_img" />
      </Styled.IconBox>
    </Styled.Wrapper>
  );
};

export default Footer;
