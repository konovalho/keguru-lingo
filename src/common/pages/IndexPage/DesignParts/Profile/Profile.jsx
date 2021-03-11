import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button, Avatar, Container } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#fff',
    // display: 'flex',
    // flexDirection: 'column'
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  line: {
    backgroundColor: theme.palette.grey['A100'],
    height: '2px',
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

const Form = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <Grid container xs={12} className={classes.wrapper}>
      <Grid item xs={9}></Grid>
      <Grid container xs={3} justify="flex-end">
        <Button onClick={() => alert('click')}>
          <MoreHorizIcon color="primary" />
        </Button>
      </Grid>
      <Grid container justify="center">
          <Avatar className={classes.avatar} alt="Remy Sharp" src={`https://sun9-47.userapi.com/impf/c856028/v856028832/5e9d5/x0SSOYo2Shk.jpg?size=2560x1718&quality=96&proxy=1&sign=db1d6c06a00ae6a96c3e085a20df5c3c&type=album`} />
      </Grid>
      <Container>
        <Typography variant="h4" component="h3" >
            Артём Коновалов
        </Typography>  
      </Container>
      <Container>
        <Typography variant="subtitle1" component="span" >
            Продвинутый
        </Typography>  
      </Container>
      <div className={classes.line}></div>
    </Grid>
  );
};


export default Form;
