import styled from "styled-components";

export const Wrapper = styled.div`
  /* 레이아웃 */
  display: flex; //가로방향 정렬
  position: fixed;
  align-items: center; // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
  height: 60px;
  width: 100%;
  padding-left: 20px; //왼쪽 여백주기

  /* 색상 */
  background: transparent;
  color: black;
  border-bottom: 1px solid;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);
`;

export const Text = styled.text`
  color: black;
`;
