import { observable, action, computed, toJS } from 'mobx';
import API from '@config/api';

const POSTS_URL = '/posts';
const CREATE_POSTS_URL = '/create/alot';
const CREATE_POST_URL = '/create';
const DELETE_POST_URL = '/word';

const postSerializer = (data) => data.map((item) => ({
  word: item.word,
  translate: item.translate,
  id: item._id
}))

class PostsStore {
  @observable posts = [];

  @action
  fetchPosts = () => {
    const fetchSpecialProjectsPromise = API.get(POSTS_URL);

    return fetchSpecialProjectsPromise
      .then((res) => {
        const { data } = res;
        console.log('fetchPosts', data);
        this.setPosts(postSerializer(data));
      })
      .catch((err) => {
        console.error('Error with fetch projects', err);
      });
  };

  @action
  setPosts = (posts) => {
    this.posts = posts;
  };

  @action
  createPost = (post) => {
    API.post(CREATE_POST_URL, post).then(
      (resp) => {
        console.log('всё удачно', resp)
        this.fetchPosts()
      },
      (err) => console.log('error', err)
    )
  };

  @action
  createPosts = (words) => {
    API.post(CREATE_POSTS_URL, {words}).then(
      (resp) => {
        console.log('всё удачно', resp)
        this.fetchPosts()
      },
      (err) => console.log('error', err)
    )
  };

  @action
  deletePost = (id) => {
    console.log('post id', id);
    API.delete(DELETE_POST_URL, { data: {id} }).then(
      (resp) => {
        console.log('всё удачно', resp)
        this.fetchPosts()
      },
      (err) => console.log('error', err)
    )
  };

  @computed get getPosts() {
    return toJS(this.posts);
  }
}

export default new PostsStore();