import * as React from 'react';
import PropTypes from 'prop-types';

import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';

import { Grid, Leftbar, Topbar, Main } from './styles';

const Premium = ({ children }) => (
  <Grid>
    <Leftbar>
      <SideBar />
    </Leftbar>
    <Topbar>
      <Navbar />
    </Topbar>
    <Main>{children}</Main>
  </Grid>
);
export default Premium;

Premium.propTypes = {
  children: PropTypes.element.isRequired
};
