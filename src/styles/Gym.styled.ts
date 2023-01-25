import styled from "styled-components";
import { Col, Row } from "./Other.styled";

export const GymContainer = styled(Col)`
  height: 100vh;
`;

export const GymContent = styled(Col)`
  height: 90vh;
  width: 80vw;
  justify-content: space-between;
`;

export const Exercise = styled(Col)`
  gap: 25px;
`;

export const ExerciseImg = styled.div`
  height: 278px;
  width: 278px;
  border-radius: 100%;
  border: 4px solid #2babab;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 225px;
  }
`;

export const Sets = styled(Row)``;

export const Set = styled.div`
  border: 2px solid #2babab;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const Repeater = styled(Row)`
  justify-content: center;
  gap: 32px;
`;

export const Changer = styled.div`
  font-size: 64px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const Count = styled.div`
  width: 120px;
  height: 120px;
  font-size: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
