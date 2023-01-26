import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  height: 40%;
  border: 2px #7b07d0 solid;
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
  align-items: flex-start;
  width: 100%;
  height: 90%;

  button {
    margin: 0.5px;
    width: 35%;
    height: 90%;
    border-radius: 15%;
    background-color: #7b07d0;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`;
