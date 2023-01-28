import * as Styled from "./styled";

const Footer = () => {
  const OpenGit = (link) => {
    window.open(link, "_black", "noopener, noreferrer"); //noopener,noreferrer는 보안 취약점 개선
  };
  return (
    <Styled.Wrapper>
      <Styled.IconBox>
        <Styled.Icon src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="github" onClick={() => OpenGit("https://github.com/bamiya/")} />
      </Styled.IconBox>
    </Styled.Wrapper>
  );
};

export default Footer;
