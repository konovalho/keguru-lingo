import React, { useEffect, useState } from 'react';

import logo from '@assets/logo.jpg';
import Form from './Form';
import ControlBar from './ControlBar';
import Table from './Table';
import { inject, observer } from 'mobx-react';

import styles from './styles.styl';

const IndexPage = inject('PostsStore')(observer(({ PostsStore }) => {
  const { fetchPosts, posts, createPost, deletePost, createPosts } = PostsStore

  useEffect(() => {
    fetchPosts()
  }, [])
  const initalState = JSON.parse(localStorage.getItem('list')) || [];

  const [showTranslate, setShowTranslate] = useState(false);
  const [list, setList] = useState(initalState);
  const [listChecked, setListChekced] = useState([]);
  const [alotInput, alotInputChange] = useState('');

  const [isCheck, setIsCheck] = useState(false);

  const toggleIsCheck = () => {
    setIsCheck(!isCheck);
  };

  const addValueForCheck = (answer) => {
    const objIndex = listChecked.findIndex((item) => item.id === answer.id);

    if (objIndex !== -1) {
      const newArr = [...listChecked];
      newArr[objIndex] = answer.value;

      setListChekced(newArr);
    }
    setListChekced([...listChecked, { ...answer }]);
  };

  const changeShowTranslate = () => {
    setShowTranslate(!showTranslate);
  };

  const handleSubmit = (evt) => {
    console.log('handleSubmit', evt);
    // const isId = list.length > 0;
    // const id = isId ? list[list.length - 1].id + 1 : 1;

    // const newValue = [
    //   ...list,
    //   {
    //     ...evt,
    //     id,
    //   },
    // ];
    // setList(newValue);
    // localStorage.setItem('list', JSON.stringify(newValue));
    createPost(evt)
  };

  const handleAlot = (evt) => {
    evt.preventDefault();
    // console.log('alotInput', alotInput);
    createPosts(alotInput)
  };

  const handleAlotChange = (evt) => {
    alotInputChange(evt.target.value)
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {/* <img className={styles.logo} src={logo} width="20%" alt="logo" /> */}
        <h2 className={styles.desc}>Приложение для обучения английских слов</h2>
        <Form handleSubmit={handleSubmit} />
        <form className={styles.root} onSubmit={handleAlot}>
          <div className={styles.fieldWrap}>
            <label htmlFor="inpWords">
              Слова много сразу
              <input
                type="text"
                name="words"
                id="inpWords"
                value={alotInput}
                onChange={handleAlotChange}
              />
            </label>
          </div>
          <button type="submit">Добавить много слов</button>
        </form>

        <ControlBar
          changeShowTranslate={changeShowTranslate}
          showTranslate={showTranslate}
          toggleIsCheck={toggleIsCheck}
        />
        <Table
          list={posts}
          showTranslate={showTranslate}
          addValueForCheck={addValueForCheck}
          isCheck={isCheck}
          listChecked={listChecked}
          deletePost={deletePost}
        />
      </div>
    </div>
  );
}))

export default IndexPage;
