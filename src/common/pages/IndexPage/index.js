import React, { useEffect, useState } from 'react';

import { Grid, Paper, Container, Avatar } from '@material-ui/core'
import { inject, observer } from 'mobx-react';

import Profile from './DesignParts/Profile'
import Words from './DesignParts/Words'


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

import styles from './styles.styl';

const IndexPage = inject('PostsStore')(observer(({ PostsStore }) => {

  const { fetchPosts, posts, createPost, deletePost, createPosts } = PostsStore

  useEffect(() => {
    fetchPosts()
  }, [])

  const classes = useStyles();

  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Profile />
          </Grid>
          <Grid item xs={9}>
            <Words posts={posts} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}))

export default IndexPage;
