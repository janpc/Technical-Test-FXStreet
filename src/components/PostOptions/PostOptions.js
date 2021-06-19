import React, { useState } from 'react';

import {
  FaEyeSlash,
  FaSlidersH,
  FaArrowLeft,
  FaRegCircle
} from 'react-icons/fa';

import {
  OptionsContainer,
  ButtonsList,
  ButtonsListItem,
  OptionButton,
  Header,
  HideButton
} from './styles';

const hideContentOptionsWhy = [
  'I’m not interested in this author',
  'I’m not interested in this topic',
  "I've seen too many posts on this topic",
  'The information is incorrect',
  'I’ve seen this post before',
  'Other reasons'
];

const PostOptions = () => {
  const [isHiding, setIsHiding] = useState(false);
  return isHiding ? (
    <OptionsContainer>
      <Header>
        <OptionButton type="button" onClick={() => setIsHiding(false)}>
          <FaArrowLeft size={18} />
          <pre>Tell us why:</pre>
        </OptionButton>
      </Header>
      <ButtonsList>
        {hideContentOptionsWhy.map((option) => (
          <ButtonsListItem>
            <OptionButton type="button">
              <FaRegCircle size={18} />
              <pre>{option}</pre>
            </OptionButton>
          </ButtonsListItem>
        ))}
      </ButtonsList>
      <HideButton type="button" disabled>
        Hide content
      </HideButton>
    </OptionsContainer>
  ) : (
    <OptionsContainer>
      <ButtonsList>
        <ButtonsListItem>
          <OptionButton type="button" onClick={() => setIsHiding(true)}>
            <FaEyeSlash size={21} />
            <pre>Hide</pre>
          </OptionButton>
        </ButtonsListItem>

        <ButtonsListItem>
          <OptionButton type="button">
            <FaSlidersH size={21} />
            <pre>Improve my feed</pre>
          </OptionButton>
        </ButtonsListItem>
      </ButtonsList>
    </OptionsContainer>
  );
};

export default PostOptions;
