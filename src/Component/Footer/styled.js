import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Icon = styled.img`
  width: 60px;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 10px;
  z-index: 1;
`;
