import * as Styled from "./styled";

const Main = () => {
  return (
    <>
      <Styled.FirstWrapper>
        <Styled.TitleText>개발자 포트폴리오 -이정도-</Styled.TitleText>
        <Styled.Intro>테스트 소개글</Styled.Intro>
      </Styled.FirstWrapper>
      <Styled.SecondWrapper>
        <Styled.TextBox>
          <Styled.TitleText>ABOUT ME</Styled.TitleText>
        </Styled.TextBox>
        <Styled.Image src={`${process.env.PUBLIC_URL}/assets/person.png`} />
        <Styled.TextBox>
          <Styled.Text>이름</Styled.Text>
          <Styled.Text>이정도</Styled.Text>
        </Styled.TextBox>
        <Styled.Image src={`${process.env.PUBLIC_URL}/assets/calendar.png`} />
        <Styled.TextBox>
          <Styled.Text>생년월일</Styled.Text>
          <Styled.Text>93.04.16</Styled.Text>
        </Styled.TextBox>
        <Styled.Image src={`${process.env.PUBLIC_URL}/assets/phone.png`} />
        <Styled.TextBox>
          <Styled.Text>전화번호</Styled.Text>
          <Styled.Text>010-4767-1986</Styled.Text>
        </Styled.TextBox>
        <Styled.Image src={`${process.env.PUBLIC_URL}/assets/marker.png`} />
        <Styled.TextBox>
          <Styled.Text>주소</Styled.Text>
          <Styled.Text>창원시</Styled.Text>
        </Styled.TextBox>
        <Styled.Image src={`${process.env.PUBLIC_URL}/assets/email.png`} />
        <Styled.TextBox>
          <Styled.Text>이메일</Styled.Text>
          <Styled.Text>bamiyamy@gmail.com</Styled.Text>
        </Styled.TextBox>
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
