import * as Styled from "./styled";

const Main = () => {
  return (
    <>
      <Styled.FirstWrapper>
        <Styled.TitleText>
          개발자 포트폴리오 <br />
          -이정도-
        </Styled.TitleText>
        <Styled.Intro>
          반갑습니다. <br />
          번뜩이는 아이디어로 빠르게 성장하는 개발자 입니다. <br />
          새로운 스택을 배워 직접 적용해 보는것이 취미 입니다.
        </Styled.Intro>
      </Styled.FirstWrapper>
      <Styled.SecondWrapper>
        <Styled.TitleText>ABOUT ME</Styled.TitleText>
        <Styled.InfoBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/person.png`} />
            <Styled.Text1>이름</Styled.Text1>
            <Styled.Text2>이정도</Styled.Text2>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/calendar.png`} />
            <Styled.Text1>생년월일</Styled.Text1>
            <Styled.Text2>93.04.16</Styled.Text2>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/phone.png`} />
            <Styled.Text1>전화번호</Styled.Text1>
            <Styled.Text2>010-4767-1986</Styled.Text2>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/marker.png`} />
            <Styled.Text1>주소</Styled.Text1>
            <Styled.Text2>창원시</Styled.Text2>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/email.png`} />
            <Styled.Text1>이메일</Styled.Text1>
            <Styled.Text2>bamiyamy@gmail.com</Styled.Text2>
          </Styled.TextBox>
        </Styled.InfoBox>
      </Styled.SecondWrapper>
      <Styled.ThirdWrapper>
        <Styled.TitleText>Skills</Styled.TitleText>
        <Styled.WrapperBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Backend</Styled.SkillName>
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Frontend</Styled.SkillName>
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Version Control</Styled.SkillName>
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Communication</Styled.SkillName>
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Certificate</Styled.SkillName>
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
        </Styled.WrapperBox>
      </Styled.ThirdWrapper>
      <Styled.FourthWrapper>
        <Styled.TitleText>Projects</Styled.TitleText>
      </Styled.FourthWrapper>
    </>
  );
};
export default Main;
