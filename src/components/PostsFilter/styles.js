import styled from 'styled-components';

import { mainColors as colors } from '../../styles/colors';

export const FilterPostsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const PostsTypeButton = styled.button`
  color: ${({ isSelected }) =>
    isSelected ? colors.text.highlight : colors.text.neutral};
  background-color: transparent;
  border: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 17.6px;
  line-height: 21px;

  cursor: pointer;

  ${({ isSelected }) =>
    // eslint-disable-next-line operator-linebreak
    !isSelected &&
    `&:hover{
      color: ${colors.text.main}
    }`}
`;

export const TypeButtonsContainer = styled.div`
  width: fit-content;
  display: flex;
  gap: 40px;
`;

export const ViewSelect = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14.72px;
  line-height: 20px;
  color: ${colors.text.main};
  margin-right: 5px;

  & > b {
    font-size: 17.6px;
    font-weight: bold;
    margin: 0 16px;
  }
`;
