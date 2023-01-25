import styled from "styled-components";

interface IStyledButtonProps {
  color?: string;
  size?: string;
}

export const StyledButton = styled.div<IStyledButtonProps>`
  height: 60px;
  width: 120px;
  background-color: ${({ color }) => (color ? color : "#FF6108")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  border-radius: 15px;

  :hover {
    cursor: pointer;
  }
`;
