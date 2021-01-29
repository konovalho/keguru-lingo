import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

const wordsContent = [
  {
    word: 'Numb',
    translate: 'Оцепеневший',
  },
  {
    word: 'Lie',
    translate: 'Врать',
  },
  {
    word: 'Lie',
    translate: 'Врать',
  },
  {
    word: 'Guitar',
    translate: 'Гитара',
  },
]

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1)
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  word: {
    fontWeight: 700
  },
  wordWrapper: {
    width: '100%',
    height: theme.spacing(10),
    backgroundColor: theme.palette.grey[200],
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const Words = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <Grid container xs={12} className={classes.wrapper}>
      <Grid container xs={12} justify="flex-end">
        <Button onClick={() => alert('click')}>
          <AddIcon color="primary" fontSize="large" />
        </Button>
      </Grid>
      {wordsContent.map(item => (
        <div className={classes.wordWrapper}>
          <div className={classes.textWrapper}>
            <Typography className={classes.word} variant="h6" component="h6" fontWeight="bold">{item.word}</Typography>
            <div className="translate">{item.translate}</div>
          </div>
          <Button onClick={() => alert('click')}>
            <DeleteIcon color="primary" fontSize="default" />
          </Button>
        </div>
      ))}
    </Grid>
  );
};

export default Words;
