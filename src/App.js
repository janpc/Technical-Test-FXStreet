import * as React from 'react';
import { Reset } from 'styled-reset';

import Posts from './pages/Posts';
import Premium from './pages/Premium';

function App() {
  return (
    <>
      <Reset />
      <Premium>
        <Posts />
      </Premium>
    </>
  );
}

export default App;
