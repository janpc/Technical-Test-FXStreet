import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';

import { LATEST, POPULAR } from '../../utils/postsUtils';

import {
  FilterPostsContainer,
  PostsTypeButton,
  TypeButtonsContainer,
  ViewSelect
} from './styles';

const PostsFilter = ({ setPostsType, selected }) => (
  <FilterPostsContainer>
    <TypeButtonsContainer>
      <PostsTypeButton
        type="button"
        onClick={() => setPostsType(LATEST)}
        isSelected={selected === LATEST}
      >
        Latest
      </PostsTypeButton>
      <PostsTypeButton
        type="button"
        onClick={() => setPostsType(POPULAR)}
        isSelected={selected === POPULAR}
      >
        Popular
      </PostsTypeButton>
    </TypeButtonsContainer>
    <ViewSelect>
      Show:
      <b>All</b>
      <FaChevronDown />
    </ViewSelect>
  </FilterPostsContainer>
);

export default PostsFilter;

PostsFilter.propTypes = {
  setPostsType: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};
