import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { FaCaretRight, FaClock, FaFile } from 'react-icons/fa';

import { formatDate } from '../../utils/postsUtils';

import {
  PostContainer,
  TopInfo,
  InfoContainer,
  Feed,
  SubFeed,
  TextColor,
  PostInfo,
  ProfileImage
} from './styles';

const Post = ({ postInfo }) => {
  // eslint-disable-next-line operator-linebreak
  const { feed, subFeed, publicationTime, author, title, content, imageUrl } =
    postInfo;
  return (
    <PostContainer>
      <TopInfo>
        <InfoContainer>
          <TextColor color="#304C70">
            <FaFile />
          </TextColor>
          <Feed>{feed}</Feed>
          <TextColor color="#7598C4">
            <FaCaretRight />
          </TextColor>

          <SubFeed>{subFeed}</SubFeed>
        </InfoContainer>
        <InfoContainer>
          <TextColor color="#49494F">
            <FaClock />
          </TextColor>
          <TextColor color="#8C8D91">
            <time>{formatDate(publicationTime)}</time>
          </TextColor>
        </InfoContainer>
      </TopInfo>

      <PostInfo>
        <ProfileImage alt={author?.name} src={author?.imageUrl} />
        <span>{author?.name}</span>
        <span>{author?.companyName}</span>
        <h2>{title}</h2>
      </PostInfo>
      {content && parse(content)}
      {imageUrl && <img alt={title} src={imageUrl} />}
    </PostContainer>
  );
};

export default Post;

Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  postInfo: PropTypes.object.isRequired
};
