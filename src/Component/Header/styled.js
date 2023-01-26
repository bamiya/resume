import styled from "styled-components";

export const Wrapper = styled.div`
  /* 레이아웃 */
  display: flex; //가로방향 정렬
  position: fixed;
  align-items: center; // 수직(위아래)정렬에서 가운데 정렬, 반대로 justify-content: center; 는 수평정렬
  height: 60px;
  width: 100%;
  padding-top: 10px;
  padding-left: 20px; //왼쪽 여백주기
  z-index: 3;

  /* 색상 */
  background: ${(props) => {
    let bg;
    if (props.scroll) {
      bg = "white";
    } else {
      bg = "transparent";
    }
    return bg;
  }};
  color: black;
`;

export const Title = styled.text`
  cursor: pointer;
  color: black;
  font-size: 30px;
  font-weight: bold;
  padding-left: 100px;
  padding-right: 1000px;
`;

export const Text = styled.text`
  color: black;
  font-size: 20px;
  padding-left: 25px;
  padding-right: 25px;
`;
