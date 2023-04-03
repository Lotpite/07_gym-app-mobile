import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #dddfe2;
  border-radius: 15px;
  gap: 25px;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #dddfe2;
  font-size: 16px;
  outline: none;

`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > div {
    width: 45%;
  }
`;

export const LoginButton = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  background-color: #1877f2;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #166fe5;
  }
`;

export const RegisterButton = styled(LoginButton)`
  background-color: #42b72a;

  &:hover {
    background-color: #36a420;
  }
`;

export const StyledLink = styled(Link) `
  /* display: block; */
  width: 45%;
`

export const SubmitButton = styled.button`
  display: none;
`