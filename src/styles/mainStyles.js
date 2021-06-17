import styled from 'styled-components';

export const RoundButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  ${({ color }) => `background-color: ${color};`}
`;

export const LargeButton = styled.button`
  max-width: 100%;
  ${({ width }) => `width: ${width};`}
  height: 10px;
  border: none;
  ${({ color }) => `background-color: ${color};`}
`;
