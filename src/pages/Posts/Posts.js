import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PostsFilter from '../../components/PostsFilter';
import Post from '../../components/Post';

import { classifyPosts, LATEST } from '../../utils/postsUtils';

import { Content, PostsContainer, WidgetContainer, Widget } from './styles';
import { RoundButton, LargeButton } from '../../styles/mainStyles';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postsType, setPostsType] = useState(LATEST);

  async function getPosts() {
    const result = await axios(
      'https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7'
    );
    setPosts(classifyPosts(result.data));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Content>
      <PostsContainer>
        <PostsFilter setPostsType={setPostsType} selected={postsType} />
        {posts[postsType]?.map((post) => (
          <Post postInfo={post} />
        ))}
      </PostsContainer>
      <WidgetContainer>
        <Widget color="#304C70" borderColor="#DDDEDF" height="154px" column>
          <LargeButton color="#FFFFFF" width="327px" />
          <LargeButton color="#FFFFFF" width="195px" />
        </Widget>
        <Widget
          color="transparent"
          border="2px"
          borderColor="#304C70"
          height="56px"
        >
          <LargeButton color="#304C70" width="130px" />
          <RoundButton color="#304C70" />
        </Widget>
      </WidgetContainer>
    </Content>
  );
};
export default Posts;
