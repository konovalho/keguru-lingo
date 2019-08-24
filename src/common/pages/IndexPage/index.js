import React, { useState } from 'react';

import logo from '@assets/logo.jpg';
import Form from './Form';
import ControlBar from './ControlBar';
import Table from './Table';

import styles from './styles.styl';

const IndexPage = () => {
  const initalState = JSON.parse(localStorage.getItem('list')) || [];

  const [showTranslate, setShowTranslate] = useState(true);
  const [list, setList] = useState(initalState);
  const [listChecked, setListChekced] = useState([]);

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
    const isId = list.length > 0;
    const id = isId ? list[list.length - 1].id + 1 : 1;

    const newValue = [
      ...list,
      {
        ...evt,
        id,
      },
    ];
    setList(newValue);
    localStorage.setItem('list', JSON.stringify(newValue));
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>Кенгуру Линго</h1>
        <img className={styles.logo} src={logo} width="20%" alt="logo" />
        <h2 className={styles.desc}>Приложение для обучения английских слов</h2>
        <Form handleSubmit={handleSubmit} />
        <ControlBar
          changeShowTranslate={changeShowTranslate}
          showTranslate={showTranslate}
          toggleIsCheck={toggleIsCheck}
        />
        <Table
          list={list}
          showTranslate={showTranslate}
          addValueForCheck={addValueForCheck}
          isCheck={isCheck}
          listChecked={listChecked}
        />
      </div>
    </div>
  );
};

export default IndexPage;
