import styled from "styled-components";
import { Col } from "./Other.styled";

export const ProgramsContainer = styled(Col)`
  height: 100vh;
  justify-content: flex-center;
  /* padding: 50px 0 50px 0; */
  gap: 40px;
`;

export const ProgramsWrapper = styled(Col)`
  gap: 40px;
`;

export const Program = styled.div`
  img {
    border: 2px solid black;
    border-radius: 15px;
    height: 256px;
    width: 256px;
    margin-bottom: 10px;
  }

  text-align: center;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;
