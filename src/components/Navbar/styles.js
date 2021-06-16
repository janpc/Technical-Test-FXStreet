import styled from 'styled-components';

import { navBarColors as colors } from '../../styles/colors';

import {
  RoundButton as MainRoundButton,
  LargeButton as MainLargeButton
} from '../../styles/mainStyles';

export const NavbarContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RoundButton = styled(MainRoundButton)`
  ${({ type }) => `background-color: ${colors[`${type}Button`]};`}
`;

export const LargeButton = styled(MainLargeButton)`
  width: 136px;
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
