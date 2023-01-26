import * as Styled from "./styled";

const Main = () => {
  return (
    <>
      <Styled.FirstWrapper>
        <Styled.TitleText>개발자 포트폴리오 -이정도-</Styled.TitleText>
        <Styled.Intro>테스트 소개글</Styled.Intro>
      </Styled.FirstWrapper>
      <Styled.SecondWrapper>
        <Styled.TitleText>ABOUT ME</Styled.TitleText>
        <Styled.Image src={`assets/person.png`} />
        <Styled.Text>이정도</Styled.Text>
        <Styled.Image src={`assets/calendar.png`} />
        <Styled.Text>93.04.16</Styled.Text>
        <Styled.Image src={`assets/phone.png`} />
        <Styled.Text>010-4767-1986</Styled.Text>
        <Styled.Image src={`assets/marker.png`} />
        <Styled.Text>창원시</Styled.Text>
        <Styled.Image src={`assets/email.png`} />
        <Styled.Text>bamiyamy@gmail.com</Styled.Text>
      </Styled.SecondWrapper>
      <Styled.ThirdWrapper>
        <Styled.TitleText>Skills</Styled.TitleText>
      </Styled.ThirdWrapper>
      <Styled.FourthWrapper>
        <Styled.TitleText>Projects</Styled.TitleText>
      </Styled.FourthWrapper>
    </>
  );
};
export default Main;
