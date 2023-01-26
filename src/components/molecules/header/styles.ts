import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  height: 6%;
  justify-content: space-between;
  padding: 0.4%;
  background-color: rgba(0, 0, 0, 0.9);
  align-items: center;
`;

export const HeaderLogo = styled.section`
  display: flex;
  padding-left: 0.5%;
  color: #9300ff;
  align-items: center;

  h1 {
    color: white;
    padding-left: 8px;
  }

  a {
    text-decoration: none;
    display: flex;
    color: #7b07d0;
    align-items: center;
  }
`;

export const HeaderSection = styled.section`
  display: flex;
  color: #7b07d0;
`;

type ButtonColor = {
  color: string;
};

export const Buttons = styled.button<ButtonColor>`
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.color};
`;
