import * as React from 'react';

import { ReactComponent as Logo } from '../../img/logo.svg';

import {
  SideBarContainer,
  LogoContainer,
  SideBarButton,
  SideBarButtonContainer
} from './styles';

const SideBar = () => (
  <SideBarContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <SideBarButtonContainer>
      <SideBarButton important />
      <SideBarButton />
      <SideBarButton />
      <SideBarButton />
      <SideBarButton />
    </SideBarButtonContainer>
  </SideBarContainer>
);

export default SideBar;
