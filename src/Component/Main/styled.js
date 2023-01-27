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
  background: gray;
`;

export const TitleText = styled.div`
  color: black;
  font-size: 60px;
  font-weight: bold;
  text-align: center; //텍스트 정렬할때 사용
  margin: 25px;
`;

export const Intro = styled.div`
  color: whitesmoke;
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
  /* 색상 */
  background: white;
`;

export const Image = styled.img`
  width: 40px;
  height: 30px;
  margin: 15px;
`;

export const Text1 = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
  float: left;
`;
export const Text2 = styled.div`
  color: gray;
  font-size: 20px;
  float: left;
`;

export const InfoBox = styled.div``;

export const TextBox = styled.div``;

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
  height: 500px;
  background: white;
  margin: 20px auto;
  border-radius: 20px;
  padding: 10px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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

export const FourthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3000px;
  width: 100%;
  background-color: rgb(250, 238, 255);
`;
