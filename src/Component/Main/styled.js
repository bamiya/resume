import styled from "styled-components";

export const FirstWrapper = styled.div`
  /* 레이아웃 */
  display: flex; //가로방향 정렬
  align-items: center; // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
  justify-content: center;
  height: 600px;
  width: 100%;

  /* 색상 */
  background: gray;
`;

export const Intro = styled.div`
  color: white;
`;

export const SecondWrapper = styled.div`
  /* 레이아웃 */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;

  /* 색상 */
  background: white;
`;

export const TitleText = styled.div`
  color: black;
  font-size: 60px;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 15px;
  background-color: transparent;
`;

export const Text = styled.div`
  color: black;
  font-size: 25px;
  float: left;
`;

export const TextBox = styled.div`
  text-align: center;
`;

export const ThirdWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;
  background-color: rgb(221 235 255);
`;

export const FourthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;
  background-color: rgb(250, 238, 255);
`;
