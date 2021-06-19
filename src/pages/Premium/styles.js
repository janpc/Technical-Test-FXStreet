import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 255px auto;
  grid-template-rows: 65px calc(100vh - 65px);
  grid-template-areas:
    'sidebar topbar'
    'sidebar main';

  @media (max-width: 840px) {
    grid-template-columns: 100%;
    grid-template-rows: 65px calc(100vh - 65px);
    grid-template-areas:
      'topbar'
      'main';
  }
`;

export const Leftbar = styled.div`
  grid-area: sidebar;
  @media (max-width: 840px) {
    display: none;
  }
`;

export const Topbar = styled.div`
  grid-area: topbar;
`;

export const Main = styled.main`
  grid-area: main;
`;
