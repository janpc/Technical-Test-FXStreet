import React, { useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import {
  FaCaretRight,
  FaRegClock,
  FaRegFile,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaBookmark,
  FaEllipsisH
} from 'react-icons/fa';

import { formatDate } from '../../utils/postsUtils';

import {
  PostContainer,
  TopInfo,
  InfoContainer,
  Feed,
  SubFeed,
  TextColor,
  PostInfo,
  ProfileImage,
  NameAndCompany,
  NameAndTitleContainer,
  Title,
  PostContent,
  Separation,
  BottomButtonsContainer,
  LikeButton,
  SaveButton,
  OptionsButton
} from './styles';

const Post = ({ postInfo }) => {
  // eslint-disable-next-line operator-linebreak
  const { feed, subFeed, publicationTime, author, title, content, imageUrl } =
    postInfo;

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  console.log(isShowingOptions);
  return (
    <PostContainer>
      <TopInfo>
        <InfoContainer>
          <FaRegFile color="#304C70" />
          <Feed>{feed}</Feed>
          <FaCaretRight color="#7598C4" />

          <SubFeed>{subFeed}</SubFeed>
        </InfoContainer>
        <InfoContainer>
          <FaRegClock color="#8C8D91" />
          <TextColor color="#49494F">
            <time>{formatDate(publicationTime)}</time>
          </TextColor>
        </InfoContainer>
      </TopInfo>

      <PostInfo>
        <ProfileImage alt={author?.name} src={author?.imageUrl} />
        <NameAndTitleContainer>
          <NameAndCompany>{`${author?.name} | ${author?.companyName}`}</NameAndCompany>
          <Title>{title}</Title>
        </NameAndTitleContainer>
      </PostInfo>
      <Separation />
      <PostContent>
        {content && parse(content)}
        {imageUrl && <img alt={title} src={imageUrl} />}
      </PostContent>
      <BottomButtonsContainer>
        <LikeButton onClick={() => setIsLiked(!isLiked)} isLiked={isLiked}>
          {isLiked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
          <span>{isLiked ? 'Liked!' : 'Like'}</span>
        </LikeButton>
        <SaveButton onClick={() => setIsSaved(!isSaved)} isSaved={isSaved}>
          {isSaved ? <FaBookmark size={25} /> : <FaRegBookmark size={25} />}
          <span>{isSaved ? 'Saved!' : 'Save'}</span>
        </SaveButton>
        <OptionsButton onClick={() => setIsShowingOptions(true)}>
          <FaEllipsisH sixe={25} />
        </OptionsButton>
      </BottomButtonsContainer>
    </PostContainer>
  );
};

export default Post;

Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  postInfo: PropTypes.object.isRequired
};
