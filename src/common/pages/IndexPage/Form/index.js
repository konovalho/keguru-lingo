import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.styl';

const Form = ({ handleSubmit }) => {
  const [wordValue, setWordValue] = useState('');
  const changeInputValue = (evt) => {
    setWordValue(evt.target.value);
  };

  const [translateValue, setTranslateValue] = useState('');

  const changeTranslateValue = (evt) => {
    setTranslateValue(evt.target.value);
  };

  const resetForm = () => {
    setWordValue('');
    setTranslateValue('');
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit({ word: wordValue, translate: translateValue });
    resetForm();
  };

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <div className={styles.fieldWrap}>
        <label htmlFor="inpWord">
          Слово
          <input
            value={wordValue}
            onChange={changeInputValue}
            type="text"
            name="word"
            id="inpWord"
          />
        </label>
      </div>
      <div className={styles.fieldWrap}>
        <label htmlFor="inpTranslate">
          Перевод
          <input
            value={translateValue}
            onChange={changeTranslateValue}
            type="text"
            name="inpTranslate"
          />
        </label>
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
