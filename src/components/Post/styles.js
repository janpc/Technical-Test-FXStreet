import styled from 'styled-components';

import { mainColors as colors } from '../../styles/colors';

// eslint-disable-next-line import/prefer-default-export
export const PostContainer = styled.article`
  background-color: ${colors.post.background};
  border: 1px solid ${colors.post.border};
  border-radius: 4px;
  width: 100%;
  font-family: Roboto;
`;

export const TopInfo = styled.div`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  background-color: ${colors.post.top};
  border-radius: 4px 4px 0px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Feed = styled.span`
  color: ${colors.post.feed};
  font-size: 17.6px;
  font-weight: bold;
`;

export const SubFeed = styled.span`
  color: ${colors.post.subFeed};
  font-size: 17.6px;
  font-weight: bold;
`;

export const TextColor = styled.span`
  ${({ color }) => `color: ${color};`}
`;

export const PostInfo = styled.div`
  width: 100%;
  height: 44px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  padding: 0 28px;
  margin: 26px 0;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
