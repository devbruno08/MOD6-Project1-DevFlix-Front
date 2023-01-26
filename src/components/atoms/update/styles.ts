import styled from "styled-components";

export const FormComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 40%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    color: #4b0082;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  button {
    background-color: #4b0082;
    width: 20%;
    margin: 2px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 80%;
  }
`;
