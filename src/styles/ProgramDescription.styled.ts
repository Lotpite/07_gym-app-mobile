import styled from "styled-components";
import { Col, Row } from "./Other.styled";

export const ProgramDescriptionWrapper = styled(Col)`
  height: 100vh;
  gap: 100px;
`;

export const ProgramAbout = styled(Col)`
  align-items: flex-start;
  width: 80vw;
  gap: 10px;
`;

export const ProgramAboutItem = styled.div`
  text-align: left;
`;

export const ProgramNavigation = styled(Row)`
  width: 80vw;
`;
