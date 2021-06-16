import styled from 'styled-components';

import { sideBarColors as colors } from '../../styles/colors';

export const SideBarContainer = styled.div`
  float: left;
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  top: 0;
  left: 0;
`;

export const LogoContainer = styled.div`
  width: fit-content;
  height: fit-content;

  margin: 3rem auto;
`;

export const SideBarButton = styled.button`
  width: 111px;
  height: 10px;
  border: none;
  ${({ important }) =>
    important
      ? `background-color: ${colors.importantText};`
      : `background-color: ${colors.text};`}
`;

export const SideBarButtonContainer = styled.div`
  margin: 100px 46px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 1rem 0;
`;
