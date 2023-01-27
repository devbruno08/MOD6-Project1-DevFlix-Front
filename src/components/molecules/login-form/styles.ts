import styled from "styled-components";

export const FormComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 2px solid black;
  padding: 12%;
  width: 90%;

  h2 {
    color: #44bd32;
    margin-bottom: 3%;
  }

  input {
    border-radius: 5%;
    margin: 2%;
    padding: 2px;
    background-color: #f5f6fa;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  button {
    background-color: #44bd32;
    width: 30%;
    margin: 3px;
    font-weight: bold;
    cursor: pointer;
  }
`;
