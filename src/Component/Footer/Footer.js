import * as Styled from "./styled";

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.IconBox>
        <Styled.Icon src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="github" />
      </Styled.IconBox>
      <Styled.IconBox>
        <Styled.Icon src={`${process.env.PUBLIC_URL}/assets/velog.png`} alt="velog" />
      </Styled.IconBox>
    </Styled.Wrapper>
  );
};

export default Footer;
