import styled from "styled-components";

export const ChannelSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;

  img {
    margin: 10%;
    width: 40%;
    height: 30%;
  }

  p {
    margin: 20px;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    width: 3%;
    margin-bottom: 50%;
    color: red;
  }
`;

export const ChannelContent = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
