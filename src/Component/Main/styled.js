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

export const Intro = styled.text`
  color: white;
`;

export const SecondWrapper = styled.div`
  /* 레이아웃 */
  display: flex; //가로방향 정렬
  align-items: center; // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
  justify-content: center;
  height: 600px;
  width: 100%;

  /* 색상 */
  background: white;
`;
