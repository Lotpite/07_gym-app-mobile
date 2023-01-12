import styled from "styled-components";
import { Row } from "./Other.styled";

export const NavigationWrapper = styled.div`
  width: 80vw;
`;

// export const ButtonsContainer = styled(Row)`

// `

export const SettingsButton = styled.button`
  width: 85px;
  height: 50px;
  font-size: 32px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #9e9090;
  align-self: flex-end;
`;

export const StartButton = styled.button`
  width: 175px;
  height: 90px;
  font-size: 36px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #ff6108;
`;
