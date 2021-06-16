import * as React from 'react';

import {
  NavbarContainer,
  LeftButtonsContainer,
  RightButtonsContainer,
  RoundButton,
  LargeButton,
  Separation
} from './styles';

const Navbar = () => (
  <NavbarContainer>
    <LeftButtonsContainer>
      <RoundButton type="main" />
      <LargeButton type="main" />
    </LeftButtonsContainer>
    <RightButtonsContainer>
      <LargeButton type="important" />
      <Separation />
      <RoundButton type="normal" />
      <Separation />
      <RoundButton type="normal" />
      <Separation />
      <RoundButton type="normal" />
      <LargeButton type="normal" />
    </RightButtonsContainer>
  </NavbarContainer>
);

export default Navbar;
