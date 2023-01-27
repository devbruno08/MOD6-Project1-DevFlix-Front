import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  width: 40%;
  height: 40%;
  border: 2px #44bd32 solid;
  justify-content: space-evenly;
  margin-top: 5px; ;
`;

export const ContainerContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 99%;
    height: 70%;
  }

  h2 {
    font-size: 150%;
    margin: 2px;
  }

  span {
    font-size: 1.3rem;
  }

  p {
    margin-top: 5px;
    font-size: 1.1rem;
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 70%;

  button {
    margin: 0.5px;
    margin-bottom: 2.5px;
    width: 35%;
    height: 25%;
    background-color: #44bd32;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`;
