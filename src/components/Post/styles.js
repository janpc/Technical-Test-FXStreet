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
  min-height: 44px;
  height: auto;
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  padding: 0 28px;
  margin: 26px 0;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-basis: 50px;
`;

export const NameAndTitleContainer = styled.div`
  flex-basis: calc(100% - 70px);
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  box-sizing: border-box;
`;

export const NameAndCompany = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: ${colors.text.neutral};
`;
export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22.4px;
  line-height: 26px;
  margin-top: 5px;
  color: ${colors.text.main};
`;

export const Separation = styled.hr`
  width: 100%;
  border: 1px solid #ececf1;
`;

export const PostContent = styled.div`
  margin: 20px 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 19.2px;
  line-height: 22px;
  color: ${colors.text.main};

  & > p {
    & > strong {
      font-weight: bold;
    }

    & > a {
      font-weight: bold;
      color: ${colors.text.highlight};
      text-decoration: none;
    }
  }

  & > img {
    margin: 10px 0;
    width: 100%;
  }
`;
