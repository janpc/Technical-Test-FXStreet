import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 255px auto;
  grid-template-rows: 65px calc(100vh - 65px);
  grid-template-areas:
    'sidebar topbar'
    'sidebar main';
`;

export const Leftbar = styled.div`
  grid-area: sidebar;
`;

export const Topbar = styled.div`
  grid-area: topbar;
`;

export const Main = styled.main`
  grid-area: main;
`;
