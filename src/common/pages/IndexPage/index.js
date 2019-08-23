import React, { useState } from 'react';

import logo from '@assets/logo.jpg';
import Form from './Form';

import styles from './styles.styl';

const IndexPage = () => {
  const initalState = JSON.parse(localStorage.getItem('list')) || [];
  console.log('initalState', initalState);

  const [list, setList] = useState(initalState);

  const handleSubmit = (evt) => {
    console.log('evt', evt);
    const isId = list.length > 0;
    const id = isId ? list[list.length - 1].id : 1;

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
      <h1 className={styles.title}>Кенгуру Линго</h1>
      <img className={styles.logo} src={logo} width="20%" alt="logo" />
      <h2 className={styles.desc}>Приложение для обучения английских слов</h2>
      <Form handleSubmit={handleSubmit} />
      <ul className={styles.list}>
        {list.length > 0 &&
          list.map((item) => (
            <li className={styles.itemWord} key={item.id}>
              <div className={styles.word}>{item.word} - </div>
              <div className="translate">{item.translate}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default IndexPage;
