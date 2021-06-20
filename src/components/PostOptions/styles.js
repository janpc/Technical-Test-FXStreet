import styled from 'styled-components';

import { mainColors as colors } from '../../styles/colors';

// eslint-disable-next-line import/prefer-default-export
export const OptionsContainer = styled.div`
  position: absolute;
  top: 43px;
  left: 0;
  background-color: ${colors.post.background};
  border: 1px solid ${colors.post.border};
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
  width: fit-content;
  height: fit-content;

  z-index: 1;
`;

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: fit-content;
  margin: 20px;
`;

export const ButtonsListItem = styled.li`
  width: fit-content;
`;

export const Header = styled.div`
  background-color: ${colors.post.border};
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

export const OptionButton = styled.button`
  background-color: transparent;
  border: none;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  pointer-events: auto;

  color: ${colors.text.main};

  & > pre {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const HideButton = styled.button`
  background: #ffffff;
  border: 1px solid #1b1c23;
  box-sizing: border-box;
  width: 247px;
  height: 42px;
  color: #1b1c23;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12.8px;
  line-height: 22px;

  text-align: center;
  box-sizing: border-box;
  margin: 0 20px 20px;

  ${({ disabled }) => disabled && 'opacity: 0.3;'}
`;
