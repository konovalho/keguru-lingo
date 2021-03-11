import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import { css } from '@linaria/core';
import { media, hoverSupport, colors } from '@styles/utils';
// import styles from './index.styl';


const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.secondary.main,
  },
}));

const root = css`
  width: 100%;
  height: 70px;
  background: ${colors.orange};
  padding-left: 40px;

  ${media.medium} {
    background-color: #f75d7f;
  }

  ${hoverSupport} {
    &:hover {
      background-color: red;
    }
  }
`;

const Header = () => {
  const classes = useStyles();

  return (
    <header className={root}>
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
