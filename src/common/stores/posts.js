import { observable, action, computed, toJS } from 'mobx';
import API from '@config/api';

const POSTS_URL = '/posts';

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

  @computed get getPosts() {
    return toJS(this.posts);
  }
}

export default new PostsStore();