import * as React from 'react';
import MediaQuery from 'react-responsive';

import { FaBars } from 'react-icons/fa';

import {
  NavbarContainer,
  LeftButtonsContainer,
  RightButtonsContainer,
  RoundButton,
  LargeButton,
  Separation
} from './styles';

const Navbar = () => (
  <>
    <MediaQuery maxDeviceWidth={1060}>
      <NavbarContainer>
        <LeftButtonsContainer>
          <RoundButton type="main" />
        </LeftButtonsContainer>
        <RightButtonsContainer>
          <FaBars size={25} />
        </RightButtonsContainer>
      </NavbarContainer>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1060}>
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
    </MediaQuery>
  </>
);

export default Navbar;
