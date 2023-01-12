import styled from "styled-components";
import { Col, Row } from "./Other.styled";

interface IScaleProps {
  percent: number;
}

export const ChartWrapper = styled(Col)`
  width: 80vw;
  height: 190px;
  /* background-color: grey; */
  justify-content: space-between;
  gap: 20px;
`;

export const ChartNavigation = styled(Row)`
  justify-content: center;
  gap: 15px;
  color: grey;
`;

export const ChartNavigationItem = styled.div`
  height: 24px;
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Slash = styled.div`
  width: 2px;
  height: 60%;
  background-color: lightgray;
`;

export const ChartGraph = styled(Row)`
  height: 150px;
  width: 100%;
  border: 1px solid black;
  align-items: flex-end;
`;

export const GraphItem = styled(Col)`
  height: 100%;
  justify-content: flex-end;
  gap: 5px;
`;

export const Scale = styled.div<IScaleProps>`
  width: 8px;
  height: ${({ percent }) => `${percent}%`};
  background-color: grey;
`;
