import styled from 'styled-components';

import { navBarColors as colors } from '../../styles/colors';

export const NavbarContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RoundButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  ${({ type }) => `background-color: ${colors[`${type}Button`]};`}
`;

export const LargeButton = styled.button`
  width: 136px;
  height: 10px;
  border: none;
  ${({ type }) => `background-color: ${colors[`${type}Button`]};`}
`;

export const LeftButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-left: 26px;
`;

export const RightButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  padding-right: 45px;
`;

export const Separation = styled.hr`
  height: 65px;
  width: 0;
  border-left: 1px solid ${colors.separation};
`;
