import styled from "styled-components";

interface ITextProps {
  active?: boolean;
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 24px;
`;

export const Text = styled.p<ITextProps>`
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "900" : "")};
  color: ${({ active }) => (active ? "black" : "")};
`;

export const SubText = styled.p`
  font-size: 12px;
  color: grey;
`;
