import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'

import styles from './index.styl';


const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.secondary.main,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={styles.root}>
        <Typography variant="h2" component="h1" color="secondary">
          Кенгуру линго
        </Typography>  
        {/* <Button className={classes.button} color="primary" variant="contained">
          button
        </Button> */}
    </header>
  );
} 

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
