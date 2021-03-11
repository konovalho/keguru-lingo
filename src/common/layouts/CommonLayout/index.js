import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '@components/Header'

// import './styles.styl';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'f57d01',
    minHeight: '100vh'
  },
});


const CommonLayout = ({ children }) => {
  const classes = useStyles();
  return (
    // className={classes.root}
    <div>
      <Header />
      {children}
    </div>
  )
};

export default CommonLayout;
