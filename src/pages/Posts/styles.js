import styled from 'styled-components';

import { mainColors as colors } from '../../styles/colors';

export const Content = styled.div`
  background-color: ${colors.background};
  height: 100%;
  display: flex;
  gap: 27px;
  box-sizing: border-box;
  padding: 25px 25px 0;
`;

export const PostsContainer = styled.section`
  flex-grow: 7;
  background-color: blue;
`;

export const WidgetContainer = styled.section`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 210px;
`;

export const Widget = styled.article`
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  ${({ color, border = '1px', borderColor, height }) => `
    height: ${height};
    background-color: ${color};
    border: ${border} solid ${borderColor};

    
  `}

  ${({ column }) =>
    column
      ? `flex-direction: column;
          gap: 16px;
          padding: 35px 21px;
          align-items: flex-start;`
      : `justify-content: center;
        gap: 6px`}
`;
