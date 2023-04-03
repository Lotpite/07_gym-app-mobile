import styled from "styled-components";

interface IStyledButtonProps {
  color?: string;
  size?: string;
  isDisabled?: boolean;
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
  border-radius: 10px;

  ${({ isDisabled }) =>
    isDisabled
      ? `pointer-events: none;
        background-color: grey;`
      : ""}

  ${({ size }) =>
    size === "small"
      ? `
          height: 40px; 
          
          p {
            font-size: 18px; 
          }
        `
      : ""}

  :hover {
    cursor: pointer;
  }
`;
