import styled from "styled-components";

export const FirstWrapper = styled.div`
  /* 레이아웃 */
  display: flex; //가로방향 정렬
  flex-direction: column; //컨테이너 안의 div들을 열(column)로 배치
  align-items: center; // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
  justify-content: center;
  height: 650px;
  width: 100%;
  /* 색상 */
  background-color: rgb(255 192 70);
  background-image: url("/assets/bgimage.jpg");
  background-size: 100% 100%;
`;

export const TitleText = styled.div`
  color: black;
  font-size: 60px;
  font-weight: bold;
  text-align: center; //텍스트 정렬할때 사용
  margin: 25px;
`;

export const Intro = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
  line-height: 200%;
`;

export const SecondWrapper = styled.div`
  /* 레이아웃 */
  display: grid;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
  padding-bottom: 50px;
  /* 색상 */
  background: white;
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
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
  height: 1400px;
  width: 100%;
  background-color: rgb(153 200 255);
`;

export const WrapperBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 30px;
`;
//안에 내용물에 따라 크기 자동조절할려면 height auto로 주고 overflow hidden으로 주면됨
export const SkillBox = styled.div`
  width: 300px;
  height: auto;
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

export const FourthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3000px;
  width: 100%;
  background-color: rgb(250, 238, 255);
`;
