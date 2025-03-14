import styled from "styled-components";

export const FirstWrapper = styled.div`
  /* 레이아웃 */
  display: flex; //가로방향 정렬
  flex-direction: column; //컨테이너 안의 div들을 열(column)로 배치
  align-items: center; // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
  justify-content: center;
  height: 65vh;
  width: 100%;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
  /* 색상 */
  background-color: rgb(254 255 225);
`;

export const TitleText = styled.div`
  color: black;
  font-size: 60px;
  @media screen and (max-width: 1023px) {
    font-size: 40px;
  }
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  font-weight: bold;
  text-align: center; //텍스트 정렬할때 사용
  margin: 25px;
  padding-top: 50px;
`;

export const Intro = styled.div`
  font-size: 20px;
  @media screen and (max-width: 1023px) {
    font-size: 15px;
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
  text-align: center;
  padding-top: 20px;
  line-height: 200%;
`;

export const SecondWrapper = styled.div`
  /* 레이아웃 */
  display: grid;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  padding-bottom: 50px;
  /* 색상 */
  background: white;
  flex-wrap: wrap;
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 10vh 0;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 30px 0;
`;

export const Image = styled.img`
  width: 40px;
  height: 30px;
  margin: 10px;
  margin-left: 100px;
`;

export const Text1 = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
  float: left;
`;

export const ThirdWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: rgb(39 39 39);
  flex-wrap: wrap;
`;

export const WrapperChannel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 30px;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const CTitleText = styled.div`
  color: white;
  font-size: 60px;
  @media screen and (max-width: 1023px) {
    font-size: 40px;
  }
  font-weight: bold;
  text-align: center; //텍스트 정렬할때 사용
  margin: 25px;
  padding-top: 50px;
`;

export const ChannelBox = styled.div`
  width: 500px;
  @media screen and (max-width: 1023px) {
    width: 300px;
  }
  height: auto;
  background: white;
  margin: 20px auto;
  border-radius: 20px;
  padding: 10px 0;
  margin: 15vh 0;
  &:hover {
    transform: translateY(15px);
  } //hover는 마우스를 올렸을때 반응하게하는 css 요소
`;

export const LinkText = styled.div`
  cursor: pointer;
  font-size: 15px;
  padding-bottom: 15px;
  color: rgb(6 69 173);
  &:hover {
    text-decoration: underline rgb(6 69 173);
  }
`;

export const ChannelText = styled.div`
  font-size: 16px;
  font-weight: 10px;
  line-height: 30px;
`;

export const FourthWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: rgb(153 200 255);
  flex-wrap: wrap;
`;

export const WrapperSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 30px;
  margin: 10vh 0;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
//안에 내용물에 따라 크기 자동조절할려면 height auto로 주고 overflow hidden으로 주면됨
export const SkillBox = styled.div`
  width: 300px;
  height: auto;
  overflow: hidden;
  background: white;
  margin: 20px auto;
  border-radius: 20px;
  padding: 10px 0;
  box-shadow: 18px 18px 6px rgba(0, 0, 0, 0.19);
  /*box-shadow: [h-offset] [v-offset] [blur] [spread] [color] (inset);*/
  /*h-offset: 그림자의 좌우 위치 설정*/
  /*v-offset: 그림자의 상하 위치 설정*/
  /*blur: 그림자의 흐려짐 정도의 범위*/
  /*spread: 그림자의 크기*/
  /*color: 그림자 색상*/
  /*inset: (optional) 요소 내부에 그림자 표현, 기본적으로 그림자는 요소 외부에 위치 */
  &:hover {
    transform: translateY(15px);
  } //hover는 마우스를 올렸을때 반응하게하는 css 요소
`;

export const SkillWrapperBox = styled.div`
  margin: 20px 20px;
`;

export const SkillName = styled.div`
  color: orange;
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
`;

export const LogoImage = styled.img`
  width: 100%;
`;


export const FifthWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: white;
  // background-color: rgb(222, 222, 255);
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const WrapperCareer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  border-top: 1px solid grey;  /* 위쪽 테두리 */
  border-bottom: 1px solid grey; /* 아래쪽 테두리 */
`;

export const CareerBox = styled.div`
  width: 800px;
  @media screen and (max-width: 1023px) {
    width: 400px;
  }
  height: auto;
  margin: 20px auto;
  padding: 10px 0;
  margin: 15vh 0;
`;

export const CareerCom = styled.div`
  color: black;
  font-size: 40px;
  @media screen and (max-width: 1023px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
  text-align: center; //텍스트 정렬할때 사용
  padding-bottom: 30px;
`;

export const CareerDate = styled.div`
  color: black;
  font-size: 20px;
  @media screen and (max-width: 1023px) {
    font-size: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: 7px;
  }
  text-align: center; //텍스트 정렬할때 사용
`;

export const CareerInfoText = styled.div`
  color: grey;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 1023px) {
    font-size: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: 7px;
  }
  text-align: left; //텍스트 정렬할때 사용
  padding-bottom: 15px;
`;

export const CareerInfo = styled.div`
  color: black;
  font-size: 20px;
  @media screen and (max-width: 1023px) {
    font-size: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: 7px;
  }
  text-align: left; //텍스트 정렬할때 사용
  padding-bottom: 25px;
  line-height: 2;
  margin-left: 30px;
    div::before {
    content: "● ";
    font-weight: bold;
    margin-right: 8px;
    color: black;
  }
`;

export const SixthWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: rgb(250, 238, 255);
  flex-wrap: wrap;
`;

export const WrapperProject = styled.div`
  display: grid;
  margin: 15vh 0;
  @media screen and (max-width: 1023px) {
    width: 500px;
  }
`;

export const ProjectBox = styled.div`
  display: grid;
  width: auto;
  height: auto;
  background: white;
  margin: 50px auto;
  border-radius: 20px;
  padding: 10px 0;
`;

export const PTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1023px) {
    font-size: 20px;
  }
`;

export const PdateText = styled.div`
  color: black;
  font-size: 17px;
  font-weight: lighter;
  text-align: center;
  padding-top: 10px;
`;

export const WrapperPInside = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectImg = styled.img`
  width: 640px;
  @media screen and (max-width: 1023px) {
    width: 300px;
    height: 220px;
  }
  height: 380px;
  margin: 50px;
`;

export const PTextBox = styled.div`
  width: 640px;
  margin: 50px;
  @media screen and (max-width: 1023px) {
    width: 300px;
  }
`;
export const ProjectText = styled.div`
  display: inline;
  font-size: 22px;
  margin-top: 50px;
  @media screen and (max-width: 1023px) {
    font-size: 11px;
  }
`;

export const LinkText2 = styled.div`
  cursor: pointer;
  display: inline;
  font-size: 22px;
  @media screen and (max-width: 1023px) {
    font-size: 11px;
  }
  padding-bottom: 15px;
  color: rgb(6 69 173);
  &:hover {
    text-decoration: underline rgb(6 69 173);
  }
`;
